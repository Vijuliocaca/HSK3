# HSK Viju: guía para trabajar en este proyecto

Responde siempre en español, directo y breve.

## Qué es
PWA para estudiar chino (HSK 1-8) en español. JavaScript puro, sin dependencias ni compilación. Se publica en GitHub Pages: https://vijuliocaca.github.io/HSK3/ (repositorio `Vijuliocaca/HSK3`, rama `main`).

## Archivos
Detalle de formatos y reglas de cada archivo de datos, lecturas, diálogos, personajes y trazos en `docs/ARCHIVOS.md`: **léelo antes de tocar datos, lecturas, diálogos o personajes**.
- `index.html`: toda la lógica y los estilos. No lo leas entero: usa `grep` para localizar la función y lee solo ese trozo.
- Vocabulario `hanzi|pinyin|español`: `palabras.js` y `nuevo*.js`; frases de ejemplo `frases*.js` y `SENTR.push`; traducciones corregidas `ajustes.js`.
- `niveles.js` lo genera `tools/niveles.js`: regenéralo al añadir vocabulario. Un carácter nuevo necesita sus datos en `trazos/`.
- Contenido: `temas*.js`, `gramatica*.js`, `canciones.js`, `dialogos*.js`, `lecturas*.js`, `personajes.js`, `chengyu.js`, `relaciones.js`, `fiestas.js`, `cultura.js` (formato en `docs/ARCHIVOS.md` y cabeceras de cada archivo; `tests/datos.js` los valida).
- `sw.js`: service worker; su versión (`hsk3-vNN`) renueva la caché.

## Reglas al hacer cambios
1. **Cada cambio en archivos de la app sube la versión de `sw.js`** (`hsk3-vNN` → `hsk3-vNN+1`) **y la de `APP_V` en `index.html`** (se ve al final de Ajustes y `tests/datos.js` exige que coincidan). Un `.js` nuevo va en un `<script>` de `index.html` y en la lista `FILES` de `sw.js`.
2. **Haz commit y push solo cuando el usuario lo pida.** Mensajes en español, terminando con la línea `Co-Authored-By` que indique el sistema. Tras el push, GitHub Pages tarda ~1 minuto en publicar (medido: 40-60 s); la app avisa sola con «Hay una versión nueva» (compara la V de `sw.js`, también al volver a la app y cada 5 min).
3b. **Repaso espaciado = curva del olvido** (`grade`, `retencion`, `venceEn` en `index.html`): cada palabra guarda `s` (estabilidad en días: a los `s` días se recuerda el 90 %, R = 0,9^(t/s)), `l` (último repaso), `d` (vencimiento), `o`/`f` y `b` (caja 0-5 derivada de `s`, para logros y estadísticas). Los registros antiguos solo con caja valen. Con examen fijado, `tope()` limita la espera a ~1/4 del tiempo que falta. «Hoy» muestra la retención media y la curva; `tests/pantallas.js` (bloque «olvido») fija las reglas.
3. **El progreso se guarda por hanzi** (formato `v:2`, ver `toDisk` en `index.html`), así que se pueden añadir palabras donde sea. No repitas un mismo hanzi en la lista. Ajustes tiene Exportar/Importar copia de seguridad.
4. **Contenido con derechos de autor:** no pongas grabaciones ni letras de canciones protegidas dentro de la app. Las canciones de práctica son solo tradicionales o de dominio público. El Top 10 lleva solo datos más el reproductor de YouTube incrustado.
5. **Chino:** pinyin con cambios de tono (不 bú, 一 yí/yì). Revisa que cada ejemplo tenga tantas sílabas como caracteres.
6. Estilo del código: el del archivo (comentarios en español, funciones cortas, sin librerías nuevas).

## Modos de trabajo (por defecto: rápido)
**Al empezar cada conversación, en tu primera respuesta recuerda al usuario los 3 modos y los 3 subagentes (`tester`, `vocabulario`, `pedagogo`) en pocas líneas** (para que no se le olviden), di que trabajas en **modo rápido** salvo que él elija otro, y atiende lo que haya pedido. Cámbialo solo si lo dice.
- **Rápido:** `node tests/run.js` y una prueba concreta de lo tocado. Sin capturas.
- **Normal:** lo anterior más `node tests/desbordes.js` y la revisión de las pantallas afectadas.
- **Exhaustivo:** recorrido completo en Edge y desbordes a 320-412 px; solo cuando el usuario pida revisar bugs.

