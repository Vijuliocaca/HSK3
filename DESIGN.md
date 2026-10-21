---
name: HSK Viju
description: Estudio del chino HSK 1-5 en español, con la serenidad de un templo.
colors:
  lacquer-red: "#b3282d"
  lacquer-fill: "#b3282d"
  aged-gold: "#b8892b"
  gold-ink: "#8c5f00"
  gold-inlay: "rgba(232,196,120,.75)"
  jade: "#28704a"
  rice-paper: "#f3ead8"
  paper-panel: "#fbf6ea"
  ink: "#2b1d14"
  weathered-wood: "#725e4a"
  gold-leaf-line: "#d9c9a6"
  control-edge: "#928362"
  jade-wash: "#dfeed8"
  cinnabar-wash: "#ffe3dc"
  cream-on-lacquer: "#fde9c9"
  tone-1: "#be3729"
  tone-2: "#9e5600"
  tone-3: "#2a764b"
  tone-4: "#2a62b5"
  tone-neutral: "#725e4a"
  night-temple: "#1a1210"
  night-panel: "#261a16"
  night-ink: "#f0e4cf"
  night-lacquer: "#e05955"
  night-lacquer-fill: "#bf3f3d"
  night-gold: "#d4a94a"
  night-control-edge: "#79665d"
  contrast-white: "#fff"
  contrast-black: "#000"
  contrast-track: "#ccc"
typography:
  hanzi-display:
    fontFamily: "Noto Serif SC, Source Han Serif SC, Songti SC, STSong, SimSun, serif"
    fontSize: "3.4rem"
    lineHeight: 1.1
  headline:
    fontFamily: "Georgia, Noto Serif, Times New Roman, Noto Serif SC, Songti SC, STSong, serif"
    fontSize: "1.6rem"
    fontWeight: 700
  section:
    fontFamily: "Georgia, Noto Serif, Times New Roman, Noto Serif SC, Songti SC, STSong, serif"
    fontSize: "1.15rem"
    fontWeight: 700
  title:
    fontFamily: "system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
  body:
    fontFamily: "system-ui, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.4
  label:
    fontFamily: "system-ui, sans-serif"
    fontSize: "0.8rem"
  seal:
    fontFamily: "Noto Serif SC, Source Han Serif SC, Songti SC, STSong, SimSun, serif"
    fontSize: "1.25rem"
    fontWeight: 700
rounded:
  ink: "3px"
  seal: "4px"
  panel: "6px"
  tablet: "8px"
  stage: "14px"
spacing:
  xs: "0.4rem"
  sm: "0.6rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  gutter: "16px"
  touch: "2.75rem"
components:
  button-primary:
    backgroundColor: "{colors.lacquer-fill}"
    textColor: "#ffffff"
    rounded: "{rounded.panel}"
    padding: "0.85rem"
  option:
    backgroundColor: "{colors.paper-panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "0.85rem"
  option-correct:
    backgroundColor: "{colors.jade-wash}"
    textColor: "{colors.ink}"
  option-wrong:
    backgroundColor: "{colors.cinnabar-wash}"
    textColor: "{colors.ink}"
  chip:
    backgroundColor: "{colors.paper-panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.seal}"
    padding: "0.4rem 0.9rem"
    height: "2.75rem"
  chip-selected:
    backgroundColor: "{colors.lacquer-fill}"
    textColor: "#ffffff"
  mode-tile:
    backgroundColor: "{colors.paper-panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "0.7rem 0.75rem"
  mode-tablet-lacquer:
    backgroundColor: "{colors.lacquer-fill}"
    textColor: "#ffffff"
    rounded: "{rounded.panel}"
    padding: "0.85rem 1rem"
  seal-mark:
    backgroundColor: "{colors.rice-paper}"
    textColor: "{colors.lacquer-red}"
    typography: "{typography.seal}"
    rounded: "{rounded.seal}"
    size: "2.25rem"
  logo-seal:
    backgroundColor: "{colors.lacquer-fill}"
    textColor: "#ffffff"
    rounded: "{rounded.seal}"
    size: "2.1rem"
  input:
    backgroundColor: "{colors.paper-panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "0.8rem"
---

# Design System: HSK Viju

<!-- Actualizado tras la tanda de impeccable del 2026-10-21 (document, colorize, adapt, typeset, quieter, layout, delight, polish; sw v53). -->

## Overview

**Creative North Star: "El patio del templo"**

