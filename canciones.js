// Canciones para practicar: solo letras tradicionales o de dominio público.
// Cada línea: [frase con | entre palabras, pinyin, español]
self.SONGS = [
  { t: "两只老虎", p: "Liǎng zhī lǎohǔ", es: "Dos tigres", lv: 1,
    nota: "Canción infantil muy popular, con la misma melodía que «Fray Santiago». Es de las primeras que aprenden los niños chinos.",
    lines: [
      ["两只|老虎，|两只|老虎，", "Liǎng zhī lǎohǔ, liǎng zhī lǎohǔ,", "Dos tigres, dos tigres,"],
      ["跑|得|快，|跑|得|快。", "Pǎo de kuài, pǎo de kuài.", "corren rápido, corren rápido."],
      ["一只|没有|耳朵，", "Yì zhī méiyǒu ěrduo,", "uno no tiene orejas,"],
      ["一只|没有|尾巴，", "yì zhī méiyǒu wěiba,", "otro no tiene cola,"],
      ["真|奇怪，|真|奇怪。", "zhēn qíguài, zhēn qíguài.", "qué raro, qué raro."]] },
  { t: "小星星", p: "Xiǎo xīngxing", es: "Estrellita", lv: 1,
    nota: "La versión china de «Twinkle, twinkle, little star». Se canta en las guarderías de todo el país.",
    lines: [
      ["一闪|一闪|亮|晶晶，", "Yì shǎn yì shǎn liàng jīngjīng,", "Titila, titila, brilla y reluce,"],
      ["满天|都|是|小|星星。", "mǎntiān dōu shì xiǎo xīngxing.", "todo el cielo está lleno de estrellitas."],
      ["挂|在|天上|放|光明，", "Guà zài tiānshàng fàng guāngmíng,", "colgadas del cielo dan su luz,"],
      ["好像|许多|小|眼睛。", "hǎoxiàng xǔduō xiǎo yǎnjing.", "como muchos ojitos."]] },
  { t: "祝你生日快乐", p: "Zhù nǐ shēngrì kuàilè", es: "Feliz cumpleaños", lv: 1,
    nota: "La canción de cumpleaños con la melodía universal. En China también se comen fideos largos (长寿面) para desear una vida larga.",
    lines: [
      ["祝|你|生日|快乐，", "Zhù nǐ shēngrì kuàilè,", "Te deseo un feliz cumpleaños,"],
      ["祝|你|生日|快乐，", "zhù nǐ shēngrì kuàilè,", "te deseo un feliz cumpleaños,"],
      ["祝|你|幸福，|祝|你|快乐，", "zhù nǐ xìngfú, zhù nǐ kuàilè,", "te deseo felicidad, te deseo alegría,"],
      ["祝|你|生日|快乐。", "zhù nǐ shēngrì kuàilè.", "te deseo un feliz cumpleaños."]] },
  { t: "茉莉花", p: "Mòlìhuā", es: "Flor de jazmín", lv: 3,
    nota: "Canción folclórica de Jiangsu con más de 200 años. Puccini usó su melodía en la ópera «Turandot» y es una de las músicas chinas más reconocidas del mundo.",
    lines: [
      ["好|一|朵|美丽|的|茉莉花，", "Hǎo yì duǒ měilì de mòlìhuā,", "¡Qué hermosa flor de jazmín!,"],
      ["芬芳|美丽|满|枝桠，", "fēnfāng měilì mǎn zhīyā,", "fragante y bella llena las ramas,"],
      ["又|香|又|白|人人|夸。", "yòu xiāng yòu bái rénrén kuā.", "tan fragante y blanca que todos la alaban."],
      ["让|我|来|将|你|摘|下，", "Ràng wǒ lái jiāng nǐ zhāi xià,", "déjame cortarte,"],
      ["送|给|别人|家，", "sòng gěi biérén jiā,", "para regalarte a otra casa,"],
      ["茉莉花|呀|茉莉花。", "mòlìhuā ya mòlìhuā.", "jazmín, oh jazmín."]] },
  { t: "送别", p: "Sòngbié", es: "Despedida", lv: 5,
    nota: "Poema cantado de Li Shutong (李叔同, 1880-1942), escrito hacia 1915. Está en chino literario y es de las canciones más queridas por su tono nostálgico. Se canta con la melodía de una canción estadounidense.",
    lines: [
      ["长亭|外，|古道|边，|芳草|碧|连|天。", "Cháng tíng wài, gǔ dào biān, fāng cǎo bì lián tiān.", "Fuera del pabellón, junto al viejo camino, la hierba fragante verde se une con el cielo."],
      ["晚风|拂|柳|笛声|残，|夕阳|山|外|山。", "Wǎnfēng fú liǔ díshēng cán, xīyáng shān wài shān.", "El viento de la tarde roza los sauces, se apaga la flauta, el sol se pone tras montañas y más montañas."],
      ["天|之|涯，|地|之|角，|知交|半|零落。", "Tiān zhī yá, dì zhī jiǎo, zhījiāo bàn língluò.", "En el fin del cielo, en el rincón de la tierra, la mitad de los amigos se han dispersado."],
      ["一|壶|浊酒|尽|余欢，|今宵|别梦|寒。", "Yì hú zhuó jiǔ jìn yú huān, jīnxiāo bié mèng hán.", "Una jarra de vino turbio agota la alegría que queda; esta noche el sueño de despedida es frío."]] },
];

