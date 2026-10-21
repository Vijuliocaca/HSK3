// Recorre las pantallas de la app (DOM simulado) y comprueba la lógica de lo que más se ha tocado: progreso, fechas, repaso, logros, ficheros generados.
const assert = require('assert'), { cargarApp } = require('./arnes'), { PREPARAR, PANTALLAS } = require('./pantallas-lista');
let fallos = 0, total = 0;
const en = 'const en = n => { const d = new Date(); d.setDate(d.getDate() + n); return day(d); };'; // día de calendario a n días de hoy
const t = (nombre, f) => { total++; try { f(); } catch (e) { fallos++; console.log('✗', nombre, '\n   ', (e.message || e).toString().split('\n')[0]); } };

// --- recorrido: ninguna pantalla lanza errores ni sale vacía ---
const app = cargarApp(); app.ev(PREPARAR);
PANTALLAS.forEach(([nombre, js]) => t('pantalla «' + nombre + '»', () => { app.els['#app'].innerHTML = ''; app.ev(js); assert(app.html().length > 40, 'la pantalla quedó vacía'); }));

// --- progreso guardado por hanzi (no por posición) ---
t('progreso: se guarda por hanzi y se recupera por hanzi', () => {
  const a = cargarApp(); a.ev('S.known[5] = 1; S.w[5] = { b: 2, d: 0 }; S.star[5] = 1; save()');
  const d = JSON.parse(a.storage.hsk3), h = a.ev('W[5].h');
  assert.strictEqual(d.v, 2); assert(d.known[h] && d.w[h] && d.star[h], 'no está indexado por hanzi');
  const b = cargarApp({ storage: a.storage }); assert.strictEqual(b.ev(`S.known[byH.get(${JSON.stringify(h)}).id]`), 1);
});
t('progreso: el formato antiguo (por posición) se migra al guardar', () => {
  const a = cargarApp({ storage: { hsk3: JSON.stringify({ known: { 5: 1 }, w: {}, lv: [1] }) } }); assert.strictEqual(a.ev('S.known[5]'), 1);
  a.ev('save()'); assert.strictEqual(JSON.parse(a.storage.hsk3).v, 2); assert(JSON.parse(a.storage.hsk3).known[a.ev('W[5].h')]);
});
t('progreso: una palabra que ya no está en la lista no se pierde', () => {
  const a = cargarApp({ storage: { hsk3: JSON.stringify({ v: 2, known: { '茶': 1, '不存在的词': 1 }, w: {}, lv: [1] }) } }); a.ev('save()');
  assert(JSON.parse(a.storage.hsk3).known['不存在的词'], 'se perdió');
});
t('copia de seguridad: exportar genera un JSON válido', () => {
  const a = cargarApp(); a.ev('S.known[1] = 1; exportar()');
  const j = JSON.parse(a.salida.blobs.pop().texto); assert.strictEqual(j.v, 2); assert(j.known && j.lv);
});

// --- fechas de las fiestas (comprobadas con fuentes; protege FIESTA_FIX) ---
t('fiestas: fechas de 2026 y 2027', () => {
  const a = cargarApp(), f = y => a.ev(`fiestaFechas(${y}).map(o => o.f.z + ' ' + o.d.toLocaleDateString('sv'))`);
  ['春节 2026-02-17', '元宵节 2026-03-03', '清明节 2026-04-05', '端午节 2026-06-19', '七夕 2026-08-19', '中秋节 2026-09-25', '重阳节 2026-10-18', '国庆节 2026-10-01',
    '除夕 2027-02-05', '春节 2027-02-06', '元宵节 2027-02-20', '腊八节 2027-01-15', '端午节 2027-06-09', '七夕 2027-08-08', '中秋节 2027-09-15', '重阳节 2027-10-08']
    .forEach(x => assert((x.includes('2026') ? f(2026) : f(2027)).includes(x), 'falta ' + x));
});
t('fiestas: la caché diaria da el mismo resultado', () => {
  const a = cargarApp(), sig = () => a.ev("fiestaProx().map(o => o.f.z + o.d.toLocaleDateString('sv') + o.n).join()");
  const x = sig(); assert(a.storage.hsk3f, 'no guardó la caché'); a.ev("FCACHE = { d: '', v: [] }"); assert.strictEqual(sig(), x);
});