Estudiar en HSK Viju es como entrar en el patio de un templo: un espacio ordenado y tranquilo, enmarcado por columnas de laca roja y vigas con filete de oro gastado. El suelo es papel y piedra clara. En el centro, el carácter chino ocupa el lugar del altar: es lo más grande y lo único que pide atención. Todo lo demás (botones, cifras, menús) es arquitectura que lo enmarca sin competir.

Los componentes se sienten **táctiles, como objetos**: tablillas con doble filete dorado, tablillas lacadas con incrustación de oro, una placa de cifras y sellos que firman cada sección con su carácter. Tienen peso y material, pero con la contención de un templo, no la acumulación de un restaurante. La densidad es baja y la composición, de una columna y vertical, pensada para el pulgar en un móvil.

El sistema rechaza la plantilla SaaS (tarjetas idénticas, degradados, cifras-héroe), la monotonía gris del libro de texto y la gamificación chillona tipo Duolingo.

**Key Characteristics:**
- El hanzi en serif china es siempre el elemento más grande de la pantalla.
- Cada sección se firma con un sello de un carácter (听 Escuchar, 读 Lecturas, 考 Examen); el sello de la pestaña activa se estampa en laca.
- Laca roja para la acción y el sello; oro para filetes y marcos; oro tinta solo cuando el dorado tiene que ser texto.
- Superficies de papel con un doble filete interior que las convierte en objetos.
- Una sola columna (máx. 520 px) y una barra de navegación fija abajo.
- Celebración sobria: un sello estampado, no confeti.

## Colors

Laca, oro y jade sobre papel de arroz. Cada color tiene una sola función: el rojo actúa, el oro enmarca y el papel sostiene.

### Primary
- **Laca roja de templo** (lacquer-red): texto y bordes rojos (pinyin de ejemplo, opción elegida, celda seleccionada, foco, barras de progreso, sellos de modo).
- **Relleno de laca** (lacquer-fill): fondo de las acciones (botón principal, chip activo, tablillas lacadas, sello 学, aviso de versión, pestaña activa). Sobre él, blanco y **crema sobre laca** (cream-on-lacquer) para el texto secundario.
- En modo oscuro se separan: **laca nocturna** (night-lacquer) para texto y **relleno nocturno** (night-lacquer-fill), más profundo, para que el blanco encima pase de 4,5:1.

### Secondary
- **Oro envejecido** (aged-gold): filetes, marcos, subrayado de palabras conocidas, línea del navegador, bajo los títulos de sección.
- **Oro tinta** (gold-ink): el oro cuando tiene que ser texto (cifras del Top 10, secciones del examen, «ver más»).
- **Incrustación de oro** (gold-inlay): el filete interior de las tablillas lacadas y el borde de sus sellos.

### Tertiary
- **Jade** (jade): acierto y lección completada, con su lavado **jade-wash**. El error usa **cinnabar-wash** con borde de laca.

### Neutral
- **Papel de arroz** (rice-paper): fondo de la página y fondo de los sellos de modo.
- **Panel de papel** (paper-panel): tablillas, opciones, chips y navegación.
- **Tinta** (ink): todo el texto principal y los títulos de sección.
- **Madera gastada** (weathered-wood): texto secundario y etiquetas (≥4,6:1 en todos los fondos claros).
- **Filete de pan de oro** (gold-leaf-line): bordes decorativos, divisores y carril de las barras.
- **Borde de control** (control-edge): contorno de los campos de texto y fecha (≥3:1).
- **Tema oscuro**: noche de templo, panel nocturno, tinta clara, oro nocturno y borde de control nocturno.
- **Alto contraste**: blanco, negro y un carril gris (contrast-track) para las barras.

Cada tema declara su `color-scheme` (claro, oscuro o según el sistema), para que los controles del navegador (fecha, hora, barras de desplazamiento) sigan al tema. Los placeholders usan madera gastada.

### Tonos del pinyin
tone-1 a tone-4, más tone-neutral para el tono neutro. Todos ≥4,6:1 sobre papel; en oscuro se aclaran y en alto contraste se oscurecen.

### Named Rules
**La Regla del Oro que Enmarca.** El oro envejecido es material de marco. Si el dorado tiene que leerse como texto, se usa oro tinta.

**La Regla de la Laca que Actúa.** El rojo marca lo que se puede pulsar ahora o lo que acaba de pasar (elegido, error, sello). Un fondo rojo es siempre relleno de laca, nunca la laca de texto.

**La Regla del Tono con Marca.** El color del tono nunca va solo: el pinyin conserva su diacrítico o el número de tono, por el daltonismo.

## Typography