## Subagentes (`.claude/agents/`)
Se usan solo cuando el usuario los pide o el trabajo es un lote grande.
- **`tester`** (haiku): ejecuta `tests/run.js` y las pruebas que correspondan a los archivos cambiados; avisa si `sw.js`/`APP_V` no subieron. Informa una línea por prueba (OK/FALLO/saltada). *Úsalo* antes de un commit o tras tocar código/datos; con «revisión completa» añade `run.js --navegador` y `TODAS=1 desbordes.js`.
- **`vocabulario`** (sonnet): añade y corrige palabras, pinyin, traducciones y frases por lotes; regenera `niveles.js` y `trazos/`. No toca `sw.js`/`APP_V` ni hace commit (eso es del agente principal). *Úsalo* para lotes grandes: completar palabras que faltan de un nivel HSK 3.0, revisar tonos o duplicados, añadir frases de ejemplo.
- **`pedagogo`** (sonnet; opus si se pide revisar la naturalidad del chino): audita lo pedagógico de un nivel o área y propone hasta 10 mejoras con evidencia; solo lectura. *Úsalo* para decidir qué mejorar: huecos entre niveles, calidad de lecturas y preguntas, repaso espaciado. Las ideas aceptadas pasan a `IDEAS.md`.

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
- **Siempre, antes de cada commit:** `node tests/run.js` (unos segundos, sin navegador). Comprueba el formato y el pinyin de todos los datos, que `index.html` y `sw.js` estén al día, que ninguna de las ~55 pantallas/lógicas falle, que la flecha atrás de Android lleve siempre al inicio sin cerrar la app y fechas clave. GitHub lo ejecuta también en cada subida (`.github/workflows/pruebas.yml`); además corre `node tests/run.js --navegador` en un segundo trabajo que avisa pero no bloquea. Esta ejecución local con `--navegador` lanza todas las pruebas de Edge/Chrome seguidas (≈2 min).
- **Si el cambio toca el aspecto o varias pantallas:** `node tests/desbordes.js` (≈15 s; con `TODAS=1`, cada frase y pregunta de todas las lecturas, ≈300 pantallas más, en un móvil de 640 px de alto): recorre 51 pantallas en Edge/Chrome real a 320, 360 y 412 px y avisa de errores de JavaScript y de desbordes horizontales, con la pantalla y el primer elemento culpable. Filtros: `SOLO=texto` y `RANGO=a-b`. Se salta solo si no encuentra el navegador (`BROWSER=ruta`).
- **Lecturas nuevas:** `datos.js` y `pantallas.js` listan todos los fallos de una vez; si una «z» destaca por su longitud, `node tools/arreglar-z.js --aplicar` elige otra. Flujo recomendado: archivo vacío registrado → agente `vocabulario` → `pedagogo` → aplicar sus correcciones → **un solo commit**.
- **Si tocas las lecturas:** `node tests/lecturas.js` (≈25 s, Edge/Chrome real a 390×780): recorre una lectura con clics y teclas reales (ayudas «Con pinyin»/«En español» a ancho completo, persona arriba a la derecha, conversación que crece hacia abajo con cada «Siguiente», voz con la palabra iluminada sin su puntuación —por avisos `boundary` o por duración estimada—, tocar a la persona para repetir, «Escuchar toda la lectura» al terminar, Intro) y responde las preguntas acertando y fallando. Las preguntas **no son de memoria** (nada de «¿qué dice la frase 2?»: se pregunta por el sentido) y **no se resuelven por descarte**: falsos plausibles y de longitud parecida (`datos.js` mide que la correcta sea la más larga/corta cerca del 25 %), «z» usa frases reales de la lectura y «f» ordena una frase de 4-9 palabras.
- **Si tocas el avatar o el editor de personajes:** `node tests/editor.js` (≈10 s, Edge/Chrome real: deshacer, plantillas, compartir/importar con códigos manipulados) y `node tests/capas.js` (≈15 s: ningún accesorio toca la cara, se corta o pisa a otro). El dibujo de todas las opciones lo vigila `tests/pantallas.js`; un `${…}` dentro de una cadena de comillas simples no se sustituye (así el color de ojos no funcionó mucho tiempo): usa plantillas con acento grave.
- **Si tocas `sw.js` o el registro del service worker (final de `index.html`):** `node tests/actualizar.js` (≈25 s, Chrome real con un servidor local tipo GitHub Pages): el aviso «Hay una versión nueva» sale solo al publicarse una versión (compara la V de `sw.js` con `APP_V`, sin esperar a que el service worker se instale), no sale sin versión nueva, el service worker actualiza revalidando (`cache: 'no-cache'`: no vuelve a bajar los archivos que no cambiaron), «Actualizar» (borra la caché vieja y recarga) deja la app en la versión nueva y, con wifi sin datos, la app abre al instante (el service worker sirve primero la caché, que solo cambia entera con cada versión).
- **Sin conexión:** funciona todo salvo el Top 10 (YouTube/Spotify) y el aviso de versión. Sin conexión, `vocesZh` descarta las voces de red (`localService === false`), que se quedarían calladas.
- **Si tocas los trazos o `sw.js`:** `node tests/trazos.js` (≈10 s): con el servidor apagado, la pantalla de trazos dibuja.
- **Si tocas campos de texto o teclado:** `node tests/teclado.js` (≈10 s, Edge/Chrome real): teclea y borra en los tres campos de la app. Regla: **un manejador `el.onkeydown = e => ...` nunca debe devolver `false`** (p. ej. con `cond && accion`): cancela la tecla y rompe Borrar. Usa `{ if (cond) accion(); }`. `datos.js` lo vigila.
- **Pantalla o archivo de datos nuevo:** añade la pantalla a `tests/pantallas-lista.js` y, si tiene formato propio, su validación a `tests/datos.js`. Un `.js` nuevo ya se comprueba solo (debe estar en `index.html` y en `FILES` de `sw.js`). Los topes de `datos.js` (vocabulario 58, frases 149, temas 203) son casos conocidos que no deben empeorar.
- **Fechas en los tests:** `run.js` repite pantallas y atrás con la hora de Madrid fijada a horas trampa (`RELOJ`, en `arnes.js`: 23:30 tras cada cambio de hora y en Nochevieja). Para «dentro de n días» usa días de calendario (`setDate`), no `n * 864e5`, y lee la hora con `a.ev('Date.now()')`, no con el `Date` de Node.
- **Si el cambio es pequeño:** solo lo anterior más una prueba concreta de lo tocado.
- **No hacer capturas de pantalla** salvo que el cambio sea visual o lo pida el usuario. Las imágenes pesan mucho.
- **No volcar listas enteras del vocabulario** para analizarlas: usa scripts de Node que impriman solo el resumen.
- Edge está en `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe` (`--headless=new --screenshot`). Las pruebas están en `tests/`.

