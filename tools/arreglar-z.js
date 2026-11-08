// Busca las lecturas cuya pregunta «z» tiene la frase correcta destacando por su longitud (o sin 4 frases distintas)
// y propone otro z|N que no destaque (frase de 4-9 palabras y distinta de la de «f»).
//   node tools/arreglar-z.js            solo informa
//   node tools/arreglar-z.js --aplicar  cambia la línea «z|N» en el archivo de la lectura
// Los títulos repetidos (en varios archivos) se saltan: arréglalos a mano.
const fs = require('fs'), path = require('path'), { cargarApp, RAIZ } = require('../tests/arnes');
const aplicar = process.argv.includes('--aplicar');
const a = cargarApp(), n = a.ev('LECT.length');
const archivos = fs.readdirSync(RAIZ).filter(f => /^lecturas.*\.js$/.test(f));
const fuente = Object.fromEntries(archivos.map(f => [f, fs.readFileSync(path.join(RAIZ, f), 'utf8')]));
const opciones = (i, k) => JSON.parse(a.ev(`(() => { const d = LECT[${i}], o = opcionesZ(d, ${k}); return JSON.stringify({ n: o.length, dist: new Set(o.map(s => s.z.join(''))).size, esta: o[0] === d.ls[${k}], L: o.map(s => [...s.z.join('')].length) }); })()`));
const bien = r => r.n == 4 && r.dist == 4 && r.esta && !(r.L[0] > Math.max(...r.L.slice(1))) && !(r.L[0] < Math.min(...r.L.slice(1)));
let malas = 0, arregladas = 0;
for (let i = 0; i < n; i++) {
  const d = JSON.parse(a.ev(`(() => { const d = LECT[${i}]; return JSON.stringify({ t: d.t, z: d.qs.find(q => q.t == 'z').k, f: (d.qs.find(q => q.t == 'f') || {}).k, pal: d.ls.map(s => s.z.length) }); })()`));
  if (bien(opciones(i, d.z))) continue;
  malas++;
  const sirve = (j, conF) => j != d.z && (conF || j != d.f) && d.pal[j] >= 4 && d.pal[j] <= 9 && bien(opciones(i, j));
  let k = d.pal.findIndex((p, j) => sirve(j, false)); if (k < 0) k = d.pal.findIndex((p, j) => sirve(j, true)); // preferible distinta de la de «f», pero vale la misma
  if (k < 0) { console.log(`✗ ${d.t}: ninguna otra frase sirve; reescribe una frase o cambia la «f»`); continue; }
  const donde = archivos.filter(f => fuente[f].includes(`'${d.t}'`));
  if (donde.length != 1) { console.log(`? ${d.t}: z|${d.z + 1} → z|${k + 1} (título ${donde.length ? 'repetido' : 'no encontrado'}: cámbialo a mano)`); continue; }
  const f = donde[0], ini = fuente[f].indexOf(`'${d.t}'`), m = /^z\|(\d+)/m.exec(fuente[f].slice(ini));
  if (!m || +m[1] != d.z + 1) { console.log(`? ${d.t}: no encuentro su línea z|${d.z + 1} en ${f}`); continue; }
  console.log(`${aplicar ? '✔' : '→'} ${d.t} (${f}): z|${d.z + 1} → z|${k + 1}`);
  if (aplicar) { const pos = ini + m.index; fuente[f] = fuente[f].slice(0, pos) + 'z|' + (k + 1) + fuente[f].slice(pos + m[0].length); arregladas++; }
}
if (aplicar) archivos.forEach(f => fs.writeFileSync(path.join(RAIZ, f), fuente[f]));
console.log(malas ? `${malas} lectura(s) con la «z» mal${aplicar ? `, ${arregladas} corregida(s)` : ' (usa --aplicar)'}` : 'todas las «z» bien');