**Hanzi Font:** serif china del sistema (Noto Serif SC, Source Han Serif SC, Songti SC, STSong o SimSun)
**Title Font:** Georgia (con Noto Serif y Times New Roman, y la serif china para los caracteres mezclados)
**Body Font:** system-ui (con sans-serif)

**Character:** La serif china, con contraste de pincel, queda solo para los caracteres. Georgia pone voz clásica a los títulos y a los sellos de resultado, y la sans del sistema se ocupa de todo lo funcional (botones, pinyin, cifras y explicaciones) para que la interfaz desaparezca. No se descarga ninguna fuente: cero KB y funciona sin conexión.

### Hierarchy
- **Hanzi display** (3.4rem, line-height 1.1): el carácter en tarjetas y listas. En el estudio sube a 4.5rem y en las pantallas de práctica a `clamp(4.5rem, 26vw, 7.5rem)`.
- **Headline** (Georgia 700, 1.6rem; 1.3rem por debajo de 380 px): el `h1` de cada pantalla, junto al sello.
- **Section** (Georgia 700, 1.15rem, en tinta, con un filete de oro de 1 px debajo): los `h2` de sección, en minúsculas normales.
- **Title** (sans 700, 1rem): nombres de modo (0.95rem en la rejilla), botón principal (600) y cifras de la placa (1.5rem, tabulares).
- **Body** (sans 400, 1rem): explicaciones, opciones (1.05rem; 1.3rem en práctica) y gramática (1.05rem, line-height 1.55, `text-wrap: pretty`).
- **Label** (sans, 0.8rem): descripciones de modo y etiquetas de la barra (0.75rem).
- **Seal** (serif china 700, 1.25rem; 1.1rem en la barra y la cabecera): el carácter de cada sello.

### Scale
Todos los tamaños del CSS salen de una escala de tokens: `--fs-xs` 0.8rem, `--fs-sm` 0.875rem, `--fs-md` 1rem, `--fs-lg` 1.15rem, `--fs-xl` 1.3rem, `--fs-2xl` 1.6rem, `--fs-3xl` 2rem y `--fs-4xl` 2.4rem, más `--fs-hz` (3.4rem) y `--fs-hz-lg` (4.5rem) para los caracteres. Hay dos excepciones a propósito: el hanzi de las pantallas de práctica (`clamp(4.5rem, 26vw, 7.5rem)`, que se adapta al ancho para ocupar la pantalla) y el texto de los ejes del gráfico SVG (9px, que escala con el propio SVG). El usuario puede ampliar todo desde Ajustes (tamaño de la raíz en %).

### Named Rules
**La Regla del Carácter Primero.** En cada pantalla, el hanzi es el texto de mayor tamaño. Ningún título ni cifra puede superarlo.

**La Regla de la Serif para el Chino.** La serif china no se usa para texto latino: en Windows cae en SimSun y estropea las letras. Lo mixto va con la fuente de título.

## Layout

Una sola columna centrada de 520 px como máximo, con 16 px de margen lateral más las áreas seguras del dispositivo. Abajo hay una reserva de 88 px para la barra de navegación fija; en las pantallas de práctica la barra desaparece y el contenido ocupa toda la altura (`100dvh`): la pregunta arriba (flex 1.6) y las respuestas abajo (flex 1.5), en filas iguales.

El inicio sigue la prioridad de uso: la placa de cifras y la meta, los niveles HSK, «Hoy en chino», las tres tablillas lacadas (aprender, gramática y temas) y los modos agrupados por significado: **Practicar lo estudiado**, **Leer y escuchar**, **Cultura china** y **Lo tuyo**. Cada grupo es una rejilla compacta de 2 columnas con fichas de 4.25rem de alto (sello a la izquierda, nombre y descripción); si el número es impar, la última ficha ocupa todo el ancho.

El ritmo vertical usa pasos en rem (0.4 / 0.6 / 0.75 / 1 / 1.5), con más aire encima de un título de sección (1.75rem) que debajo (0.5rem). Todo control mide al menos 2.75rem (44 px). Solo hay un punto de corte, a 380 px, que reduce el título y las cifras.

## Elevation & Depth

Casi plano: la profundidad viene del **material**, no de las sombras. Los paneles se elevan con un doble filete interior (borde exterior más un anillo dorado translúcido dentro), como una tablilla enmarcada. Las únicas sombras reales son las del aviso de actualización (flotante) y el anillo de selección.

