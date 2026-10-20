// Gramática por niveles. Cada punto: [HSK, título, patrón, explicación, ejemplos]
// Ejemplo: [frase con | entre palabras y [clave] para el hueco, pinyin, español, opciones falsas para el hueco (opcional)]
(self.GRAM = self.GRAM || []).push(
[1, "Frase básica con 是", "A + 是 + B", "Para decir «A es B» se usa 是. No se conjuga ni cambia con la persona. Para negar se pone 不 delante: 不是.", [
  ["我|[是]|学生。", "Wǒ shì xuésheng.", "Yo soy estudiante.", "在 和 很"],
  ["他|[是]|我的|老师。", "Tā shì wǒ de lǎoshī.", "Él es mi profesor.", "在 和 很"],
  ["这|[是]|一|本|书。", "Zhè shì yì běn shū.", "Esto es un libro.", "在 和 很"]]],
[1, "Negación con 不", "不 + verbo / adjetivo", "不 niega verbos y adjetivos en presente o futuro. Delante de una sílaba en 4.º tono se pronuncia bú: 不是 (bú shì).", [
  ["我|[不]|喝|咖啡。", "Wǒ bù hē kāfēi.", "Yo no bebo café.", "很 的 吗"],
  ["他|[不]|是|中国人。", "Tā bú shì Zhōngguórén.", "Él no es chino.", "在 吗 和"],
  ["今天|[不]|冷。", "Jīntiān bù lěng.", "Hoy no hace frío.", "在 吗 呢"]]],
[1, "Preguntas de sí/no con 吗", "Frase afirmativa + 吗？", "Para convertir una afirmación en pregunta de sí o no, se añade 吗 al final. La respuesta repite el verbo: 是 / 不是, 有 / 没有.", [
  ["你|是|老师|[吗]？", "Nǐ shì lǎoshī ma?", "¿Eres profesor?", "很 在 和"],
  ["你|喝|茶|[吗]？", "Nǐ hē chá ma?", "¿Bebes té?", "很 在 和"],
  ["她|是|你的|朋友|[吗]？", "Tā shì nǐ de péngyou ma?", "¿Ella es tu amiga?", "很 在 和"]]],
[1, "Devolver la pregunta con 呢", "Sujeto + 呢？", "Tras responder, se pregunta «¿y tú?» con 呢, sin repetir toda la frase. También sirve para preguntar dónde está algo: 我的书呢？", [
  ["我|很|好，|你|[呢]？", "Wǒ hěn hǎo, nǐ ne?", "Yo estoy bien, ¿y tú?", "吗 了 得"],
  ["我|喝|茶，|你|[呢]？", "Wǒ hē chá, nǐ ne?", "Yo bebo té, ¿y tú?", "吗 了 得"],
  ["我的|书|[呢]？", "Wǒ de shū ne?", "¿Y mi libro? (¿dónde está?)", "得 很 和"]]],
[1, "Posesión con 的", "Poseedor + 的 + cosa", "的 une al poseedor con lo poseído, como «de» o «mi, tu, su». Con familiares y amigos cercanos se puede omitir: 我妈妈.", [
  ["这|是|我[的]|手机。", "Zhè shì wǒ de shǒujī.", "Este es mi móvil.", "了 吗 得"],
  ["那|是|他[的]|狗。", "Nà shì tā de gǒu.", "Ese es su perro.", "了 吗 得"],
  ["她|是|我[的]|朋友。", "Tā shì wǒ de péngyou.", "Ella es mi amiga.", "了 吗 得"]]],
[1, "Tener: 有 y 没有", "有 / 没有 + objeto", "有 significa «tener» y también «haber». Su negación es 没有 (nunca 不有).", [
  ["我|[有]|一个|哥哥。", "Wǒ yǒu yí ge gēge.", "Tengo un hermano mayor.", "很 去 在"],
  ["我|[没有]|钱。", "Wǒ méiyǒu qián.", "No tengo dinero.", "是 在 去"],
  ["你|[有]|手机|吗？", "Nǐ yǒu shǒujī ma?", "¿Tienes móvil?", "很 在 去"]]],
[1, "Adjetivos con 很", "Sujeto + 很 + adjetivo", "En chino los adjetivos funcionan como verbos: no hace falta «ser». Normalmente llevan 很, que aquí casi no significa «muy»: 我很高兴.", [
  ["我|[很]|高兴。", "Wǒ hěn gāoxìng.", "Estoy contento.", "去 吃 和"],
  ["今天|[很]|热。", "Jīntiān hěn rè.", "Hoy hace calor.", "去 吃 和"],
  ["她|[很]|漂亮。", "Tā hěn piàoliang.", "Ella es guapa.", "去 吃 和"]]],
[1, "Palabras interrogativas", "La palabra interrogativa va donde iría la respuesta", "Las palabras interrogativas (什么, 谁, 哪儿, 几, 多少, 怎么) se colocan en el mismo sitio que ocuparía la respuesta, sin cambiar el orden de la frase ni usar 吗.", [
  ["你|叫|[什么]|名字？", "Nǐ jiào shénme míngzi?", "¿Cómo te llamas?", "谁 哪儿 几"],
  ["他|是|[谁]？", "Tā shì shéi?", "¿Quién es él?", "哪儿 几 怎么"],
  ["你|在|[哪里]？", "Nǐ zài nǎlǐ?", "¿Dónde estás?", "什么 几 怎么"]]],
[1, "Lugar con 在", "Sujeto + 在 + lugar", "在 indica dónde está algo o alguien, y también dónde ocurre una acción (在 + lugar + verbo).", [
  ["我|[在]|家。", "Wǒ zài jiā.", "Estoy en casa.", "是 和 吃"],
  ["他|[在]|学校|学习。", "Tā zài xuéxiào xuéxí.", "Él estudia en la escuela.", "是 和 吃"],
  ["书|[在]|桌子|上。", "Shū zài zhuōzi shàng.", "El libro está sobre la mesa.", "是 和 吃"]]],
[1, "Clasificadores (量词)", "Número + clasificador + sustantivo", "Entre un número y un sustantivo hace falta un clasificador: 个 (general), 本 (libros), 杯 (vasos), 只 (animales pequeños), 件 (prendas)…", [
  ["我|有|三[个]|苹果。", "Wǒ yǒu sān ge píngguǒ.", "Tengo tres manzanas.", "本 杯 件"],
  ["请|给|我|两[本]|书。", "Qǐng gěi wǒ liǎng běn shū.", "Dame dos libros, por favor.", "杯 件 只"],
  ["我|喝|一[杯]|茶。", "Wǒ hē yì bēi chá.", "Bebo una taza de té.", "本 件 只"]]],
[1, "También y todos: 也 / 都", "Sujeto + 也 / 都 + verbo", "也 («también») y 都 («todos») van siempre delante del verbo, nunca al final. Si van juntos: 也都.", [
  ["我|[也]|是|学生。", "Wǒ yě shì xuésheng.", "Yo también soy estudiante.", "很 在 的"],
  ["我们|[都]|是|中国人。", "Wǒmen dōu shì Zhōngguórén.", "Todos nosotros somos chinos.", "很 在 的"],
  ["他|[也]|不|喝|茶。", "Tā yě bù hē chá.", "Él tampoco bebe té.", "很 在 的"]]],
[1, "Verbos modales: 想, 会, 能, 可以", "Sujeto + modal + verbo", "想 = querer, tener ganas. 会 = saber hacer (habilidad aprendida). 能 = poder (capacidad o circunstancias). 可以 = poder (permiso). Van antes del verbo principal.", [
  ["我|[想]|喝|水。", "Wǒ xiǎng hē shuǐ.", "Quiero beber agua.", "是 很 和"],
  ["你|[会]|说|汉语|吗？", "Nǐ huì shuō Hànyǔ ma?", "¿Sabes hablar chino?", "很 和 的"],
  ["这里|[可以]|坐|吗？", "Zhèlǐ kěyǐ zuò ma?", "¿Se puede sentar aquí?", "很 和 的"]]],
[1, "Acción completada con 了", "Verbo + 了 + objeto", "了 detrás del verbo indica que la acción se ha completado: 我吃了饭. Al final de la frase indica un cambio o situación nueva: 下雨了.", [
  ["我|吃[了]|饭。", "Wǒ chī le fàn.", "He comido.", "吗 呢 很"],
  ["他|买[了]|一|本|书。", "Tā mǎi le yì běn shū.", "Él compró un libro.", "吗 呢 很"],
  ["下雨|[了]。", "Xià yǔ le.", "Ha empezado a llover.", "很 的 在"]]],
[1, "Orden del tiempo", "Sujeto + palabra de tiempo + verbo", "Las palabras de tiempo (今天, 明天, 八点…) van antes del verbo, después del sujeto o al principio de la frase. Nunca al final.", [
  ["我|明天|去|北京。", "Wǒ míngtiān qù Běijīng.", "Mañana voy a Pekín."],
  ["我们|八点|吃饭。", "Wǒmen bā diǎn chīfàn.", "Comemos a las ocho."],
  ["他|今天|上午|工作。", "Tā jīntiān shàngwǔ gōngzuò.", "Hoy por la mañana él trabaja."]]],
[1, "Peticiones educadas con 请", "请 + verbo", "请 al principio de la frase convierte una orden en una petición cortés: 请坐, 请喝茶. También 请问 para preguntar.", [
  ["[请]|喝|茶。", "Qǐng hē chá.", "Tome té, por favor.", "很 吗 的"],
  ["[请]|问，|你|叫|什么|名字？", "Qǐng wèn, nǐ jiào shénme míngzi?", "Perdone, ¿cómo se llama?", "很 吗 的"],
  ["[请]|你|再|说|一遍。", "Qǐng nǐ zài shuō yí biàn.", "Repítelo una vez más, por favor.", "很 吗 的"]]],
[1, "Demostrativos 这 y 那", "这 / 那 + (número) + clasificador + sustantivo", "这 = este, esto (cerca). 那 = ese, aquel (lejos). Con un sustantivo hace falta clasificador: 这个人, 那本书.", [
  ["[这]|是|什么？", "Zhè shì shénme?", "¿Qué es esto?", "谁 哪 几"],
  ["[那]|个|人|是|谁？", "Nà ge rén shì shéi?", "¿Quién es aquella persona?", "几 谁 您"],
  ["我|喜欢|[这]|本|书。", "Wǒ xǐhuan zhè běn shū.", "Me gusta este libro.", "谁 很 吗"]]],
[1, "Unir con 和", "A + 和 + B", "和 une sustantivos o pronombres («A y B»). No se usa para unir frases completas.", [
  ["我|[和]|你|都|是|学生。", "Wǒ hé nǐ dōu shì xuésheng.", "Tú y yo somos estudiantes.", "也 很 的"],
  ["我|喜欢|苹果|[和]|香蕉。", "Wǒ xǐhuan píngguǒ hé xiāngjiāo.", "Me gustan las manzanas y los plátanos.", "也 很 吗"],
  ["他|[和]|妈妈|在|家。", "Tā hé māma zài jiā.", "Él y su madre están en casa.", "也 很 吗"]]],
[1, "Cantidad y edad: 几 y 多少", "几 + clasificador · 多少 + sustantivo", "几 se usa para cantidades pequeñas (menos de 10) y lleva clasificador: 几个人. 多少 se usa para cantidades grandes o desconocidas: 多少钱. La edad de un niño: 几岁.", [
  ["你|家|有|[几]|口|人？", "Nǐ jiā yǒu jǐ kǒu rén?", "¿Cuántas personas hay en tu familia?", "什么 谁 怎么"],
  ["这个|[多少]|钱？", "Zhège duōshao qián?", "¿Cuánto cuesta esto?", "几 谁 什么"],
  ["你|[几]|岁|了？", "Nǐ jǐ suì le?", "¿Cuántos años tienes? (a un niño)", "什么 谁 怎么"]]],
[1, "La hora con 点", "número + 点 (+ número + 分)", "Se dice la hora con 点: 三点 (las tres), 三点十分 (las tres y diez), 三点半 (las tres y media). Para preguntar: 现在几点？", [
  ["现在|[几]|点？", "Xiànzài jǐ diǎn?", "¿Qué hora es?", "什么 谁 哪"],
  ["现在|三|[点]|半。", "Xiànzài sān diǎn bàn.", "Son las tres y media.", "本 条 件"],
  ["我|七[点]|起床。", "Wǒ qī diǎn qǐchuáng.", "Me levanto a las siete.", "本 条 件"]]],

[2, "Acción en curso: (正)在", "Sujeto + (正)在 + verbo (+ 呢)", "(正)在 delante del verbo indica que la acción está ocurriendo ahora. Se puede cerrar con 呢.", [
  ["我|[正在]|吃饭。", "Wǒ zhèngzài chīfàn.", "Estoy comiendo ahora mismo.", "很 的 吗"],
  ["他|[在]|看|电视。", "Tā zài kàn diànshì.", "Él está viendo la tele.", "很 的 吗"],
  ["妈妈|正在|做饭|[呢]。", "Māma zhèngzài zuòfàn ne.", "Mamá está cocinando.", "得 过 很"]]],
[2, "Experiencia con 过", "Verbo + 过", "过 detrás del verbo indica que se ha tenido esa experiencia alguna vez. Negación: 没 + verbo + 过.", [
  ["我|去[过]|中国。", "Wǒ qù guo Zhōngguó.", "He estado en China.", "着 吗 的"],
  ["你|吃[过]|北京|烤鸭|吗？", "Nǐ chī guo Běijīng kǎoyā ma?", "¿Has comido pato laqueado de Pekín?", "呢 得 在"],
  ["我|没|学[过]|法语。", "Wǒ méi xué guo Fǎyǔ.", "Nunca he estudiado francés.", "着 得 吗"]]],
[2, "Comparar con 比", "A + 比 + B + adjetivo", "Para decir que A es más… que B se usa 比. El adjetivo no lleva 很. Si se añade la diferencia, va detrás del adjetivo. Negativo: A 没有 B + adjetivo.", [
  ["他|[比]|我|高。", "Tā bǐ wǒ gāo.", "Él es más alto que yo.", "和 跟 像"],
  ["今天|[比]|昨天|热。", "Jīntiān bǐ zuótiān rè.", "Hoy hace más calor que ayer.", "和 跟 像"],
  ["我的|汉语|[没有]|他的|好。", "Wǒ de Hànyǔ méiyǒu tā de hǎo.", "Mi chino no es tan bueno como el suyo.", "和 跟 像"]]],
[2, "Igualdad con 一样", "A + 和 / 跟 + B + 一样 (+ adjetivo)", "Para decir que dos cosas son iguales: 和 / 跟 … 一样. Se puede añadir un adjetivo detrás.", [
  ["我|和|他|[一样]|高。", "Wǒ hé tā yíyàng gāo.", "Soy igual de alto que él.", "把 被 对"],
  ["这个|跟|那个|[一样]。", "Zhège gēn nàge yíyàng.", "Este es igual que aquel.", "把 被 对"],
  ["他|跟|我|[一样]|喜欢|音乐。", "Tā gēn wǒ yíyàng xǐhuan yīnyuè.", "A él le gusta la música igual que a mí.", "把 被 对"]]],
[2, "Elegir con 还是", "A 还是 B？", "还是 une dos opciones en una pregunta («¿A o B?»). En afirmaciones se usa 或者.", [
  ["你|喝|茶|[还是]|咖啡？", "Nǐ hē chá háishi kāfēi?", "¿Bebes té o café?", "所以 但是 因为"],
  ["你|想|去|[还是]|不|想|去？", "Nǐ xiǎng qù háishi bù xiǎng qù?", "¿Quieres ir o no quieres ir?", "所以 但是 因为"],
  ["他|是|老师|[还是]|学生？", "Tā shì lǎoshī háishi xuésheng?", "¿Es profesor o estudiante?", "所以 但是 因为"]]],
[2, "Causa y consecuencia: 因为…所以…", "因为 + causa，所以 + resultado", "Se usan en pareja, como «como… por eso…». En chino se pueden usar los dos a la vez.", [
  ["[因为]|下雨，|所以|我|没|去。", "Yīnwèi xià yǔ, suǒyǐ wǒ méi qù.", "Como llovía, no fui.", "虽然 如果 但是"],
  ["因为|他|病|了，|[所以]|没|来。", "Yīnwèi tā bìng le, suǒyǐ méi lái.", "Como está enfermo, no vino.", "但是 虽然 如果"],
  ["[因为]|太|累|了，|我|想|休息。", "Yīnwèi tài lèi le, wǒ xiǎng xiūxi.", "Como estoy muy cansado, quiero descansar.", "所以 而且 并且"]]],
[2, "Contraste: 虽然…但是…", "虽然 A，但是 B", "Expresa «aunque A, B». En chino se usan los dos a la vez.", [
  ["[虽然]|很|贵，|但是|很|好。", "Suīrán hěn guì, dànshì hěn hǎo.", "Aunque es caro, es muy bueno.", "因为 如果 所以"],
  ["虽然|很|累，|[但是]|他|很|高兴。", "Suīrán hěn lèi, dànshì tā hěn gāoxìng.", "Aunque está cansado, está contento.", "所以 因为 如果"],
  ["他|虽然|不|大，|[但是]|很|聪明。", "Tā suīrán bú dà, dànshì hěn cōngming.", "Aunque es pequeño, es muy listo.", "所以 因为 如果"]]],
[2, "Dos acciones a la vez: 一边…一边…", "一边 + verbo 1 + 一边 + verbo 2", "Indica que el mismo sujeto hace dos acciones al mismo tiempo.", [
  ["他|[一边]|吃饭|一边|看|电视。", "Tā yìbiān chīfàn yìbiān kàn diànshì.", "Él come mientras ve la tele.", "一起 一共 一直"],
  ["她|一边|走|[一边]|唱歌。", "Tā yìbiān zǒu yìbiān chànggē.", "Ella canta mientras camina.", "一起 一共 一直"],
  ["我们|[一边]|聊天|一边|喝|茶。", "Wǒmen yìbiān liáotiān yìbiān hē chá.", "Charlamos mientras tomamos té.", "一起 一共 一直"]]],
[2, "Primero… luego…: 先…再…", "先 + A，再 + B", "Ordena dos acciones en el tiempo: primero A y luego B.", [
  ["我|[先]|吃饭，|再|去|学校。", "Wǒ xiān chīfàn, zài qù xuéxiào.", "Primero como y luego voy a la escuela.", "都 很 的"],
  ["[先]|洗|手，|再|吃|饭。", "Xiān xǐ shǒu, zài chī fàn.", "Primero lávate las manos y luego come.", "都 很 的"],
  ["你|先|做|作业，|[再]|玩。", "Nǐ xiān zuò zuòyè, zài wán.", "Primero haz los deberes y luego juega.", "很 的 吗"]]],
[2, "Inminencia: 要…了", "(快 / 就)要 + verbo + 了", "Indica que algo va a ocurrir muy pronto. 快要 y 就要 refuerzan la idea de «dentro de poco».", [
  ["[要]|下雨|了。", "Yào xià yǔ le.", "Va a llover.", "很 的 吗"],
  ["火车|[就要]|开|了。", "Huǒchē jiùyào kāi le.", "El tren está a punto de salir.", "很 的 吗"],
  ["我|[快要]|毕业|了。", "Wǒ kuàiyào bìyè le.", "Me gradúo muy pronto.", "很 的 吗"]]],
[2, "Complemento de grado con 得", "Verbo + 得 + adjetivo", "Describe cómo se hace una acción: 说得很好. Si hay objeto, se repite el verbo: 他说汉语说得很好.", [
  ["他|说|[得]|很|好。", "Tā shuō de hěn hǎo.", "Él habla muy bien.", "了 过 着"],
  ["她|跑|[得]|很|快。", "Tā pǎo de hěn kuài.", "Ella corre muy rápido.", "了 过 着"],
  ["我|写|[得]|不|好。", "Wǒ xiě de bù hǎo.", "Escribo mal.", "了 过 着"]]],
[2, "Poder: 会, 能 y 可以", "会 = saber · 能 = poder · 可以 = permiso", "会: habilidad aprendida (会游泳). 能: capacidad o circunstancias (今天能来). 可以: permiso o posibilidad (可以进来). 不能 se usa para prohibir.", [
  ["我|[会]|游泳。", "Wǒ huì yóuyǒng.", "Sé nadar.", "很 的 吗"],
  ["这里|不|[能]|抽烟。", "Zhèlǐ bù néng chōuyān.", "Aquí no se puede fumar.", "很 的 吗"],
  ["明天|你|[可以]|来|吗？", "Míngtiān nǐ kěyǐ lái ma?", "¿Puedes venir mañana?", "很 的 在"]]],
[2, "Demasiado: 太…了", "太 + adjetivo + 了", "Expresa exceso o admiración: 太贵了 (¡qué caro!), 太好了 (¡genial!).", [
  ["今天|[太]|热|了。", "Jīntiān tài rè le.", "¡Hoy hace demasiado calor!", "在 的 吗"],
  ["这个|[太]|贵|了。", "Zhège tài guì le.", "Esto es demasiado caro.", "在 的 吗"],
  ["[太]|好|了！", "Tài hǎo le!", "¡Genial!", "在 的 吗"]]],
[2, "Desde… hasta…: 从…到…", "从 + inicio + 到 + fin", "Indica el punto de partida y de llegada, en tiempo o en lugar.", [
  ["我|[从]|八点|到|十二点|工作。", "Wǒ cóng bā diǎn dào shí'èr diǎn gōngzuò.", "Trabajo de ocho a doce.", "给 和 对"],
  ["他|从|北京|[到]|上海|坐|火车。", "Tā cóng Běijīng dào Shànghǎi zuò huǒchē.", "Va de Pekín a Shanghái en tren.", "在 给 和"],
  ["[从]|这里|到|学校|很|近。", "Cóng zhèlǐ dào xuéxiào hěn jìn.", "De aquí a la escuela está cerca.", "给 和 对"]]],
[2, "Distancia con 离", "A + 离 + B + 远 / 近", "离 expresa la distancia entre A y B. Se usa con 远 (lejos) y 近 (cerca).", [
  ["我|家|[离]|学校|很|近。", "Wǒ jiā lí xuéxiào hěn jìn.", "Mi casa está cerca de la escuela.", "从 到 在"],
  ["学校|[离]|这里|不|远。", "Xuéxiào lí zhèlǐ bù yuǎn.", "La escuela no está lejos de aquí.", "从 到 在"],
  ["你|家|[离]|公司|远|吗？", "Nǐ jiā lí gōngsī yuǎn ma?", "¿Tu casa está lejos de la empresa?", "从 到 在"]]],
[2, "Para quién: 给", "给 + persona + verbo", "给 introduce al destinatario de la acción (para, a quién). También es un verbo: dar.", [
  ["我|[给]|妈妈|打|电话。", "Wǒ gěi māma dǎ diànhuà.", "Llamo a mamá por teléfono.", "对 在 从"],
  ["请|[给]|我|一|杯|水。", "Qǐng gěi wǒ yì bēi shuǐ.", "Dame un vaso de agua, por favor.", "对 在 从"],
  ["他|[给]|我|一|本|书。", "Tā gěi wǒ yì běn shū.", "Él me da un libro.", "对 在 从"]]],
[2, "Hacia alguien: 对", "对 + persona + adjetivo / verbo", "对 expresa la actitud o el trato hacia alguien: 对我很好 (es bueno conmigo), o el interés por algo: 对音乐有兴趣.", [
  ["他|[对]|我|很|好。", "Tā duì wǒ hěn hǎo.", "Él es muy bueno conmigo.", "给 从 在"],
  ["老师|[对]|学生|很|好。", "Lǎoshī duì xuésheng hěn hǎo.", "La profesora es buena con los alumnos.", "给 从 在"],
  ["我|[对]|音乐|有|兴趣。", "Wǒ duì yīnyuè yǒu xìngqù.", "Me interesa la música.", "给 从 在"]]],
[2, "Pedir que alguien haga algo: 让 / 叫", "A + 让 / 叫 + B + verbo", "让 y 叫 significan «hacer que, dejar que, pedir que alguien haga algo».", [
  ["老师|[让]|我们|读|课文。", "Lǎoshī ràng wǒmen dú kèwén.", "La profesora nos manda leer el texto.", "从 在 比"],
  ["妈妈|[让]|我|早点|睡觉。", "Māma ràng wǒ zǎodiǎn shuìjiào.", "Mamá me dice que me acueste temprano.", "从 在 比"],
  ["他|[叫]|我|等|一下。", "Tā jiào wǒ děng yíxià.", "Me pide que espere un momento.", "从 在 比"]]],
[2, "Suavizar con 一下 y 一点", "verbo + 一下 · adjetivo + 一点", "一下 suaviza un verbo («un momento, un poco»): 等一下. 一点 va con adjetivos: 慢一点.", [
  ["请|你|等|[一下]。", "Qǐng nǐ děng yíxià.", "Espera un momento, por favor.", "一点 一起 一共"],
  ["请|说|慢|[一点]。", "Qǐng shuō màn yìdiǎn.", "Habla un poco más despacio, por favor.", "一下 一起 一共"],
  ["我|想|看|[一下]。", "Wǒ xiǎng kàn yíxià.", "Quiero echar un vistazo.", "一起 一共 一直"]]],
[2, "Repetir: 再, 又 y 还", "再 (futuro) · 又 (pasado) · 还 (además)", "再 repite una acción en el futuro (请再说一遍). 又 repite una acción ya ocurrida (他又来了). 还 significa «además» o «todavía».", [
  ["请|[再]|说|一遍。", "Qǐng zài shuō yí biàn.", "Dilo otra vez, por favor.", "又 了 的"],
  ["他|[又]|迟到|了。", "Tā yòu chídào le.", "Otra vez ha llegado tarde.", "再 的 吗"],
  ["我|[还]|想|吃。", "Wǒ hái xiǎng chī.", "Todavía quiero comer más.", "的 吗 了"]]]
);
