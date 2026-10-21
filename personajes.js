// Repertorio de personajes que cuentan las lecturas. Cada lectura indica quién la cuenta en su 6.º campo (ver lecturas.js).
// n: nombre que se ve · rasgos: para escribir historias a su medida (no se muestra en la app)
// El resto describe el dibujo del avatar (avatarSVG en index.html): piel, pelo (color y estilo: corto | rizado | largo | flequillo), ropa, fondo, gafas, corbata, patron (puntos | sol | diagonal | cuadros: adorno del fondo) y extra (gato | auriculares | flor | placa: accesorio propio).
// Para añadir a alguien: una entrada nueva aquí y su id en el 6.º campo de las lecturas que cuente.
self.PERSONAJES = {
  payolink: { n: 'Payolink', rasgos: 'Tiene un gato. Intolerante a la lactosa (no toma leche ni lácteos).',
    piel: '#f1caa6', pelo: '#3b7a8c', estilo: 'corto', ropa: '#6b5b95', fondo: '#d8e9ee', patron: 'puntos', extra: 'gato' },
  samu: { n: 'Samu', rasgos: 'Le encanta la sandía.',
    piel: '#7a4a31', pelo: '#1d1612', estilo: 'rizado', ropa: '#c0562a', fondo: '#f1dfb8', patron: 'sol', extra: 'auriculares' },
  yuyue: { n: 'YuYue', rasgos: 'Es china. Le gusta el KFC.',
    piel: '#f2d3b6', pelo: '#1d1612', estilo: 'flequillo', ropa: '#3c7d6a', fondo: '#f3d9d6', patron: 'diagonal', extra: 'flor' },
  binhao: { n: 'BinHao', rasgos: 'Le encanta su trabajo.',
    piel: '#e9c3a0', pelo: '#2a211c', estilo: 'corto', ropa: '#34495e', fondo: '#dfe3ec', gafas: true, corbata: true, patron: 'cuadros', extra: 'placa' },
};
