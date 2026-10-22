// Actualización de la app en un navegador real, con un servidor local que imita a GitHub Pages (ETag y max-age=600):
//  1) sin versión nueva no sale el aviso «Hay una versión nueva»;
//  2) al publicarse una versión nueva el aviso sale solo, sin esperar a que el service worker lo instale;
//  3) el service worker actualiza revalidando (los archivos que no cambiaron no se vuelven a descargar);
//  4) «Actualizar» deja la app en la versión nueva y sin aviso.
const fs = require('fs'), os = require('os'), path = require('path'), http = require('http'), crypto = require('crypto');
const { lanzar } = require('./cdp'), RAIZ = path.join(__dirname, '..');
let problemas = 0;
const ok = (c, m) => { if (!c) { problemas++; console.log('  ✗', m); } };
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.png': 'image/png' };
(async () => {
  const b = await lanzar();
  if (!b) { console.log('actualizar: no encuentro Edge ni Chrome (variable BROWSER). Prueba omitida.'); process.exit(0); }
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'hsk-web-')); fs.readdirSync(RAIZ).filter(f => /\.(js|json|html|png)$/.test(f)).forEach(f => fs.copyFileSync(path.join(RAIZ, f), path.join(dir, f)));
  let reg = []; const srv = http.createServer((q, r) => {
    const f = path.join(dir, q.url == '/' ? 'index.html' : decodeURIComponent(q.url.split('?')[0]));
    if (!f.startsWith(dir) || !fs.existsSync(f)) { r.statusCode = 404; return r.end(); }
    const cuerpo = fs.readFileSync(f), et = '"' + crypto.createHash('md5').update(cuerpo).digest('hex') + '"', st = q.headers['if-none-match'] == et ? 304 : 200;
    reg.push({ u: q.url, st }); r.writeHead(st, { ETag: et, 'Cache-Control': 'max-age=600', 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); r.end(st == 304 ? undefined : cuerpo);
  });
  await new Promise(r => srv.listen(0, '127.0.0.1', r)); const url = `http://127.0.0.1:${srv.address().port}/index.html`;
  try {
    const { ev, cmd, esp } = b, espera = async (js, ms = 12000) => { for (let t = 0; t < ms; t += 250) { try { if (await ev(js)) return true; } catch { } await esp(250); } return false; };
    await cmd('Page.navigate', { url }); await esp(500);
    ok(await espera("typeof APP_V == 'string' && !!navigator.serviceWorker.controller || (navigator.serviceWorker.ready.then(() => false), false)", 15000) || await espera("typeof APP_V == 'string' && document.readyState == 'complete'"), 'la app no cargó por http');
    await espera('!!navigator.serviceWorker.controller', 15000);
    const vieja = await ev('APP_V'); await esp(4500);
    ok(await ev("document.querySelector('#upd').hidden"), 'sin versión nueva no debe salir el aviso');
    // se «publica» una versión nueva: cambia sw.js (y, más tarde, index.html)
    reg = []; fs.writeFileSync(path.join(dir, 'sw.js'), fs.readFileSync(path.join(dir, 'sw.js'), 'utf8').replace(/const V = '[^']+'/, "const V = 'hsk3-v9999'"));
    await ev("document.dispatchEvent(new Event('visibilitychange'))");
    ok(await espera("!document.querySelector('#upd').hidden", 8000), 'al publicarse una versión nueva debe salir el aviso');
    // el service worker nuevo se instala revalidando: casi nada se vuelve a descargar
    await esp(4000); const pedidos = reg.filter(x => !/sw\.js/.test(x.u)), nuevos = pedidos.filter(x => x.st == 200);
    ok(pedidos.length > 30, 'el service worker nuevo no revalidó los archivos (' + pedidos.length + ' peticiones)'); ok(nuevos.length <= 3, `el service worker volvió a descargar ${nuevos.length} archivos sin cambios: ${nuevos.slice(0, 3).map(x => x.u).join(', ')}`);
    // «Actualizar»: la app queda en la versión nueva
    fs.writeFileSync(path.join(dir, 'index.html'), fs.readFileSync(path.join(dir, 'index.html'), 'utf8').replace(`const APP_V = '${vieja}'`, "const APP_V = 'hsk3-v9999'"));
    await ev("document.querySelector('#upd button').click()");
    ok(await espera("typeof APP_V == 'string' && APP_V == 'hsk3-v9999' && document.readyState == 'complete'", 12000), 'tras «Actualizar» la app debe ser la versión nueva');
    await esp(4500); ok(await ev("document.querySelector('#upd').hidden"), 'ya en la versión nueva no debe salir el aviso');
  } catch (e) { problemas++; console.log('  ✗ error en la prueba:', e.message); }
  srv.close(); await b.cerrar(); try { fs.rmSync(dir, { recursive: true, force: true }); } catch { }
  console.log(problemas ? `actualizar: ${problemas} problemas` : 'actualizar: OK');
  process.exit(problemas ? 1 : 0);
})();
