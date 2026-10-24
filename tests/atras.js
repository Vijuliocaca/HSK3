// Botón atrás de Android: cada pulsación sube UN nivel (a la pantalla a la que lleva el botón ← / ✕ de la pantalla actual),
// sin bucles, hasta el inicio; solo desde el inicio la app se cierra. Se simula el historial del navegador: pushState añade una
// entrada, atrás la quita y avisa a popstate; si al pulsar atrás no hay entrada a la que volver, la app se cerraría.
const assert = require('assert'), { cargarApp } = require('./arnes'), { PREPARAR, PANTALLAS } = require('./pantallas-lista');
let fallos = 0, total = 0;
const t = (nombre, f) => { total++; try { f(); } catch (e) { fallos++; console.log('✗', nombre, '\n   ', (e.message || e).toString().split('\n')[0]); } };
const esInicio = a => a.html().includes('Meta de hoy'), enLista = a => a.html().includes('Ayudas de lectura');

const a = cargarApp(); a.ev(PREPARAR);
// 1) todas las pantallas: subiendo de nivel se llega al inicio sin bucles, el historial queda limpio y solo entonces atrás cierra la app
PANTALLAS.filter(([n]) => n != 'inicio').forEach(([nombre, js]) => t('atrás desde «' + nombre + '» sube de nivel hasta el inicio', () => {
  a.ev('home()'); assert.strictEqual(a.entradas(), 1, 'el inicio debe dejar el historial en una sola entrada'); a.ev(js);
  assert(a.entradas() >= 2, 'la pantalla no añade entrada al historial: atrás cerraría la app');
  let pasos = 0;
  while (!esInicio(a)) { assert(a.atras(), 'la flecha atrás cerraría la app antes de llegar al inicio'); assert(++pasos <= 5, 'atrás no llega nunca al inicio (bucle)'); }
  assert.strictEqual(a.entradas(), 1, 'queda historial de más al llegar al inicio'); assert.strictEqual(a.atras(), false, 'desde el inicio atrás debe cerrar la app');
}));

// 2) los niveles concretos
t('lectura: atrás lleva a la LISTA de lecturas (no al inicio) y de ahí al inicio, sin acumular entradas', () => {
  a.ev('home()'); a.ev('lecturas()'); a.ev('lectura(0)'); const e0 = a.entradas(); a.ev('lectura(0, 1)'); a.ev('lectura(0, 2)'); assert.strictEqual(a.entradas(), e0, 'cada frase no debe añadir una entrada al historial');
  assert(a.atras()); assert(enLista(a), 'desde una lectura atrás debe llevar a la lista de lecturas'); assert(a.entradas() >= 2, 'la lista debe tener su entrada para el siguiente atrás');
  assert(a.atras()); assert(esInicio(a), 'desde la lista de lecturas atrás debe llevar al inicio'); assert.strictEqual(a.entradas(), 1); assert.strictEqual(a.atras(), false);
});
t('lectura abierta directamente desde otra pantalla: atrás también lleva a la lista de lecturas', () => {
  a.ev('home()'); a.ev('lectura(0, 3)'); assert(a.atras()); assert(enLista(a), 'debe llevar a la lista de lecturas'); assert(a.atras()); assert(esInicio(a));
});
t('preguntas de una lectura: atrás lleva a la lista de lecturas', () => {
  a.ev('home()'); a.ev('lecturas()'); a.ev('lectura(0, 4)'); a.ev('lectQ(0)'); assert(a.atras()); assert(enLista(a), 'desde las preguntas atrás debe llevar a la lista de lecturas'); assert(a.atras()); assert(esInicio(a));
});
t('diálogo: preguntas → lista de diálogos → inicio', () => {
  a.ev('home()'); a.ev('dialogos()'); a.ev('lectura(LECT.findIndex(d => d.dl), 2)'); assert(a.atras()); assert(a.html().includes('<b>Diálogos</b>'), 'del diálogo debe volver a la lista de diálogos');
  a.ev('lectQ(LECT.findIndex(d => d.dl))'); assert(a.atras()); assert(a.html().includes('<b>Diálogos</b>'), 'de las preguntas debe volver a la lista de diálogos'); assert(a.atras()); assert(esInicio(a)); assert.strictEqual(a.entradas(), 1);
});
t('gramática: ejercicio → punto → lista de gramática → inicio', () => {
  a.ev('home()'); a.ev('gramatica()'); a.ev('gram(0)'); a.ev('gramEx(0)');
  assert(a.atras()); assert(a.html().includes('Practicar'), 'del ejercicio debe volver a la explicación del punto');
  assert(a.atras()); assert(a.html().includes('<b>Gramática</b>'), 'del punto debe volver a la lista de gramática');
  assert(a.atras()); assert(esInicio(a));
});
t('«Hoy» → repaso de gramática: atrás vuelve a «Hoy» y luego al inicio', () => {
  a.ev('home()'); a.ev('today()'); a.ev('gramRev()'); assert(a.atras()); assert(a.html().includes('<h1>Hoy</h1>'), 'debe volver a Hoy'); assert(a.atras()); assert(esInicio(a)); assert.strictEqual(a.entradas(), 1);
});
t('lista de vocabulario → ficha de una palabra: atrás vuelve a la lista y luego al inicio', () => {
  a.ev('home()'); a.ev("list('all')"); a.ev('detail(0)'); assert(a.atras()); assert(a.html().includes('id=s'), 'de la ficha debe volver a la lista de vocabulario'); assert(a.atras()); assert(esInicio(a));
});

// 3) casos especiales
t('atrás en medio de un examen pide confirmación: si la rechazas, sigues en el examen', () => {
  a.ev('home()'); a.ev('exam(1)'); const e1 = a.entradas(); a.confirmar(false);
  assert(a.atras()); assert(!esInicio(a), 'salió del examen sin confirmar'); assert.strictEqual(a.entradas(), e1, 'debe volver a poner la entrada del historial');
  a.confirmar(true); assert(a.atras()); assert(esInicio(a), 'al aceptar debe volver al inicio'); assert.strictEqual(a.entradas(), 1);
});
t('el botón «Inicio» de la barra deja el historial limpio (no acumula entradas)', () => {
  a.ev('home()'); a.ev('stats()'); a.ev('home()'); assert.strictEqual(a.entradas(), 1); assert(esInicio(a));
});
t('en el inicio, atrás sí cierra la app (comportamiento normal)', () => { a.ev('home()'); assert.strictEqual(a.atras(), false); });

// 4) Chrome del móvil se salta las entradas que se añaden sin tocar la pantalla (p. ej. dentro de popstate): atrás nunca debe añadir ninguna
t('subir con atrás no añade entradas al historial (en ninguna pantalla)', () => {
  const b = cargarApp(); b.ev(PREPARAR);
  PANTALLAS.filter(([n]) => n != 'inicio').forEach(([nombre, js]) => { b.ev('home()'); b.ev(js); let pasos = 0; while (!b.html().includes('Meta de hoy') && pasos++ < 6) b.atras(); assert(!b.salida.pushEnPop, `«${nombre}»: atrás añadió una entrada al historial`); });
});

console.log(fallos ? `atrás: ${fallos} de ${total} pruebas fallan` : `atrás: ${total} pruebas OK`);
process.exit(fallos ? 1 : 0);
