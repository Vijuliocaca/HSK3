// «Leer frases» (HSK 6-9) en un navegador real: el botón sale solo en los niveles 6-9, abre una lectura de 6 frases que se recorre con
// clics de verdad, llega a las preguntas, no se queda en la lista de lecturas y cada vez trae frases nuevas.
const { lanzar } = require('./cdp');
let problemas = 0;
const ok = (cond, msg) => { if (!cond) { problemas++; console.log('  ✗', msg); } return !!cond; };

(async () => {
  const b = await lanzar();
  if (!b) { console.log('frases: no encuentro Edge ni Chrome (variable BROWSER). Prueba omitida.'); process.exit(0); }
  try {
    await b.cmd('Emulation.setDeviceMetricsOverride', { width: 390, height: 780, deviceScaleFactor: 1, mobile: true });
    const { ev, clic, esp } = b;
    console.log('1) El botón «Leer frases» solo en HSK 6-9');
    await ev('lecturas()'); await esp(80);
    const niveles = await ev(`[...document.querySelectorAll('#app h2')].map(h => ({ lv: h.textContent.trim(), boton: !!(h.nextElementSibling && [...h.nextElementSibling.querySelectorAll('button')].some(x => x.textContent.includes('Leer frases'))) }))`);
    niveles.forEach(n => { const lv = +n.lv.replace(/\D/g, ''); ok(n.boton == (lv >= 6), `HSK ${lv}: el botón «Leer frases» ${n.boton ? 'sobra' : 'falta'}`); });
    ok(niveles.some(n => n.boton), 'no hay ningún botón «Leer frases»');

    console.log('2) Abrir y recorrer una lectura de HSK 6');
    const hay = () => ev("document.querySelectorAll('.mode').length");
    const antes = await hay();
    await ev("[...document.querySelectorAll('.mode')].find(x => x.textContent.includes('Leer frases') && x.onclick.toString().includes('(6)')).click()"); await esp(300);
    ok((await ev("LECT[LECT.length - 1].fr")) == 1, 'la lectura generada debe ir al final de LECT con la marca fr');
    const t1 = await ev('LECT[LECT.length - 1].t'), n = await ev('LECT[LECT.length - 1].ls.length');
    ok(n == 6, `deben ser 6 frases (son ${n})`); ok(/HSK 6/.test(t1), 'el título debe decir HSK 6: ' + t1);
    for (let j = 0; j < n; j++) {
      const esperado = await ev(`LECT[LECT.length - 1].ls[${j}].z.join('')`), visto = await ev("[...document.querySelectorAll('#conv .b:last-child .wp')].map(w => w.querySelector('.wd').lastChild.textContent).join('')");
      ok(visto.replace(/[，。！？、：；“”]/g, '') == esperado.replace(/[，。！？、：；“”]/g, ''), `frase ${j + 1}: se ve «${visto}» y debería verse «${esperado}»`);
      ok((await ev("document.querySelector('#nx').textContent")) == (j == n - 1 ? 'Ir a las preguntas' : 'Siguiente'), `texto del botón en la frase ${j + 1}`);
      if (j < n - 1) { await clic('#nx'); await esp(80); }
    }
    await clic('#nx'); await esp(150);
    ok(await ev("!!document.querySelector('#q')"), 'después de la última frase deben salir las preguntas');
    ok((await ev("document.querySelector('#q').textContent.length")) > 10, 'la primera pregunta está vacía');

    console.log('3) No se queda en la lista y la siguiente trae frases nuevas');
    await ev('lecturas()'); await esp(80);
    ok((await hay()) == antes, `la lista de lecturas debe quedar igual (había ${antes} botones y ahora ${await hay()})`);
    await ev("[...document.querySelectorAll('.mode')].find(x => x.textContent.includes('Leer frases') && x.onclick.toString().includes('(6)')).click()"); await esp(300);
    const t2 = await ev('LECT[LECT.length - 1].t'); ok(t2 != t1, `la segunda vez debe traer otras frases (sigue «${t2}»)`);
    ok((await ev("LECT.filter(d => d.fr).length")) == 1, 'solo debe quedar una lectura automática en LECT');
  } finally { await b.cerrar(); }
  console.log(problemas ? `frases: ${problemas} problema(s)` : 'frases: OK (clics reales)');
  process.exit(problemas ? 1 : 0);
})().catch(e => { console.log('frases: error', e.message); process.exit(1); });
