# HSK Viju: guía para trabajar en este proyecto

Responde siempre en español, directo y breve.

## Qué es
PWA para estudiar chino (HSK 1-5) en español. JavaScript puro, sin dependencias ni compilación. Se publica en GitHub Pages: https://vijuliocaca.github.io/HSK3/ (repositorio `Vijuliocaca/HSK3`, rama `main`).

## Archivos
- `index.html`: toda la lógica y los estilos. No lo leas entero: usa `grep` para localizar la función y lee solo ese trozo.
- `palabras.js` y `nuevo*.js`: vocabulario (`hanzi|pinyin|español`). `frases*.js`: una frase de ejemplo por palabra. `ajustes.js`: traducciones corregidas.
- `temas.js` (temas del vocabulario y lecciones), `gramatica1-3.js` (gramática), `canciones.js` (canciones y Top 10), `dialogos.js` (diálogos: hablante|chino|pinyin|español + preguntas), `lecturas.js` (historias: frase por palabras con /, pinyin alineado, español, preguntas y glosario), `chengyu.js` (60 成语 para el inicio: chino|pinyin|literal|significado|ejemplo|pinyin|español), `relaciones.js` (antónimos A y sinónimos S: A|palabra|palabra; ambas deben existir en el vocabulario), `fiestas.js` (12 fiestas; regla G/L/E/Q; las lunares se calculan con Intl y `FIESTA_FIX` de index.html corrige desfases de un día: comprobar con fuentes al pasar a un año nuevo), `cultura.js` (Top 10 de películas, series y platos: t|p|es|a|y|d).
- `sw.js`: service worker. Su versión (`hsk3-vNN`) renueva la caché.

## Reglas al hacer cambios
1. **Cada cambio en archivos de la app sube la versión de `sw.js`** (`hsk3-vNN` → `hsk3-vNN+1`). Un `.js` nuevo va en un `<script>` de `index.html` y en la lista `FILES` de `sw.js`.
2. **Haz commit y push solo cuando el usuario lo pida.** Mensajes en español, terminando con la línea `Co-Authored-By` que indique el sistema. Tras el push, GitHub Pages tarda unos 3 minutos en publicar.
3. **El progreso se guarda por hanzi** (formato `v:2`, ver `toDisk` en `index.html`), así que se pueden añadir palabras donde sea. No repitas un mismo hanzi en la lista. Ajustes tiene Exportar/Importar copia de seguridad.
4. **Contenido con derechos de autor:** no pongas grabaciones ni letras de canciones protegidas dentro de la app. Las canciones de práctica son solo tradicionales o de dominio público. El Top 10 lleva solo datos más el reproductor de YouTube incrustado.
5. **Chino:** pinyin con cambios de tono (不 bú, 一 yí/yì). Revisa que cada ejemplo tenga tantas sílabas como caracteres.
6. Estilo del código: el del archivo (comentarios en español, funciones cortas, sin librerías nuevas).

## Modos de trabajo (por defecto: rápido)
**Al empezar cada conversación, en tu primera respuesta recuerda al usuario los 3 modos en pocas líneas** (para que no se le olviden), di que trabajas en **modo rápido** salvo que él elija otro, y atiende lo que haya pedido. Cámbialo solo si lo dice.
- **Rápido:** `node tests/run.js` y una prueba concreta de lo tocado. Sin capturas.
- **Normal:** lo anterior más `node tests/desbordes.js` y la revisión de las pantallas afectadas.
- **Exhaustivo:** recorrido completo en Edge y desbordes a 320-412 px; solo cuando el usuario pida revisar bugs.

