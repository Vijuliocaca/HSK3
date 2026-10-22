// Repertorio de personajes que cuentan las lecturas. Cada lectura indica quién la cuenta en su 6.º campo (ver lecturas.js).
// n: nombre que se ve · rasgos: para escribir historias a su medida (no se muestra en la app)
// El resto describe el dibujo del avatar (avatarSVG en index.html): piel, pelo (color y estilo: corto | cayetano | cresta | despeinado | undercut | rizado | largo | flequillo), ropa, fondo, gafas, corbata, patron (puntos | sol | diagonal | cuadros | cruces | tablero | olas | montanas: adorno del fondo) y extra (gato | gatogris | auriculares | flor | placa | estetoscopio | ajedrez | balon | pesa | baloncesto | libro; se pueden juntar con «+»: accesorios propios). El nombre puede llevar tildes y un apellido. voz: { tono (0.5-1.6), vel (0.8-1.2, multiplica la velocidad del ajuste), n }: tono y velocidad propios y, si el móvil tiene varias voces chinas, la n-ésima; dos personas que hablan juntas deben llevar n de distinta paridad (así suenan distinto aunque el móvil solo tenga dos voces).
// Rasgos opcionales de dibujo: ojos: 'almendrados' (ojos más estrechos y algo levantados), estilo de pelo 'calvo' (solo unos mechones), pecas (true), barba (true), bigote (true), perilla (true), coleta (true), pendientes (color), cejas ('gruesas' | 'finas' | 'arqueadas') y gorro (color); en el Año Nuevo chino, la Fiesta de los Faroles y el Medio Otoño el avatar lleva un adorno de temporada (adornoFiesta en index.html).
// Para añadir a alguien: una entrada nueva aquí y su id en el 6.º campo de las lecturas que cuente.
self.PERSONAJES = {
  payolink: { n: 'Payolink', rasgos: 'Tiene un gato. Intolerante a la lactosa (no toma leche ni lácteos).',
    piel: '#f1caa6', pelo: '#1d1612', estilo: 'corto', ropa: '#6b5b95', fondo: '#d8e9ee', patron: 'puntos', extra: 'gato', voz: { tono: 1.15, vel: 1, n: 0 } },
  samu: { n: 'Samu', rasgos: 'Le encanta la sandía.',
    perilla: true, piel: '#7a4a31', pelo: '#1d1612', estilo: 'rizado', ropa: '#c0562a', fondo: '#f1dfb8', patron: 'sol', extra: 'auriculares', voz: { tono: 0.8, vel: 0.95, n: 2 } },
  yuyue: { n: 'YuYue', rasgos: 'Es china. Le gusta el KFC.',
    pendientes: '#f5c84c', cejas: 'finas', piel: '#f2d3b6', pelo: '#1d1612', estilo: 'calvo', ojos: 'almendrados', ropa: '#3c7d6a', fondo: '#f3d9d6', patron: 'diagonal', extra: 'flor', voz: { tono: 1.3, vel: 1.05, n: 1 } },
  binhao: { n: 'BinHao', rasgos: 'Le encanta su trabajo.',
    cejas: 'gruesas', piel: '#e9c3a0', pelo: '#2a211c', estilo: 'corto', ojos: 'almendrados', ropa: '#34495e', fondo: '#dfe3ec', gafas: 'cuadradas', corbata: true, patron: 'cuadros', extra: 'placa', voz: { tono: 0.9, vel: 1, n: 3 } },
  teo: { n: 'Téo', rasgos: 'Es médico. Hace mucho deporte y escalada.',
    cejas: 'arqueadas', piel: '#e8c19b', pelo: '#3a2a1e', estilo: 'corto', ropa: '#e9eef2', fondo: '#d6ecf0', patron: 'cruces', extra: 'estetoscopio', voz: { tono: 0.85, vel: 0.9, n: 4 } },
  carlos: { n: 'Carlos Cordero', rasgos: 'Juega al ajedrez y al fútbol.',
    bigote: true, piel: '#f0cfae', pelo: '#b58a5c', estilo: 'cayetano', ropa: '#2f4f3e', fondo: '#e7e0cf', patron: 'tablero', extra: 'ajedrez+balon', voz: { tono: 0.95, vel: 0.9, n: 7 } },
  laura: { n: 'Laura', rasgos: 'Es política, tiene un gato y va al gimnasio. A veces dice «bo bo bo».',
    pendientes: '#f5c84c', cejas: 'arqueadas', piel: '#efc9a8', pelo: '#4a2c1c', estilo: 'largo', ropa: '#7a2f4a', fondo: '#efe0e6', corbata: true, patron: 'diagonal', extra: 'gatogris+pesa', voz: { tono: 1.2, vel: 1.1, n: 5 } },
  lucia: { n: 'Lucía', rasgos: 'Es de Asturias y va al gimnasio.',
    coleta: true, pendientes: '#c0c7cf', piel: '#f3d2b5', pelo: '#a97b50', estilo: 'flequillo', ropa: '#2b5d8a', fondo: '#d9e6f2', patron: 'olas', extra: 'pesa', voz: { tono: 1.1, vel: 1, n: 9 } },
  chiki: { n: 'Chiki', rasgos: 'Juega al fútbol, tiene un gato y es bajito.',
    cejas: 'finas', piel: '#e2b48c', pelo: '#c1440e', estilo: 'undercut', ropa: '#c23b3b', fondo: '#dcefd6', patron: 'diagonal', extra: 'gato+balon', voz: { tono: 1.35, vel: 1.15, n: 6 } },
  guidozcos: { n: 'Guidozcos', rasgos: 'Juega al baloncesto y al rugby. Es alto y matemático.',
    perilla: true, piel: '#f3dcc8', pelo: '#d9b45a', estilo: 'cresta', ropa: '#e98a1f', fondo: '#f6e3c7', patron: 'puntos', extra: 'baloncesto+pi', voz: { tono: 0.75, vel: 0.95, n: 11 } },
  anto: { n: 'Anto', rasgos: 'Es un chico (hombre). Estudia mucho y vive en la montaña.',
    cejas: 'gruesas', piel: '#f0cdb0', pelo: '#1d1612', estilo: 'despeinado', ropa: '#6b7f3a', fondo: '#dfe9e0', gafas: true, patron: 'montanas', extra: 'libro', voz: { tono: 1.05, vel: 0.9, n: 8 } },
};
