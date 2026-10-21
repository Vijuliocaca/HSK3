// Lanza las pruebas y resume el resultado. Uso:
//   node tests/run.js                 datos + pantallas + botón atrás (segundos, sin navegador; es lo que corre GitHub en cada subida)
//   node tests/run.js --navegador     además, en Edge/Chrome real: recorrido a 320-412 px, teclear/borrar en los campos y lecturas con clics reales (más lento)
const { spawnSync } = require('child_process'), path = require('path');
const pruebas = ['datos.js', 'pantallas.js', 'atras.js', ...(process.argv.includes('--navegador') ? ['desbordes.js', 'teclado.js', 'lecturas.js'] : [])];
let mal = 0;
for (const p of pruebas) {
  const r = spawnSync(process.execPath, [path.join(__dirname, p)], { encoding: 'utf8' });
  process.stdout.write(r.stdout); if (r.stderr) process.stderr.write(r.stderr);
  if (r.status) mal++;
}
console.log(mal ? `\n✗ ${mal} de ${pruebas.length} grupos de pruebas fallan` : `\n✔ todo correcto (${pruebas.length} grupos)`);
process.exit(mal ? 1 : 0);
