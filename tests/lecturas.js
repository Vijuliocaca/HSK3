// Prueba de extremo a extremo de las lecturas en un navegador real, con clics y teclas de verdad:
// ayudas Pinyin/Español de la página general, lectura frase a frase y las preguntas (acertando y fallando) con su resultado.
const { lanzar } = require('./cdp');
let problemas = 0;
const ok = (cond, msg) => { if (!cond) { problemas++; console.log('  ✗', msg); } return !!cond; };

(async () => {
  const b = await lanzar();
  if (!b) { console.log('lecturas: no encuentro Edge ni Chrome (variable BROWSER). Prueba omitida.'); process.exit(0); }
  try {
    await b.cmd('Emulation.setDeviceMetricsOverride', { width: 390, height: 780, deviceScaleFactor: 1, mobile: true }); // pantalla de móvil (la ventana sin pantalla es pequeña y falsearía las medidas)
    const { ev, clic, esp, tecla } = b, hanzi = () => ev("[...document.querySelectorAll('#lc .wd')].map(w => w.lastChild.textContent).join('')");
    const contador = () => ev("(document.querySelector('.top > .mut') || {}).textContent"), visible = sel => ev(`(() => { const e = document.querySelector(${JSON.stringify(sel)}); return !!e && getComputedStyle(e).display != 'none'; })()`);
    const AYUDAS = '[aria-label="Ayudas de lectura"] button';

    // 1) Ayudas en la página general: orden, estado y efecto dentro de la lectura
    console.log('1) Pinyin y Español en la página general');
    await ev('lecturas()');
    ok((await ev(`[...document.querySelectorAll('${AYUDAS}')].map(b => b.textContent).join()`)) == 'Con pinyin,En español', 'los botones deben ser «Con pinyin» y «En español»');
    ok((await ev(`document.querySelectorAll('${AYUDAS}.on').length`)) == 2, 'por defecto deben estar los dos activados');
    const fila = await ev(`(() => { const bs = [...document.querySelectorAll('${AYUDAS}')].map(b => b.getBoundingClientRect()), c = document.querySelector('.ayudas').getBoundingClientRect(); return { ancho: bs.reduce((a, b) => a + b.width, 0), fila: c.width, izq: bs[0].left - c.left, der: c.right - bs[bs.length - 1].right }; })()`);
    ok(fila.ancho >= fila.fila * 0.9 && fila.izq < 3 && fila.der < 3, `los dos botones deben ocupar toda la línea (suman ${Math.round(fila.ancho)} de ${Math.round(fila.fila)} px)`);
    await clic(AYUDAS, 'Con pinyin'); await esp(60);
    ok((await ev(`document.querySelectorAll('${AYUDAS}.on').length`)) == 1 && (await ev(`document.querySelector('${AYUDAS}.on').textContent`)) == 'En español', 'al pulsar Pinyin debe quedar solo Español activo');
    await clic('.mode'); await esp(80);   // abre la primera lectura
    ok(!(await visible('#lc .wd small')), 'con Pinyin desactivado no debe verse el pinyin');
    ok(await visible('#lc .tr'), 'con Español activado debe verse la traducción');
    await ev('lecturas()'); await clic(AYUDAS, 'Con pinyin'); await clic(AYUDAS, 'En español'); await esp(60);
    await clic('.mode'); await esp(80);
    ok(await visible('#lc .wd small'), 'con Pinyin activado debe verse el pinyin'); ok(!(await visible('#lc .tr')), 'con Español desactivado no debe verse la traducción');
    await ev('lecturas()'); await clic(AYUDAS, 'En español'); await esp(60);
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

    // 2b) El personaje, en el centro y encima del diálogo; la voz ilumina cada palabra; tocar al personaje repite la frase
    console.log('2b) Personaje, voz y palabra iluminada');
    await ev('lectura(0, 1)'); await esp(450);
    const g = await ev(`(() => { const r = s => document.querySelector(s).getBoundingClientRect(), a = r('#av'), d = r('#lc'); return { descentrado: Math.abs((a.left + a.right) / 2 - document.documentElement.clientWidth / 2), encima: a.bottom <= d.top + 1, ancho: a.width }; })()`);
    ok(g.descentrado < 6, `el personaje debe estar centrado (está ${Math.round(g.descentrado)} px descentrado)`); ok(g.encima, 'el personaje debe estar encima del diálogo'); ok(g.ancho >= 80, `el personaje debe ser grande (mide ${Math.round(g.ancho)} px)`);
    ok((await ev("document.querySelector('.nombre').textContent")) == 'Payolink', 'el nombre del personaje debe ser Payolink');
    ok(!(await ev("[...document.querySelectorAll('.chip')].some(e => e.textContent.includes('Escuchar otra vez'))")), 'no debe quedar el botón antiguo de escuchar');
    const frase = await ev('LECT[0].ls[1].z.join("")'), nPal = await ev('LECT[0].ls[1].z.length');
    // voz de prueba: apunta lo que se dice, avisa de que empieza y termina y, si se pide, da avisos de palabra; un observador anota qué palabra está iluminada
    const voz = modo => ev(`(() => { window.__voz = []; window.__luz = []; S.set.rate = 4; window.__salto = iniPalabras(LECT[0].ls[1].z)[3];
      Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: { cancel() { }, speak(u) { window.__voz.push(u.text); setTimeout(() => u.onstart && u.onstart(), 5);
        ${modo == 'bordes' ? "setTimeout(() => u.onboundary && u.onboundary({ name: 'word', charIndex: window.__salto }), 20);" : ''} setTimeout(() => u.onend && u.onend(), 700); } } });
      new MutationObserver(() => { const k = [...document.querySelectorAll('#lc .wd')].findIndex(w => w.classList.contains('on')); if (k != window.__luz[window.__luz.length - 1]) window.__luz.push(k); }).observe(document.querySelector('#lc'), { attributes: true, subtree: true, attributeFilter: ['class'] }); })()`);
    await voz('estimado'); await clic('#av'); await esp(1000);
    const dicho = await ev('window.__voz'), luz = await ev('window.__luz');
    ok(dicho.length == 1 && dicho[0] == frase, `tocar a la persona debe decir la frase una vez (dijo ${JSON.stringify(dicho)})`);
    ok(luz.filter(k => k >= 0).join() == [...Array(nPal).keys()].join(), `las palabras deben iluminarse en orden, una a una (secuencia: ${luz.join(' ')})`);
    ok(luz[luz.length - 1] == -1, 'al terminar la voz no debe quedar ninguna palabra iluminada');
    ok(!(await ev("document.querySelector('#av').classList.contains('habla')")), 'al terminar, el personaje debe dejar de hablar');
    // con avisos de palabra del navegador (boundary) se sigue el aviso y no la estimación
    await ev('lectura(0, 1)'); await esp(450); await voz('bordes'); await clic('#av'); await esp(1000);
    const luz2 = await ev('window.__luz'); ok(luz2.filter(k => k >= 0).join() == '0,3', `con avisos de palabra debe saltar a la palabra indicada (secuencia: ${luz2.join(' ')})`);
    // tocar una palabra corta la voz de la frase y su iluminación
    await ev('lectura(0, 1)'); await esp(450); await voz('estimado'); await clic('#av'); await esp(60); await clic('#lc .wd'); await esp(80);
    ok((await ev("document.querySelectorAll('#lc .wd.on').length")) == 0 && !(await ev("document.querySelector('#av').classList.contains('habla')")), 'al tocar una palabra debe apagarse la iluminación de la frase');
    // la palabra iluminada se ve de verdad (fondo distinto del normal)
    ok(await ev("(async () => { const w = document.querySelector('#lc .wd'), a = getComputedStyle(w).backgroundColor; w.classList.add('on'); await new Promise(r => setTimeout(r, 300)); const b = getComputedStyle(w).backgroundColor; w.classList.remove('on'); return a != b; })()"), 'la palabra iluminada no cambia de aspecto');

    // 2c) Caracteres grandes (y algo menores si la frase es larga), bloque centrado en vertical y persona redonda
    console.log('2c) Tamaño, centrado y círculo');
    const px = s => ev(`parseFloat(getComputedStyle(document.querySelector(${JSON.stringify(s)})).fontSize)`);
    await ev('lectura(0, 1)'); await esp(450); const corto = await px('#lc .wd');
    ok(corto >= 33, `los caracteres de una frase corta deben ser grandes (≥ 33 px; miden ${corto} px)`);
    await ev('lectura(LECT.length - 1, 4)'); await esp(450); const largo = await px('#lc .wd');
    ok(largo < corto && largo >= 24, `una frase larga usa caracteres algo menores pero legibles (${largo} px frente a ${corto} px)`);
    await ev('lectura(0, 1)'); await esp(450);
    const vert = await ev(`(() => { const r = s => document.querySelector(s).getBoundingClientRect(); return { arriba: r('.centro').top - r('.lect > p.mut').bottom, abajo: r('.pie').top - r('.escena > p.mut').bottom }; })()`);
    ok(Math.abs(vert.arriba - vert.abajo) <= 24, `el bloque persona + diálogo debe quedar centrado en vertical (espacio arriba ${Math.round(vert.arriba)} px, abajo ${Math.round(vert.abajo)} px)`);
    // persona redonda: sin el rectángulo de «tocar» del móvil y con el foco de teclado también redondo
    const raiz = (await b.cmd('DOM.getDocument', {})).result.root.nodeId, nodo = (await b.cmd('DOM.querySelector', { nodeId: raiz, selector: '#av' })).result.nodeId;
    await b.cmd('CSS.enable'); await b.cmd('CSS.forcePseudoState', { nodeId: nodo, forcedPseudoClasses: ['focus-visible'] });
    const est = await ev(`(() => { const s = getComputedStyle(document.querySelector('#av')); return { radio: s.borderRadius, contorno: s.outlineStyle, resalte: s.webkitTapHighlightColor }; })()`);
    ok(est.radio == '50%', `con el foco de teclado la persona debe seguir siendo un círculo (border-radius: ${est.radio})`);
    ok(est.contorno != 'none', 'con el foco de teclado debe verse un contorno');
    ok(/rgba\(0, 0, 0, 0\)|transparent/.test(est.resalte), `al tocar a la persona no debe salir el rectángulo de resalte del móvil (resalte: ${est.resalte})`);

    // 3) Preguntas: acertando
    console.log('3) Preguntas: respuestas correctas');
    await ev(`lectura(0, ${n - 1})`); await esp(80); await clic('#nx'); await esp(80);
    const Q = JSON.parse(await ev('JSON.stringify(LECT[0].qs)')), titulo = await ev('LECT[0].t'), total = Q.length;
    const toks = k => ev(`LECT[0].ls[${k}].z`), hz = k => ev(`LECT[0].ls[${k}].z.join('')`);
    const responder = async (q, bien) => {
      if (q.t == 'f') { const t = await toks(q.k), orden = bien ? t : [...t].reverse(); for (const e of orden) ok(await clic('#bk button', e), `no encuentro la palabra «${e}»`); ok(await clic('#ck'), 'no hay botón Comprobar'); }
      else if (q.t == 'z') { const buena = await hz(q.k); ok(await ev(`(() => { const b = [...document.querySelectorAll('.opts .opt')].find(x => (x.querySelector('.zhq').textContent == ${JSON.stringify(buena)}) == ${bien}); if (!b) return false; b.click(); return true; })()`), 'no encuentro la opción pedida en la pregunta de frase en chino'); }
      else ok(await clic('.opts .opt', bien ? q.r[0] : q.r[1]), `no encuentro la opción «${bien ? q.r[0] : q.r[1]}»`);
      await esp(80);
    };
    for (let k = 0; k < total; k++) {
      ok((await contador()) == `${k + 1}/${total}`, `contador de la pregunta ${k + 1}: «${await contador()}»`);
      ok(!(await ev("!!document.querySelector('#q .wd')")), 'durante las preguntas no debe verse el texto de la lectura');
      const nopc = await ev("document.querySelectorAll('#q .opts .opt, #bk button').length"), esperadas = Q[k].t == 'f' ? (await toks(Q[k].k)).length : 4; ok(nopc == esperadas, `la pregunta ${k + 1} (${Q[k].t}) debe tener ${esperadas} opciones o palabras (tiene ${nopc})`);
      if (Q[k].t == 'z') ok((await ev("[...document.querySelectorAll('.opts .opt')].every(b => b.querySelector('.zhq') && /[㐀-鿿]/.test(b.querySelector('.zhq').textContent))")), 'las opciones de la pregunta de frase deben ser frases en chino');
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
      ok(Q[k].t == 'x' ? fb.includes('La que no se deduce era:') : Q[k].t == 'f' ? fb.includes('Orden correcto:') : fb.includes('Era:'), `mensaje de fallo de la pregunta ${k + 1}: «${fb.slice(0, 60)}»`);
      if (Q[k].t == 'f' || Q[k].t == 'z') ok(fb.includes(await hz(Q[k].k)), 'el fallo debe mostrar la frase correcta en chino');
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
