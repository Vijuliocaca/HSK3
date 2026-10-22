// Capas del avatar en un navegador real: ningún accesorio toca la cara ni se corta con el círculo, y dos accesorios (los que el editor permite juntar) no se pisan.
// Las cabezas, los peinados y las gafas se revisan a ojo con capturas; esto vigila lo que se puede medir.
const { lanzar } = require('./cdp');
let problemas = 0;
const ok = (c, m) => { if (!c) { problemas++; console.log('  ✗', m); } };
(async () => {
  const b = await lanzar();
  if (!b) { console.log('capas: no encuentro Edge ni Chrome (variable BROWSER). Prueba omitida.'); process.exit(0); }
  try {
    const { ev } = b;
    const r = await ev(`(async () => {
      const host = document.createElement('div'); host.style.cssText = 'position:absolute;left:0;top:0;width:640px;height:640px'; document.body.appendChild(host);
      const cajas = o => { host.innerHTML = '<div style="width:640px;height:640px">' + avatarSVG({ ...ED_DEF, ...o }) + '</div>'; const svg = host.querySelector('svg'), q = svg.getBoundingClientRect(); return [...svg.querySelectorAll('g[data-x]')].map(g => { const c = g.getBoundingClientRect(); return { k: g.dataset.x, x0: (c.left - q.left) / 10, y0: (c.top - q.top) / 10, x1: (c.right - q.left) / 10, y1: (c.bottom - q.top) / 10 }; }); };
      const pisa = (a, b) => a.x0 < b.x1 - .3 && b.x0 < a.x1 - .3 && a.y0 < b.y1 - .3 && b.y0 < a.y1 - .3;
      const ks = Object.keys(EXTRAS_ES), cara = { x0: 20, y0: 16, x1: 44, y1: 41 }, centro = k => EXTRA_LADO[k] == 'C', out = { cara: [], pares: [], corte: [] };
      ks.forEach(k => { const [c] = cajas({ extra: k }); if (c && !centro(k) && pisa(c, cara)) out.cara.push(k); });
      for (let i = 0; i < ks.length; i++) for (let j = i + 1; j < ks.length; j++) { const n = [ks[i], ks[j]]; if (n.includes('mochila') || n.includes('cascos') || (n.includes('auriculares') && n.includes('cocinero'))) continue; const c = cajas({ extra: n.join('+') }); if (c.length == 2 && pisa(c[0], c[1])) out.pares.push(n.join('+')); }
      const S = 10, cv = document.createElement('canvas'); cv.width = cv.height = 96 * S; const cx = cv.getContext('2d', { willReadFrequently: true });
      for (const k of ks) { const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-16 -16 96 96" width="' + 96 * S + '" height="' + 96 * S + '">' + extrasSVG(k).replace(/class=([a-z]+)/g, 'class="$1"') + '</svg>'; const img = new Image(); img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); await img.decode(); cx.clearRect(0, 0, cv.width, cv.height); cx.drawImage(img, 0, 0);
        const d = cx.getImageData(0, 0, cv.width, cv.height).data; let dentro = 0, fuera = 0; for (let y = 0; y < cv.height; y += 2) for (let x = 0; x < cv.width; x += 2) if (d[(y * cv.width + x) * 4 + 3] > 40) (Math.hypot(x / S - 16 - 32, y / S - 16 - 32) <= 31 ? dentro++ : fuera++);
        if (k != 'mochila' && fuera / Math.max(1, dentro + fuera) > .05) out.corte.push(k + ' ' + Math.round(100 * fuera / (dentro + fuera)) + '%'); }
      return out; })()`);
    ok(r.cara.length == 0, 'accesorios que tocan la cara: ' + r.cara.join(', '));
    ok(r.pares.length == 0, 'pares de accesorios que se pisan: ' + r.pares.slice(0, 8).join(', '));
    ok(r.corte.length == 0, 'accesorios que el círculo corta más de un 5 %: ' + r.corte.join(', '));
  } catch (e) { problemas++; console.log('  ✗ error en la prueba:', e.message); }
  await b.cerrar();
  console.log(problemas ? `capas: ${problemas} problemas` : 'capas: OK');
  process.exit(problemas ? 1 : 0);
})();
