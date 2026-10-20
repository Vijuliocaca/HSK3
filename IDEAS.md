# HSK Viju: ideas pendientes

Lista de mejoras que se han hablado y todavía no están hechas. Recomendación: empezar por las pruebas automáticas (1).

## Para no perder el progreso
1. **Pruebas automáticas en el repositorio:** guardar las baterías de prueba (recorrido de pantallas, desbordes a 320-412 px, datos) y ejecutarlas en cada subida.

## Para aprender mejor
4. **Pronunciación:** grabarte, compararte con el modelo y, en Chrome, puntuar con reconocimiento de voz.
12. **Listas propias de palabras.**

## Cultura y diversión
13. **Calendario de fiestas chinas** con las fechas de este año.
14. **Más canciones tradicionales con melodía y karaoke.** Faltan las partituras (簡譜) de 茉莉花 y 送别 para añadir su melodía.
15. **Otros «Top 10»:** películas, series, platos típicos.
16. **Logros y rachas semanales** con medallas.

## Pulido
17. **Accesibilidad:** alto contraste, lector de pantalla, uso con teclado.
18. **Recordatorio diario** (ver notas abajo).
19. **Compartir el progreso** como imagen.
20. **Carga más ligera:** cargar gramática y canciones solo cuando se usan.

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

## Decisiones ya tomadas
- No se incluyen grabaciones ni letras de canciones con derechos de autor dentro de la app; el Top 10 usa el reproductor de YouTube (necesita conexión).
- No se añade, por ahora, la opción de importar archivos de audio propios.
