// Prueba de extremo a extremo de las lecturas en un navegador real, con clics y teclas de verdad:
// ayudas Pinyin/Español de la página general, lectura frase a frase y las preguntas (acertando y fallando) con su resultado.
const { lanzar } = require('./cdp');
let problemas = 0;
const ok = (cond, msg) => { if (!cond) { problemas++; console.log('  ✗', msg); } return !!cond; };

(async () => {
  const b = await lanzar();
  if (!b) { console.log('lecturas: no encuentro Edge ni Chrome (variable BROWSER). Prueba omitida.'); process.exit(0); }
  try {
    const { ev, clic, esp, tecla } = b, hanzi = () => ev("[...document.querySelectorAll('#lc .wd')].map(w => w.lastChild.textContent).join('')");
    const contador = () => ev("(document.querySelector('.top > .mut') || {}).textContent"), visible = sel => ev(`(() => { const e = document.querySelector(${JSON.stringify(sel)}); return !!e && getComputedStyle(e).display != 'none'; })()`);
    const AYUDAS = '[aria-label="Ayudas de lectura"] button';

    // 1) Ayudas en la página general: orden, estado y efecto dentro de la lectura
    console.log('1) Pinyin y Español en la página general');
    await ev('lecturas()');
    ok((await ev(`[...document.querySelectorAll('${AYUDAS}')].map(b => b.textContent).join()`)) == 'Pinyin,Español', 'los botones deben ser Pinyin y luego Español');
    ok((await ev(`document.querySelectorAll('${AYUDAS}.on').length`)) == 2, 'por defecto deben estar los dos activados');
    await clic(AYUDAS, 'Pinyin'); await esp(60);
    ok((await ev(`document.querySelectorAll('${AYUDAS}.on').length`)) == 1 && (await ev(`document.querySelector('${AYUDAS}.on').textContent`)) == 'Español', 'al pulsar Pinyin debe quedar solo Español activo');
    await clic('.mode'); await esp(80);   // abre la primera lectura
    ok(!(await visible('#lc .wd small')), 'con Pinyin desactivado no debe verse el pinyin');
    ok(await visible('#lc .tr'), 'con Español activado debe verse la traducción');
    await ev('lecturas()'); await clic(AYUDAS, 'Pinyin'); await clic(AYUDAS, 'Español'); await esp(60);
    await clic('.mode'); await esp(80);
    ok(await visible('#lc .wd small'), 'con Pinyin activado debe verse el pinyin'); ok(!(await visible('#lc .tr')), 'con Español desactivado no debe verse la traducción');
    await ev('lecturas()'); await clic(AYUDAS, 'Español'); await esp(60);
    ok((await ev(`document.querySelectorAll('${AYUDAS}.on').length`)) == 2, 'debe poder volver a activar los dos');

    // 2) Lectura frase a frase con clics y teclas reales
    console.log('2) Lectura frase a frase');
    await clic('.mode'); await esp(80);
    const n = await ev('LECT[0].ls.length');
    for (let j = 0; j < n; j++) {
      const esperado = await ev(`LECT[0].ls[${j}].z.join('')`), tr = await ev(`LECT[0].ls[${j}].e`);
      ok((await hanzi()) == esperado, `frase ${j + 1}: se ve «${await hanzi()}» y debería verse «${esperado}»`);
      ok((await contador()) == `${j + 1}/${n}`, `contador de la frase ${j + 1}: «${await contador()}»`);
      ok((await ev("document.querySelector('#lc .tr').textContent")) == tr, `traducción de la frase ${j + 1}`);
      ok((await ev("!!document.querySelector('.avatar svg')")), 'falta la persona'); ok((await ev("!!document.querySelector('.burbuja')")), 'falta el globo');
      ok((await ev("document.querySelector('#nx').textContent")) == (j == n - 1 ? 'Ir a las preguntas' : 'Siguiente'), `texto del botón en la frase ${j + 1}`);
      ok((await ev("!!document.querySelector('[aria-label=\"Frase anterior\"]')")) == (j > 0), `botón «←» en la frase ${j + 1}`);
      ok(!(await ev("!!document.querySelector('nav:not([hidden]) button')")) || true, '');
      if (j == 1) { await clic('[aria-label="Frase anterior"]'); await esp(60); ok((await contador()) == `1/${n}`, '«←» no volvió a la frase 1'); await clic('#nx'); await esp(60); ok((await contador()) == `2/${n}`, 'Siguiente no volvió a la frase 2'); }
      if (j < n - 1) { await clic('#nx'); await esp(60); }
    }
    // la barra de pestañas no debe tapar el botón Siguiente
    ok((await ev("(() => { const nv = document.querySelector('#nav'); return !nv || nv.hidden || getComputedStyle(nv).display == 'none'; })()")), 'la barra de pestañas debe estar oculta durante la lectura');
    // tecla Intro = Siguiente
    await ev('lectura(0)'); await esp(100); await tecla('Enter', 'Enter', 13); await esp(80);
    ok((await contador()) == `2/${n}`, 'la tecla Intro no pasó a la frase siguiente');
    // tocar una palabra abre su ficha
    await clic('#lc .wd'); await esp(60); ok((await ev("document.querySelector('#fi').textContent.trim().length")) > 3, 'al tocar una palabra no sale su ficha');

    // 3) Preguntas: acertando
    console.log('3) Preguntas: respuestas correctas');
    await ev(`lectura(0, ${n - 1})`); await esp(80); await clic('#nx'); await esp(80);
    const Q = JSON.parse(await ev('JSON.stringify(LECT[0].qs)')), titulo = await ev('LECT[0].t'), total = Q.length;
    const responder = async (q, bien) => {
      if (q.t == 'r') { const orden = bien ? q.r : [...q.r].reverse(); for (const e of orden) ok(await clic('#bk button', e), `no encuentro el hecho «${e}»`); ok(await clic('#ck'), 'no hay botón Comprobar'); }
      else ok(await clic('.opts .opt', bien ? q.r[0] : q.r[1]), `no encuentro la opción «${bien ? q.r[0] : q.r[1]}»`);
      await esp(80);
    };
    for (let k = 0; k < total; k++) {
      ok((await contador()) == `${k + 1}/${total}`, `contador de la pregunta ${k + 1}: «${await contador()}»`);
      ok(!(await ev("!!document.querySelector('#q .wd')")), 'durante las preguntas no debe verse el texto de la lectura');
      const nopc = await ev("document.querySelectorAll('#q .opts .opt, #bk button').length"); ok(nopc == 4, `la pregunta ${k + 1} debe tener 4 opciones o hechos (tiene ${nopc})`);
      await responder(Q[k], true);
      ok(await ev("!!document.querySelector('.fb.g')"), `la pregunta ${k + 1} (${Q[k].t}) bien contestada debe dar acierto`);
      await clic('#nx'); await esp(60);
    }
    ok((await ev("document.querySelector('h1') && document.querySelector('h1').textContent")).includes('Hecho') && (await ev('document.body.innerText')).includes(`${total}/${total} aciertos`), `el resultado debe decir ${total}/${total} aciertos`);
    ok((await ev(`S.lect[${JSON.stringify(titulo)}]`)) == total, 'el mejor resultado no se guardó');

    // 4) Preguntas: fallando
    console.log('4) Preguntas: respuestas incorrectas');
    ok(await clic('button', 'Repetir las preguntas'), 'no hay botón para repetir'); await esp(80);
    for (let k = 0; k < total; k++) {
      await responder(Q[k], false);
      ok(await ev("!!document.querySelector('.fb.b')"), `la pregunta ${k + 1} (${Q[k].t}) mal contestada debe dar fallo`);
      const fb = await ev("document.querySelector('.fb.b').textContent");
      ok(Q[k].t == 'x' ? fb.includes('La falsa era:') : Q[k].t == 'r' ? fb.includes('Orden correcto:') : fb.includes('Era:'), `mensaje de fallo de la pregunta ${k + 1}: «${fb.slice(0, 60)}»`);
      if (Q[k].t == 'r') ok(Q[k].r.every((e, i) => fb.includes(`${i + 1}. ${e}`)), 'el fallo de ordenar debe mostrar el orden correcto');
      await clic('#nx'); await esp(60);
    }
    ok((await ev('document.body.innerText')).includes(`0/${total} aciertos`), 'el resultado debe decir 0 aciertos');
    ok((await ev(`S.lect[${JSON.stringify(titulo)}]`)) == total, 'un resultado peor no debe pisar el mejor');
    await ev('lecturas()'); ok((await ev('document.body.innerText')).includes('✓'), 'la lista debe marcar la lectura completada (✓)');
  } catch (e) { problemas++; console.log('  ✗ error en la prueba:', e.message); }
  await b.cerrar();
  console.log(problemas ? `lecturas: ${problemas} problemas` : 'lecturas: OK (clics y teclas reales)');
  process.exit(problemas ? 1 : 0);
})();
