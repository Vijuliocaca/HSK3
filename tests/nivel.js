// Test de nivel, XP y avisos en Edge/Chrome real: recorre el test de nivel con clics y comprueba el resultado y que las respuestas dan XP.
const { lanzar } = require('./cdp');
(async () => {
  const b = await lanzar();
  if (!b) { console.log('nivel: no encuentro Edge ni Chrome (variable BROWSER). Prueba omitida.'); process.exit(0); }
  let problemas = 0; const mal = m => { console.log('✗', m); problemas++; };
  try {
    const { ev, esp } = b;
    await ev("S.hist = {}; S.frz = 0; testNivel(); 1"); await esp(200);
    let fin = false, n = 0;
    for (; n < 40 && !fin; n++) {
      fin = await ev("document.body.innerText.includes('Tu nivel')"); if (fin) break;
      if (await ev("!!document.querySelector('#nx')")) await ev("document.querySelector('#nx').click(); 1");
      else await ev("document.querySelector('.opt').click(); 1");
      await esp(40);
    }
    if (!fin) mal('el test de nivel no llegó al resultado en 40 pasos');
    const txt = await ev("document.querySelector('h1').innerText");
    if (!/HSK [1-6]/.test(txt)) mal('el resultado no indica un nivel HSK válido: ' + txt);
    const xpHoy = await ev("S.hist[day(new Date())]?.x || 0");
    if (!(xpHoy >= 3)) mal('responder no dio XP (' + xpHoy + ')');
    await ev("document.querySelector('.main').click(); 1"); await esp(150);
    if (!await ev("document.body.innerText.includes('Misiones de hoy')")) mal('el inicio no muestra las misiones tras el test');
    console.log(problemas ? 'nivel: ' + problemas + ' problemas' : 'nivel: OK (' + n + ' pasos, ' + txt + ', ' + xpHoy + ' XP)');
  } finally { await b.cerrar?.(); }
  process.exit(problemas ? 1 : 0);
})();
