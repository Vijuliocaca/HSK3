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
    const { ev, clic, esp, tecla } = b, hanzi = () => ev("[...document.querySelectorAll('#conv .b:last-child .wp')].map(w => w.querySelector('.wd').lastChild.textContent + (w.querySelector('.pn') ? w.querySelector('.pn').textContent : '')).join('')");
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
    ok(!(await visible('#conv .wd small')), 'con Pinyin desactivado no debe verse el pinyin');
    ok(await visible('#conv .b .tr'), 'con Español activado debe verse la traducción');
    await ev('lecturas()'); await clic(AYUDAS, 'Con pinyin'); await clic(AYUDAS, 'En español'); await esp(60);
    await clic('.mode'); await esp(80);
    ok(await visible('#conv .wd small'), 'con Pinyin activado debe verse el pinyin'); ok(!(await visible('#conv .b .tr')), 'con Español desactivado no debe verse la traducción');
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
      ok((await ev("document.querySelector('#conv .b:last-child .tr').textContent")) == tr, `traducción de la frase ${j + 1}`);
      ok(await ev("!!document.querySelector('.cab .yo .avatar svg')"), 'falta la persona arriba a la derecha'); ok((await ev("document.querySelectorAll('#conv .b').length")) == j + 1, `deben verse ${j + 1} frases (se ven ${await ev("document.querySelectorAll('#conv .b').length")})`);
      ok(await ev("[...document.querySelectorAll('#conv .b')].every((b, k) => b.dataset.k == k)"), 'las frases deben ir en orden');
      ok((await ev("document.querySelector('#nx').textContent")) == (j == n - 1 ? 'Ir a las preguntas' : 'Siguiente'), `texto del botón en la frase ${j + 1}`);
      ok((await ev("!!document.querySelector('#ot')")) == (j == n - 1), `botón «Escuchar toda la lectura» en la frase ${j + 1}`);
      if (j < n - 1) { await clic('#nx'); await esp(60); }
    }
    // la barra de pestañas no debe tapar el botón Siguiente
    ok((await ev("(() => { const nv = document.querySelector('#nav'); return !nv || nv.hidden || getComputedStyle(nv).display == 'none'; })()")), 'la barra de pestañas debe estar oculta durante la lectura');
    // tecla Intro = Siguiente
    await ev('lectura(0)'); await esp(100); await tecla('Enter', 'Enter', 13); await esp(80);
    ok((await contador()) == `2/${n}`, 'la tecla Intro no pasó a la frase siguiente');
    // tocar una palabra abre su ficha
    await clic('#conv .wd'); await esp(60); ok((await ev("document.querySelector('#fi').textContent.trim().length")) > 3, 'al tocar una palabra no sale su ficha');

    // la ficha de la palabra sale pegada a la palabra tocada (debajo, o encima si abajo no cabe), sobre el resto de la pantalla, sin empujar nada, y se cierra al tocar fuera
    const ficha = j => ev(`(() => { const w = document.querySelector('#conv .b[data-k="${j}"] .wp:nth-child(2) .wd').getBoundingClientRect(), f = document.querySelector('#fi').getBoundingClientRect(), W = document.documentElement.clientWidth, c = document.querySelector('#conv').getBoundingClientRect(); return { debajo: f.top - w.bottom, encima: w.top - f.bottom, izq: f.left, der: W - f.right, alto: f.height, pos: getComputedStyle(document.querySelector('#fi')).position, conv: c.height, sel: document.querySelectorAll('#conv .wd.sel').length }; })()`);
    await ev('lectura(0, 2)'); await esp(450); const c0 = await ev("document.querySelector('#conv').getBoundingClientRect().height");
    await clic('#conv .b[data-k="2"] .wp:nth-child(2) .wd'); await esp(100); let fi = await ficha(2);
    ok(fi.alto > 20 && fi.pos == 'absolute', 'la ficha debe verse y flotar sobre la pantalla (position absolute)'); ok((fi.debajo >= 0 && fi.debajo < 30) || (fi.encima >= 0 && fi.encima < 30), `la ficha debe quedar pegada a la palabra (debajo ${Math.round(fi.debajo)} px, encima ${Math.round(fi.encima)} px)`);
    ok(fi.izq >= -0.5 && fi.der >= -0.5, `la ficha no debe salirse de la pantalla (izq ${Math.round(fi.izq)}, der ${Math.round(fi.der)})`); ok(fi.conv == c0, 'la ficha no debe empujar la conversación'); ok(fi.sel == 1, 'la palabra tocada debe quedar marcada');
    ok((await ev("document.querySelector('#fi').textContent")).includes('—'), 'la ficha debe llevar la traducción');
    await clic('.cab .tit'); await esp(60); ok((await ev("document.querySelector('#fi').textContent.trim().length")) == 0 && (await ev("document.querySelectorAll('#conv .wd.sel').length")) == 0, 'al tocar fuera la ficha debe cerrarse');
    await clic('#conv .b[data-k="2"] .wp:nth-child(3) .wd'); await esp(60); await clic('#conv .b[data-k="2"] .wp:nth-child(1) .wd'); await esp(60); ok((await ev("document.querySelectorAll('#conv .wd.sel').length")) == 1 && (await ficha(2)).alto > 20, 'al tocar otra palabra solo debe quedar la última');
    await ev(`lectura(0, ${n - 1})`); await esp(450); await ev('pararHabla()'); await clic('#conv .b:last-child .wp:nth-child(2) .wd'); await esp(100); fi = await ficha(n - 1);
    ok((fi.debajo >= 0 || fi.encima >= 0) && fi.izq >= -0.5 && fi.der >= -0.5, `en la última frase la ficha no debe tapar la palabra ni salirse (debajo ${Math.round(fi.debajo)}, encima ${Math.round(fi.encima)})`);
    await clic('.cab .tit'); await esp(60);
    // 2b) La persona, arriba a la derecha; la voz ilumina cada palabra (sin la puntuación); tocar a la persona repite la frase; con la lectura terminada se escucha entera
    console.log('2b) Personaje, voz y palabra iluminada');
    await ev('lectura(0, 1)'); await esp(450);
    const g = await ev(`(() => { const r = s => document.querySelector(s).getBoundingClientRect(), a = r('#av'), d = r('#conv'), W = document.documentElement.clientWidth; return { derecha: W - a.right, izq: a.left, encima: a.bottom <= d.top + 1, arriba: a.top, ancho: a.width }; })()`);
    ok(g.derecha >= 0 && g.derecha < 30 && g.izq > 195, `la persona debe estar arriba a la derecha (separación del borde derecho: ${Math.round(g.derecha)} px)`); ok(g.encima && g.arriba < 160, 'la persona debe estar arriba, encima de la conversación'); ok(g.ancho >= 70, `la persona debe verse bien (mide ${Math.round(g.ancho)} px)`);
    ok((await ev("document.querySelector('.nombre').textContent")) == 'Payolink', 'el nombre del personaje debe ser Payolink');
    ok(!(await ev("[...document.querySelectorAll('.chip')].some(e => e.textContent.includes('Escuchar otra vez'))")), 'no debe quedar el botón antiguo de escuchar');
    const frase = await ev('LECT[0].ls[1].z.join("")'), nPal = await ev('LECT[0].ls[1].z.length');
    // voz de prueba: apunta lo que se dice, avisa de que empieza y termina y, si se pide, da avisos de palabra; un observador anota qué palabra está iluminada
    const voz = modo => ev(`(() => { window.__voz = []; window.__luz = []; S.set.rate = 4; window.__salto = iniPalabras(LECT[0].ls[1].z)[3];
      Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: { cancel() { }, speak(u) { window.__voz.push(u.text); setTimeout(() => u.onstart && u.onstart(), 5);
        ${modo == 'bordes' ? "setTimeout(() => u.onboundary && u.onboundary({ name: 'word', charIndex: window.__salto }), 20);" : ''} setTimeout(() => u.onend && u.onend(), 700); } } });
      new MutationObserver(() => { const k = [...document.querySelectorAll('#conv .b[data-k="1"] .wd')].findIndex(w => w.classList.contains('on')); if (k != window.__luz[window.__luz.length - 1]) window.__luz.push(k); }).observe(document.querySelector('#conv'), { attributes: true, subtree: true, attributeFilter: ['class'] }); })()`);
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
    await ev('lectura(0, 1)'); await esp(450); await voz('estimado'); await clic('#av'); await esp(60); await clic('#conv .wd'); await esp(80);
    ok((await ev("document.querySelectorAll('#conv .wd.on').length")) == 0 && !(await ev("document.querySelector('#av').classList.contains('habla')")), 'al tocar una palabra debe apagarse la iluminación de la frase');
    // la palabra iluminada se ve de verdad (fondo distinto del normal)
    ok(await ev("(async () => { const w = document.querySelector('#conv .wd'), a = getComputedStyle(w).backgroundColor; w.classList.add('on'); await new Promise(r => setTimeout(r, 300)); const b = getComputedStyle(w).backgroundColor; w.classList.remove('on'); return a != b; })()"), 'la palabra iluminada no cambia de aspecto');

    ok(await ev("[...document.querySelectorAll('#conv .wd')].every(w => !/[，。！？、]/.test(w.lastChild.textContent))"), 'la puntuación no debe ir dentro de la palabra que se ilumina');
    ok((await ev("document.querySelectorAll('#conv .pn').length")) > 0 && (await ev("[...document.querySelectorAll('#conv .pn')].every(p => getComputedStyle(p).backgroundColor == 'rgba(0, 0, 0, 0)')")), 'la puntuación debe verse aparte y sin fondo');
    // lectura terminada: «Escuchar toda la lectura» y tocar a la persona dicen todas las frases, en orden
    await ev(`lectura(0, ${n - 1})`); await esp(450); await voz('estimado'); await ev('window.__voz = []');
    const todas = await ev('LECT[0].ls.map(l => l.z.join(""))');
    await clic('#ot'); await esp(n * 760 + 300); const oidas = await ev('window.__voz');
    ok(oidas.join('|') == todas.join('|'), `«Escuchar toda la lectura» debe decir todas las frases en orden (dijo ${oidas.length} de ${todas.length})`);
    ok(!(await ev("document.querySelector('#av').classList.contains('habla')")) && (await ev("document.querySelectorAll('#conv .wd.on').length")) == 0, 'al acabar la lectura no debe quedar nada iluminado');
    await ev('window.__voz = []'); await clic('#av'); await esp(150); ok((await ev('window.__voz')).join('|') == todas[0], 'con la lectura terminada, tocar a la persona debe empezar a leerla entera'); await ev('pararHabla()');

    // 2c) Caracteres grandes (y algo menores si la frase es larga) y persona redonda
    console.log('2c) Tamaño y círculo');
    const px = s => ev(`parseFloat(getComputedStyle(document.querySelector(${JSON.stringify(s)})).fontSize)`);
    await ev('lectura(0, 1)'); await esp(450); const corto = await px('#conv .b:last-child .wd');
    ok(corto >= 33, `los caracteres de una frase corta deben ser grandes (≥ 33 px; miden ${corto} px)`);
    await ev('lectura(LECT.findIndex(d => d.t.includes("El KFC en China")), 4)'); await esp(450); const largo = await px('#conv .b:last-child .wd');
    ok(largo < corto && largo >= 24, `una frase larga usa caracteres algo menores pero legibles (${largo} px frente a ${corto} px)`);
    await ev('lectura(0, 1)'); await esp(450);
    // persona redonda: sin el rectángulo de «tocar» del móvil y con el foco de teclado también redondo
    const raiz = (await b.cmd('DOM.getDocument', {})).result.root.nodeId, nodo = (await b.cmd('DOM.querySelector', { nodeId: raiz, selector: '#av' })).result.nodeId;
    await b.cmd('CSS.enable'); await b.cmd('CSS.forcePseudoState', { nodeId: nodo, forcedPseudoClasses: ['focus-visible'] });
    const est = await ev(`(() => { const s = getComputedStyle(document.querySelector('#av')); return { radio: s.borderRadius, contorno: s.outlineStyle, resalte: s.webkitTapHighlightColor }; })()`);
    ok(est.radio == '50%', `con el foco de teclado la persona debe seguir siendo un círculo (border-radius: ${est.radio})`);
    ok(est.contorno != 'none', 'con el foco de teclado debe verse un contorno');
    ok(/rgba\(0, 0, 0, 0\)|transparent/.test(est.resalte), `al tocar a la persona no debe salir el rectángulo de resalte del móvil (resalte: ${est.resalte})`);

    // conversación de dos: cada persona en su lado (la primera a la izquierda, la segunda a la derecha) y sus frases en ese mismo lado
    const dos = await ev("LECT.findIndex(d => d.p == 'yuyue+payolink')"); await ev(`lectura(${dos}, 3)`); await esp(450); await ev('pararHabla()');
    const lados = await ev(`(() => { const r = s => document.querySelector(s).getBoundingClientRect(), W = document.documentElement.clientWidth, b = [...document.querySelectorAll('#conv .b')].map(e => e.getBoundingClientRect()); return { a1: r('#av').right / W, a2: r('#av2').left / W, izq: b[0].left, der: b[1].left, izqR: b[0].right, derR: b[1].right, v1: b[0].left < b[2].left + 1 && b[1].left > b[0].left, W }; })()`);
    ok(lados.a1 < 0.5 && lados.a2 > 0.5, `la 1.ª persona debe ir a la izquierda y la 2.ª a la derecha (${lados.a1.toFixed(2)} / ${lados.a2.toFixed(2)})`);
    ok(lados.der > lados.izq && lados.derR > lados.izqR && lados.v1, `las frases de cada persona deben ir en su lado (izq ${Math.round(lados.izq)}-${Math.round(lados.izqR)}, der ${Math.round(lados.der)}-${Math.round(lados.derR)})`);
    // 3) Preguntas: acertando
    console.log('3) Preguntas: respuestas correctas');
    const R0 = await ev("(() => { const ws = ['猫', '小', '鱼'].map(h => byH.get(h)).filter(Boolean); ws.forEach(w => { S.known[w.id] = 1; S.w[w.id] = { b: 3, s: 7, o: 3, f: 0, l: Date.now() - 6 * DIA, d: Date.now() + DIA, t: '2026-01-01' }; }); return ws.length ? retencion(S.w[ws[0].id]) : -1; })()"); ok(R0 > 0, 'faltan palabras de prueba en el vocabulario');
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
    ok((await ev("document.querySelector('#app').innerHTML")).includes('De paso has refrescado <b>') && !(await ev("document.querySelector('#app').innerHTML")).includes('refrescado <b>0'), 'al acertar la lectura debe avisar de las palabras refrescadas'); ok((await ev("retencion(S.w[byH.get('猫').id])")) > R0, 'la retención de las palabras de la lectura debe subir');

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
