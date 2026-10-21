// Prueba en un navegador real (Edge o Chrome sin ventana): recorre las pantallas a 320, 360 y 412 px y busca
// errores de JavaScript y desbordes horizontales (contenido más ancho que la pantalla). Necesita el navegador, por eso no va en la subida automática.
// Modo exhaustivo: TODAS=1 añade TODAS las frases y TODAS las preguntas de todas las lecturas (unas 300 pantallas más) y comprueba que «Siguiente» queda a la vista en un móvil de 640 px de alto.
// Uso: node tests/desbordes.js [ancho ...]    (variable BROWSER: otro ejecutable · variable SOLO: solo las pantallas cuyo nombre contenga ese texto)
const fs = require('fs'), os = require('os'), path = require('path'), cp = require('child_process');
const { PREPARAR, PANTALLAS } = require('./pantallas-lista'), RAIZ = path.join(__dirname, '..');

const candidatos = [process.env.BROWSER, 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/microsoft-edge'].filter(Boolean);
const navegador = candidatos.find(p => fs.existsSync(p));
if (!navegador) { console.log('desbordes: no encuentro Edge ni Chrome (indica la ruta en la variable BROWSER). Prueba omitida.'); process.exit(0); }

const anchos = process.argv.slice(2).map(Number).filter(Boolean), ANCHOS = anchos.length ? anchos : [320, 360, 412];
const EXTRA = [['compartir progreso (canvas)', 'compartir()'], ['juego: emparejar', 'matchGame()'], ['examen simulado', 'exam(1)']];
const lista = [...PANTALLAS, ...EXTRA].filter(([n]) => !process.env.SOLO || n.includes(process.env.SOLO)) // SOLO=texto: solo las pantallas cuyo nombre lo contenga
  .filter((_, i) => { const [de, hasta] = (process.env.RANGO || '0-9999').split('-').map(Number); return i >= de && i < hasta; }); // RANGO=a-b: solo las pantallas de la posición a a la b (para localizar cuál bloquea)

// copia de la app con un script final que recorre las pantallas y deja el resultado en <title>
function copiaConRecorrido() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'hsk-desbordes-'));
  fs.readdirSync(RAIZ).filter(f => /\.(js|json|html|png)$/.test(f)).forEach(f => fs.copyFileSync(path.join(RAIZ, f), path.join(dir, f)));
  const recorrido = `<script>
    const RES = [], ev = (0, eval), vw = () => document.documentElement.clientWidth;
    Object.defineProperty(window, 'speechSynthesis', { value: { cancel() { }, speak() { } } }); // la voz real encola frases sin fin y deja colgado el navegador sin ventana
    window.confirm = () => true; window.alert = () => { }; window.prompt = () => 'Lista de prueba'; // un cuadro de diálogo bloquea el navegador sin ventana (p. ej. «¿salir del examen?»)
    history.back = () => { }; history.pushState = () => { }; // sin navegar por el historial: dentro del iframe sacaría la página del recorrido
    try { ev(${JSON.stringify(PREPARAR)}); } catch (e) { RES.push({ n: 'preparar', error: String(e) }); }
    const LISTA = ${JSON.stringify(lista)};
    if (${!!process.env.TODAS}) for (let i = 0; i < LECT.length; i++) { for (let j = 0; j < LECT[i].ls.length; j++) LISTA.push(['lectura ' + i + '.' + j + ' (' + LECT[i].t + ')', 'lectura(' + i + ',' + j + ')']); for (let k = 0; k < LECT[i].qs.length; k++) LISTA.push(['pregunta ' + i + '.' + k + ' (' + LECT[i].t + ')', 'lectQ(' + i + ',' + k + ')']); }
    for (const [n, js] of LISTA) {
      const r = { n }; try { ev(js); const dw = document.documentElement.scrollWidth; r.dw = dw; r.vp = vw();
        const sg = document.querySelector('.lect #nx'); if (sg) { const b = sg.getBoundingClientRect(); if (b.bottom > innerHeight + 1 || b.top < 0) r.culpable = 'el botón Siguiente queda fuera de la pantalla (' + Math.round(b.top) + '-' + Math.round(b.bottom) + ' de ' + innerHeight + ')'; }
        if (dw > r.vp + 1) { const x = [...document.querySelectorAll('#app *')].find(e => e.getBoundingClientRect().right > r.vp + 1); r.culpable = x ? x.tagName.toLowerCase() + (x.className ? '.' + String(x.className).split(' ')[0] : '') : '?'; } }
      catch (e) { r.error = String(e).slice(0, 120); } RES.push(r);
    }
    document.title = JSON.stringify(RES); parent.postMessage(JSON.stringify(RES), '*');
  </` + `script>`;
  const p = path.join(dir, 'index.html');
  fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace('</body>', () => recorrido + '</body>'));
  return dir;
}

let problemas = 0;
const dir = copiaConRecorrido();
for (const w of ANCHOS) {
  // Edge sin ventana no baja de ~500 px: la app se carga en un iframe del ancho exacto, que sí se comporta como una pantalla de ese ancho
  fs.writeFileSync(path.join(dir, 'marco.html'), `<!doctype html><title></title><iframe src="index.html" style="width:${w}px;height:${process.env.TODAS ? 640 : 900}px;border:0"></iframe><script>addEventListener('message', e => { document.title = e.data; });</` + `script>`);
  let salida = '';
  try { salida = cp.execFileSync(navegador, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--window-size=1000,1000', '--virtual-time-budget=15000', '--dump-dom', 'file:///' + dir.replace(/\\/g, '/') + '/marco.html'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 * 1024 * 1024, timeout: 45000, killSignal: 'SIGKILL' }); }
  catch (e) { salida = e.stdout || ''; }
  const m = salida.match(/<title>([\s\S]*?)<\/title>/); let res;
  try { res = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')); } catch { console.log(`✗ ${w}px: el navegador no devolvió resultados`); problemas++; continue; }
  const vp = res.find(r => r.vp)?.vp, malas = res.filter(r => r.error || r.culpable);
  console.log(`${w}px (ancho útil ${vp}): ${res.length} pantallas, ${malas.length ? malas.length + ' con problemas' : 'todas bien'}`);
  malas.forEach(r => { problemas++; console.log('  ✗', r.n, r.error ? '→ error: ' + r.error : r.dw > r.vp + 1 ? `→ desborda (${r.dw} > ${r.vp}), primer elemento: ${r.culpable}` : `→ ${r.culpable}`); });
}
fs.rmSync(dir, { recursive: true, force: true });
console.log(problemas ? `desbordes: ${problemas} problemas` : 'desbordes: OK');
process.exit(problemas ? 1 : 0);
