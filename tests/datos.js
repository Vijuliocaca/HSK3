// Comprueba los archivos de datos y la configuración: formato, sílabas de pinyin, referencias cruzadas y service worker.
// Estrictas: fallan siempre. «Tope»: el dato ya tiene casos conocidos (儿, vocales seguidas sin apóstrofo…) y solo falla si empeora.
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const RAIZ = path.join(__dirname, '..'), leer = f => fs.readFileSync(path.join(RAIZ, f), 'utf8');
let fallos = 0, total = 0;
const t = (nombre, f) => { total++; try { f(); } catch (e) { fallos++; console.log('✗', nombre, '\n   ', e.message.split('\n')[0]); } };

const html = leer('index.html'), scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]);
const ctx = vm.createContext({}); ctx.self = ctx;
scripts.filter(f => fs.existsSync(path.join(RAIZ, f))).forEach(f => vm.runInContext(leer(f), ctx, { filename: f })); // los que faltan los avisa la primera prueba
const ev = js => vm.runInContext(js, ctx);

const SYL = /(?:zh|ch|sh|[bpmfdtnlgkhjqxzcsryw])?[aeiouüāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]+(?:ng|n)?/giu;
const han = s => [...s].filter(c => /[㐀-鿿]/.test(c)).length, sil = s => (s.match(SYL) || []).length, lineas = s => s.split('\n').filter(l => l.trim());
const coincide = (zh, py) => han(zh) == sil(py);

// --- configuración ---
t('index.html: todos los <script src> existen', () => scripts.forEach(f => assert(fs.existsSync(path.join(RAIZ, f)), 'falta ' + f)));
t('index.html: el script principal no tiene errores de sintaxis', () => new Function(html.match(/<script>([\s\S]*?)<\/script>/g).pop().slice(8, -9)));
t('sw.js: versión con formato hsk3-vNN', () => assert(/const V = 'hsk3-v\d+'/.test(leer('sw.js'))));
t('sw.js: guarda todos los scripts de index.html', () => { const sw = leer('sw.js'); scripts.forEach(f => assert(sw.includes(`'${f}'`), f + ' no está en FILES')); });
t('sw.js: no guarda archivos que no existen', () => [...leer('sw.js').match(/FILES = \[([^\]]*)\]/)[1].matchAll(/'([^']+)'/g)].forEach(m => m[1] == './' || assert(fs.existsSync(path.join(RAIZ, m[1])), 'FILES apunta a ' + m[1])));

