# HSK Viju: ideas pendientes

Lista de mejoras que se han hablado y todavía no están hechas. Recomendación: empezar por las pruebas automáticas (1).

## Para no perder el progreso

## Para aprender mejor

## Cultura y diversión
14. **Más canciones tradicionales con melodía y karaoke.** Faltan las partituras (簡譜) de 茉莉花 y 送别 para añadir su melodía.

## Pulido
- Los temas claro y oscuro siguen escritos dos veces en `index.html`; unificarlos con `light-dark()` cuando no importe dejar fuera iOS < 17.5.

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

- HSK 7 y 8 hechos (sw v99): HSK 7 = 351 palabras (A-D) y HSK 8 = 282 (E-G), cada nivel con 4 diálogos y 5 lecturas (nuevo7a-b, nuevo8a-b, frases7-8, dialogos7-8, lecturas7-8). Quedan por cubrir H-Z del vocabulario avanzado si se quiere seguir.
- HSK 6 vocabulario completo (sw v93): A-Z, 767 palabras nuevas con frase (nuevo6a-e.js, frases6a-e.js). El nivel 5 de la app ya cubría casi todo el HSK 6 clásico, así que solo se añadieron las que faltaban. Siguiente posible nivel: HSK 7-9 (palabras realmente nuevas). HSK 6 ya tiene 4 diálogos (`dialogos6.js`) y 5 lecturas (`lecturas6.js`); las pantallas ocultan un nivel sin contenido.

## Hecho en la última tanda (sw v116)
- **Respuestas con matices en las tarjetas:** Otra vez / Difícil / Bien / Fácil; «Difícil» hace crecer menos la estabilidad y «Fácil» más (`grade(id, ok, niv)`). Los demás ejercicios siguen siendo acierto/fallo porque no hay forma natural de graduar una respuesta de elegir.
- **Repasar desde una lectura:** al terminar, botón «Repasar las N palabras que tocaste» (sesión mixta con ellas).
- **Velocidad de voz** (lenta / normal / rápida) dentro de cada lectura, la misma que en Ajustes.
- **Insignias por personaje** en Logros: se ganan con el 100 % en todas sus lecturas.
- **Rasgos de dibujo nuevos** (pecas, barba, gorro), adornos de temporada en los avatares. Personajes y conversaciones nuevas: los añade el usuario.
- **Gramática de HSK 6-8:** 38 puntos (`gramatica4.js`).
- **Lecturas nuevas:** 3 más en cada nivel de HSK 3 a 8 (`lecturas9a-b.js`).
- **Tema de alto contraste oscuro**, sin emojis en `fiestas.js`/`cultura.js`.
- **Carga:** el service worker espera a la red como máximo 4 s y si no, sirve la copia guardada.

## Pendiente
- **Canciones con melodía (idea 14):** faltan las partituras de 茉莉花 y 送别.
- **Unificar temas claro/oscuro con `light-dark()`:** descartado por ahora (rompe iOS < 17.5).
- **Notificaciones push reales:** necesitan un servidor; queda el recordatorio .ics.
- **Erhua (儿):** 31 palabras y 122 frases con sílabas ≠ caracteres (casos conocidos, topes en `tests/datos.js`).
- **Carga:** 90 scripts (1,7 MB sin comprimir); juntarlos exigiría un paso de compilación que el proyecto no tiene.
- **Niveles 7 y 8:** el reparto es alfabético, no por dificultad; renombrarlos o repartirlos por frecuencia si se consigue una lista fiable.
- **Lecturas:** solo el 1-6 % de las palabras de HSK 4-8 aparecen en alguna lectura; las lecturas de HSK 1 usan unas 7 palabras de nivel superior.