// --- repaso, logros, plan de examen, listas ---
t('gramática: acierto aplaza el repaso, fallo lo deja para mañana', () => {
  const a = cargarApp(); a.ev('S.gram[GR[0].t] = 100; S.gram[GR[1].t] = 100; gramGrade(GR[0], true); gramGrade(GR[1], false)');
  assert.strictEqual(a.ev('S.gramR[GR[0].t].b'), 1); assert(a.ev('S.gramR[GR[1].t].d > eod()'), 'el fallo vuelve hoy'); assert.strictEqual(a.ev('gramDue().length'), 0);
});
t('logros: racha más larga y semanas con meta', () => {
  const a = cargarApp(); a.ev(en + ' [6, 5, 4, 3, 1].forEach(n => S.hist[en(-n)] = { n: 30, ok: 20 }); S.set.goal = 20');
  assert.strictEqual(a.ev('racha()'), 4); assert(a.ev('Object.keys(semanas()).length') >= 1);
});
t('examen: cuenta atrás y ritmo diario', () => {
  const a = cargarApp(); a.ev(en + ' S.exLv = 1; S.exam = { d: en(10) }');
  assert.strictEqual(a.ev('examDays()'), 10); assert(/Faltan 10 días/.test(a.ev('examCard()')));
  a.ev('S.exam = { d: en(-3) }'); assert.strictEqual(a.ev('examCard()'), '', 'una fecha pasada no debe mostrar la tarjeta');
});
t('lecciones: terminar una lección cuenta las palabras nuevas de hoy una sola vez', () => {
  const a = cargarApp(), pk = a.ev('LKEYS[1][0]'), n = a.ev(`PW[${JSON.stringify(pk)}].length`);
  a.ev(`studied(${JSON.stringify(pk)})`); a.ev(`studied(${JSON.stringify(pk)})`); assert.strictEqual(a.ev('S.newD.n'), n);
});
t('listas propias: crear, añadir y quitar una palabra', () => {
  const a = cargarApp(); a.ev('crearLista(null, "Viaje")'); assert.strictEqual(a.ev('JSON.stringify(Object.keys(S.listas))'), '["Viaje"]');
  a.ev('alternaLista(0, 7)'); assert.strictEqual(a.ev('S.listas["Viaje"].length'), 1); a.ev('alternaLista(0, 7)'); assert.strictEqual(a.ev('S.listas["Viaje"].length'), 0);
});
t('palabra del día: no cambia al estudiarla', () => {
  const a = cargarApp(), w = a.ev('wotd().h'); a.ev(`S.known[byH.get(${JSON.stringify(w)}).id] = 1`); assert.strictEqual(a.ev('wotd().h'), w);
});
t('lecturas: la ficha de una palabra muestra su significado (vocabulario o glosario)', () => {
  const a = cargarApp(); a.ev('lectura(0)'); a.ev('palabra(0, 0, 1)'); assert(/—\s*\S/.test(a.els['#fi'].innerHTML), 'ficha sin significado');
});
t('recordatorio: el .ics tiene la estructura de un calendario válido', () => {
  const a = cargarApp(); a.ev('recordatorio()'); const ics = a.salida.blobs.pop().texto;
  ['BEGIN:VCALENDAR', 'RRULE:FREQ=DAILY', 'BEGIN:VALARM', 'END:VCALENDAR'].forEach(x => assert(ics.includes(x), 'falta ' + x));
  assert(ics.endsWith('\r\n') && !/[^\r]\n/.test(ics), 'los saltos de línea deben ser CRLF'); assert(/DTSTART:\d{8}T\d{6}\r\n/.test(ics));
});

console.log(fallos ? `pantallas: ${fallos} de ${total} pruebas fallan` : `pantallas: ${total} pruebas OK`);
process.exit(fallos ? 1 : 0);