### Shadow Vocabulary
- **Marco de tablilla** (`box-shadow: inset 0 0 0 3px var(--card), inset 0 0 0 4px rgba(184,137,43,.45)`): estadísticas, placa de cifras, modos, tarjeta de estudio, tarjetas y aviso de examen.
- **Incrustación de oro** (`box-shadow: inset 0 0 0 3px var(--act), inset 0 0 0 4px rgba(232,196,120,.75)`): las tablillas lacadas.
- **Brillo del sello** (`box-shadow: inset 0 0 0 2px rgba(255,255,255,.35)`): el sello 学.
- **Aviso flotante** (`box-shadow: 0 4px 14px rgba(0,0,0,.3)`): solo el aviso de nueva versión.
- **Anillo de selección** (`box-shadow: 0 0 0 2px var(--pri)`): celda elegida al emparejar y frase que suena.

Los dos dorados translúcidos son tokens: `--frame` (filete de tablilla) y `--inlay` (incrustación de las tablillas lacadas).

### Motion
Movimiento breve y de estado: entrada de pantalla de 0.25s (fundido más 6 px), pulsación a escala .98, sacudida de 0.25s al fallar y barras que crecen con `transform: scaleX`, con salida exponencial. Con `prefers-reduced-motion` desaparecen los desplazamientos y la sacudida; la entrada queda en un fundido de 0.2s y el acierto o error sigue marcado por color y ✓/✗.

### Named Rules
**La Regla del Objeto Enmarcado.** Un panel se distingue por su marco (filete dorado interior), no por flotar ni por una banda de color en un lado.

## Shapes

Esquinas apenas suavizadas, como madera lacada cortada: 4 px en sellos y chips, 6 px en paneles, opciones y entradas, y 8 px en las tablillas grandes (estudio, ejemplos, canciones). El botón de empezar de la práctica llega a 14 px. Los botones de icono son círculos. El sello 学 y el sello de resultado van girados (−5° y −6°), como si se hubieran puesto a mano; los sellos de modo van rectos, como una impresión de tinta. Los ejemplos de frases usan borde dorado discontinuo, como papel recortado.

## Components

### Buttons
- **Shape:** esquinas suaves (6 px).
- **Primary:** tablilla de relleno de laca con texto blanco en sans semibold; ocupa todo el ancho (padding 0.85rem; 1.15rem en práctica).
- **Hover / Focus:** sin hover propio; el foco es un contorno de laca de 3 px separado 2 px.
- **Icon buttons:** círculos de 2.75rem con borde fino: escuchar (altavoz SVG), marcar como difícil (☆/★) y ver trazos (sello 笔).

### Chips
- **Style:** panel de papel con borde de filete, esquinas de 4 px y 2.75rem de alto.
- **State:** el seleccionado se rellena de laca. Se usan para filtrar niveles HSK y para las opciones de los ajustes.
- **Grupo segmentado:** las opciones de Ajustes se reparten a partes iguales en una fila; si el texto ampliado no cabe, pasan a una segunda fila en lugar de desbordar.

### Cards / Containers
- **Corner Style:** 6-8 px.
- **Background:** panel de papel sobre papel de arroz.
- **Shadow Strategy:** el marco de tablilla (ver Elevation).
- **Border:** 1 px de filete por los cuatro lados. El aviso de examen y el repaso pendiente cambian el filete por laca.
- **Internal Padding:** 0.7-1.5rem.

### Inputs / Fields
- **Style:** panel de papel, borde de control de 2 px y esquinas de 6 px; en práctica, texto de 1.6rem centrado. El cursor de escritura es de laca.
- **Focus:** el contorno de laca común.

### Navigation
- **Style:** barra fija abajo sobre panel de papel, con un filete dorado de 2 px arriba. Cuatro pestañas con sello: 首 Inicio, 今 Hoy, 考 Examen, 进 Progreso. El carácter va en serif china y la etiqueta en sans de 0.75rem en madera gastada; en la pestaña activa el sello se estampa (relleno de laca, carácter blanco), la etiqueta pasa a laca en negrita y lleva `aria-current="page"`.
- **Cabecera:** dos sellos de contorno, 词 (vocabulario) y 设 (ajustes), con área táctil de 44 px.

