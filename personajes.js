// Repertorio de personajes que cuentan las lecturas. Cada lectura indica quién la cuenta en su 6.º campo (ver lecturas.js).
// n: nombre que se ve · genero: 'h' (hombre), 'm' (mujer) o 'f' (femboy) · rasgos: para escribir historias a su medida (no se muestra en la app)
// El resto describe el dibujo del avatar (avatarSVG en index.html): piel, pelo (color y estilo: corto | cayetano | cresta | despeinado | undercut | mullet | rizado | largo | flequillo), ropa, fondo, gafas, corbata, patron (puntos | sol | diagonal | cuadros | cruces | tablero | olas | montanas: adorno del fondo) y extra (gato | gatogris | auriculares | flor | placa | estetoscopio | ajedrez | balon | pesa | baloncesto | libro | pi | guitarra | violin | teclado | microfono | flauta | tambor | tenis | badminton | pingpong | bate | camara | pintura | portatil | mando | cafe | mochila | cocinero | espejo | maletin | perro | planta | trofeo | skate; se pueden juntar con «+»: accesorios propios). El nombre puede llevar tildes y un apellido. voz: { tono (0.5-1.6), vel (0.8-1.2, multiplica la velocidad del ajuste), n }: tono y velocidad propios y, si el móvil tiene varias voces chinas, la n-ésima; dos personas que hablan juntas deben llevar n de distinta paridad (así suenan distinto aunque el móvil solo tenga dos voces).
// Rasgos opcionales de dibujo: ojos: 'almendrados' (ojos más estrechos y algo levantados) o 'rasgados' (aún más rasgados), estilo de pelo 'calvo' (solo unos mechones), pecas (true), barba (true), bigote (true), perilla (true), coleta (true), pendientes (color), cejas ('gruesas' | 'finas' | 'arqueadas' | 'rectas' | 'enfadadas' | 'tristes' | 'sorprendidas' | 'peludas' | 'unidas'), cejaColor, forma ('ovalada' | 'cuadrada' | 'corazon'), gafas ('redondas' | 'cuadradas' | 'gruesas' | 'ovaladas' | 'gato' | 'aviador' | 'media' | 'sol') con gafasColor, y pecasY/coloreteY/lunarY/narizY (-4 a 4: suben o bajan ese rasgo) y gorro (color); en el Año Nuevo chino, la Fiesta de los Faroles y el Medio Otoño el avatar lleva un adorno de temporada (adornoFiesta en index.html).
// Para añadir a alguien: una entrada nueva aquí y su id en el 6.º campo de las lecturas que cuente.
// Qué rasgos de dibujo admite cada género (h hombre, m mujer, f femboy); lo vigila tests/datos.js. Los no listados (cejas, ojos, gafas, pecas, gorro, coleta, extras, colores) valen para todos. El «mullet» es el de hombre.
self.GENERO_RASGOS = {
  estilo: { h: ['corto', 'cayetano', 'cresta', 'despeinado', 'undercut', 'mullet', 'rizado', 'calvo', 'medio'], m: ['largo', 'medio', 'flequillo', 'rizado', 'corto', 'despeinado', 'afro', 'mono', 'bob', 'pixie', 'raya', 'rapado', 'tupe', 'ondulado', 'bunes', 'coletas', 'trenzas'], f: ['largo', 'medio', 'flequillo', 'rizado', 'corto', 'despeinado', 'undercut', 'calvo', 'afro', 'mono', 'bob', 'pixie', 'raya', 'rapado', 'tupe', 'ondulado', 'bunes', 'coletas', 'trenzas'] },
  solo: { barba: ['h'], bigote: ['h'], perilla: ['h'], pendientes: ['m', 'f'] } };
