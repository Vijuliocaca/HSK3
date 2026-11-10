// Junta los .js de datos de scripts.txt (en ese orden) en paquete.js: la app hace 1 petición en vez de ~150 (mucho más rápido en frío en el móvil).
// Uso: node tools/empaquetar.js   (hay que repetirlo al tocar cualquier .js de la lista; tests/datos.js avisa si paquete.js está desactualizado)
const fs = require('fs'), path = require('path'), RAIZ = path.join(__dirname, '..');
const lista = () => fs.readFileSync(path.join(RAIZ, 'scripts.txt'), 'utf8').split('\n').map(s => s.trim()).filter(Boolean);
const armar = () => lista().map(f => `/* ${f} */\n${fs.readFileSync(path.join(RAIZ, f), 'utf8')}\n;\n`).join('');
if (require.main === module) { const t = armar(); fs.writeFileSync(path.join(RAIZ, 'paquete.js'), t); console.log(`paquete.js: ${lista().length} archivos, ${(t.length / 1e6).toFixed(2)} MB`); }
module.exports = { lista, armar };
