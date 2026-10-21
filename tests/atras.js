// Botón atrás de Android: desde cualquier pantalla debe llevar al inicio y no cerrar la app.
// Se simula el historial del navegador (pushState añade una entrada, atrás la quita y avisa a popstate): si al pulsar atrás
// no hay entrada a la que volver, la app se cerraría. Solo en el inicio es normal que atrás cierre la app.
const assert = require('assert'), { cargarApp } = require('./arnes'), { PREPARAR, PANTALLAS } = require('./pantallas-lista');
let fallos = 0, total = 0;
const t = (nombre, f) => { total++; try { f(); } catch (e) { fallos++; console.log('✗', nombre, '\n   ', (e.message || e).toString().split('\n')[0]); } };
const esInicio = a => a.html().includes('Meta de hoy'); // texto propio de la pantalla de inicio

const a = cargarApp(); a.ev(PREPARAR);
PANTALLAS.filter(([n]) => n != 'inicio').forEach(([nombre, js]) => t('atrás desde «' + nombre + '»', () => {
  a.ev('home()'); assert.strictEqual(a.entradas(), 1, 'el inicio debe dejar el historial en una sola entrada');
  a.ev(js);
  assert(a.atras(), 'la flecha atrás cerraría la app (la pantalla no añade entrada al historial)');
  assert(esInicio(a), 'atrás no lleva al inicio');
  assert.strictEqual(a.entradas(), 1, 'queda historial de más');
}));

t('atrás desde una pantalla a la que se llega desde otra (inicio → lecturas → una lectura) lleva al inicio', () => {
  a.ev('home()'); a.ev('lecturas()'); a.ev('lectura(0)'); a.ev('lectQ(0)');
  assert(a.atras(), 'se cerraría la app'); assert(esInicio(a), 'no vuelve al inicio'); assert.strictEqual(a.entradas(), 1);
});
t('atrás a mitad de una lectura (tras avanzar varias frases y abrir las preguntas) lleva al inicio sin acumular historial', () => {
  a.ev('home()'); a.ev('lecturas()'); a.ev('lectura(0)'); a.ev('lectura(0, 1)'); a.ev('lectura(0, 2)'); assert.strictEqual(a.entradas(), 2, 'cada frase no debe añadir una entrada al historial');
  assert(a.atras(), 'se cerraría la app'); assert(esInicio(a), 'no vuelve al inicio'); assert.strictEqual(a.entradas(), 1);
  a.ev('lectura(0, 3)'); a.ev('lectQ(0)'); assert(a.atras(), 'se cerraría la app desde las preguntas'); assert(esInicio(a)); assert.strictEqual(a.entradas(), 1);
});
t('atrás desde el ejercicio de gramática desde «Hoy» (pestañas) lleva al inicio', () => {
  a.ev('home()'); a.ev('today()'); a.ev('gramRev()'); assert(a.atras(), 'se cerraría la app'); assert(esInicio(a)); assert.strictEqual(a.entradas(), 1);
});
t('atrás en medio de un examen pide confirmación: si la rechazas, sigues en el examen', () => {
  a.ev('home()'); a.ev('exam(1)'); a.confirmar(false);
  assert(a.atras()); assert(!esInicio(a), 'salió del examen sin confirmar'); assert.strictEqual(a.entradas(), 2, 'debe volver a poner la entrada del historial');
  a.confirmar(true); assert(a.atras()); assert(esInicio(a), 'al aceptar debe volver al inicio'); assert.strictEqual(a.entradas(), 1);
});
t('el botón «Inicio» de la barra deja el historial limpio (no acumula entradas)', () => {
  a.ev('home()'); a.ev('stats()'); a.ev('home()'); assert.strictEqual(a.entradas(), 1); assert(esInicio(a));
});
t('en el inicio, atrás sí cierra la app (comportamiento normal)', () => { a.ev('home()'); assert.strictEqual(a.atras(), false); });

console.log(fallos ? `atrás: ${fallos} de ${total} pruebas fallan` : `atrás: ${total} pruebas OK`);
process.exit(fallos ? 1 : 0);