## Botón atrás del móvil
- **Cada pulsación sube un nivel**, a la pantalla a la que lleva el botón **←/✕ de la pantalla actual** (`atras()` pulsa ese botón; si no lo tiene, va al inicio). Solo desde el inicio atrás cierra la app. Así lectura → lista de lecturas → inicio, ficha → lista → …
- **Para que una pantalla nueva suba bien, basta con que su `.top` lleve el botón `class=back` apuntando a su pantalla «padre»** (el primer `.back` de `#app .top` es el que se pulsa). No hay tabla de rutas que mantener.
- **Atrás nunca añade entradas al historial.** Chrome del móvil se salta las entradas añadidas sin que el usuario toque la pantalla (p. ej. dentro de `popstate`): así la app se cerraba al volver a una lista. Por eso `app()` añade una entrada por cada pantalla nueva abierta con un toque (3 de reserva al salir del inicio, por si se abre una pantalla profunda; mismo título = mismo nivel, no añade) y `popstate` solo baja `depth` y llama a `atras()`; `home()` borra las entradas sobrantes con `history.go`. El examen pide confirmación (`GUARD`). Los tests de navegador no pueden reproducir esa omisión (`history.back()` por script no la aplica): `atras.js` y `atras-navegador.js` vigilan que atrás no llame a `pushState`.
- Las pantallas pasan `'home'` como pestaña solo para mostrar la barra inferior; **el inicio de verdad lo marca `home()` con `INICIO = true`**. No uses la pestaña `'home'` para decidir nada del historial (así se rompió en 13 pantallas).
- **Altura al volver:** `app()` guarda en `SCR` la posición de la pantalla que se abandona y la recupera al volver (botón atrás del móvil o un `.back` pulsado); `history.scrollRestoration = 'manual'` evita que el navegador la pise. No uses `scrollIntoView` suave al pintar una pantalla: el desplazamiento seguiría en la pantalla a la que vuelvas.
- `tests/atras.js` (simulado) y `tests/atras-navegador.js` (historial real de Edge) lo comprueban para todas las pantallas de `tests/pantallas-lista.js`: añade ahí las nuevas.

## Trampas de este equipo (Windows + Git Bash)
- Node no ve `/tmp` de Git Bash: usa rutas de Windows (`C:/Users/...`) en scripts de Node.
- Los `git add` avisan de «LF will be replaced by CRLF»: es normal.
- Comprobar la publicación: comparar con `curl` el `md5sum` de cada archivo contra la web y mirar la versión de `sw.js`.

## Pendiente
Lista de ideas y decisiones ya tomadas en `IDEAS.md` (solo ideas del usuario). Las sugerencias que llegan desde Ajustes → Sugerencias van aparte, en `SUGERENCIAS.md`, con su estado (Nueva/Aceptada/Hecha/Descartada); no las mezcles con `IDEAS.md` ni las implementes sin que el usuario las acepte.
