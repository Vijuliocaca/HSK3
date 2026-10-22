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
    await ev("document.querySelector('#av').classList.remove('habla')"); await ev('pararHabla()'); await ev("(() => { Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: { cancel() { }, speak(u) { setTimeout(() => u.onstart && u.onstart(), 5); } } }); return 1; })()");
    await ev('hablar(0, 0)'); await esp(60);
    ok((await ev("document.querySelector('#av').classList.contains('gesto')")) && (await anim('#av svg')) == 'asentir', 'al empezar una frase la persona debe hacer un gesto');
    // conversación de dos: cada frase mueve a SU persona; las preguntas levantan las cejas, las exclamaciones sonríen y al terminar los dos sonríen
    await ev("(() => { Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: { cancel() { }, speak(u) { setTimeout(() => u.onstart && u.onstart(), 5); setTimeout(() => u.onend && u.onend(), 250); } } }); return 1; })()");
    const i = await ev("LECT.findIndex(d => d.p == 'yuyue+payolink')"), n = await ev(`LECT[${i}].ls.length`), cl = s => ev(`[...document.querySelector('${s}').classList].join(' ')`);
    await ev(`lectura(${i}, ${n - 1})`); await esp(700); await ev('pararHabla()');
    ok((await ev("document.querySelectorAll('.cab .avatar').length")) == 2, 'la conversación debe mostrar a las dos personas');
    await ev('hablar(0, 0)'.replace('0, 0', `${i}, 0`)); await esp(40); ok((await cl('#av')).includes('habla') && (await cl('#av')).includes('pregunta') && !(await cl('#av2')).includes('habla'), `la 1.ª frase (pregunta) la dice la 1.ª persona con cejas levantadas (${await cl('#av')} / ${await cl('#av2')})`);
    await ev(`hablar(${i}, 1)`); await esp(40); ok((await cl('#av2')).includes('habla') && !(await cl('#av')).includes('habla'), 'la 2.ª frase la dice la 2.ª persona');
    await ev(`hablar(${i}, 2)`); await esp(40); ok((await cl('#av')).includes('alegre'), 'una frase con exclamación debe poner cara alegre');
    ok((await ev("getComputedStyle(document.querySelector('#av .boca')).scale")) != 'none', 'la expresión debe cambiar la boca');
    await esp(300); ok(!(await cl('#av')).includes('alegre') && !(await cl('#av')).includes('habla'), 'al acabar la frase la cara vuelve a la normal');
    await ev(`hablar(${i}, ${n - 1})`); await esp(320); ok((await cl('#av')).includes('feliz') && (await cl('#av2')).includes('feliz'), 'al terminar la lectura los dos deben sonreír');
    await ev('pararHabla()'); ok(!(await cl('#av')).includes('feliz'), 'pararHabla quita la sonrisa');
    // voz de cada personaje: tono y velocidad propios y una voz china distinta (el dispositivo tiene 2: se reparten por la paridad de n)
    await ev("(() => { window.__u = []; window.SpeechSynthesisUtterance = function (t) { this.text = t; }; const vs = [{ name: 'B', lang: 'zh-CN' }, { name: 'A', lang: 'zh-CN' }, { name: 'E', lang: 'en-US' }]; Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: { cancel() { }, getVoices: () => vs, speak(u) { window.__u.push({ pitch: u.pitch, rate: u.rate, voz: u.voice && u.voice.name }); } } }); S.set.rate = 1; return 1; })()");
    await ev(`lectura(${i}, ${n - 1})`); await esp(700); await ev('pararHabla(); window.__u = []'); await ev(`hablar(${i}, 0)`); await ev(`hablar(${i}, 1)`);
    const us = await ev('window.__u'); ok(us.length == 2 && us[0].pitch == 1.3 && us[1].pitch == 1.15 && us[0].rate == 1.05 && us[1].rate == 1, `cada persona debe hablar con su tono y velocidad (${JSON.stringify(us)})`);
    ok(us[0].voz == 'B' && us[1].voz == 'A' && us[0].voz != us[1].voz, `dos personas que conversan deben usar voces distintas (${us.map(u => u.voz)})`);
    await ev('S.set.rate = 0.5; window.__u = []'); await ev(`hablar(${i}, 0)`); ok((await ev('window.__u'))[0].rate == 0.525, 'la velocidad propia debe multiplicar la del ajuste');
    // expresiones por palabras clave (sin ？ ni ！): triste, enfado, susto y cansado
    await ev("(() => { Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: { cancel() { }, getVoices: () => [], speak(u) { setTimeout(() => u.onstart && u.onstart(), 5); } } }); return 1; })()");
    for (const [clase, re] of [['cansado', '累'], ['triste', '难过|伤心|可惜'], ['susto', '害怕|担心|紧张']]) {
      const hit = await ev(`(() => { for (let i = 0; i < LECT.length; i++) for (let k = 0; k < LECT[i].ls.length; k++) { const fr = LECT[i].ls[k].z.join(''); if (!/[？！]/.test(fr) && /${re}/.test(fr) && !LECT[i].p.includes('+')) return [i, k]; } return null; })()`);
      if (!hit) { console.log('  (sin frase de ejemplo para ' + clase + ')'); continue; }
      await ev(`lectura(${hit[0]}, ${hit[1]})`); await esp(300); await ev('pararHabla()'); await ev(`hablar(${hit[0]}, ${hit[1]})`); await esp(60);
      ok((await ev("[...document.querySelector('#av').classList].join(' ')")).includes(clase), 'una frase con «' + re + '» debe poner cara de ' + clase);
    }
  } catch (e) { problemas++; console.log('  ✗ error en la prueba:', e.message); }
  await b.cerrar();
  console.log(problemas ? `avatar: ${problemas} problemas` : 'avatar: OK');
  process.exit(problemas ? 1 : 0);
})();
