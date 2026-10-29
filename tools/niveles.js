// Genera niveles.js: nivel HSK 3.0 oficial de cada palabra de la app.
// Uso: node tools/niveles.js ruta/complete.min.json  (drkameleon/complete-hsk-vocabulary)
// Niveles 1-6 = los del HSK 3.0; la banda 7-9 se reparte en tres por frecuencia (campo q: rango, menor = más común).
// Las palabras que el 3.0 no recoge se reparten igual si tienen frecuencia; si no, max(nivel que tenían, 7).
const fs = require('fs'), path = require('path');
const ref = JSON.parse(fs.readFileSync(process.argv[2], 'utf8')), N = {}, Q = {};
for (const e of ref) { const t = e.l.find(x => x[0] == 'n'); if (t) N[e.s] = +t.slice(1); Q[e.s] = Math.min(Q[e.s] || 1e9, e.q || 1e9); }
const banda = Object.keys(N).filter(h => N[h] == 7).map(h => Q[h]).sort((a, b) => a - b);
const corte = [banda[Math.floor(banda.length / 3)], banda[Math.floor(banda.length * 2 / 3)]];
const tercio = q => q < corte[0] ? 7 : q < corte[1] ? 8 : 9;
const f = path.join(__dirname, '../niveles.js'); fs.writeFileSync(f, 'self.NIV = {};'); // sin la tabla vieja, para partir del nivel original
const { cargarApp } = require(path.join(__dirname, '../tests/arnes.js'));
const W = JSON.parse(cargarApp().ev('JSON.stringify(W.map(w => [w.h, w.l]))')), niv = {};
for (const [h, l] of W) {
  const n = N[h], q = Q[h];
  const v = n ? (n == 7 ? tercio(q) : n) : q && q < 1e9 ? tercio(q) : Math.max(l, 7);
  (niv[v] = niv[v] || []).push(h);
}
const salida = '// Nivel HSK 3.0 de cada palabra (generado por tools/niveles.js; 7-9 repartido por frecuencia). Lo que no esté aquí conserva el nivel de su archivo.\n' +
  'self.NIV = {\n' + Object.keys(niv).sort().map(k => `${k}: \`${niv[k].join(' ')}\``).join(',\n') + '\n};\n';
fs.writeFileSync(f, salida);
console.log(Object.keys(niv).sort().map(k => k + ':' + niv[k].length).join(' '), 'cortes q', corte);
