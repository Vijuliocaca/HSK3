// Trazos sin internet en un navegador real: el service worker guarda los datos (trazos/0-9.json) y, con el servidor apagado,
// la pantalla de trazos de una palabra dibuja el carácter y el ejercicio de dibujar tiene datos.
const fs = require('fs'), os = require('os'), path = require('path'), http = require('http');
const { lanzar } = require('./cdp'), RAIZ = path.join(__dirname, '..');
let problemas = 0;
const ok = (c, m) => { if (!c) { problemas++; console.log('  ✗', m); } };
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.png': 'image/png' };
(async () => {
  const b = await lanzar();
  if (!b) { console.log('trazos: no encuentro Edge ni Chrome (variable BROWSER). Prueba omitida.'); process.exit(0); }
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'hsk-trz-')); fs.readdirSync(RAIZ).filter(f => /\.(js|json|html|png)$/.test(f)).forEach(f => fs.copyFileSync(path.join(RAIZ, f), path.join(dir, f)));
  fs.cpSync(path.join(RAIZ, 'trazos'), path.join(dir, 'trazos'), { recursive: true });
  const srv = http.createServer((q, r) => {
    const f = path.join(dir, q.url == '/' ? 'index.html' : decodeURIComponent(q.url.split('?')[0]));
    if (!f.startsWith(dir) || !fs.existsSync(f)) { r.statusCode = 404; return r.end(); }
    r.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); r.end(fs.readFileSync(f));
  });
  await new Promise(r => srv.listen(0, '127.0.0.1', r)); const url = `http://127.0.0.1:${srv.address().port}/index.html`;
  try {
    const { ev, cmd, esp } = b, espera = async (js, ms = 15000) => { for (let t = 0; t < ms; t += 250) { try { if (await ev(js)) return true; } catch { } await esp(250); } return false; };
    await cmd('Page.navigate', { url }); await esp(800);
    ok(await espera('!!navigator.serviceWorker.controller'), 'el service worker no controla la página');
    ok(await espera("caches.open('hsk3-trazos').then(c => c.keys()).then(k => k.length == 10)"), 'el service worker no guardó los 10 trozos de trazos');
    srv.closeAllConnections(); srv.close(); // sin internet a partir de aquí
    await cmd('Page.navigate', { url }); await esp(800);
    ok(await espera("typeof strokes == 'function' && W.length > 0"), 'la app no arranca sin conexión');
    const id = await ev("W.findIndex(w => w.h == '爱') >= 0 ? W.findIndex(w => w.h == '爱') : 0");
    await ev(`strokes(${id})`);
    ok(await espera("document.querySelectorAll('#sk0 svg path').length > 3"), 'sin conexión la pantalla de trazos no dibuja el carácter');
    ok(!(await ev("/no se pudieron|sin datos/.test(document.querySelector('#skm0').textContent)")), 'la pantalla de trazos avisa de que faltan datos');
  } catch (e) { problemas++; console.log('  ✗ error en la prueba:', e.message); }
  try { srv.close(); } catch { } await b.cerrar(); try { fs.rmSync(dir, { recursive: true, force: true }); } catch { }
  console.log(problemas ? `trazos: ${problemas} problemas` : 'trazos: OK');
  process.exit(problemas ? 1 : 0);
})();
