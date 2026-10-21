// Botón atrás con el HISTORIAL REAL de Edge/Chrome (history.back() dispara popstate igual que la flecha de Android):
// cada pulsación sube un nivel (lectura → lista de lecturas → inicio), el historial queda limpio al llegar al inicio y desde ahí no hay a dónde volver
// (en el móvil, ahí la app se cierra). Complementa a atras.js, que lo simula en Node. Necesita el navegador.
const { lanzar } = require('./cdp'), { PANTALLAS } = require('./pantallas-lista');
let problemas = 0;
const ok = (cond, msg) => { if (!cond) { problemas++; console.log('  ✗', msg); } return !!cond; };

(async () => {
  const b = await lanzar();
  if (!b) { console.log('atras-navegador: no encuentro Edge ni Chrome (variable BROWSER). Prueba omitida.'); process.exit(0); }
  try {
    const { ev, esp } = b;
    const indice = () => ev('navigation.currentEntry.index'), enInicio = () => ev("document.body.innerText.includes('Meta de hoy')"), enLista = () => ev("document.body.innerText.includes('Con pinyin')");
    const atras = async () => { await ev('history.back()'); await esp(120); };
    await ev('home()'); await esp(100);
    ok((await indice()) == 0 && (await enInicio()), 'la app debe empezar en el inicio con una sola entrada de historial');

    console.log('1) Lectura → lista de lecturas → inicio');
    await ev('lecturas()'); await ev('lectura(0)'); const e0 = await indice(); await ev('lectura(0, 2)'); await esp(100);
    ok(e0 >= 2 && (await indice()) == e0, `cada pantalla nueva añade entradas, pero cambiar de frase no (índice ${e0} → ${await indice()})`);
    await ev('window.__push = 0; const pp = history.pushState.bind(history); history.pushState = (...a) => { window.__push++; return pp(...a); }'); // atrás nunca debe añadir entradas (Chrome del móvil omite las que se añaden sin tocar la pantalla)
    await atras(); ok(await enLista(), 'desde una lectura, atrás debe llevar a la lista de lecturas'); ok((await indice()) >= 1, 'la lista debe conservar su entrada para el siguiente atrás'); ok((await ev('window.__push')) == 0, 'atrás no debe añadir entradas al historial');
    await atras(); ok(await enInicio(), 'desde la lista de lecturas, atrás debe llevar al inicio'); ok((await indice()) == 0 && !(await ev('navigation.canGoBack')), 'en el inicio no debe quedar historial al que volver (ahí la app se cierra)');

    console.log('2) Preguntas → lista de lecturas');
    await ev('lectura(0)'); await ev('lectQ(0)'); await esp(100); await atras(); ok(await enLista(), 'desde las preguntas, atrás debe llevar a la lista de lecturas'); await atras(); ok(await enInicio(), 'y de ahí al inicio');

    console.log('3) Examen: atrás pide confirmación');
    await ev('exam(1)'); await esp(100); const ex = await indice(); await ev('window.confirm = () => false'); await atras();
    ok(!(await enInicio()) && (await indice()) == ex, 'si rechazas la confirmación debes seguir en el examen, con su entrada de historial');
    await ev('window.confirm = () => true'); await atras(); ok(await enInicio(), 'si aceptas, atrás debe llevar al inicio');

    console.log('4) Todas las pantallas: subir de nivel hasta el inicio, sin bucles y sin cerrar la app');
    for (const [nombre, js] of PANTALLAS.filter(p => p[0] != 'inicio')) {
      await ev('home()'); await esp(40); await ev(js); await esp(40);
      if ((await indice()) < 1) { ok(false, `«${nombre}»: no añade entrada de historial; atrás cerraría la app`); continue; }
      let pasos = 0; while (!(await enInicio()) && pasos < 6) { if (!(await ev('navigation.canGoBack'))) break; await atras(); pasos++; }
      ok(await enInicio(), `«${nombre}»: atrás no llega al inicio tras ${pasos} pasos`); ok((await indice()) == 0, `«${nombre}»: queda historial de más al llegar al inicio (índice ${await indice()})`);
    }
  } catch (e) { problemas++; console.log('  ✗ error en la prueba:', e.message); }
  await b.cerrar();
  console.log(problemas ? `atras-navegador: ${problemas} problemas` : 'atras-navegador: OK (historial real)');
  process.exit(problemas ? 1 : 0);
})();