// Top 10 de canciones muy chinas (selección cultural, no una lista oficial). Sin letras: solo datos.
self.TOP10 = [
  { t: "茉莉花", p: "Mòlìhuā", es: "Flor de jazmín", a: "Canción folclórica de Jiangsu", y: "hace más de 200 años",
    d: "Probablemente la melodía china más conocida fuera de China. Puccini la usó en «Turandot» (1926) y se toca en actos internacionales como símbolo musical del país." },
  { t: "康定情歌", p: "Kāngdìng qínggē", es: "Canción de amor de Kangding", a: "Canción popular de Sichuan", y: "famosa desde mediados del siglo XX",
    d: "Cuenta un amor en Kangding, en el oeste de Sichuan. Su estribillo con «溜溜» (liūliū) es de los más reconocibles de la música tradicional china." },
  { t: "月亮代表我的心", p: "Yuèliang dàibiǎo wǒ de xīn", es: "La luna representa mi corazón", a: "Teresa Teng (邓丽君)", y: "versión famosa de 1977",
    d: "El gran clásico romántico en chino. Teresa Teng la hizo inmortal, aunque existía una grabación anterior de 1973. Se canta en bodas y en todos los karaokes." },
  { t: "甜蜜蜜", p: "Tián mì mì", es: "Dulce, dulce", a: "Teresa Teng (邓丽君)", y: "1979",
    d: "Adaptación de una canción indonesia con letra china. Vuelve a sonar en la película «Tian mi mi» (1996), de Hong Kong, y por eso la conocen varias generaciones." },
  { t: "我的中国心", p: "Wǒ de Zhōngguó xīn", es: "Mi corazón chino", a: "Zhang Mingmin (张明敏)", y: "1984",
    d: "Se hizo famosa en la Gala del Año Nuevo Chino de la televisión CCTV de 1984. Habla del vínculo de los chinos que viven en el extranjero con su tierra." },
  { t: "难忘今宵", p: "Nánwàng jīnxiāo", es: "Noche inolvidable", a: "Li Guyi (李谷一)", y: "1984",
    d: "Se estrenó en la Gala de 1984 y desde entonces suele cerrar la gran gala de Nochevieja china. Para muchas familias, oírla significa que empieza el Año Nuevo." },
  { t: "我和我的祖国", p: "Wǒ hé wǒ de zǔguó", es: "Mi patria y yo", a: "Himno patriótico muy popular", y: "1985",
    d: "Una de las canciones patrióticas más cantadas en celebraciones. Dio nombre a la película colectiva «Mi patria y yo» (2019)." },
  { t: "一剪梅", p: "Yī jiǎn méi", es: "Una rama de ciruelo", a: "Fei Yu-ching (费玉清)", y: "años 80",
    d: "Gran clásico romántico de la música pop en chino, asociado al invierno y a la nostalgia. Su título viene de «一剪梅», el nombre de un antiguo patrón de poesía clásica (词牌, cípái), el mismo de un célebre poema de Li Qingzhao." },
  { t: "青花瓷", p: "Qīnghuācí", es: "Porcelana azul y blanca", a: "Jay Chou (周杰伦)", y: "2007",
    d: "Ejemplo del estilo «中国风» (zhōngguófēng, «aire chino»): música pop con instrumentos y poesía tradicionales. Letra de Vincent Fang (方文山)." },
  { t: "小苹果", p: "Xiǎo píngguǒ", es: "Manzanita", a: "Chopstick Brothers (筷子兄弟)", y: "2014",
    d: "Fenómeno viral: millones de personas la bailaron en plazas y parques («广场舞», guǎngchǎngwǔ), un hábito muy típico de la China actual." },
];

