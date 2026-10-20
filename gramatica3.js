// Gramática HSK 5 (mismo formato que gramatica1.js)
(self.GRAM = self.GRAM || []).push(
[5, "La razón de…: 之所以…是因为…", "之所以 A，是因为 B", "Invierte el orden causa-efecto: «la razón por la que A es que B».", [
  ["他|[之所以]|成功，|是|因为|他|很|努力。", "Tā zhīsuǒyǐ chénggōng, shì yīnwèi tā hěn nǔlì.", "La razón de su éxito es que se esfuerza mucho.", "虽然 如果 即使"],
  ["我们|之所以|迟到，|[是]|因为|路上|堵车。", "Wǒmen zhīsuǒyǐ chídào, shì yīnwèi lùshang dǔchē.", "Llegamos tarde porque había atasco.", "在 把 被"],
  ["他|之所以|生气，|是|因为|你|没|告诉|他。", "Tā zhīsuǒyǐ shēngqì, shì yīnwèi nǐ méi gàosu tā.", "Está enfadado porque no se lo dijiste."]]],
[5, "No solo… sino incluso…: 不仅…而且 / 甚至", "不仅 A，而且 B · A，甚至 B", "不仅 es más formal que 不但. 甚至 añade un caso extremo: «incluso».", [
  ["他|[不仅]|会|说|英语，|而且|会|说|法语。", "Tā bùjǐn huì shuō Yīngyǔ, érqiě huì shuō Fǎyǔ.", "No solo habla inglés, también francés.", "虽然 如果 即使"],
  ["他|太|累|了，|[甚至]|连|饭|都|忘|了|吃。", "Tā tài lèi le, shènzhì lián fàn dōu wàng le chī.", "Estaba tan cansado que incluso se olvidó de comer.", "虽然 如果 即使"],
  ["这个|问题|[不仅]|难，|而且|很|复杂。", "Zhège wèntí bùjǐn nán, érqiě hěn fùzá.", "Este problema no solo es difícil sino complejo.", "虽然 如果 即使"]]],
[5, "Cuánto más aún: 何况 y 况且", "A 都…，何况 B · A，况且 B", "何况 = «y más aún»: si A ya es así, B lo es todavía más. 况且 = «además, y encima».", [
  ["大人|都|做|不|到，|[何况]|孩子|呢？", "Dàrén dōu zuò bu dào, hékuàng háizi ne?", "Ni los adultos pueden, ¿cuánto menos un niño?", "虽然 如果 所以"],
  ["天气|不|好，|[况且]|路|又|远，|我们|别|去|了。", "Tiānqì bù hǎo, kuàngqiě lù yòu yuǎn, wǒmen bié qù le.", "El tiempo es malo y además el camino es largo; mejor no vayamos.", "虽然 以便 以免"]]],
[5, "Para poder / para no: 以便 y 以免", "A，以便 B (objetivo positivo) · A，以免 B (evitar algo)", "以便 = «para poder» (objetivo que se desea). 以免 = «para no, no sea que» (algo que se quiere evitar).", [
  ["请|留|下|电话，|[以便]|我们|联系|你。", "Qǐng liú xià diànhuà, yǐbiàn wǒmen liánxì nǐ.", "Deje su teléfono para que podamos contactarle.", "以免 以后 以前"],
  ["带|把|伞，|[以免]|被|雨|淋|湿。", "Dài bǎ sǎn, yǐmiǎn bèi yǔ lín shī.", "Lleva paraguas para no mojarte.", "以便 以后 以前"],
  ["多|穿|点，|以免|感冒。", "Duō chuān diǎn, yǐmiǎn gǎnmào.", "Abrígate para no resfriarte."]]],
[5, "Es cierto que…: 固然…但是…", "A 固然 B，但是 C", "Concede un punto: «es cierto que A, pero…».", [
  ["价格|[固然]|重要，|但是|质量|更|重要。", "Jiàgé gùrán zhòngyào, dànshì zhìliàng gèng zhòngyào.", "El precio es importante, pero la calidad lo es más.", "如果 因为 所以"],
  ["他|固然|很|聪明，|[可是]|不|够|努力。", "Tā gùrán hěn cōngming, kěshì bú gòu nǔlì.", "Es listo, desde luego, pero no se esfuerza lo bastante.", "所以 因为 如果"],
  ["这个|办法|固然|好，|但|也|有|缺点。", "Zhège bànfǎ gùrán hǎo, dàn yě yǒu quēdiǎn.", "Es cierto que este método es bueno, pero también tiene defectos."]]],
[5, "O bien… o bien…: 要么…要么…", "要么 A，要么 B", "Presenta dos opciones excluyentes: «o bien A, o bien B».", [
  ["[要么]|你|来，|要么|我|去。", "Yàome nǐ lái, yàome wǒ qù.", "O vienes tú o voy yo.", "不但 虽然 因为"],
  ["周末|我|要么|在|家|休息，|[要么]|去|公园。", "Zhōumò wǒ yàome zài jiā xiūxi, yàome qù gōngyuán.", "Los fines de semana o descanso en casa o voy al parque.", "不但 虽然 因为"]]],
[5, "Más que… es…: 与其说…不如说…", "与其说 A，不如说 B", "Corrige una descripción: «más que A, es B».", [
  ["[与其说]|他|聪明，|不如|说|他|努力。", "Yǔqí shuō tā cōngming, bùrú shuō tā nǔlì.", "Más que listo, diría que es trabajador.", "不但说 即使说 既然说"],
  ["这|与其说|是|工作，|[不如说]|是|爱好。", "Zhè yǔqí shuō shì gōngzuò, bùrú shuō shì àihào.", "Esto es más una afición que un trabajo.", "不但说 即使说 既然说"],
  ["他|与其说|是|生气，|不如说|是|难过。", "Tā yǔqí shuō shì shēngqì, bùrú shuō shì nánguò.", "Más que enfadado, está triste."]]],
[5, "En opinión de: 在…看来", "在 + persona + 看来，…", "Expresa una opinión: «en opinión de, a mi parecer».", [
  ["[在]|我|看来，|这个|办法|不错。", "Zài wǒ kànlái, zhège bànfǎ búcuò.", "En mi opinión, este método está bien.", "给 从 把"],
  ["在|老师|看来，|他|是|个|好|学生。", "Zài lǎoshī kànlái, tā shì ge hǎo xuésheng.", "Para el profesor, él es un buen estudiante."],
  ["在|他|[看来]，|这|件|事|很|简单。", "Zài tā kànlái, zhè jiàn shì hěn jiǎndān.", "Según él, este asunto es sencillo.", "说话 看见 看着"]]],
[5, "Una vez que: 一旦…就…", "一旦 A，就 B", "«Una vez que A, entonces B»: A es una condición cuyo efecto es difícil de revertir.", [
  ["[一旦]|决定|了，|就|不|要|后悔。", "Yídàn juédìng le, jiù bú yào hòuhuǐ.", "Una vez decidido, no te arrepientas.", "即使 虽然 无论"],
  ["一旦|发现|问题，|我们|[就]|要|马上|解决。", "Yídàn fāxiàn wèntí, wǒmen jiù yào mǎshàng jiějué.", "Si surge un problema, hay que resolverlo enseguida.", "很 的 吗"],
  ["一旦|错过，|就|再|也|没有|机会|了。", "Yídàn cuòguò, jiù zài yě méiyǒu jīhuì le.", "Una vez que lo pierdas, no habrá otra oportunidad."]]],
[5, "Tomar como: 以…为…", "以 A 为 B", "Toma A como B: «tener A como…» (base, objetivo, centro).", [
  ["他|[以]|教书|为|生。", "Tā yǐ jiāoshū wéi shēng.", "Se gana la vida enseñando.", "把 被 对"],
  ["我们|要|以|健康|[为]|重。", "Wǒmen yào yǐ jiànkāng wéi zhòng.", "Debemos dar prioridad a la salud.", "是 有 在"],
  ["这个|公司|以|质量|[为]|先。", "Zhège gōngsī yǐ zhìliàng wéi xiān.", "Esta empresa pone la calidad primero.", "是 有 在"]]],
[5, "Causa formal: 由于 / 因此", "由于 A，因此 B", "Más formal que 因为…所以. 由于 introduce la causa y 因此 la consecuencia.", [
  ["[由于]|天气|不|好，|航班|取消|了。", "Yóuyú tiānqì bù hǎo, hángbān qǔxiāo le.", "Debido al mal tiempo, el vuelo se canceló.", "虽然 以便 以免"],
  ["他|很|努力，|[因此]|取得|了|好|成绩。", "Tā hěn nǔlì, yīncǐ qǔdé le hǎo chéngjì.", "Se esforzó mucho y por eso obtuvo buenas notas.", "虽然 如果 即使"],
  ["由于|时间|有限，|我们|只|能|讨论|这个|问题。", "Yóuyú shíjiān yǒuxiàn, wǒmen zhǐ néng tǎolùn zhège wèntí.", "Por falta de tiempo, solo podemos tratar este tema."]]],
[5, "A medida que: 随着", "随着 + cambio，…", "Indica que algo cambia a medida que otra cosa evoluciona: «con, a medida que».", [
  ["[随着]|经济|的|发展，|生活|越来越|好。", "Suízhe jīngjì de fāzhǎn, shēnghuó yuèláiyuè hǎo.", "Con el desarrollo económico, la vida es cada vez mejor.", "以便 以免 虽然"],
  ["[随着]|年龄|的|增长，|他|变|得|成熟|了。", "Suízhe niánlíng de zēngzhǎng, tā biàn de chéngshú le.", "Con la edad, se ha vuelto más maduro.", "以便 以免 虽然"],
  ["随着|科技|的|进步，|手机|越来越|方便。", "Suízhe kējì de jìnbù, shǒujī yuèláiyuè fāngbiàn.", "Con el progreso tecnológico, los móviles son cada vez más cómodos."]]],
[5, "En cuanto a: 至于", "至于 + tema nuevo", "Introduce un tema secundario o distinto: «en cuanto a».", [
  ["我|会|去，|[至于]|他|去|不|去，|我|不|知道。", "Wǒ huì qù, zhìyú tā qù bu qù, wǒ bù zhīdào.", "Yo iré; en cuanto a si va él, no lo sé.", "由于 随着 因为"],
  ["这|件|事|我|已经|决定|了，|至于|价格，|以后|再|谈。", "Zhè jiàn shì wǒ yǐjīng juédìng le, zhìyú jiàgé, yǐhòu zài tán.", "Este asunto ya está decidido; en cuanto al precio, lo hablaremos luego."]]],
[5, "Todo lo que: 凡是…都…", "凡是 + A，都 + B", "«Todo lo que / todos los que A, B».", [
  ["[凡是]|来|过|的|人，|都|喜欢|这里。", "Fánshì lái guo de rén, dōu xǐhuan zhèlǐ.", "Todos los que han venido aquí lo aman.", "虽然 即使 因为"],
  ["凡是|有|问题|的|同学，|[都]|可以|问|老师。", "Fánshì yǒu wèntí de tóngxué, dōu kěyǐ wèn lǎoshī.", "Todo alumno con dudas puede preguntar al profesor.", "很 的 吗"]]],
[5, "Al fin y al cabo: 毕竟", "毕竟 + razón de fondo", "Recuerda una razón de fondo que justifica algo: «después de todo».", [
  ["他|[毕竟]|还|是|个|孩子。", "Tā bìjìng hái shì ge háizi.", "Al fin y al cabo es solo un niño.", "一起 一共 一边"],
  ["你|毕竟|是|他的|朋友，|应该|帮|他。", "Nǐ bìjìng shì tā de péngyou, yīnggāi bāng tā.", "Después de todo eres su amigo, deberías ayudarle."]]],
[5, "Al contrario: 反而", "A，反而 B", "Indica un resultado contrario a lo esperado: «en lugar de, al contrario».", [
  ["他|不但|没|帮忙，|[反而]|添|了|麻烦。", "Tā búdàn méi bāng máng, fǎn'ér tiān le máfan.", "No solo no ayudó, sino que causó problemas.", "所以 因此 以免"],
  ["雨|停|了，|天|[反而]|更|冷|了。", "Yǔ tíng le, tiān fǎn'ér gèng lěng le.", "Dejó de llover y en cambio hace más frío.", "而且 所以 以免"],
  ["吃|了|药，|病|反而|重|了。", "Chī le yào, bìng fǎn'ér zhòng le.", "Tomó la medicina y empeoró en lugar de mejorar."]]],
[5, "Justo en contra: 偏偏", "偏偏 + hecho", "Expresa que algo ocurre justo en contra de lo que se deseaba o esperaba.", [
  ["我|想|出门，|[偏偏]|下起|雨|来|了。", "Wǒ xiǎng chūmén, piānpiān xià qǐ yǔ lái le.", "Quería salir y justo se puso a llover.", "一直 一共 一起"],
  ["大家|都|来|了，|他|偏偏|没|来。", "Dàjiā dōu lái le, tā piānpiān méi lái.", "Todos vinieron, pero él justo no."]]],
[5, "No necesariamente: 未必", "未必 + afirmación", "«No necesariamente»: niega suavemente una generalización.", [
  ["贵|的|[未必]|好。", "Guì de wèibì hǎo.", "Lo caro no es necesariamente bueno.", "一直 一共 一起"],
  ["聪明|的|人|未必|成功。", "Cōngming de rén wèibì chénggōng.", "Una persona lista no necesariamente triunfa."]]],
[5, "Es inevitable: 难免", "难免 + resultado", "«Es inevitable que»: algo es difícil de evitar.", [
  ["第一次|做，|[难免]|会|出|错。", "Dì yī cì zuò, nánmiǎn huì chū cuò.", "La primera vez es normal equivocarse.", "一直 一共 一起"],
  ["刚|到|一个|新|地方，|难免|会|紧张。", "Gāng dào yí ge xīn dìfang, nánmiǎn huì jǐnzhāng.", "Al llegar a un lugar nuevo es normal estar nervioso."]]],
[5, "Nunca / siempre: 从来", "从来 + 没 / 不 + verbo", "«Nunca, jamás» (con negación) o «siempre» (con afirmación): 我从来没见过他.", [
  ["我|[从来]|没|见|过|他。", "Wǒ cónglái méi jiàn guo tā.", "Nunca lo he visto.", "一起 一共 一边"],
  ["他|从来|不|喝|酒。", "Tā cónglái bù hē jiǔ.", "Él nunca bebe alcohol."]]],
[5, "Matices: 简直, 恐怕 y 可见", "简直 = realmente · 恐怕 = me temo · 可见 = se ve que", "简直 enfatiza con exageración. 恐怕 expresa una suposición negativa. 可见 saca una conclusión de lo anterior.", [
  ["这里|[简直]|太|美|了！", "Zhèlǐ jiǎnzhí tài měi le!", "¡Esto es sencillamente precioso!", "一共 一起 一边"],
  ["天|黑|了，|[恐怕]|要|下雨|了。", "Tiān hēi le, kǒngpà yào xià yǔ le.", "Se hace de noche, me temo que va a llover.", "一共 一起 一边"],
  ["他|一直|在|笑，|[可见]|很|满意。", "Tā yìzhí zài xiào, kějiàn hěn mǎnyì.", "No para de sonreír, se ve que está muy satisfecho.", "一共 一起 一边"]]],
[5, "Concesión: 倒是", "A 倒是 B，不过…", "倒是 concede algo con un matiz de contraste: «eso sí…, pero…».", [
  ["价格|[倒是]|不|贵，|就是|太|远|了。", "Jiàgé dàoshì bú guì, jiùshì tài yuǎn le.", "El precio sí que no es caro; lo que pasa es que está muy lejos.", "一共 一起 一边"],
  ["这个|办法|倒是|不错，|不过|有点|麻烦。", "Zhège bànfǎ dàoshì búcuò, búguò yǒudiǎn máfan.", "Este método está bien, eso sí, es algo molesto."]]]
);
