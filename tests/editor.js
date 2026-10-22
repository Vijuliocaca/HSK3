// Editor de personajes en un navegador real: deshacer/rehacer, comparar con el original, plantillas, compartir/importar (con códigos manipulados) y accesorios sin pisarse.
const { lanzar } = require('./cdp');
let problemas = 0;
const ok = (c, m) => { if (!c) { problemas++; console.log('  ✗', m); } };
(async () => {
  const b = await lanzar();
  if (!b) { console.log('editor: no encuentro Edge ni Chrome (variable BROWSER). Prueba omitida.'); process.exit(0); }
  try {
    const { ev, esp } = b;
    await ev('crear()'); await esp(100);
    // deshacer / rehacer
    ok(await ev("document.querySelector('#edund').disabled"), 'al empezar no hay nada que deshacer');
    await ev("edSet('estilo', 'tupe'); edSet('pelo', '#ff0000')");
    ok(!(await ev("document.querySelector('#edund').disabled")), 'tras un cambio se puede deshacer');
    await ev('edDeshacer()'); ok((await ev('ED.pelo')) == '#1d1612' && (await ev('ED.estilo')) == 'tupe', 'deshacer quita el último cambio');
    await ev('edDeshacer()'); ok((await ev('ED.estilo')) == 'corto', 'deshacer otra vez quita el anterior');
    await ev('edRehacer(); edRehacer()'); ok((await ev('ED.pelo')) == '#ff0000' && (await ev('ED.estilo')) == 'tupe', 'rehacer repone los dos cambios');
    ok(await ev("document.querySelector('#edred').disabled"), 'sin nada que rehacer el botón queda desactivado');
    // un deslizador (cambios seguidos) es un solo paso
    await ev('crear()'); await ev("edSet('pecas', true); edNum('pecasY', 1); edNum('pecasY', 2); edNum('pecasY', 3)");
    await ev('edDeshacer()'); ok((await ev('ED.pecasY')) === undefined && (await ev('ED.pecas')) === true, 'una ráfaga de deslizador se deshace de una vez');
    // comparar con el original
    await ev("crear('anto')"); await ev("edSet('estilo', 'pixie')");
    const normal = await ev("document.querySelector('#edprev').innerHTML"); await ev('edComparar()');
    ok((await ev("document.querySelector('#edprev').innerHTML")) != normal && (await ev("document.querySelector('#edcmp').getAttribute('aria-label')")) == 'Ver mi cambio', 'comparar enseña el original');
    await ev("edSet('estilo', 'raya')"); ok(!(await ev('ED_COMP')), 'un cambio nuevo vuelve a la vista normal');
    // plantillas: ropa y complementos, no la cara
    await ev("crear('anto')"); const antes = await ev('({ piel: ED.piel, estilo: ED.estilo, forma: ED.forma, ojoColor: ED.ojoColor })');
    await ev("edPlantilla('Médico')"); ok((await ev('ED.cuello')) == 'bata' && (await ev('ED.extra')) == 'estetoscopio' && !(await ev('ED.gafas')), 'la plantilla Médico cambia ropa y complementos');
    ok(JSON.stringify(await ev('({ piel: ED.piel, estilo: ED.estilo, forma: ED.forma, ojoColor: ED.ojoColor })')) == JSON.stringify(antes), 'la plantilla no toca cara ni pelo');
    for (const n of await ev('Object.keys(PLANTILLAS)')) { await ev(`edPlantilla('${n}')`); const e = await ev('ED.extra || ""'); const lado = e.split('+').filter(x => x && !['auriculares', 'cocinero', 'estetoscopio', 'mochila'].includes(x)).length; ok(lado <= 2, `plantilla ${n}: más de 2 accesorios de lado`); }
    // compartir e importar
    await ev("crear('kevin')"); await ev('edCompartir()'); const cod = await ev("document.querySelector('#edcom').value"), kev = await ev('JSON.stringify(ED)');
    ok(cod.startsWith('HSKP1:'), 'el código empieza por HSKP1:');
    await ev('crear()'); await ev(`document.querySelector('#edtabs .chip').click(); document.querySelector('#edimp').value = ${JSON.stringify(cod)}; edImportar()`);
    ok(JSON.stringify(await ev('ED')) == JSON.stringify(JSON.parse(kev)) || (await ev('ED.n')) == 'Kevin' && (await ev('ED.gafas')) == 'aviador' && (await ev('ED.estilo')) == 'mono', 'al importar queda el mismo personaje');
    // códigos manipulados: nada de texto suelto en el dibujo
    const malo = 'HSKP1:' + Buffer.from(JSON.stringify({ n: '<img src=x onerror=alert(1)>', pelo: 'red" onload="alert(1)', piel: '#f1caa6', estilo: 'inventado', ojos: '"><script>', extra: 'guitarra+<b>', pecasY: 99, genero: 'h', barba: 'x' })).toString('base64');
    await ev('crear()'); await ev(`document.querySelector('#edimp') || edTab('Perfil'); document.querySelector('#edimp').value = ${JSON.stringify(malo)}; edImportar()`);
    const svg = await ev('avatarSVG(ED)'); ok(!/onload|onerror|<script|<img|alert/.test(svg), 'un código manipulado no mete código en el dibujo');
    ok((await ev('ED.pelo')) == '#1d1612' && (await ev('ED.estilo')) == 'corto' && !(await ev('ED.pecasY')) && (await ev('ED.extra')) == 'guitarra', 'los valores fuera de las opciones se descartan');
    await ev('crear()'); await ev("document.querySelector('#edimp').value = 'esto no es un código'; edImportar()"); ok((await ev("document.querySelector('#edaviso').textContent")).includes('no es válido'), 'un código inválido avisa');
  } catch (e) { problemas++; console.log('  ✗ error en la prueba:', e.message); }
  await b.cerrar();
  console.log(problemas ? `editor: ${problemas} problemas` : 'editor: OK');
  process.exit(problemas ? 1 : 0);
})();
