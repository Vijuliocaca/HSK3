// Pantallas a recorrer: [nombre, código]. Las usan pantallas.js (Node, DOM simulado) y desbordes.js (Edge real).
// PREPARAR deja la app con progreso suficiente (palabras estudiadas, historial) para que las pantallas no salgan vacías.
const PREPARAR = `
  for (let i = 0; i < 60; i++) { S.known[i] = 1; S.w[i] = { b: i % 6, d: 0, o: 3, f: i % 4, t: '2000-01-01' }; }
  S.star[3] = 1; S.streak = 3; S.last = day(new Date());
  const dia = n => { const d = new Date(); d.setDate(d.getDate() + n); return day(d); }; // días de calendario (sumar 24 h falla con el cambio de hora)
  for (let i = 0; i < 20; i++) S.hist[dia(-i)] = { n: 25, ok: 20 };
  S.gram[GR[0].t] = 80; S.gram[GR[1].t] = 40; S.listas = { 'Mi lista': [W[0].h, W[1].h, W[2].h] };
  S.exam = { d: dia(20) }; S.exams.push({ d: '2026-01-01', lv: 1, s: [70, 70, 70] }); S.dial = {}; S.lect = {};`;
const PANTALLAS = [
  ['inicio', 'home()'], ['hoy', 'today()'], ['progreso', 'stats()'], ['logros', 'logros()'], ['ajustes', 'settings()'],
  ['examen (menú)', 'examMenu()'], ['lecciones', 'lessons()'], ['vocabulario', "list('all')"], ['estudiadas', "list('done')"],
  ['temas', 'temas()'], ['un tema', 'tema(0)'], ['gramática', 'gramatica()'], ['punto de gramática', 'gram(0)'],
  ['canciones', 'canciones()'], ['top 10 canciones', 'top10()'], ['top 10 películas', "cultura('pelis')"], ['top 10 series', "cultura('series')"], ['top 10 platos', "cultura('platos')"],
  ['lecturas', 'lecturas()'], ['una lectura (1.ª frase)', 'lectura(0)'], ['una lectura (frase intermedia)', 'lectura(0, 2)'], ['una lectura (última frase)', 'lectura(0, LECT[0].ls.length - 1)'],
  ['una lectura de HSK 5', 'lectura(LECT.length - 1)'], ['lectura de HSK 5 (última frase)', 'lectura(LECT.length - 1, LECT[LECT.length - 1].ls.length - 1)'],
  ['pregunta de lectura: elige', 'lectQ(0, 1)'], ['pregunta de lectura: la falsa', 'lectQ(0, 2)'], ['pregunta de lectura: ordenar', 'lectQ(0, 3)'],
  ['pregunta larga de HSK 5: elige', 'lectQ(LECT.length - 1, 0)'], ['pregunta larga de HSK 5: ordenar', 'lectQ(LECT.length - 1, 3)'],
  ['diálogos', 'dialogos()'], ['un diálogo', 'dialogo(0)'], ['fiestas', 'fiestas()'], ['mis listas', 'listas()'], ['una lista', 'lista(0)'],
  ['ficha de palabra', 'detail(0)'], ['entrenar tonos', 'tonos()'], ['cuestionario de diálogo', 'dialQ(0)'], ['cuestionario de lectura', 'lectQ(0)'],
  ['repaso de gramática', 'gramRev()'], ['práctica de gramática', 'gramEx(0)'],
  ['juego: elegir traducción', "session('choice')"], ['juego: tarjetas', "session('cards')"], ['juego: escuchar', "session('listen')"],
  ['juego: escribir pinyin', "session('write')"], ['juego: elegir hanzi', "session('hanzi')"], ['juego: elegir pinyin', "session('pinyin')"],
  ['juego: palabras difíciles', "go('hard')"], ['repaso mezclado', "session('mix')"],
];
module.exports = { PREPARAR, PANTALLAS };
