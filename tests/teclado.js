// Prueba con teclado real en Edge/Chrome (protocolo de depuración): en cada campo de texto de la app se puede teclear y BORRAR,
// y los que deben abrirse enfocados (para que el teclado del móvil salga solo) lo hacen. Detecta, por ejemplo, un manejador
// onkeydown que devuelve false y cancela la tecla Borrar. Necesita el navegador (como desbordes.js).
const { lanzar } = require('./cdp');

// campos a probar: [nombre, código que abre la pantalla, selector del campo, ¿debe abrirse ya enfocado?]
const CAMPOS = [
  ['escribir pinyin (juego)', "session('write')", '#in', true],
  ['buscador de vocabulario', "list('all')", '#s', false],
  ['nombre de una lista nueva', "listas(); nuevaLista();", '#nln', true],
];
let problemas = 0;

(async () => {
  const b = await lanzar();
  if (!b) { console.log('teclado: no encuentro Edge ni Chrome (variable BROWSER). Prueba omitida.'); process.exit(0); }
  try {
    const { ev, cmd, esp } = b, q = s => JSON.stringify(s);
    const borrar = async () => { for (const type of ['rawKeyDown', 'keyUp']) await cmd('Input.dispatchKeyEvent', { type, key: 'Backspace', code: 'Backspace', windowsVirtualKeyCode: 8, commands: ['deleteBackward'] }); };
    // control: el propio simulador de teclado debe poder borrar en un campo normal (si no, la prueba no vale)
    await ev("document.body.insertAdjacentHTML('beforeend', '<input id=ctl style=position:fixed;top:0>'); document.querySelector('#ctl').focus(); 1");
    await cmd('Input.insertText', { text: 'abcde' }); await borrar(); await borrar();
    const ctl = await ev("document.querySelector('#ctl').value");
    if (ctl != 'abc') { console.log(`✗ control: el simulador de teclado no borra en un campo normal (queda «${ctl}»); la prueba no es fiable`); problemas++; }
    await ev("document.querySelector('#ctl').remove(); 1");

    for (const [nombre, abrir, sel, autofoco] of CAMPOS) {
      try {
        await ev(abrir + '; 1'); await esp(300);
        if (!await ev(`!!document.querySelector(${q(sel)})`)) throw new Error('no aparece el campo ' + sel);
        const enfocado = await ev(`document.activeElement === document.querySelector(${q(sel)})`);
        if (autofoco && !enfocado) throw new Error('el campo no se abre enfocado (en el móvil no saldría el teclado)');
        if (!enfocado) await ev(`document.querySelector(${q(sel)}).focus(); 1`); // solo si no debe abrirse enfocado
        await cmd('Input.insertText', { text: 'nihao' }); const a = await ev(`document.querySelector(${q(sel)}).value`);
        await borrar(); await borrar(); const v2 = await ev(`document.querySelector(${q(sel)}).value`);
        await ev(`document.querySelector(${q(sel)}).select(); 1`); await borrar(); const c = await ev(`document.querySelector(${q(sel)}).value`);
        if (a == 'nihao' && v2 == 'nih' && c == '') console.log(`✓ ${nombre}: se puede teclear y borrar`);
        else { problemas++; console.log(`✗ ${nombre}: teclear «nihao» → «${a}», 2 × Borrar → «${v2}» (esperado «nih»), seleccionar todo + Borrar → «${c}» (esperado vacío)`); }
      } catch (e) { problemas++; console.log(`✗ ${nombre}: ${e.message}`); }
    }
  } catch (e) { problemas++; console.log('✗ teclado:', e.message); }
  await b.cerrar();
  console.log(problemas ? `teclado: ${problemas} problemas` : 'teclado: OK');
  process.exit(problemas ? 1 : 0);
})();
