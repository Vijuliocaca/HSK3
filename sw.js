// ponytail: primero red (si hay internet siempre ves lo ultimo) y cache como respaldo sin conexion.
// Al cambiar archivos sube la version V para que se renueve la cache.
const V = 'hsk3-v53', CDN = 'hsk3-cdn', FILES = ['./', 'index.html', 'palabras.js', 'ajustes.js', 'nuevo1.js', 'nuevo2.js', 'nuevo2b.js', 'nuevo3a.js', 'nuevo3b.js', 'nuevo3c.js', 'nuevo5a.js', 'nuevo5b.js', 'nuevo5c.js', 'nuevo5d.js', 'nuevo5e.js', 'nuevo5f.js', 'frases5a.js', 'frases5b.js', 'frases5c.js', 'frases5d.js', 'frases5e.js', 'frases5f.js', 'frases5g.js', 'frases5h.js', 'nuevo4a.js', 'nuevo4b.js', 'nuevo4c.js', 'nuevo4d.js', 'nuevo4e.js', 'frases4a.js', 'frases4b.js', 'frases4c.js', 'frases4d.js', 'frases12a.js', 'frases12b.js', 'frases12c.js', 'frases12d.js', 'frases3a.js', 'frases3b.js', 'frases3c.js', 'frases3d.js', 'temas.js', 'gramatica1.js', 'gramatica2.js', 'gramatica3.js', 'canciones.js', 'dialogos.js', 'lecturas.js', 'chengyu.js', 'relaciones.js', 'fiestas.js', 'cultura.js', 'manifest.json', 'icon-192.png', 'icon-512.png'];
// cache: 'reload' evita que el navegador guarde copias viejas al instalar
self.addEventListener('install', e => e.waitUntil(caches.open(V).then(c => Promise.all(FILES.map(f => c.add(new Request(f, { cache: 'reload' }))))).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k != V && k != CDN).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method != 'GET') return;
  // trazos (Hanzi Writer): se guardan al verlos la primera vez para que funcionen sin internet
  if (new URL(e.request.url).origin != location.origin) return e.respondWith(caches.open(CDN).then(c => c.match(e.request).then(r => r || fetch(e.request).then(n => { c.put(e.request, n.clone()); return n; }))));
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(n => { const k = n.clone(); caches.open(V).then(c => c.put(e.request, k)); return n; }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