t('index.html: ningún manejador de teclado asignado devuelve false con «&&» (cancelaría la tecla, p. ej. Borrar)', () => {
  const malos = html.match(/\.on(keydown|keyup|keypress|beforeinput|submit)\s*=\s*\w+\s*=>\s*[^{\n]*&&/g) || [];
  assert.strictEqual(malos.length, 0, 'usa «{ if (...) ... }» en vez de «cond && accion»: ' + malos.join(' | ').slice(0, 160));
});

// --- vocabulario ---
const raw = ev('RAW'), nuevas = ev('self.NEW'), palabras = [];
raw.split('\n').forEach(l => { if (l.trim() && l[0] != '#') palabras.push(l); });
nuevas.forEach(([, tx]) => lineas(tx).forEach(l => palabras.push(l)));
const H = new Set(palabras.map(l => l.split('|')[0]));
t('vocabulario: cada línea tiene hanzi|pinyin|español', () => palabras.forEach(l => assert(l.split('|').length == 3 && l.split('|').every(x => x.trim()), 'mal formada: ' + l)));
t('vocabulario: sin hanzi repetidos (el progreso se guarda por hanzi)', () => { const v = new Set(); palabras.forEach(l => { const h = l.split('|')[0]; assert(!v.has(h), 'repetida: ' + h); v.add(h); }); });
t('vocabulario: sílabas ≠ caracteres no empeora (tope 31)', () => { const n = palabras.filter(l => { const [h, p] = l.split('|'); return !coincide(h, p); }).length; assert(n <= 31, `${n} casos, el tope es 31`); });

// --- frases de ejemplo ---
const frases = ev('self.SENTR').flatMap(lineas).filter(l => !l.startsWith('//')).map(l => l.split('|'));
t('frases: palabra|frase|pinyin|español y la palabra existe en el vocabulario', () => frases.forEach(p => { assert(p.length == 4, 'mal formada: ' + p[0]); assert(H.has(p[0]), 'palabra inexistente: ' + p[0]); }));
t('frases: una frase por palabra', () => assert.strictEqual(new Set(frases.map(p => p[0])).size, frases.length, 'palabras con más de una frase'));
t('frases: sílabas ≠ caracteres no empeora (tope 122)', () => { const n = frases.filter(p => !coincide(p[1], p[2])).length; assert(n <= 122, `${n} casos, el tope es 122`); });

// --- temas y gramática y canciones ---
t('temas: formato [sello, nombre, palabras]; palabras inexistentes no empeora (tope 203, la app las ignora)', () => {
  const T = ev('self.TEMAS'); let falta = 0;
  T.forEach(x => { assert(x.length == 3 && x[0] && x[1] && x[2], 'tema mal formado'); x[2].split(/\s+/).forEach(h => { if (h && !H.has(h)) falta++; }); });
  assert(falta <= 203, `${falta} palabras de temas no existen, el tope es 203`);
});
t('gramática: 5 campos por punto, ejemplos con pinyin correcto', () => ev('self.GRAM').forEach(g => {
  assert(g.length == 5 && typeof g[0] == 'number' && g[1] && g[2] && g[3] && g[4].length, 'punto mal formado: ' + g[1]);
  g[4].forEach(x => assert(coincide(x[0].replace(/[|\[\]]/g, ''), x[1]), `${g[1]}: ${x[0]}`));
}));
t('gramática: títulos únicos (el progreso se guarda por título)', () => { const ts = ev('self.GRAM').map(g => g[1]); assert.strictEqual(new Set(ts).size, ts.length); });
t('canciones: letra con pinyin correcto y melodías con una línea por verso', () => ev('self.SONGS').forEach(s => {
  s.lines.forEach(l => assert(coincide(l[0].replace(/\|/g, ''), l[1]), `${s.t}: ${l[0]}`));
  if (s.mel) assert.strictEqual(s.mel.length, s.lines.length, s.t + ': la melodía no tiene una línea por verso');
}));

// --- contenido de las pantallas nuevas ---
t('diálogos: A/B alternos, 4 campos, pinyin correcto, preguntas con 3-4 opciones distintas, 4 por nivel', () => {
  const D = ev('self.DIALS'), porNivel = {};
  D.forEach(([lv, ti, ls, qs]) => { porNivel[lv] = (porNivel[lv] || 0) + 1;
    lineas(ls).forEach((l, j) => { const p = l.split('|'); assert(p.length == 4 && p[0] == 'AB'[j % 2], `${ti} línea ${j}`); assert(coincide(p[1], p[2]), `${ti}: ${p[1]}`); });
    lineas(qs).forEach(q => { const f = q.split('|'); assert(f.length >= 3 && new Set(f.slice(1)).size == f.length - 1, `${ti}: pregunta ${f[0]}`); }); });
  assert.deepStrictEqual(porNivel, { 1: 4, 2: 4, 3: 4, 4: 4, 5: 4 });
});
t('lecturas: palabras y pinyin alineados, todas con significado (vocabulario o glosario)', () => {
  const L = ev('self.LECTS'), glosario = new Set(L.flatMap(x => lineas(x[4]).map(l => l.split('|')[0])));
  L.forEach(([, ti, ls, qs]) => { lineas(ls).forEach(l => { const p = l.split('|'); assert(p.length == 3, ti);
    const z = p[0].split('/'), py = p[1].split(' '); assert(z.length == py.length, `${ti}: ${p[1]}`);
    z.forEach((w, k) => { const h = [...w].filter(c => /[㐀-鿿]/.test(c)).join(''); assert(h.length == sil(py[k]), `${ti}: ${w} ${py[k]}`); assert(!h || H.has(h) || glosario.has(h), `${ti}: «${h}» sin significado`); }); });
    lineas(qs).forEach(q => { const f = q.split('|'); assert(f.length == 4 && new Set(f.slice(1)).size == 3, `${ti}: ${f[0]}`); }); });
});
t('成语: 60, cada uno con 4 caracteres, 4 sílabas y ejemplo con pinyin correcto', () => {
  const C = lineas(ev('self.CHENGYU')[0]); assert.strictEqual(C.length, 60);
  C.forEach(l => { const p = l.split('|'); assert(p.length == 7 && p.every(Boolean), p[0]); assert(han(p[0]) == 4 && sil(p[1]) == 4, p[0]); assert(coincide(p[4], p[5]), p[0] + ' ejemplo'); });
});
t('cultura: 3 listas de 10 con todos los campos y títulos con pinyin correcto', () => {
  const C = ev('self.CULT'); assert.deepStrictEqual(Object.keys(C), ['pelis', 'series', 'platos']);
  Object.entries(C).forEach(([k, c]) => { assert.strictEqual(c.xs.length, 10, k); c.xs.forEach(x => { ['t', 'p', 'es', 'a', 'y', 'd'].forEach(f => assert(x[f], `${k} ${x.t}: falta ${f}`)); assert(coincide(x.t, x.p), x.t); }); });
});
t('fiestas: 12, con regla válida, nombre y saludo con pinyin correcto', () => {
  const F = lineas(ev('self.FIESTAS')[0]).map(l => l.split('|')); assert.strictEqual(F.length, 12);
  F.forEach(p => { assert(p.length == 10 && p.every(Boolean), p[0]); assert(/^(G \d+\/\d+|L \d+\/\d+|E|Q)$/.test(p[4]), `${p[0]}: regla «${p[4]}»`); assert(coincide(p[0], p[2]) && coincide(p[7], p[8]), p[0]); });
});
t('relaciones: antónimos (A) y sinónimos (S) con las dos palabras en el vocabulario', () => lineas(ev('self.RELS')[0]).forEach(l => { const [k, a, b] = l.split('|'); assert(k == 'A' || k == 'S', l); assert(H.has(a) && H.has(b), 'no existe: ' + l); assert(a != b, l); }));

console.log(fallos ? `datos: ${fallos} de ${total} pruebas fallan` : `datos: ${total} pruebas OK`);
process.exit(fallos ? 1 : 0);