self.PERSONAJES = {
  payolink: { n: 'Payolink', genero: 'h', rasgos: 'Tiene un gato. Intolerante a la lactosa (no toma leche ni lácteos).',
    piel: '#f1caa6', pelo: '#1d1612', estilo: 'mullet', ropa: '#6b5b95', fondo: '#d8e9ee', patron: 'puntos', extra: 'gato', voz: { tono: 1.15, vel: 1, n: 0 } },
  samu: { n: 'Samu', genero: 'h', rasgos: 'Le encanta la sandía.',
    perilla: true, piel: '#7a4a31', pelo: '#1d1612', estilo: 'rizado', ropa: '#c0562a', fondo: '#f1dfb8', patron: 'sol', extra: 'auriculares', voz: { tono: 0.8, vel: 0.95, n: 2 } },
  yuyue: { n: 'YuYue', genero: 'f', rasgos: 'Es china. Le gusta el KFC.',
    pendientes: '#f5c84c', cejas: 'finas', piel: '#f2d3b6', pelo: '#1d1612', estilo: 'calvo', ojos: 'almendrados', ropa: '#3c7d6a', fondo: '#f3d9d6', patron: 'diagonal', extra: 'flor', voz: { tono: 1.3, vel: 1.05, n: 1 } },
  binhao: { n: 'BinHao', genero: 'h', rasgos: 'Le encanta su trabajo.',
    cejas: 'gruesas', piel: '#e9c3a0', pelo: '#2a211c', estilo: 'corto', ojos: 'almendrados', ropa: '#34495e', fondo: '#dfe3ec', gafas: 'cuadradas', corbata: true, patron: 'cuadros', extra: 'placa', voz: { tono: 0.9, vel: 1, n: 3 } },
  teo: { n: 'Téo', genero: 'h', rasgos: 'Es médico. Hace mucho deporte y escalada.',
    cejas: 'arqueadas', piel: '#e8c19b', pelo: '#3a2a1e', estilo: 'corto', ropa: '#e9eef2', fondo: '#d6ecf0', patron: 'cruces', extra: 'estetoscopio', voz: { tono: 0.85, vel: 0.9, n: 4 } },
  carlos: { n: 'Carlos Cordero', genero: 'h', rasgos: 'Juega al ajedrez y al fútbol.',
    bigote: true, piel: '#f0cfae', pelo: '#b58a5c', estilo: 'cayetano', ropa: '#2f4f3e', fondo: '#e7e0cf', patron: 'tablero', extra: 'ajedrez+balon', voz: { tono: 0.95, vel: 0.9, n: 7 } },
  laura: { n: 'Laura', genero: 'm', rasgos: 'Es política, tiene un gato y va al gimnasio. A veces dice «bo bo bo».',
    pendientes: '#f5c84c', cejas: 'arqueadas', piel: '#efc9a8', pelo: '#4a2c1c', estilo: 'largo', ropa: '#7a2f4a', fondo: '#efe0e6', corbata: true, patron: 'diagonal', extra: 'gatogris+pesa', voz: { tono: 1.2, vel: 1.1, n: 5 } },
  lucia: { n: 'Lucía', genero: 'm', rasgos: 'Es de Asturias y va al gimnasio.',
    coleta: true, pendientes: '#c0c7cf', piel: '#f3d2b5', pelo: '#a97b50', estilo: 'flequillo', ropa: '#2b5d8a', fondo: '#d9e6f2', patron: 'olas', extra: 'pesa', voz: { tono: 1.1, vel: 1, n: 9 } },
  chiki: { n: 'Chiki', genero: 'h', rasgos: 'Juega al fútbol, tiene un gato y es bajito.',
    cejas: 'finas', piel: '#e2b48c', pelo: '#c1440e', estilo: 'undercut', ropa: '#c23b3b', fondo: '#dcefd6', patron: 'diagonal', extra: 'gato+balon', voz: { tono: 1.35, vel: 1.15, n: 6 } },
  guidozcos: { n: 'Guidozcos', genero: 'h', rasgos: 'Juega al baloncesto y al rugby. Es alto y matemático.',
    perilla: true, piel: '#f3dcc8', pelo: '#d9b45a', estilo: 'cresta', ropa: '#e98a1f', fondo: '#f6e3c7', patron: 'puntos', extra: 'baloncesto+pi', voz: { tono: 0.75, vel: 0.95, n: 11 } },
  anto: { n: 'Anto', genero: 'h', rasgos: 'Es un chico (hombre). Estudia mucho y vive en la montaña.',
    cejas: 'gruesas', piel: '#f0cdb0', pelo: '#1d1612', estilo: 'despeinado', ropa: '#6b7f3a', fondo: '#dfe9e0', gafas: true, patron: 'montanas', extra: 'libro', voz: { tono: 1.05, vel: 0.9, n: 8 } },
  chana: { n: 'Chanawanalaiguanaquefumamarihuana', genero: 'm', rasgos: 'Le gusta bailar. Es novia de Chiki y tiene una gata. Su madre es médica.',
    cejas: 'arqueadas', pendientes: '#f5c84c', piel: '#f1cfae', pelo: '#6b4426', estilo: 'largo', ropa: '#d1587a', fondo: '#f6dfe8', patron: 'sol', extra: 'gato', voz: { tono: 1.25, vel: 1.05, n: 10 } },
  kevin: { n: 'Kevin', genero: 'f', rasgos: 'Es Dentista, le gustan los videojuegos, fumar y los niños.',
    piel: '#f1caa6', pelo: '#1d1612', estilo: 'mono', ropa: '#e4a52c', fondo: '#2e3748', ojoColor: '#2b1d14', gafas: 'aviador', pendientes: '#f5c84c', patron: 'olas', cejaColor: '#1d1612', boca: 'labios', colorete: true, lunar: true, lunarY: 1, coloreteY: -0.5, corbata: true, cuello: 'v', forma: 'cuadrada', ojos: 'almendrados', voz: { tono: 0.5, vel: 1, n: 12 } }
};
