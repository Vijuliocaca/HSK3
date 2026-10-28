// Lanza las pruebas y resume el resultado. Uso:
//   node tests/run.js                 datos + pantallas + botón atrás (segundos, sin navegador; es lo que corre GitHub en cada subida)
//   node tests/run.js --navegador     además, en Edge/Chrome real: recorrido a 320-412 px, teclear/borrar en los campos, lecturas con clics reales, el editor de personajes, las capas del avatar, la actualización con service worker, y atrás con historial real (más lento)
// Pantallas y atrás se repiten con la hora de Madrid en horas trampa (23:30 tras cada cambio de hora y en Nochevieja): GitHub va en UTC y no vería esos fallos de fechas.
const { spawnSync } = require('child_process'), path = require('path');
const RELOJES = ['2026-03-30T23:30', '2026-10-26T23:30', '2026-12-31T23:30'];
const pruebas = [['datos.js'], ['pantallas.js'], ['atras.js'], ...RELOJES.flatMap(r => [['pantallas.js', r], ['atras.js', r]]),
  ...(process.argv.includes('--navegador') ? ['desbordes.js', 'teclado.js', 'lecturas.js', 'avatar.js', 'editor.js', 'capas.js', 'actualizar.js', 'trazos.js', 'atras-navegador.js'].map(p => [p]) : [])];
let mal = 0;
for (const [p, reloj] of pruebas) {
  const env = reloj ? { ...process.env, TZ: 'Europe/Madrid', RELOJ: reloj } : process.env;
  const r = spawnSync(process.execPath, [path.join(__dirname, p)], { encoding: 'utf8', env });
  const out = reloj ? r.stdout.replace(/^(\S+: )/gm, `$1[${reloj}] `) : r.stdout;
  process.stdout.write(out); if (r.stderr) process.stderr.write(r.stderr);
  if (!r.status) continue;
  mal++;
  // en GitHub, cada ✗ sale como aviso en el resumen de la ejecución (se ve sin iniciar sesión, también por la API)
  if (process.env.GITHUB_ACTIONS) (out + (r.stderr || '')).split('\n').map((l, i, a) => /✗|Error/.test(l) ? l.trim() + (a[i + 1] && /^\s/.test(a[i + 1]) ? ' — ' + a[i + 1].trim() : '') : '')
    .filter(Boolean).slice(0, 8).forEach(m => console.log(`::error title=${p}${reloj ? ' ' + reloj : ''}::${m.replace(/%/g, '%25')}`));
}
console.log(mal ? `\n✗ ${mal} de ${pruebas.length} grupos de pruebas fallan` : `\n✔ todo correcto (${pruebas.length} grupos)`);
process.exit(mal ? 1 : 0);
