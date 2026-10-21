# HSK Viju: ideas pendientes

Lista de mejoras que se han hablado y todavía no están hechas. Recomendación: empezar por las pruebas automáticas (1).

## Para no perder el progreso

## Para aprender mejor

## Cultura y diversión
14. **Más canciones tradicionales con melodía y karaoke.** Faltan las partituras (簡譜) de 茉莉花 y 送别 para añadir su melodía.

## Pulido
- Los datos de `fiestas.js` y `cultura.js` aún traen un emoji por elemento (campo `e`), aunque la app ya no los muestra en pestañas ni cabeceras.
- Los temas claro y oscuro siguen escritos dos veces en `index.html`; unificarlos con `light-dark()` cuando no importe dejar fuera iOS < 17.5.
- Falta la versión oscura del tema de alto contraste.

## Notas sobre notificaciones (app instalada)
- Las notificaciones push reales (el servidor te avisa a una hora) necesitan un servidor que las envíe; GitHub Pages es solo estático. Se puede montar con un servicio externo gratuito, pero hay que crear cuentas y guardar las suscripciones.
- «Sincronización periódica en segundo plano» existe solo en Chrome/Android, con hora no garantizada.
- Lo más fiable y sencillo: un botón **«Recordarme cada día»** que descargue un evento de calendario (.ics) repetido con alarma a la hora que elijas. Funciona en cualquier móvil y sin conexión.

## Hecho
- Copia de seguridad (Exportar/Importar en Ajustes) y progreso por hanzi (sw v37).
- Entrenamiento de tonos: modo «Entrenar tonos» (sw v38).
- Diálogos cortos: 20 diálogos HSK 1-5 con audio y preguntas (`dialogos.js`, sw v39).
- Lectura graduada: 20 historias HSK 1-5 con palabras tocables y preguntas (`lecturas.js`, sw v40).
- Repaso espaciado de gramática en «Hoy» y ejercicio de traducir frases (sw v41).
- Palabra y 成语 del día en el inicio: 60 modismos (`chengyu.js`, sw v42).
- Familias de palabras, antónimos y sinónimos en la ficha (`relaciones.js`, sw v43).
- Modo antes del examen: fecha en la pantalla Examen, cuenta atrás y ritmo diario en el inicio (sw v44).
- Listas propias de palabras: «Mis listas» y «➕ Listas» en la ficha (sw v45).
- Calendario de fiestas chinas: lunares calculadas con Intl y corregido el Año Nuevo 2027 (`fiestas.js`, sw v46).
- Otros Top 10: películas, series y platos típicos (`cultura.js`, sw v47).
- Logros y rachas semanales con medallas, calculados del progreso (sw v48).
- Accesibilidad básica: tema de alto contraste, teclado (Tab, Intro, 1-9), etiquetas para lector de pantalla (sw v49).
- Recordatorio diario: botón en Ajustes que descarga un evento .ics repetido con alarma (sw v50).
- Compartir el progreso como imagen: tarjeta en canvas con hoja de compartir o descarga (sw v51).
- Carga más ligera: medida en Edge, aplazar gramática y canciones solo ahorraba ~3 % (el service worker precarga todo) y se descartó. Sí se guardó en caché por día el cálculo de las fiestas (~50 ms por arranque, sw v52). Si el arranque se nota lento en el móvil, la vía con más recorrido sería cargar las frases de ejemplo (frases*.js, ~500 KB) bajo demanda. Pendiente: emparejar y dibujar trazos con teclado, versión oscura del alto contraste.
- Rediseño con impeccable (sw v53): `PRODUCT.md` y `DESIGN.md` («El patio del templo»), colores por función con contraste AA en los tres temas, objetivos táctiles de 44 px, serif china solo para hanzi, sin bandas laterales ni antetítulos, inicio agrupado en 4 secciones, sellos con hanzi en lugar de emojis, `<main>`, `h2` y anuncio de pantalla para el lector. Segunda tanda: sellos en los 58 temas, escala de tamaños con tokens `--fs-*`, campos con nombre, `color-scheme`, barras con `scaleX` y movimiento reducido con fundido. Tercera y cuarta: Ajustes sin desbordes al 130 %, `lang` en todos los hanzi, sin emojis en la interfaz (sellos y ✓), listas e importación sin diálogos nativos y título de pestaña por pantalla.

## Decisiones ya tomadas
- **Pronunciación (grabarse, compararse y puntuar con reconocimiento de voz): descartada.** No se hace ni se vuelve a proponer.
- Diseño: se trabaja con prototipos/código HTML, no con Figma. Las reglas visuales viven en `DESIGN.md`; el contexto de producto, en `PRODUCT.md`.
- Fuentes: solo del sistema (sin descargas). Serif china solo para caracteres; Georgia para títulos; sans del sistema para el resto.
- Iconos: sellos con un hanzi por sección; el altavoz es el único icono SVG.
- No se incluyen grabaciones ni letras de canciones con derechos de autor dentro de la app; el Top 10 usa el reproductor de YouTube (necesita conexión).
- No se añade, por ahora, la opción de importar archivos de audio propios.
