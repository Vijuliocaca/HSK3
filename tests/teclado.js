// Prueba con teclado real en Edge/Chrome (protocolo de depuración): en cada campo de texto de la app se puede teclear y BORRAR.
// Detecta, por ejemplo, un manejador onkeydown que devuelve false y cancela la tecla Borrar. Necesita el navegador (como desbordes.js).
const fs = require('fs'), os = require('os'), path = require('path'), cp = require('child_process');
const { PREPARAR } = require('./pantallas-lista'), RAIZ = path.join(__dirname, '..');
const candidatos = [process.env.BROWSER, 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/microsoft-edge'].filter(Boolean);
const navegador = candidatos.find(p => fs.existsSync(p));
if (!navegador) { console.log('teclado: no encuentro Edge ni Chrome (variable BROWSER). Prueba omitida.'); process.exit(0); }

// campos a probar: [nombre, código que abre la pantalla, selector del campo]
const CAMPOS = [
  ['escribir pinyin (juego)', "session('write')", '#in'],
  ['buscador de vocabulario', "list('all')", '#s'],
  ['nombre de una lista nueva', "listas(); nuevaLista();", '#nln'],
];
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'hsk-teclado-')), perfil = fs.mkdtempSync(path.join(os.tmpdir(), 'hsk-perfil-'));
fs.readdirSync(RAIZ).filter(f => /\.(js|json|html|png)$/.test(f)).forEach(f => fs.copyFileSync(path.join(RAIZ, f), path.join(dir, f)));
const proceso = cp.spawn(navegador, ['--headless=new', '--disable-gpu', '--remote-debugging-port=0', `--user-data-dir=${perfil}`, 'about:blank'], { stdio: 'ignore' });
const esp = ms => new Promise(r => setTimeout(r, ms));
let problemas = 0;

(async () => {
  let puerto;
  for (let i = 0; i < 60 && !puerto; i++) { try { puerto = fs.readFileSync(path.join(perfil, 'DevToolsActivePort'), 'utf8').split(/\r?\n/)[0]; } catch { } await esp(250); }
  if (!puerto) throw new Error('el navegador no abrió el puerto de depuración');
  let pagina; for (let i = 0; i < 40 && !pagina; i++) { try { pagina = (await (await fetch(`http://127.0.0.1:${puerto}/json/list`)).json()).find(t => t.type == 'page'); } catch { } await esp(250); }
  const ws = new WebSocket(pagina.webSocketDebuggerUrl); await new Promise(r => ws.onopen = r);
  let id = 0; const pend = new Map();
  ws.onmessage = m => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
  const cmd = (method, params = {}) => new Promise(r => { const n = ++id; pend.set(n, r); ws.send(JSON.stringify({ id: n, method, params })); });
  const ev = async js => { const r = await cmd('Runtime.evaluate', { expression: js, returnByValue: true, awaitPromise: true }); if (r.result.exceptionDetails) throw new Error(JSON.stringify(r.result.exceptionDetails).slice(0, 200)); return r.result.result.value; };
  const borrar = async () => { for (const type of ['rawKeyDown', 'keyUp']) await cmd('Input.dispatchKeyEvent', { type, key: 'Backspace', code: 'Backspace', windowsVirtualKeyCode: 8, commands: ['deleteBackward'] }); };

  // control: el propio simulador de teclado debe poder borrar en un campo normal (si no, la prueba no vale)
  await cmd('Page.enable'); await cmd('Page.navigate', { url: 'file:///' + dir.replace(/\\/g, '/') + '/index.html' }); await esp(1500);
  await ev('window.confirm = () => true; window.alert = () => { }; window.prompt = () => "Lista"; 1'); await ev(PREPARAR);
  await ev("document.body.insertAdjacentHTML('beforeend', '<input id=ctl style=position:fixed;top:0>'); document.querySelector('#ctl').focus(); 1");
  await cmd('Input.insertText', { text: 'abcde' }); await borrar(); await borrar();
  const ctl = await ev("document.querySelector('#ctl').value");
  if (ctl != 'abc') { console.log(`✗ control: el simulador de teclado no borra en un campo normal (queda «${ctl}»); la prueba no es fiable`); problemas++; }
  await ev("document.querySelector('#ctl').remove(); 1");

  for (const [nombre, abrir, sel] of CAMPOS) {
    try {
      await ev(abrir + '; 1'); await esp(300);
      if (!await ev(`!!document.querySelector(${JSON.stringify(sel)})`)) throw new Error('no aparece el campo ' + sel);
      await ev(`document.querySelector(${JSON.stringify(sel)}).focus(); 1`);
      await cmd('Input.insertText', { text: 'nihao' }); const a = await ev(`document.querySelector(${JSON.stringify(sel)}).value`);
      await borrar(); await borrar(); const b = await ev(`document.querySelector(${JSON.stringify(sel)}).value`);
      await ev(`document.querySelector(${JSON.stringify(sel)}).select(); 1`); await borrar(); const c = await ev(`document.querySelector(${JSON.stringify(sel)}).value`);
      const ok = a == 'nihao' && b == 'nih' && c == '';
      if (!ok) { problemas++; console.log(`✗ ${nombre}: teclear «nihao» → «${a}», 2 × Borrar → «${b}» (esperado «nih»), seleccionar todo + Borrar → «${c}» (esperado vacío)`); }
      else console.log(`✓ ${nombre}: se puede teclear y borrar`);
    } catch (e) { problemas++; console.log(`✗ ${nombre}: ${e.message}`); }
  }
  ws.close();
})().catch(e => { problemas++; console.log('✗ teclado:', e.message); }).finally(() => {
  proceso.kill();
  setTimeout(() => { try { fs.rmSync(dir, { recursive: true, force: true }); fs.rmSync(perfil, { recursive: true, force: true }); } catch { } console.log(problemas ? `teclado: ${problemas} problemas` : 'teclado: OK'); process.exit(problemas ? 1 : 0); }, 1000);
});
