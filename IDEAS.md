# HSK Viju: ideas pendientes

Lista de mejoras que se han hablado y todavía no están hechas. Recomendación: empezar por las pruebas automáticas (1).

## Para no perder el progreso

## Para aprender mejor
- **Respuestas con matices** (Otra vez / Difícil / Bien / Fácil) en vez de solo acierto o fallo, para afinar la estabilidad de `grade()`. Toca todos los ejercicios: es el cambio más grande que queda del repaso espaciado.
- **Repasar desde una lectura las palabras que tocaste** para ver su ficha (marcarlas para el repaso de hoy).
- **Velocidad de voz por lectura** (lenta / normal) junto a la persona.
- **Insignias discretas por personaje** al completar todas sus lecturas (estilo sobrio de `PRODUCT.md`).

## Cultura y diversión
- **Más personajes y más conversaciones** entre parejas (hay 11 personajes y 10 conversaciones; las parejas deben llevar `voz.n` de distinta paridad). Ideas: disfraces por fiesta (gorro, farolillo) usando `fiestas.js`, rasgos de dibujo (pecas, barba, gorro), elegir tu propio avatar para el perfil.
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
- Personajes y lecturas (sw v54-v74): repertorio de 11 personajes con avatar SVG propio (fondo, accesorios, parpadeo, boca que habla, expresiones con ? y !, gesto al empezar cada frase) y voz propia (tono, velocidad y voz china); 49 lecturas y 10 conversaciones de dos con persona a cada lado; la lectura muestra la conversación entera que crece con «Siguiente», con «Escuchar toda la lectura» al terminar; ficha de palabra flotante bajo la palabra tocada; preguntas de comprensión (no de memoria ni por descarte) y repaso suave de las palabras que contienen.
- Botón atrás (sw v66): una entrada de historial por pantalla nueva y atrás nunca añade entradas (Chrome del móvil omite las añadidas sin tocar la pantalla); al volver a una lista se recupera la altura de la que abriste la lectura o el diálogo (sw v74).
- Repaso espaciado con curva del olvido (sw v73): estabilidad por palabra (R = 0,9^(t/s)), retención media y curva en «Hoy», repaso ordenado por riesgo, «reforzar las más flojas», planificador del examen (ninguna palabra espera más de ~1/4 del tiempo que falta) y retención estimada en la ficha de cada palabra (sw v74).

## Decisiones ya tomadas
- **Pronunciación (grabarse, compararse y puntuar con reconocimiento de voz): descartada.** No se hace ni se vuelve a proponer.
- Diseño: se trabaja con prototipos/código HTML, no con Figma. Las reglas visuales viven en `DESIGN.md`; el contexto de producto, en `PRODUCT.md`.
- Fuentes: solo del sistema (sin descargas). Serif china solo para caracteres; Georgia para títulos; sans del sistema para el resto.
- Iconos: de línea, de Lucide (licencia ISC), en `iconos.js` y dentro de un marco de sello. El usuario descartó los emojis («gritan IA») y también los caracteres chinos como iconos («no se entienden»).
- No se incluyen grabaciones ni letras de canciones con derechos de autor dentro de la app; el Top 10 usa el reproductor de YouTube (necesita conexión).
- No se añade, por ahora, la opción de importar archivos de audio propios.

- HSK 6 por tandas (sw v88): hecha la tanda 1 (A-C, 151 palabras nuevas en `nuevo6a.js` + `frases6a.js`; de ~300 candidatas la mitad ya estaba en HSK 1-5, así que se filtra con un script antes de escribir las frases). Siguiente: D en adelante en `nuevo6b.js`/`frases6b.js`. HSK 6 ya tiene 4 diálogos (`dialogos6.js`) y 5 lecturas (`lecturas6.js`, sw v89); las pantallas ocultan un nivel sin contenido.