### Seal mark (signature)
Cuadrado de 2.25rem con borde de 1.5 px en laca, fondo de papel de arroz y un carácter en serif china de laca: la impresión de un sello en tinta. Firma cada modo: 配 Emparejar, 译 Elegir traducción, 卡 Tarjetas, 听 Escuchar, 拼 Escribir pinyin, 音 Elegir pinyin, 字 Elegir hanzi, 调 Entrenar tonos, 填 Completar, 句 Escuchar la frase, 序 Ordenar, 笔 Trazos, 快 Contrarreloj, 读 Lecturas, 话 Diálogos, 歌 Canciones, 节 Fiestas, 榜 Top 10, 影 Más Top 10, 难 Difíciles, 单 Mis listas, 奖 Logros. En las tablillas lacadas se invierte: carácter blanco y borde de oro (学 Aprender, 法 Gramática, 类 Temas). Los 58 temas de vocabulario llevan su sello en `temas.js` (果 Frutas, 车 Transporte, 医 Salud…), que también encabeza el nombre de sus lecciones; las fiestas usan el primer carácter de su nombre chino. En Logros, cada logro lleva su sello (恒 Racha, 学 Estudiadas, 熟 Dominadas…) y las medallas son tres sellos, 铜 银 金: en laca las ganadas y al 35 % de opacidad las pendientes, con el recuento en texto oculto para el lector. El lector de pantalla los ignora (`aria-hidden`) y lee solo el nombre.

### Logo seal (signature)
Cuadrado de relleno de laca de 2.1rem con 学 en serif blanca, girado −5° y con un brillo interior. Firma el título de la app. Su pariente es el **sello de resultado**: borde de laca de 3 px, girado −6°, en fuente de título, que se estampa al terminar un examen.

### Stats plaque (signature)
Las cifras del inicio, de Hoy y de Progreso forman una sola placa, como un 匾额: un marco de tablilla dividido en celdas por filetes de 1 px, con cifras en sans tabular y etiquetas alineadas debajo.

### Answer option (signature)
La pieza central de la práctica: una tablilla de 2 px de borde que, al responder, se lava de jade (acierto, con ✓) o de cinabrio (error, con ✗). En las pantallas de práctica las opciones ocupan la mitad inferior en filas iguales y grandes para el pulgar. La explicación de la respuesta usa el mismo lavado, con borde completo.

### Celebration and confirmation
Al terminar una práctica o una lección, el `h1` lleva un sello estampado (好 «¡Hecho!», 学 «¡Lección estudiada!») en lugar de confeti o emojis. Las confirmaciones viven en la propia pantalla: borrar una lista pide un segundo toque en el mismo botón, que pasa a laca con el texto «¿Borrar…? Toca otra vez»; importar una copia muestra un aviso con «Sustituir mi progreso» y «Cancelar». Las listas nuevas se nombran en un campo en línea. Solo salir del examen conserva el `confirm()` del navegador, porque también lo dispara el botón «atrás», que necesita una respuesta inmediata.

### Example tablet
Panel en papel de arroz con borde dorado discontinuo: la frase en chino (serif 1.45rem) con el altavoz en laca, el pinyin en laca y la traducción en madera gastada. Al tocarlo suena; cuando está sonando, el borde se vuelve continuo y de laca.

## Do's and Don'ts

### Do:
- **Do** mantener el hanzi como el texto más grande de cada pantalla (3.4rem o más).
- **Do** firmar cada sección nueva con un sello de un carácter que la represente, en serif china y con `aria-hidden`.
- **Do** usar el marco de tablilla (doble filete dorado interior) para distinguir paneles.
- **Do** usar el relleno de laca para fondos de acción y la laca de texto para texto y bordes.
- **Do** acompañar cada color de tono de su diacrítico o número de tono.
- **Do** dar a cada control al menos 2.75rem (44 px) de área táctil.
- **Do** definir cada color nuevo en los cuatro temas: claro, oscuro (sistema y forzado) y alto contraste.

### Don't:
- **Don't** usar el oro envejecido como texto: para eso está el oro tinta.
- **Don't** usar la serif china para texto latino ni para botones.
- **Don't** usar bandas de color en un lado (`border-left` de más de 1 px) en tarjetas, avisos o explicaciones.
- **Don't** poner títulos de sección en mayúsculas espaciadas ni antetítulos sobre los títulos.
- **Don't** usar emojis, ni como iconos ni como adorno en botones, títulos o mensajes; el altavoz es el único icono dibujado (SVG) y ▶ el único símbolo de reproducir.
- **Don't** usar `prompt()` ni `alert()`: los nombres, avisos y errores van en la pantalla.
- **Don't** convertir la tradición en tópico de restaurante (dragones, farolillos, rojo y oro en cada superficie).
- **Don't** usar degradados violeta, cifras-héroe ni cuadrículas de tarjetas idénticas (SaaS genérico).
- **Don't** usar mascotas, colores chillones ni celebraciones ruidosas (clon de Duolingo).
