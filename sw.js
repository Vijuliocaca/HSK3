// ponytail: primero red (si hay internet siempre ves lo ultimo, con tope de 4 s) y cache como respaldo sin conexion.
// Al cambiar archivos sube la version V para que se renueve la cache.
const V = 'hsk3-v128', CDN = 'hsk3-cdn', FILES = ['./', 'index.html', 'iconos.js', 'palabras.js', 'ajustes.js', 'nuevo1.js', 'nuevo2.js', 'nuevo2b.js', 'nuevo3a.js', 'nuevo3b.js', 'nuevo3c.js', 'nuevo5a.js', 'nuevo5b.js', 'nuevo5c.js', 'nuevo5d.js', 'nuevo5e.js', 'nuevo5f.js', 'nuevo6a.js', 'nuevo6b.js', 'nuevo6c.js', 'nuevo6d.js', 'nuevo6e.js', 'nuevo7a.js', 'nuevo7b.js', 'nuevo8a.js', 'nuevo8b.js', 'frases5a.js', 'frases5b.js', 'frases5c.js', 'frases5d.js', 'frases5e.js', 'frases5f.js', 'frases5g.js', 'frases5h.js', 'frases6a.js', 'frases6b.js', 'frases6c.js', 'frases6d.js', 'frases6e.js', 'frases7a.js', 'frases7b.js', 'frases8a.js', 'frases8b.js', 'nuevo4a.js', 'nuevo4b.js', 'nuevo4c.js', 'nuevo4d.js', 'nuevo4e.js', 'frases4a.js', 'frases4b.js', 'frases4c.js', 'frases4d.js', 'frases12a.js', 'frases12b.js', 'frases12c.js', 'frases12d.js', 'frases3a.js', 'frases3b.js', 'frases3c.js', 'frases3d.js', 'temas.js', 'gramatica1.js', 'gramatica2.js', 'gramatica3.js', 'canciones.js', 'dialogos.js', 'dialogos6.js', 'dialogos7.js', 'dialogos8.js', 'lecturas.js', 'lecturas6.js', 'lecturas7.js', 'lecturas8.js', 'lecturas9b.js', 'lecturas9a.js', 'gramatica4.js', 'temas6.js', 'nuevo8j.js', 'nuevo8i.js', 'nuevo8h.js', 'nuevo8g.js', 'nuevo8f.js', 'nuevo8e.js', 'nuevo8d.js', 'nuevo8c.js', 'nuevo7f.js', 'nuevo7e.js', 'nuevo7d.js', 'nuevo7c.js', 'chengyu.js', 'relaciones.js', 'fiestas.js', 'cultura.js', 'personajes.js', 'manifest.json', 'icon-192.png', 'icon-512.png'];
// cache: 'reload' evita que el navegador guarde copias viejas al instalar
self.addEventListener('install', e => e.waitUntil(caches.open(V).then(c => Promise.all(FILES.map(f => c.add(new Request(f, { cache: 'reload' }))))).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k != V && k != CDN).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method != 'GET') return;
  // trazos (Hanzi Writer): se guardan al verlos la primera vez para que funcionen sin internet
  if (new URL(e.request.url).origin != location.origin) return e.respondWith(caches.open(CDN).then(c => c.match(e.request).then(r => r || fetch(e.request).then(n => { c.put(e.request, n.clone()); return n; }))));
  // primero la red; si tarda más de 4 s (conexión mala) se sirve la copia guardada y la red sigue actualizando la caché
  e.respondWith(new Promise(res => {
    const guardada = () => caches.match(e.request, { ignoreSearch: true }), t = setTimeout(() => guardada().then(r => r && res(r)), 4000);
    fetch(e.request, { cache: 'no-cache' }).then(n => { clearTimeout(t); const k = n.clone(); caches.open(V).then(c => c.put(e.request, k)); res(n); }).catch(() => { clearTimeout(t); guardada().then(r => res(r || Response.error())); });
  }));
});
