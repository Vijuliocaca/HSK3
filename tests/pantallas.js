// Recorre las pantallas de la app (DOM simulado) y comprueba la lógica de lo que más se ha tocado: progreso, fechas, repaso, logros, ficheros generados.
const assert = require('assert'), { cargarApp } = require('./arnes'), { PREPARAR, PANTALLAS } = require('./pantallas-lista');
let fallos = 0, total = 0;
const en = 'const en = n => { const d = new Date(); d.setDate(d.getDate() + n); return day(d); };'; // día de calendario a n días de hoy
const t = (nombre, f) => { total++; try { f(); } catch (e) { fallos++; console.log('✗', nombre, '\n   ', (e.message || e).toString().split('\n')[0]); } };

// --- recorrido: ninguna pantalla lanza errores ni sale vacía ---
const app = cargarApp(); app.ev(PREPARAR);
PANTALLAS.forEach(([nombre, js]) => t('pantalla «' + nombre + '»', () => { app.els['#app'].innerHTML = ''; app.ev(js); assert(app.html().length > 40, 'la pantalla quedó vacía'); }));

// --- campo de pinyin: las teclas que no son Intro no deben cancelarse (si el manejador devuelve false, Borrar deja de funcionar) ---
t('escribir pinyin: Borrar y las demás teclas no se cancelan; Intro comprueba la respuesta', () => {
  const a = cargarApp(); a.ev(PREPARAR); a.ev("session('write')"); const campo = a.els['#in'];
  ['Backspace', 'Delete', 'a', ' ', 'ArrowLeft'].forEach(k => assert.notStrictEqual(campo.onkeydown({ key: k }), false, `la tecla ${k} se cancela`));
  assert.strictEqual(campo.enfocado, true, 'el campo no recibe el foco al abrir el ejercicio (en el móvil no se abre el teclado)');
  campo.value = 'ni hao'; campo.onkeydown({ key: 'Enter' }); assert.strictEqual(campo.disabled, true, 'Intro no comprobó la respuesta');
});

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

