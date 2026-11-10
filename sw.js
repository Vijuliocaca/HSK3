// Primero la caché: la app abre al instante también con wifi sin datos. La caché solo cambia entera, con cada versión nueva (install).
// Al cambiar archivos sube la version V para que se renueve la cache.
const V = 'hsk3-v255', CDN = 'hsk3-cdn', TZ = 'hsk3-trazos', AU = 'hsk3-audio', FILES = ['./', 'paquete.js', 'trazos/hanzi-writer.min.js', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png'];
// cache: 'no-cache' revalida cada archivo con la red (sin copias viejas del navegador) pero, si no cambió, no vuelve a descargarlo: actualizar ya no baja los ~2 MB enteros
self.addEventListener('install', e => e.waitUntil(caches.open(V).then(c => Promise.all(FILES.map(f => c.add(new Request(f, { cache: 'no-cache' }))))).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k != V && k != CDN && k != TZ && k != AU).map(k => caches.delete(k)))).then(() => self.clients.claim())));
// datos de trazos (trazos/N.json): no cambian, así que primero la caché y se bajan una vez (los pide la página al arrancar)
const TRZ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => `trazos/${i}.json`);
self.addEventListener('message', e => { if (e.data == 'trazos') e.waitUntil(caches.open(TZ).then(async c => { for (const f of TRZ) if (!await c.match(f)) await c.add(f).catch(() => {}); })); });
self.addEventListener('fetch', e => {
  if (e.request.method != 'GET') return;
  if (/[/]audio[/][0-9a-f]+[.]mp3$/.test(e.request.url)) return e.respondWith(caches.open(AU).then(c => c.match(e.request).then(r => r || fetch(e.request).then(n => { if (n.status == 200) c.put(e.request, n.clone()); return n; })))); // audio pregrabado: se baja una vez y se guarda aparte
  if (/\/trazos\/\d\.json$/.test(e.request.url)) return e.respondWith(caches.open(TZ).then(c => c.match(e.request).then(r => r || fetch(e.request).then(n => { if (n.ok) c.put(e.request, n.clone()); return n; }))));
  // trazos (Hanzi Writer): se guardan al verlos la primera vez para que funcionen sin internet
  if (new URL(e.request.url).origin != location.origin) return e.respondWith(caches.open(CDN).then(c => c.match(e.request).then(r => r || fetch(e.request).then(n => { c.put(e.request, n.clone()); return n; }))));
  if (e.request.cache == 'no-store') return; // el aviso de versión nueva pide sw.js siempre a la red
  // lo que no está guardado (o tras «Actualizar», que borra la caché) se pide a la red y se guarda
  e.respondWith(caches.open(V).then(c => c.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request, { cache: 'no-cache' }).then(n => { if (n.ok) c.put(e.request, n.clone()); return n; }))));
});
