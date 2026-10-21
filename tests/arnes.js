// Entorno mínimo para ejecutar la app en Node sin navegador: documento simulado, localStorage y voz de mentira.
// Carga los scripts en el mismo orden que index.html, cada app en su propio contexto (aislada de las demás).
const fs = require('fs'), vm = require('vm'), path = require('path');
const RAIZ = path.join(__dirname, '..');

function cargarApp(opts = {}) {
  const els = {}, el = id => els[id] || (els[id] = {
    innerHTML: '', textContent: '', style: {}, hidden: false, tabIndex: 0, classList: { toggle() { }, add() { }, remove() { } },
    querySelectorAll: () => [], querySelector: () => null, insertAdjacentHTML(_, h) { this.innerHTML += h; },
    setAttribute() { }, removeAttribute() { }, scrollIntoView() { }, click() { }, appendChild() { }, focus() { }, select() { }, replaceChildren() { }, append() { },
  });
  const salida = { blobs: [], clics: [], avisos: [] }, storage = { ...(opts.storage || {}) };
  const pila = [0], oyentes = []; // historial simulado: la primera entrada es la app; pushState añade una y atrás quita una y avisa a popstate
  const sb = {
    console, setTimeout, clearTimeout, setInterval, clearInterval, URL: { createObjectURL: () => 'blob:test', revokeObjectURL() { } },
    Blob: function (partes, o) { salida.blobs.push({ texto: partes.join(''), tipo: o && o.type }); },
    File: function (partes, nombre) { this.name = nombre; },
    localStorage: storage, speechSynthesis: { cancel() { }, speak() { } }, SpeechSynthesisUtterance: function (t) { this.t = t; },
    navigator: {}, history: { pushState() { pila.push(1); }, back() { if (pila.length > 1) { pila.pop(); oyentes.forEach(f => f()); } } }, location: { reload() { } }, innerWidth: 400, innerHeight: 800,
    scrollTo() { }, addEventListener: (t, f) => { if (t == 'popstate') oyentes.push(f); }, matchMedia: () => ({ matches: false, addEventListener() { } }), MutationObserver: function () { this.observe = () => { }; },
    getComputedStyle: () => ({ getPropertyValue: () => '', color: '#000' }), alert: m => salida.avisos.push(m), confirm: () => sb.__confirmar !== false, prompt: () => opts.prompt || 'Lista de prueba',
    document: { querySelector: s => el(s), querySelectorAll: () => [], documentElement: el('root'), body: el('body'), head: el('head'), hidden: false, addEventListener() { },
      createElement: () => { const e = el('x' + Math.random()); e.click = () => salida.clics.push(e); return e; } },
  };
  sb.window = sb.self = sb;
  const ctx = vm.createContext(sb), html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
  [...html.matchAll(/<script src="([^"]+)"/g)].forEach(m => vm.runInContext(fs.readFileSync(path.join(RAIZ, m[1]), 'utf8'), ctx, { filename: m[1] }));
  vm.runInContext(html.match(/<script>([\s\S]*?)<\/script>/g).pop().slice(8, -9), ctx, { filename: 'index.html (script principal)' });
  // atras(): lo que hace la flecha atrás de Android; devuelve false si la app no tiene a dónde volver (es decir, se saldría de la app)
  const atras = () => { if (pila.length < 2) return false; sb.history.back(); return true; };
  return { ctx, atras, entradas: () => pila.length, confirmar: v => { sb.__confirmar = v; }, ev: js => vm.runInContext(js, ctx), html: () => el('#app').innerHTML, els, storage, salida };
}

module.exports = { cargarApp, RAIZ };
