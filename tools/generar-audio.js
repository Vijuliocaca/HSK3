// Genera audio neuronal (mp3) de las palabras y frases de ejemplo de los niveles pedidos y actualiza audioindice.js.
// Uso (Git Bash):  AZURE_KEY=... AZURE_REGION=westeurope node tools/generar-audio.js [niveles, por defecto 1,2]
// Es incremental: salta lo que ya existe. Antes de publicar el audio comprueba que la licencia del servicio permite redistribuirlo en una app.
const fs = require('fs'), vm = require('vm'), path = require('path'), crypto = require('crypto');
const RAIZ = path.join(__dirname, '..'), KEY = process.env.AZURE_KEY, REG = process.env.AZURE_REGION, VOZ = process.env.VOZ || 'zh-CN-XiaoxiaoNeural';
if (!KEY || !REG) { console.error('Faltan AZURE_KEY y AZURE_REGION'); process.exit(1); }
const niveles = (process.argv[2] || '1,2').split(',').map(Number), leer = f => fs.readFileSync(path.join(RAIZ, f), 'utf8');
const ctx = vm.createContext({}); ctx.self = ctx;
[...leer('index.html').matchAll(/<script src="([^"]+)"/g)].map(m => m[1]).filter(f => f != 'audioindice.js' && fs.existsSync(path.join(RAIZ, f))).forEach(f => vm.runInContext(leer(f), ctx));
const textos = new Set(); let lv = 0;
const palabra = (n, l) => { if (l.trim() && l[0] != '#' && niveles.includes(n)) textos.add(l.split('|')[0]); };
vm.runInContext('RAW', ctx).split('\n').forEach(l => { if (l[0] == '#') lv = +l.slice(1); else palabra(lv, l); });
ctx.NEW.forEach(([n, t]) => t.split('\n').forEach(l => palabra(n, l)));
const frases = new Map(); ctx.SENTR.forEach(t => t.split('\n').forEach(l => { const p = l.split('|'); if (p.length == 4) frases.set(p[0], p[1]); }));
[...textos].forEach(h => frases.has(h) && textos.add(frases.get(h)));
const dir = path.join(RAIZ, 'audio'), idxF = path.join(RAIZ, 'audioindice.js'), idx = {};
const previo = fs.readFileSync(idxF, 'utf8').match(/self\.AUDIO\s*=\s*self\.AUDIO\s*\|\|\s*\{\};\s*Object\.assign\(self\.AUDIO,\s*(\{[\s\S]*\})\);/); if (previo) Object.assign(idx, JSON.parse(previo[1]));
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
(async () => {
  let n = 0; const lista = [...textos].filter(t => !idx[t] || !fs.existsSync(path.join(dir, idx[t])));
  for (const t of lista) {
    const f = crypto.createHash('md5').update(VOZ + t).digest('hex').slice(0, 10) + '.mp3';
    const r = await fetch(`https://${REG}.tts.speech.microsoft.com/cognitiveservices/v1`, { method: 'POST', headers: { 'Ocp-Apim-Subscription-Key': KEY, 'Content-Type': 'application/ssml+xml', 'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3', 'User-Agent': 'hsk-viju' },
      body: `<speak version="1.0" xml:lang="zh-CN"><voice name="${VOZ}">${esc(t)}</voice></speak>` });
    if (!r.ok) { console.error('Error', r.status, t, await r.text()); break; }
    fs.writeFileSync(path.join(dir, f), Buffer.from(await r.arrayBuffer())); idx[t] = f; if (++n % 50 == 0) console.log(n + '/' + lista.length);
  }
  fs.writeFileSync(idxF, `// Audio pregrabado: texto → archivo mp3 de esta carpeta. Lo genera tools/generar-audio.js; si un texto no está aquí, la app usa la voz del sistema.\nself.AUDIO = self.AUDIO || {};\nObject.assign(self.AUDIO, ${JSON.stringify(idx)});\n`);
  console.log(`Hecho: ${n} audios nuevos, ${Object.keys(idx).length} en el índice`);
})();