// --- lecturas: ayudas en la página general, personajes, lectura frase a frase y preguntas ---
t('lecturas: cada lectura la cuenta un personaje (con su nombre en la lista) y los avatares se dibujan', () => {
  const a = cargarApp(); a.ev('lecturas()'); const h = a.html();
  ['Payolink', 'Samu', 'YuYue', 'BinHao'].forEach(n => assert(h.includes(' · ' + n), 'la lista no muestra a ' + n));
  assert(a.ev('LECT.every(d => PERS[d.p])'), 'una lectura no tiene personaje');
  Object.keys(JSON.parse(a.ev('JSON.stringify(PERS)'))).forEach(id => { const s = a.ev(`avatarSVG(PERS.${id})`); assert(s.startsWith('<svg') && s.includes(a.ev(`PERS.${id}.piel`)) && s.includes('clip-path'), 'avatar mal dibujado: ' + id); });
  Object.keys(JSON.parse(a.ev('JSON.stringify(PERS)'))).forEach(id => { assert(a.ev(`!!PATRONES[PERS.${id}.patron] && !!EXTRAS[PERS.${id}.extra]`), id + ': patrón de fondo o accesorio que no existe'); });
});
// el arnés guarda #conv aparte de #app: se vacía antes de cada lectura para ver solo lo que pinta esa lectura
const lee = (a, js) => { const c = a.els['#conv']; if (c) c.innerHTML = ''; a.ev(js); return a.html() + a.els['#conv'].innerHTML; };
t('lectura: la persona va arriba a la derecha, la conversación debajo, y se repite tocando a la persona', () => {
  const a = cargarApp(), h = lee(a, 'lectura(0)');
  assert(h.indexOf('class=cab') > 0 && h.indexOf('class=yo') > h.indexOf('class=cabt') && h.indexOf('class=yo') < h.indexOf('id=conv'), 'la persona debe ir en la cabecera, a la derecha del título y encima de la conversación');
  assert(h.includes('onclick="oir(0)"') && h.includes('Escuchar con la voz de Payolink') && h.includes('onclick="hablar(0,0)"'), 'tocar al persona debe repetir la frase');
  assert(h.includes('>Payolink<'), 'falta el nombre del personaje'); assert(!h.includes('Escuchar otra vez'), 'sobra el botón antiguo de escuchar');
  assert(lee(a, 'lectura(1)').includes('>Samu<'), 'la lectura 2 debe contarla Samu');
});
t('voz: cada palabra se ilumina en su turno (posición de cada palabra en la frase)', () => {
  const a = cargarApp(), zs = a.ev('LECT[0].ls[1].z'), ini = JSON.parse(a.ev('JSON.stringify(iniPalabras(LECT[0].ls[1].z))'));
  assert.strictEqual(ini[0], 0); ini.forEach((p, k) => { if (k) assert.strictEqual(p, ini[k - 1] + [...zs[k - 1]].length, 'posición mal calculada de la palabra ' + k); });
  zs.forEach((z, k) => { assert.strictEqual(a.ev(`palabraEn(${JSON.stringify(ini)}, ${ini[k]})`), k, 'el inicio de la palabra ' + k); assert.strictEqual(a.ev(`palabraEn(${JSON.stringify(ini)}, ${ini[k] + [...z].length - 1})`), k, 'el final de la palabra ' + k); });
});
t('lecturas: Pinyin y Español están en la página general, en ese orden, y se recuerdan', () => {
  const a = cargarApp(); a.ev('lecturas()'); let h = a.html();
  assert(h.indexOf('>Con pinyin<') > 0 && h.indexOf('>Con pinyin<') < h.indexOf('>En español<'), 'el orden debe ser «Con pinyin» y luego «En español»');
  assert(['lpy', 'les'].every(k => h.includes(`class="chip on" aria-pressed="true" onclick="setLect('${k}')"`)), 'por defecto deben estar activados');
  const cl = (h => h.match(/id=conv class="([^"]*)"/)[1].split(' '));
  a.ev("setLect('lpy')"); h = a.html(); assert(h.includes('class="chip " aria-pressed="false" onclick="setLect(' + "'lpy')" + '"'), 'Pinyin debería quedar desactivado');
  h = lee(a, 'lectura(0)'); assert(cl(h).includes('np') && !cl(h).includes('ne'), 'sin pinyin pero con español');
  assert.strictEqual(cargarApp({ storage: a.storage }).ev('S.set.lpy'), false, 'no se recuerda tras recargar');
  a.ev("setLect('les')"); assert(cl(lee(a, 'lectura(0)')).includes('ne'), 'sin español debe llevar la clase ne');
});
t('lectura: la conversación crece hacia abajo con Siguiente y al terminar se puede releer, reescuchar o ir a las preguntas', () => {
  const a = cargarApp(), n = a.ev('LECT[0].ls.length'), conv = () => a.els['#conv'].innerHTML, burbujas = () => (conv().match(/class="b /g) || []).length, spans = () => (conv().match(/class=wd/g) || []).length, pie = () => a.els['#pie'].innerHTML;
  lee(a, 'lectura(0)'); assert.strictEqual(burbujas(), 1, 'debe empezar con solo la 1.ª frase'); assert.strictEqual(spans(), a.ev('LECT[0].ls[0].z.length'));
  assert(pie().includes('>Siguiente<') && !pie().includes('Escuchar toda'), 'falta Siguiente');
  a.els['#nx'].onclick(); assert.strictEqual(burbujas(), 2, 'Siguiente debe añadir la 2.ª frase debajo sin quitar la 1.ª');
  assert.strictEqual(spans(), a.ev('LECT[0].ls[0].z.length + LECT[0].ls[1].z.length'), 'la 1.ª frase debe seguir a la vista');
  for (let k = 2; k < n; k++) a.els['#nx'].onclick();
  assert.strictEqual(burbujas(), n, 'al final deben verse todas las frases'); assert(pie().includes('Escuchar toda la lectura') && pie().includes('>Ir a las preguntas<'), 'al terminar: escuchar toda la lectura e ir a las preguntas');
  assert.strictEqual(a.els['#conv'].dataset.fin, '1', 'la conversación debe marcarse como terminada (tocar a la persona lee todo)');
  a.els['#nx'].onclick(); assert(a.els['#q'].innerHTML.includes('qlect'), 'no se abrieron las preguntas');
  lee(a, `lectura(0, ${n - 1})`); assert.strictEqual(burbujas(), n, 'lectura(i, j) debe pintar la conversación hasta la frase j');
});
t('lectura: la puntuación va fuera de la palabra, así no se ilumina ni lleva pinyin', () => {
  const a = cargarApp(); lee(a, 'lectura(0)'); const h = a.els['#conv'].innerHTML, p = h.match(/<span class=pn>([^<]*)<[/]span>/);
  assert(p && /^[，。！？、：；“”]+$/.test(p[1]), 'la puntuación debe ir en su propio span'); assert(!/<span class=wd[^>]*><small>[^<]*<[/]small>[^<]*[，。！？]<[/]span>/.test(h), 'dentro de la palabra no debe quedar puntuación');
  assert(!/<small>[^<]*[,.!?]/.test(h), 'el pinyin no debe llevar puntuación');
});
t('preguntas de lectura: elige, la que no se deduce, frase en chino y ordenar se presentan bien y sin releer el texto', () => {
  const a = cargarApp(), P = i => JSON.parse(a.ev(`JSON.stringify(LECT[0].qs[${i}])`)), q = () => a.els['#q'].innerHTML;
  [0, 1].forEach(i => { a.ev(`lectQ(0, ${i})`); const f = P(i), h = q(); assert(h.includes('prompt qlect') && h.includes(f.q), 'falta la pregunta'); f.r.forEach(x => assert(h.includes(x), 'falta la opción «' + x + '»')); assert(!h.includes('class=wd'), 'no debe mostrar el texto de la lectura'); });
  a.ev('lectQ(0, 1)'); assert(q().includes('NO se puede deducir'), 'la pregunta «no se deduce» debe decirlo');
  a.ev('lectQ(0, 2)'); const z = P(2), fr = JSON.parse(a.ev(`JSON.stringify(LECT[0].ls[${z.k}])`));
  assert(q().includes('Lee y elige') && q().includes(fr.e), 'la pregunta de frase debe dar el significado en español'); assert.strictEqual((q().match(/class=zhq/g) || []).length, 4, 'debe haber 4 frases en chino'); assert(q().includes(fr.z.join('')), 'falta la frase correcta');
  a.ev('lectQ(0, 3)'); const f3 = JSON.parse(a.ev(`JSON.stringify(LECT[0].ls[${P(3).k}])`)); assert(q().includes('Ordena la frase') && q().includes(f3.e), 'la pregunta de ordenar debe dar el significado en español');
});
t('preguntas de frase en chino: 4 frases distintas de la lectura y la correcta no destaca por su longitud (ni la más larga ni la más corta)', () => {
  const a = cargarApp(), n = a.ev('LECT.length');
  for (let i = 0; i < n; i++) { const r = JSON.parse(a.ev(`(() => { const d = LECT[${i}], q = d.qs.find(q => q.t == 'z'), o = opcionesZ(d, q.k); return JSON.stringify({ t: d.t, n: o.length, dist: new Set(o.map(s => s.z.join(''))).size, esta: o[0] === d.ls[q.k], L: o.map(s => [...s.z.join('')].length) }); })()`));
    assert(r.n == 4 && r.dist == 4 && r.esta, r.t + ': las opciones no son 4 frases distintas con la correcta incluida');
    const [c, ...otras] = r.L; assert(!(c > Math.max(...otras)) && !(c < Math.min(...otras)), `${r.t}: la frase correcta destaca por su longitud (${c} frente a ${otras.join('/')})`); }
});
t('lecturas: los resultados de la versión anterior se reinician una sola vez', () => {
  const a = cargarApp({ storage: { hsk3: JSON.stringify({ v: 2, known: {}, w: {}, lv: [1], lect: { '🐱 Mi gato': 3 } }) } });
  assert.strictEqual(a.ev('JSON.stringify(S.lect)'), '{}'); assert.strictEqual(a.ev('S.lectV'), 2);
  a.ev("S.lect['🐱 Mi gato'] = 4; save()"); assert.strictEqual(cargarApp({ storage: a.storage }).ev("S.lect['🐱 Mi gato']"), 4, 'borró también los resultados nuevos');
});

console.log(fallos ? `pantallas: ${fallos} de ${total} pruebas fallan` : `pantallas: ${total} pruebas OK`);
process.exit(fallos ? 1 : 0);
