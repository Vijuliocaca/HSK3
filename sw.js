// ponytail: cache-first; al cambiar archivos, sube el numero de version para que se actualicen
const V = 'hsk3-v4', CDN = 'hsk3-cdn', FILES = ['./', 'index.html', 'palabras.js', 'ajustes.js', 'nuevo1.js', 'nuevo2.js', 'nuevo2b.js', 'nuevo3a.js', 'nuevo3b.js', 'nuevo3c.js', 'frases3a.js', 'frases3b.js', 'frases3c.js', 'frases3d.js', 'manifest.json', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k != V && k != CDN).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method != 'GET') return;
  // trazos (Hanzi Writer): se guardan al verlos la primera vez para que funcionen sin internet
  if (new URL(e.request.url).origin != location.origin) return e.respondWith(caches.open(CDN).then(c => c.match(e.request).then(r => r || fetch(e.request).then(n => { c.put(e.request, n.clone()); return n; }))));
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