// Qué escuchar de cada canción: v = vídeo de YouTube que se reproduce dentro de la app (solo se usan vídeos que permiten incrustarse),
// vn = qué versión es, o = vídeo original/oficial que se abre fuera de la app (si el incrustado es otra versión), q = búsqueda para Spotify
(function () {
  const t = {
    "茉莉花": ["iPxp0s_prCM", "versión de la gala «中国民歌盛典», en el canal de CCTV", "", "茉莉花 民歌"],
    "康定情歌": ["nE-sLijay0A", "versión del programa «中国民歌大会», en el canal de CCTV", "", "康定情歌"],
    "月亮代表我的心": ["ngTFC0x3cw4", "versión en directo de la gala de CCTV, con música de pingtan de Suzhou", "IgvDMB5fR-8", "月亮代表我的心 邓丽君"],
    "甜蜜蜜": ["cmiTtVv0yAE", "versión en directo de «经典之夜», en el canal de CCTV", "5eF8oOWtsk4", "甜蜜蜜 邓丽君"],
    "我的中国心": ["HFdfljqRfBY", "actuación en la Gala de 1984, en el canal de CCTV", "", "我的中国心 张明敏"],
    "难忘今宵": ["eBoONjVbKiI", "versión de la Gala de 1990, en el canal de CCTV", "", "难忘今宵 李谷一"],
    "我和我的祖国": ["Im4WQRhBnJ8", "versión de CCTV, cantada por Xiao Zhan (肖战)", "", "我和我的祖国"],
    "一剪梅": ["AQtgnq-5ch0", "actuación de Fei Yu-ching (费玉清), en el canal Music TV", "e9U249EPq_M", "一剪梅 费玉清"],
    "青花瓷": ["xZWCodoAx-o", "versión de piano de un pianista (no es el original)", "Z8Mqw0b9ADs", "青花瓷 周杰伦"],
    "小苹果": ["yfHowUwT-Cs", "audio oficial (canal «Topic» de YouTube Music)", "", "小苹果 筷子兄弟"],
  };
  self.TOP10.forEach(x => { const e = t[x.t]; x.v = e[0]; x.vn = e[1]; x.o = e[2]; x.q = e[3]; });
  const s = {
    "两只老虎": ["0P0aApWogd0", "versión del canal infantil 貝樂虎 (BabyTiger)", "", "两只老虎 儿歌"],
    "小星星": ["ksLxLjiyyGU", "versión del canal infantil LiaChaCha (依娜和恰恰)", "", "小星星 儿歌"],
    "祝你生日快乐": ["biMn4YC5qCI", "versión del canal infantil 寶寶巴士 (BabyBus)", "", "祝你生日快乐 歌"],
    "茉莉花": ["iPxp0s_prCM", "versión de la gala «中国民歌盛典», en el canal de CCTV", "", "茉莉花 民歌"],
    "送别": ["N_QU8Ax05-o", "versión del canal CCTV中文", "76XjSH1KpBM", "送别 李叔同"],
  };
  self.SONGS.forEach(x => { const e = s[x.t]; x.v = e[0]; x.vn = e[1]; x.o = e[2]; x.q = e[3]; });
})();

// Melodías (dominio público) para escuchar sin conexión: una cadena por línea de letra, en notación numérica (1 = do).
// «5:2» dura 2 pulsos, «1'» es una octava más aguda, «0» es un silencio.
(function () {
  const m = {
    "两只老虎": { bpm: 112, mel: ["1 2 3 1 1 2 3 1", "3 4 5:2 3 4 5:2", "5:.5 6:.5 5:.5 4:.5 3 1", "5:.5 6:.5 5:.5 4:.5 3 1", "1 5 1:2 1 5 1:2"] },
    "小星星": { bpm: 104, mel: ["1 1 5 5 6 6 5:2", "4 4 3 3 2 2 1:2", "5 5 4 4 3 3 2:2", "5 5 4 4 3 3 2:2"] },
    "祝你生日快乐": { bpm: 92, mel: ["5:.75 5:.25 6 5 1' 7:2", "5:.75 5:.25 6 5 2' 1':2", "5:.75 5:.25 5' 3' 1' 7 6", "4':.75 4':.25 3' 1' 2' 1':3"] },
  };
  self.SONGS.forEach(x => { if (m[x.t]) { x.mel = m[x.t].mel; x.bpm = m[x.t].bpm; } });
})();
