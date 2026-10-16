// ponytail: cache-first; al cambiar archivos, sube el numero de version para que se actualicen
const V = 'hsk3-v3', FILES = ['./', 'index.html', 'palabras.js', 'ajustes.js', 'nuevo1.js', 'nuevo2.js', 'nuevo2b.js', 'nuevo3a.js', 'nuevo3b.js', 'nuevo3c.js', 'manifest.json', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k != V).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
