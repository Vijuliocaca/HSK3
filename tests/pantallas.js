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
  assert(a.ev('LECT.every(d => personas(d).length >= 1)'), 'una lectura no tiene personaje');
  Object.keys(JSON.parse(a.ev('JSON.stringify(PERS)'))).forEach(id => { const s = a.ev(`avatarSVG(PERS.${id})`); assert(s.startsWith('<svg') && s.includes(a.ev(`PERS.${id}.piel`)) && s.includes('clip-path'), 'avatar mal dibujado: ' + id); });
  Object.keys(JSON.parse(a.ev('JSON.stringify(PERS)'))).forEach(id => { assert(a.ev(`(!PERS.${id}.patron || !!PATRONES[PERS.${id}.patron]) && (PERS.${id}.extra || '').split('+').filter(Boolean).every(k => !!EXTRAS[k])`), id + ': patrón de fondo o accesorio que no existe'); });
});
t('avatar: ninguna opción del editor deja ${} sin sustituir, undefined o NaN, y el color de ojos se aplica', () => {
  const a = cargarApp(), mal = JSON.parse(a.ev(`JSON.stringify((() => {
    const mal = new Set(), probar = (o, et) => { const s = avatarSVG(o); const m = s.match(/\\$\\{[^}]*\\}|undefined|NaN|\\[object/); if (m) mal.add(et + ': ' + m[0]); };
    const base = { ...ED_DEF, forma: 'ovalada', ojos: 'almendrados', pecas: true, colorete: true, lunar: true, nariz: true, pecasY: 1, barba: true, bigote: true, perilla: true, coleta: true, corbata: true, bufanda: '#c23b5a', pendientes: '#f5c84c', mechas: '#e6e6e6', cejaColor: '#3b6fb5', ojoColor: '#3f8a5a', gafasColor: '#c23b5a' };
    Object.values(ED_TABS).flat().forEach(([k, , v, mn]) => { const vals = v == 'b' ? [true] : v == 'r' || v == 't' || v == 'p' || v == 's' ? [] : v == 'm' ? mn.map(x => x[0]) : v.map(x => Array.isArray(x) ? x[0] : x); vals.forEach(x => { probar({ ...base, [k]: x }, k + '=' + x); probar({ ...base, [k]: x, gafas: 'aviador', gorra: '#c0562a' }, k + '=' + x + '+gafas+gorra'); }); });
    Object.entries(PERS).forEach(([id, p]) => probar(p, 'PERS.' + id));
    return [...mal]; })())`));
  assert.deepStrictEqual(mal, [], 'dibujo roto: ' + mal.slice(0, 5).join(' | '));
  ['', 'almendrados'].forEach(o => assert(a.ev(`avatarSVG({ ...ED_DEF, ojos: '${o}', ojoColor: '#3b6fb5' }).includes('fill="#3b6fb5"')`), 'el color de ojos no se aplica (ojos «' + o + '»)'));
});
// cada personaje (y cada plantilla del editor) usa solo rasgos y valores que el editor ofrece: así un error al pegar «Copiar código» (una errata en un peinado, una camiseta que no existe…) falla aquí
t('personajes y plantillas: cada rasgo es una opción válida del editor (valores, colores, rangos, accesorios y sombreros sin choques)', () => {
  const a = cargarApp(), mal = JSON.parse(a.ev(`JSON.stringify((() => {
    const mal = [], filas = Object.fromEntries(Object.values(ED_TABS).flat().map(f => [f[0], f])), hex = x => /^#[0-9a-f]{6}$/i.test(x), SIN = ['n', 'genero', 'rasgos', 'voz'], lado = k => EXTRA_LADO[k] != 'C';
    const mira = (id, p, esPlantilla) => { Object.entries(p).forEach(([k, v]) => { if (SIN.includes(k)) return; const f = filas[k]; if (!f) return mal.push(id + ': rasgo desconocido «' + k + '»'); const [, , kind, mn, mx] = f;
      if (kind == 'b') { if (v !== true) mal.push(id + '.' + k + ' debe ser true'); } else if (kind == 'r') { if (typeof v != 'number' || v < mn || v > mx) mal.push(id + '.' + k + ' fuera de rango'); }
      else if (kind == 'm') { String(v).split('+').forEach(e => { if (!EXTRAS_ES[e]) mal.push(id + ': accesorio desconocido «' + e + '»'); }); }
      else if (typeof kind[0] == 'string') { if (!hex(v)) mal.push(id + '.' + k + ' debe ser un color #rrggbb'); }
      else if (!(k == 'gafas' && v === true) && !kind.some(o => o[0] === v)) mal.push(id + '.' + k + ': «' + v + '» no es una opción'); });
      const ex = String(p.extra || '').split('+').filter(Boolean); if (ex.filter(lado).length > 2 || ex.filter(e => !lado(e)).length > 2) mal.push(id + ': demasiados accesorios (máx. 2 de lado y 2 de cabeza o pecho)');
      if (ex.includes('cocinero') && ex.includes('auriculares')) mal.push(id + ': auriculares y gorro de cocinero a la vez');
      const gorros = ['gorra', 'boina', 'gorro', 'paja', 'corona', 'orejas'].filter(k => p[k]).concat(ex.includes('cocinero') ? ['cocinero'] : []); if (gorros.length > 1) mal.push(id + ': más de un sombrero (' + gorros.join(', ') + ')');
      if (p.camiseta && (p.cuello || p.estampado)) mal.push(id + ': con camiseta de fútbol sobran cuello y estampado'); };
    Object.entries(PERS).forEach(([id, p]) => mira(id, p)); Object.entries(PLANTILLAS).forEach(([n, p]) => mira('plantilla ' + n, p));
    return mal; })())`));
  assert.deepStrictEqual(mal, [], mal.slice(0, 5).join(' | '));
});
// retoques hechos en la app (S.mod): se aplican, y si después cambia personajes.js gana el original; sin nota de base (retoques antiguos) se conservan
t('personajes retocados: S.mod se aplica; si cambia el original, gana el original; Restablecer limpia', () => {
  const a = cargarApp(); a.ev(PREPARAR); a.ev("crear('anto'); edSet('estilo', 'rapado'); edGuardar()");
  assert.strictEqual(a.ev('PERS.anto.estilo'), 'rapado'); assert(a.ev('!!S.modBase.anto'), 'no se anotó cómo era el original');
  const b = cargarApp({ storage: a.storage }); assert.strictEqual(b.ev('PERS.anto.estilo'), 'rapado', 'el retoque no sobrevive a recargar');
  const o = JSON.parse(a.storage.hsk3); o.modBase.anto = 'otra versión'; const c = cargarApp({ storage: { hsk3: JSON.stringify(o) } });
  assert.strictEqual(c.ev('PERS.anto.estilo'), 'corto', 'un cambio en personajes.js debe ganar al retoque antiguo'); assert(c.ev('!S.mod.anto'));
  const v = JSON.parse(a.storage.hsk3); delete v.modBase; const d = cargarApp({ storage: { hsk3: JSON.stringify(v) } });
  assert.strictEqual(d.ev('PERS.anto.estilo'), 'rapado', 'un retoque sin nota de base debe conservarse'); d.ev("personaje('anto'); edRestablecer('anto')");
  assert.strictEqual(d.ev('PERS.anto.estilo'), 'corto'); assert(d.ev('!S.modBase.anto'));
});
t('actualización: vSW lee la versión de sw.js (la que compara el aviso «Hay una versión nueva»)', () => {
  const a = cargarApp(), sw = require('fs').readFileSync(require('path').join(__dirname, '..', 'sw.js'), 'utf8');
  assert.strictEqual(a.ev(`vSW(${JSON.stringify(sw)})`), a.ev('APP_V')); assert.strictEqual(a.ev("vSW('nada')"), undefined);
  assert(/cache: 'no-cache'/.test(sw) && !/cache: 'reload'/.test(sw), 'la instalación del service worker debe revalidar (no-cache), no descargar todo (reload)');
});
// el arnés guarda #conv aparte de #app: se vacía antes de cada lectura para ver solo lo que pinta esa lectura
const lee = (a, js) => { const c = a.els['#conv']; if (c) c.innerHTML = ''; a.ev(js); return a.html() + a.els['#conv'].innerHTML; };
t('lectura: la persona va arriba a la derecha, la conversación debajo, y se repite tocando a la persona', () => {
  const a = cargarApp(), h = lee(a, 'lectura(0)');
  assert(h.indexOf('class=cab') > 0 && h.indexOf('class=yo') > h.indexOf('class=cabt') && h.indexOf('class=yo') < h.indexOf('id=conv'), 'la persona debe ir en la cabecera, a la derecha del título y encima de la conversación');
  assert(h.includes('onclick="oir(0,0)"') && h.includes('Escuchar con la voz de Payolink') && h.includes('onclick="hablar(0,0)"'), 'tocar al persona debe repetir la frase');
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
t('conversaciones de dos: dos personas arriba, burbujas de cada una con su nombre y tocar a una repite su última frase', () => {
  const a = cargarApp(), i = a.ev("LECT.findIndex(d => d.p == 'yuyue+payolink')"), n = a.ev(`LECT[${i}].ls.length`), h = lee(a, `lectura(${i})`), conv = () => a.els['#conv'].innerHTML;
  assert(i >= 0 && h.includes('class="cab dos"') && h.includes('id=av ') && h.includes('id=av2') && h.includes('>YuYue<') && h.includes('>Payolink<') && h.includes('data-dos=1'), 'la cabecera debe llevar a las dos personas');
  assert(h.includes('oir(' + i + ',0)') && h.includes('oir(' + i + ',1)'), 'cada persona debe poder tocarse');
  assert(conv().includes('class=quien>YuYue<') && !conv().includes('q2'), 'la 1.ª frase la dice YuYue (sin burbuja de la segunda persona)');
  a.els['#nx'].onclick(); assert(conv().includes('b nueva q2') && conv().includes('class=quien>Payolink<'), 'la 2.ª frase la dice Payolink, en su propia burbuja');
  a.els['#nx'].onclick(); a.els['#nx'].onclick(); a.ev('hablar = (i, j) => { (globalThis.__h = globalThis.__h || []).push(j); }');
  a.ev(`oir(${i}, 1)`); a.ev(`oir(${i}, 0)`); assert.deepStrictEqual(JSON.parse(a.ev('JSON.stringify(globalThis.__h)')), [3, 2], 'tocar a una persona debe repetir SU última frase: ' + a.ev('JSON.stringify(globalThis.__h)') + ' en ' + a.els['#conv'].innerHTML.match(/data-k=/g).length + ' mostradas');
  for (let q = 1; q < n; q++) a.ev(`LECT[${i}].ls[${q}].q`); assert.strictEqual(a.ev(`LECT[${i}].ls.map(l => l.q).join('')`), '01010101', 'las frases deben alternar');
});
t('lectura: las cejas existen en todos los avatares (base de las expresiones)', () => { const a = cargarApp(); Object.keys(JSON.parse(a.ev('JSON.stringify(PERS)'))).forEach(id => assert(a.ev(`avatarSVG(PERS.${id})`).includes('class=cejas'), id + ' sin cejas')); });
// --- curva del olvido: estabilidad por palabra, retención, planificador del examen y pantalla «Hoy» ---
const olvido = () => { const a = cargarApp(); a.ev('S.known[W[0].id] = 1; S.w = {}'); return a; };
const envejecer = (a, dias) => a.ev(`(() => { const r = S.w[W[0].id]; r.l -= ${dias} * DIA; r.d -= ${dias} * DIA; })()`); // hace «dias» que se repasó
t('olvido: la estabilidad crece al acertar a tiempo y la caja se deriva de ella', () => {
  const a = olvido(), s = () => a.ev('S.w[W[0].id].s'), seq = [];
  a.ev('grade(W[0].id, true)'); seq.push(s()); assert.strictEqual(seq[0], 1, 'la 1.ª vez se vuelve a ver al día siguiente');
  for (let k = 0; k < 6; k++) { envejecer(a, seq[seq.length - 1]); a.ev('grade(W[0].id, true)'); seq.push(s()); }
  seq.forEach((v, k) => { if (k) assert(v > seq[k - 1] * 1.5, `repaso ${k + 1}: ${v} no crece lo bastante sobre ${seq[k - 1]}`); });
  assert(seq[6] > 30 && seq[6] <= 365, 'tras 7 aciertos a tiempo debe pasar de 30 días: ' + seq.join(' '));
  assert.strictEqual(a.ev('S.w[W[0].id].b'), a.ev(`cajaDe(${seq[6]})`), 'la caja debe derivarse de la estabilidad');
});
t('olvido: repasar de más refuerza menos que repasar cuando ya se olvida', () => {
  const crece = dias => { const a = olvido(); a.ev('grade(W[0].id, true)'); envejecer(a, 1); a.ev('grade(W[0].id, true)'); const s0 = a.ev('S.w[W[0].id].s'); envejecer(a, dias); a.ev('grade(W[0].id, true)'); return a.ev('S.w[W[0].id].s') / s0; };
  const pronto = crece(0.1), aTiempo = crece(2.2), tarde = crece(6);
  assert(pronto < aTiempo && aTiempo < tarde, `crecimiento pronto ${pronto.toFixed(2)} < a tiempo ${aTiempo.toFixed(2)} < tarde ${tarde.toFixed(2)}`);
  assert(pronto > 1, 'acertar siempre debe alargar algo');
});
t('olvido: fallar baja la estabilidad a un tercio (sin reiniciar), la deja para mañana y cuenta el fallo', () => {
  const a = olvido(); a.ev('S.w[W[0].id] = { b: 5, s: 60, o: 8, f: 0, l: Date.now() - 60 * DIA, d: Date.now(), t: day(new Date(Date.now() - 60 * 864e5)) }');
  a.ev('grade(W[0].id, false)'); const r = JSON.parse(a.ev('JSON.stringify(S.w[W[0].id])'));
  assert.strictEqual(r.s, 18, 'de 60 días debe pasar a 18 (un tercio)'); assert.strictEqual(r.f, 1); assert(r.d - Date.now() > 0.9 * 864e5 && r.d - Date.now() <= 864e5 + 1000, 'debe volver a verse mañana');
  a.ev('grade(W[0].id, false)'); assert(Math.abs(a.ev('S.w[W[0].id].s') - 5.4) < 1e-9, 'otro fallo: 5,4'); a.ev('grade(W[0].id, false)'); a.ev('grade(W[0].id, false)'); assert.strictEqual(a.ev('S.w[W[0].id].s'), 1, 'nunca baja de 1 día');
  assert(!a.ev('due().some(w => w.id == W[0].id)'), 'lo fallado hoy no vuelve hasta mañana');
});
t('olvido: la retención es 100 % al repasar, 90 % a los s días y decrece; los registros antiguos (solo caja) se leen con el intervalo de su caja', () => {
  const a = olvido(), R = (s, dias) => a.ev(`retencion({ s: ${s}, l: Date.now() - ${dias} * DIA, d: 0 })`);
  assert(Math.abs(R(10, 0) - 1) < 1e-6 && Math.abs(R(10, 10) - 0.9) < 1e-6 && R(10, 20) < R(10, 10) && R(20, 10) > R(10, 10), 'forma de la curva');
  a.ev('S.w[W[0].id] = { b: 3, d: Date.now() + 2 * DIA, o: 3, f: 0, t: "2026-01-01" }'); assert.strictEqual(a.ev('estab(S.w[W[0].id])'), 7, 'caja 3 = 7 días'); assert(Math.abs(a.ev('retencion(S.w[W[0].id])') - Math.pow(.9, 5 / 7)) < 1e-3, 'se repasó hace 5 días (vence en 2)');
  a.ev('grade(W[0].id, true)'); assert(a.ev('S.w[W[0].id].s') > 7 && a.ev('S.w[W[0].id].l') > 0, 'un registro antiguo debe seguir creciendo al acertar');
});
t('olvido: con el examen cerca ninguna palabra espera más de ~1/4 del tiempo que falta (sin examen no hay tope)', () => {
  const a = olvido(); a.ev('S.w[W[0].id] = { b: 5, s: 60, o: 8, f: 0, l: Date.now(), d: Date.now() + 60 * DIA, t: day(new Date()) }');
  assert.strictEqual(a.ev('tope()'), Infinity); assert.strictEqual(a.ev('venceEn(S.w[W[0].id])'), a.ev('S.w[W[0].id].d'));
  const en = n => { a.ev(`S.exam = { d: day(new Date(Date.now() + ${n} * 864e5)) }`); return a.ev('tope()'); };
  assert.strictEqual(en(8), 2); assert.strictEqual(en(100), 25); assert.strictEqual(en(2), 1); assert.strictEqual(en(1), 1);
  a.ev(`S.exam = { d: day(new Date(Date.now() + 8 * 864e5)) }`); assert(a.ev('venceEn(S.w[W[0].id])') <= a.ev('Date.now()') + 2 * 864e5 + 5, 'el repaso debe adelantarse al tope');
  a.ev('S.exam = { d: day(new Date(Date.now() - 3 * 864e5)) }'); assert.strictEqual(a.ev('tope()'), Infinity, 'con el examen pasado no hay tope');
});
t('olvido: el repaso de hoy empieza por lo que más se está olvidando; «reforzar» elige lo flojo aunque no toque', () => {
  const a = cargarApp(); a.ev('S.known[W[0].id] = S.known[W[1].id] = S.known[W[2].id] = 1; S.w = {}');
  a.ev('S.w[W[0].id] = { b: 2, s: 3, o: 3, f: 0, l: Date.now() - 4 * DIA, d: Date.now() - DIA, t: "2026-01-01" }; S.w[W[1].id] = { b: 3, s: 7, o: 3, f: 0, l: Date.now() - 20 * DIA, d: Date.now() - 13 * DIA, t: "2026-01-01" }; S.w[W[2].id] = { b: 3, s: 7, o: 3, f: 0, l: Date.now() - 6 * DIA, d: Date.now() + DIA, t: "2026-01-01" }');
  const ids = JSON.parse(a.ev('JSON.stringify(due().sort((x, y) => retencion(S.w[x.id]) - retencion(S.w[y.id])).map(w => w.id))'));
  assert.deepStrictEqual(ids, [a.ev('W[1].id'), a.ev('W[0].id')], 'la más olvidada (20 días con s = 7) va antes que la de 4 días con s = 3');
  assert.deepStrictEqual(JSON.parse(a.ev('JSON.stringify(flojas(.95).map(w => w.id))')), [a.ev('W[1].id'), a.ev('W[0].id'), a.ev('W[2].id')], 'flojas ordena de menor a mayor retención');
  a.ev("session('risk')"); assert(a.html().length > 50, 'el modo reforzar debe abrirse');
});
t('olvido: «Fácil» crece más que «Bien» y «Difícil» menos (tarjetas)', () => {
  const a = cargarApp(); a.ev('S.w = {}; ["facil", "dificil", undefined].forEach((n, i) => { grade(W[i].id, true, n); grade(W[i].id, true, n); })');
  const [f, d, b] = JSON.parse(a.ev('JSON.stringify([0, 1, 2].map(i => S.w[W[i].id].s))'));
  assert(f > b && b > d, `estabilidades fácil ${f}, bien ${b}, difícil ${d}`);
});
t('hoy: muestra la retención media, la curva del olvido y, con examen, la línea del examen y el ritmo de repasos', () => {
  const a = cargarApp(); a.ev('S.known[W[0].id] = S.known[W[1].id] = 1; S.w = {}; grade(W[0].id, true); grade(W[1].id, true); S.w[W[1].id].l -= 3 * DIA; S.w[W[1].id].d -= 3 * DIA'); a.ev('today()'); let h = a.html();
  assert(/<b>\d+ %<\/b><span class=mut>retención/.test(h), 'falta la retención media'); assert(h.includes('Curva del olvido') && h.includes('aria-label="Curva del olvido'), 'falta la curva'); assert(!h.includes('examen '), 'sin examen no debe haber línea de examen'); const sv = h.slice(h.indexOf('<svg viewBox="0 0 300 118"')); assert(sv.includes('<path') && !new RegExp('[a-z0-9]' + '/>', 'i').test(sv.slice(0, sv.indexOf('</svg>'))), 'en el SVG de la curva un valor sin comillas seguido de «/>» se traga el cierre y el resto no se dibuja');
  a.ev('S.exam = { d: day(new Date(new Date().setDate(new Date().getDate() + 10))) }'); a.ev('today()'); h = a.html();
  assert(/examen \d+ %/.test(h) && h.includes('Examen en <b>10 días</b>') && h.includes('al menos cada <b>3 días</b>'), 'con examen: línea del examen y ritmo de repasos');
  const vacia = cargarApp(); vacia.ev('today()'); assert(!vacia.html().includes('Curva del olvido'), 'sin palabras estudiadas no hay curva');
});
t('olvido: leer una lectura o diálogo (≥ 75 % de aciertos) refresca de paso sus palabras ya estudiadas: recuperan la mitad de lo olvidado, una vez al día', () => {
  const a = cargarApp(); a.ev('S.known[W[0].id] = S.known[W[1].id] = 1; S.w = {}; S.w[W[0].id] = { b: 3, s: 7, o: 3, f: 0, l: Date.now() - 10 * DIA, d: Date.now() - 3 * DIA, t: "2026-01-01" }');
  const h0 = a.ev('W[0].h'), h1 = a.ev('W[1].h'), R0 = a.ev('retencion(S.w[W[0].id])');
  assert.strictEqual(a.ev(`suave([${JSON.stringify(h0)}, ${JSON.stringify(h1)}, "zzz"], 2, 4)`), 0, 'con 2 de 4 aciertos no se refresca nada');
  assert.strictEqual(a.ev(`suave([${JSON.stringify(h0)}, ${JSON.stringify(h0)}, ${JSON.stringify(h1)}, "zzz"], 3, 4)`), 1, 'solo cuenta la palabra con registro (sin repetir)');
  const R1 = a.ev('retencion(S.w[W[0].id])'); assert(R1 > R0 && R1 < 1, `la retención debe subir (${R0.toFixed(2)} → ${R1.toFixed(2)})`);
  assert(Math.abs(a.ev('S.w[W[0].id].s') - 7.35) < 1e-9, 'la estabilidad sube un 5 %'); assert.strictEqual(a.ev('S.w[W[0].id].pt'), a.ev('day(new Date())'));
  assert.strictEqual(a.ev(`suave([${JSON.stringify(h0)}], 4, 4)`), 0, 'solo una vez al día por palabra'); assert(!a.ev('!!S.w[W[1].id]'), 'una palabra sin registro no se crea');
  assert(a.ev('nSuave(2)').includes('<b>2</b> palabras') && a.ev('nSuave(1)').includes('<b>1</b> palabra ') && a.ev('nSuave(0)') == '', 'mensaje');
});
t('ficha de una palabra: muestra su retención estimada y el próximo repaso (y avisa si aún no se ha repasado)', () => {
  const a = cargarApp(); a.ev('S.w = {}; S.known[W[0].id] = 1'); a.ev('detail(W[0].id)'); assert(a.html().includes('Aún sin repasar'), 'estudiada pero sin repasar');
  a.ev('detail(W[5].id)'); assert(!a.html().includes('id=rt'), 'una palabra sin estudiar no lleva línea de retención');
  a.ev('S.w[W[0].id] = { b: 3, s: 7, o: 3, f: 0, l: Date.now() - 2 * DIA, d: Date.now() + 5 * DIA, t: "2026-01-01" }'); a.ev('detail(W[0].id)'); const h = a.html();
  assert(/Retención estimada <b>\d+ %<\/b> · próximo repaso en [45] días/.test(h), 'retención y próximo repaso: ' + (h.match(/id=rt>[^<]*<b>[^]*?<\/p>/) || [''])[0]);
  a.ev('S.w[W[0].id].d = Date.now() - DIA; S.w[W[0].id].l = Date.now() - 8 * DIA'); a.ev('detail(W[0].id)'); assert(a.html().includes('toca repasarla hoy'), 'vencida: toca hoy');
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
