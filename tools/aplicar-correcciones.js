// Aplica en bloque las correcciones que propone el agente «pedagogo» (o cualquiera) desde un archivo JSON:
//   [{ "archivo": "lecturas9y.js", "buscar": "texto exacto actual", "poner": "texto nuevo" }, ...]
// «buscar» debe aparecer EXACTAMENTE una vez en el archivo (si no, no se toca nada y se listan los fallos).
// Sin números de línea: cada corrección se ancla en su texto. Usa un trozo suficiente para que sea único (p. ej. la frase china
// y la pinyin de la línea). Conserva los saltos de línea del archivo (CRLF/LF).
//   node tools/aplicar-correcciones.js correcciones.json          aplica
//   node tools/aplicar-correcciones.js correcciones.json --seco   solo comprueba
const fs = require('fs'), path = require('path');
const RAIZ = path.join(__dirname, '..'), [ruta, ...flags] = process.argv.slice(2);
if (!ruta) { console.log('uso: node tools/aplicar-correcciones.js correcciones.json [--seco]'); process.exit(1); }
const lista = JSON.parse(fs.readFileSync(ruta, 'utf8')), fuente = {}, mal = [];
lista.forEach((c, i) => {
  const f = path.join(RAIZ, c.archivo); if (!fs.existsSync(f)) return mal.push(`#${i + 1}: no existe ${c.archivo}`);
  const s = fuente[c.archivo] ??= fs.readFileSync(f, 'utf8'), n = c.buscar ? s.split(c.buscar).length - 1 : 0;
  if (n != 1) return mal.push(`#${i + 1} (${c.archivo}): «${(c.buscar || '').slice(0, 40)}» aparece ${n} veces (debe ser 1)`);
  fuente[c.archivo] = s.replace(c.buscar, () => c.poner);
});
if (mal.length) { console.log(mal.length + ' problemas, no se aplica nada:\n' + mal.join('\n')); process.exit(1); }
if (!flags.includes('--seco')) Object.keys(fuente).forEach(a => fs.writeFileSync(path.join(RAIZ, a), fuente[a]));
console.log(`${flags.includes('--seco') ? 'comprobadas' : 'aplicadas'} ${lista.length} correcciones en ${Object.keys(fuente).length} archivo(s)`);