## Reglas para gastar menos
1. **Cambios pequeños con `Edit`;** no reescribir archivos enteros para tocar pocas líneas.
2. **Limitar la salida de los comandos** (`head`, `tail`, `grep`). Los análisis de datos con un script que imprima solo el resumen.
3. **No repetir lo ya comprobado:** si un cambio no toca una zona, no volver a probarla. Probar solo lo nuevo.
4. **Sin búsqueda web, subagentes ni capturas** salvo que el cambio sea visual, falte un dato que no conozco o el usuario lo pida.
5. **Preguntar antes de construir** cuando haya una decisión real entre varias opciones, con opciones claras. Es más barato que rehacerlo.
6. **Agrupar los cambios:** subir la versión de `sw.js` y publicar una vez por tanda, no por cada ajuste pequeño, salvo que el usuario pida lo contrario.
7. **Avisar de que conviene abrir una sesión nueva** cuando la conversación sea muy larga y empiece un tema distinto.
8. **Respuestas cortas:** un resumen de pocas líneas, sin repetir tablas ni listas largas que el usuario ya conoce.
9. **Guardar las decisiones en memoria** (o en `IDEAS.md`) para no volver a preguntarlas.

## Cómo probar sin gastar de más
- **Siempre, antes de cada commit:** `node tests/run.js` (unos segundos, sin navegador). Comprueba el formato y el pinyin de todos los datos, que `index.html` y `sw.js` estén al día, que ninguna de las ~55 pantallas/lógicas falle, que la flecha atrás de Android lleve siempre al inicio sin cerrar la app y fechas clave. GitHub lo ejecuta también en cada subida (`.github/workflows/pruebas.yml`).
- **Si el cambio toca el aspecto o varias pantallas:** `node tests/desbordes.js` (≈15 s): recorre 43 pantallas en Edge/Chrome real a 320, 360 y 412 px y avisa de errores de JavaScript y de desbordes horizontales, con la pantalla y el primer elemento culpable. Filtros: `SOLO=texto` y `RANGO=a-b`. Se salta solo si no encuentra el navegador (`BROWSER=ruta`).
- **Si tocas campos de texto o teclado:** `node tests/teclado.js` (≈10 s, Edge/Chrome real): teclea y borra en los tres campos de la app. Regla: **un manejador `el.onkeydown = e => ...` nunca debe devolver `false`** (p. ej. con `cond && accion`): cancela la tecla y rompe Borrar. Usa `{ if (cond) accion(); }`. `datos.js` lo vigila.
- **Pantalla o archivo de datos nuevo:** añade la pantalla a `tests/pantallas-lista.js` y, si tiene formato propio, su validación a `tests/datos.js`. Un `.js` nuevo ya se comprueba solo (debe estar en `index.html` y en `FILES` de `sw.js`). Los topes de `datos.js` (vocabulario 31, frases 122, temas 203) son casos conocidos que no deben empeorar.
- **Si el cambio es pequeño:** solo lo anterior más una prueba concreta de lo tocado.
- **No hacer capturas de pantalla** salvo que el cambio sea visual o lo pida el usuario. Las imágenes pesan mucho.
- **No volcar listas enteras del vocabulario** para analizarlas: usa scripts de Node que impriman solo el resumen.
- Edge está en `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe` (`--headless=new --screenshot`). Las pruebas están en `tests/`.

## Botón atrás del móvil
- Desde cualquier pantalla, atrás debe llevar al inicio y **no cerrar la app**. `app()` añade una entrada al historial (`pushState`) al salir del inicio y `popstate` vuelve a `home()`.
- Las pantallas pasan `'home'` como pestaña solo para mostrar la barra inferior; **el inicio de verdad lo marca `home()` con `INICIO = true`**. No uses la pestaña `'home'` para decidir nada del historial (así se rompió en 13 pantallas).
- `tests/atras.js` lo comprueba para todas las pantallas de `tests/pantallas-lista.js`: añade ahí las nuevas.

## Trampas de este equipo (Windows + Git Bash)
- Node no ve `/tmp` de Git Bash: usa rutas de Windows (`C:/Users/...`) en scripts de Node.
- Los `git add` avisan de «LF will be replaced by CRLF»: es normal.
- Comprobar la publicación: comparar con `curl` el `md5sum` de cada archivo contra la web y mirar la versión de `sw.js`.

## Pendiente
Lista de ideas y decisiones ya tomadas en `IDEAS.md`.
