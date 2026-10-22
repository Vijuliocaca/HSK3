// Control de Edge/Chrome sin ventana por el protocolo de depuración, para las pruebas con navegador real (teclado.js, lecturas.js).
// lanzar() abre la app en una copia temporal, con cuadros de diálogo y voz anulados y el progreso de ejemplo de pantallas-lista.js.
const fs = require('fs'), os = require('os'), path = require('path'), cp = require('child_process');
const { PREPARAR } = require('./pantallas-lista'), RAIZ = path.join(__dirname, '..');
const candidatos = [process.env.BROWSER, 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/microsoft-edge'].filter(Boolean);
const esp = ms => new Promise(r => setTimeout(r, ms));

async function lanzar({ ancho } = {}) {
  const navegador = candidatos.find(p => fs.existsSync(p));
  if (!navegador) return null;
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'hsk-cdp-')), perfil = fs.mkdtempSync(path.join(os.tmpdir(), 'hsk-perfil-'));
  fs.readdirSync(RAIZ).filter(f => /\.(js|json|html|png)$/.test(f)).forEach(f => fs.copyFileSync(path.join(RAIZ, f), path.join(dir, f)));
  if (ancho) fs.writeFileSync(path.join(dir, 'marco.html'), `<!doctype html><body style="margin:0"><iframe id=f src="index.html" style="width:${ancho}px;height:800px;border:0"></iframe></body>`);
  const proceso = cp.spawn(navegador, ['--headless=new', '--disable-gpu', ...(process.env.CI ? ['--no-sandbox', '--disable-dev-shm-usage'] : []), '--remote-debugging-port=0', `--user-data-dir=${perfil}`, 'about:blank'], { stdio: 'ignore' });
  let puerto; for (let i = 0; i < 60 && !puerto; i++) { try { puerto = fs.readFileSync(path.join(perfil, 'DevToolsActivePort'), 'utf8').split(/\r?\n/)[0]; } catch { } await esp(250); }
  if (!puerto) { proceso.kill(); throw new Error('el navegador no abrió el puerto de depuración'); }
  let pagina; for (let i = 0; i < 40 && !pagina; i++) { try { pagina = (await (await fetch(`http://127.0.0.1:${puerto}/json/list`)).json()).find(t => t.type == 'page'); } catch { } await esp(250); }
  const ws = new WebSocket(pagina.webSocketDebuggerUrl); await new Promise(r => ws.onopen = r);
  let id = 0; const pend = new Map();
  ws.onmessage = m => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
  const cmd = (method, params = {}) => new Promise(r => { const n = ++id; pend.set(n, r); ws.send(JSON.stringify({ id: n, method, params })); });
  const ev = async js => { const r = await cmd('Runtime.evaluate', { expression: js, returnByValue: true, awaitPromise: true }); if (r.result.exceptionDetails) throw new Error(JSON.stringify(r.result.exceptionDetails).slice(0, 240)); return r.result.result.value; };
  await cmd('Page.enable'); await cmd('Page.navigate', { url: 'file:///' + dir.replace(/\\/g, '/') + '/index.html' }); for (let i = 0; i < 60; i++) { await esp(250); try { if (await ev("typeof S == 'object' && typeof avatarSVG == 'function' && document.readyState == 'complete'")) break; } catch { } } // espera a que la app esté cargada (con la máquina ocupada 1,5 s no bastaba)
  await ev('window.confirm = () => true; window.alert = () => { }; window.prompt = () => "Lista"; Object.defineProperty(window, "speechSynthesis", { configurable: true, value: { cancel() { }, speak() { } } }); 1');
  await ev(PREPARAR);
  const tecla = async (key, code, vk, extra = {}) => { for (const type of ['rawKeyDown', 'keyUp']) await cmd('Input.dispatchKeyEvent', { type, key, code, windowsVirtualKeyCode: vk, ...extra }); };
  // clic real sobre el primer elemento que coincida con el selector (y con el texto exacto, si se indica); devuelve si lo encontró
  const clic = (sel, txt) => ev(`(() => { const e = [...document.querySelectorAll(${JSON.stringify(sel)})].find(e => ${txt === undefined ? 'true' : `e.textContent.trim() === ${JSON.stringify(txt)}`}); if (!e) return false; e.click(); return true; })()`);
  const cerrar = () => new Promise(r => { try { ws.close(); } catch { } proceso.kill(); setTimeout(() => { try { fs.rmSync(dir, { recursive: true, force: true }); fs.rmSync(perfil, { recursive: true, force: true }); } catch { } r(); }, 800); });
  return { ev, cmd, esp, tecla, clic, cerrar, navegador };
}
module.exports = { lanzar, esp };
