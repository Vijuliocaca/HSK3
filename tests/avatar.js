// Animación de la persona en un navegador real: parpadea siempre y mueve la boca solo mientras habla.
const { lanzar } = require('./cdp');
let problemas = 0;
const ok = (c, m) => { if (!c) { problemas++; console.log('  ✗', m); } };
(async () => {
  const b = await lanzar();
  if (!b) { console.log('avatar: no encuentro Edge ni Chrome (variable BROWSER). Prueba omitida.'); process.exit(0); }
  try {
    const { ev, esp } = b, anim = s => ev(`getComputedStyle(document.querySelector('${s}')).animationName`);
    await ev('lectura(0)'); await esp(100); await ev('pararHabla()');
    ok((await anim('#av .ojos')) == 'parpadeo', 'la persona debe parpadear');
    ok((await anim('#av .boca')) == 'none', 'la boca debe estar quieta si no habla');
    await ev("document.querySelector('#av').classList.add('habla')"); await esp(50);
    ok((await anim('#av .boca')) == 'hablar', 'la boca debe moverse mientras habla');
    const t = async () => ev("getComputedStyle(document.querySelector('#av .boca')).transform"), a = await t(); await esp(150);
    ok(a != (await t()), 'la boca debe cambiar de forma con el tiempo');
  } catch (e) { problemas++; console.log('  ✗ error en la prueba:', e.message); }
  await b.cerrar();
  console.log(problemas ? `avatar: ${problemas} problemas` : 'avatar: OK');
  process.exit(problemas ? 1 : 0);
})();
