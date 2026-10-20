// Gramática HSK 3 y HSK 4 (mismo formato que gramatica1.js)
(self.GRAM = self.GRAM || []).push(
[3, "La construcción 把", "A + 把 + objeto + verbo + resultado", "把 coloca el objeto delante del verbo para decir qué se hace con él. El verbo debe ir acompañado de un resultado (了, 完, 在…). Se usa cuando el objeto es algo conocido.", [
  ["我|[把]|书|放|在|桌子|上。", "Wǒ bǎ shū fàng zài zhuōzi shàng.", "Pongo el libro sobre la mesa.", "被 对 从"],
  ["请|[把]|门|关|上。", "Qǐng bǎ mén guān shàng.", "Cierra la puerta, por favor.", "被 对 从"],
  ["他|[把]|作业|做|完|了。", "Tā bǎ zuòyè zuò wán le.", "Él terminó los deberes.", "被 对 从"]]],
[3, "La pasiva con 被", "Sujeto (afectado) + 被 + agente + verbo + resultado", "被 indica que el sujeto recibe la acción. A menudo expresa algo desagradable. El agente puede omitirse.", [
  ["我的|钱包|[被]|偷|了。", "Wǒ de qiánbāo bèi tōu le.", "Me han robado la cartera.", "对 从 跟"],
  ["杯子|[被]|他|打|破|了。", "Bēizi bèi tā dǎ pò le.", "El vaso lo rompió él.", "对 从 跟"],
  ["窗户|[被]|风|吹|开|了。", "Chuānghu bèi fēng chuī kāi le.", "El viento abrió la ventana.", "对 从 跟"]]],
[3, "Comparar más: 更 y 还", "A + 比 + B + 更 / 还 + adjetivo", "更 y 还 refuerzan la comparación («todavía más»). Para dar la diferencia, va tras el adjetivo: 大三岁. Nunca se usa 很 con 比.", [
  ["这个|比|那个|[更]|好。", "Zhège bǐ nàge gèng hǎo.", "Este es aún mejor que aquel.", "很 太 非常"],
  ["他|比|我|大|三|岁。", "Tā bǐ wǒ dà sān suì.", "Él es tres años mayor que yo."],
  ["她|比|我|跑|得|[还]|快。", "Tā bǐ wǒ pǎo de hái kuài.", "Ella corre todavía más rápido que yo.", "很 太 非常"]]],
[3, "Condición: 如果…就…", "如果 + condición，(sujeto) 就 + resultado", "Expresa «si… entonces…». 就 introduce el resultado y va antes del verbo.", [
  ["[如果]|明天|下雨，|我|就|不|去|了。", "Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù le.", "Si mañana llueve, no iré.", "虽然 但是 所以"],
  ["如果|你|有|时间，|[就]|来|吧。", "Rúguǒ nǐ yǒu shíjiān, jiù lái ba.", "Si tienes tiempo, ven.", "才 很 的"],
  ["你|[如果]|累|了，|就|休息|吧。", "Nǐ rúguǒ lèi le, jiù xiūxi ba.", "Si estás cansado, descansa.", "虽然 但是 所以"]]],
[3, "Condición suficiente: 只要…就…", "只要 A，就 B", "«Con tal de que A, B»: A es la única condición necesaria.", [
  ["[只要]|努力，|就|能|成功。", "Zhǐyào nǔlì, jiù néng chénggōng.", "Con tal de esforzarte, triunfarás.", "虽然 因为 但是"],
  ["只要|你|来，|我|[就]|高兴。", "Zhǐyào nǐ lái, wǒ jiù gāoxìng.", "Con que vengas, me alegro.", "但是 虽然 因为"],
  ["[只要]|你|同意，|我|就|做。", "Zhǐyào nǐ tóngyì, wǒ jiù zuò.", "Si tú estás de acuerdo, lo hago.", "虽然 因为 但是"]]],
[3, "Además: 不但…而且…", "不但 A，而且 B", "Añade información: «no solo A, sino también B».", [
  ["他|[不但]|聪明，|而且|努力。", "Tā búdàn cōngming, érqiě nǔlì.", "No solo es listo, sino también trabajador.", "虽然 因为 如果"],
  ["这里|不但|漂亮，|[而且]|很|安静。", "Zhèlǐ búdàn piàoliang, érqiě hěn ānjìng.", "Aquí no solo es bonito, sino también tranquilo.", "但是 所以 因为"],
  ["我|[不但]|会|说|汉语，|而且|会|写。", "Wǒ búdàn huì shuō Hànyǔ, érqiě huì xiě.", "No solo sé hablar chino, también sé escribir.", "虽然 因为 如果"]]],
[3, "En cuanto… ya…: 一…就…", "一 + A + 就 + B", "Indica que B ocurre inmediatamente después de A: «en cuanto A, B».", [
  ["我|[一]|到|家|就|给|你|打|电话。", "Wǒ yí dào jiā jiù gěi nǐ dǎ diànhuà.", "En cuanto llegue a casa te llamo.", "也 很 都"],
  ["他|一|看|[就]|懂|了。", "Tā yí kàn jiù dǒng le.", "Con solo mirar lo entendió.", "很 的 吗"],
  ["天气|一|冷，|他|[就]|感冒。", "Tiānqì yì lěng, tā jiù gǎnmào.", "En cuanto hace frío, se resfría.", "很 吗 呢"]]],
[3, "Cada vez más: 越来越", "越来越 + adjetivo / verbo", "Indica un cambio progresivo: «cada vez más…».", [
  ["天气|[越来越]|热|了。", "Tiānqì yuèláiyuè rè le.", "Cada vez hace más calor.", "的 吗 把"],
  ["他的|汉语|[越来越]|好。", "Tā de Hànyǔ yuèláiyuè hǎo.", "Su chino es cada vez mejor.", "的 吗 把"],
  ["我|[越来越]|喜欢|这个|城市。", "Wǒ yuèláiyuè xǐhuan zhège chéngshì.", "Cada vez me gusta más esta ciudad.", "的 吗 把"]]],
[3, "Cuanto más… más…: 越…越…", "越 + A + 越 + B", "Dos cambios que crecen a la vez: «cuanto más A, más B».", [
  ["雨|[越]|下|越|大。", "Yǔ yuè xià yuè dà.", "Cuanto más llueve, más fuerte es.", "很 太 更"],
  ["他|越|说|[越]|快。", "Tā yuè shuō yuè kuài.", "Cuanto más habla, más rápido va.", "很 太 更"],
  ["汉语|[越]|学|越|有|意思。", "Hànyǔ yuè xué yuè yǒu yìsi.", "Cuanto más estudio chino, más interesante es.", "很 太 更"]]],
[3, "Estado que continúa: 着", "Verbo + 着", "着 indica que una acción o estado continúa: 门开着 (la puerta está abierta), 穿着 (llevar puesto).", [
  ["门|开|[着]。", "Mén kāi zhe.", "La puerta está abierta.", "得 地 很"],
  ["他|穿|[着]|一|件|红|衣服。", "Tā chuān zhe yí jiàn hóng yīfu.", "Lleva puesta una prenda roja.", "得 地 很"],
  ["她|笑|[着]|对|我|说。", "Tā xiào zhe duì wǒ shuō.", "Ella me habló sonriendo.", "得 地 很"]]],
[3, "Resultado del verbo: 完, 见, 到", "Verbo + complemento de resultado", "Se añade tras el verbo para indicar el resultado: 看见 (ver, percibir), 做完 (terminar), 找到 (encontrar), 听懂 (entender al oír).", [
  ["我|看|[见]|他|了。", "Wǒ kàn jiàn tā le.", "Lo he visto.", "完 开 在"],
  ["作业|做|[完]|了。", "Zuòyè zuò wán le.", "Ya terminé los deberes.", "见 懂 在"],
  ["我|找|[到]|钥匙|了。", "Wǒ zhǎo dào yàoshi le.", "He encontrado la llave.", "懂 开 在"]]],
[3, "Direcciones: 进来, 出去, 上来…", "Verbo + 进 / 出 / 上 / 下 / 回 + 来 / 去", "Indican la dirección del movimiento respecto a quien habla: 来 (hacia mí) o 去 (alejándose).", [
  ["他|跑|进|教室|来|了。", "Tā pǎo jìn jiàoshì lái le.", "Entró corriendo en el aula."],
  ["我|想|走|出|去。", "Wǒ xiǎng zǒu chū qù.", "Quiero salir (caminando)."],
  ["她|从|楼上|走|下|来。", "Tā cóng lóushàng zǒu xià lái.", "Ella baja caminando desde arriba."]]],
[3, "Posibilidad: 得 / 不 + resultado", "Verbo + 得 / 不 + resultado", "Se intercala 得 (se puede) o 不 (no se puede) entre el verbo y el complemento: 听得懂 / 听不懂.", [
  ["老师|说|得|太|快，|我|听|[不]|懂。", "Lǎoshī shuō de tài kuài, wǒ tīng bu dǒng.", "El profesor habla muy rápido y no lo entiendo.", "没 别 很"],
  ["这个|字|你|看|[得]|懂|吗？", "Zhège zì nǐ kàn de dǒng ma?", "¿Puedes entender este carácter al leerlo?", "没 别 很"],
  ["太|重|了，|我|拿|[不]|动。", "Tài zhòng le, wǒ ná bu dòng.", "Pesa demasiado, no puedo moverlo.", "没 别 很"]]],
[3, "Incluso: 连…都 / 也…", "连 + A + 都 / 也 + verbo", "Enfatiza un extremo: «incluso A…».", [
  ["[连]|小孩|都|知道。", "Lián xiǎohái dōu zhīdào.", "Hasta los niños lo saben.", "和 给 把"],
  ["他|[连]|饭|都|没|吃。", "Tā lián fàn dōu méi chī.", "Ni siquiera comió.", "和 对 被"],
  ["我|[连]|他的|名字|也|不|知道。", "Wǒ lián tā de míngzi yě bù zhīdào.", "Ni siquiera sé su nombre.", "和 对 被"]]],
[3, "Excepto: 除了…(以外)", "除了 A (以外)，还 / 也 / 都 B", "除了…还… = además de A, también B. 除了…都… = excepto A, todos.", [
  ["[除了]|英语，|我|还|会|说|汉语。", "Chúle Yīngyǔ, wǒ hái huì shuō Hànyǔ.", "Además de inglés, sé hablar chino.", "因为 虽然 如果"],
  ["除了|他，|大家|[都]|来|了。", "Chúle tā, dàjiā dōu lái le.", "Excepto él, todos vinieron.", "才 很 的"],
  ["除了|苹果|[以外]，|我|还|喜欢|香蕉。", "Chúle píngguǒ yǐwài, wǒ hái xǐhuan xiāngjiāo.", "Además de manzanas, me gustan los plátanos.", "以后 以前 以为"]]],
[3, "Acabar de: 刚 y 刚才", "刚 + verbo · 刚才 + frase", "刚 va directamente delante del verbo («acabar de»). 刚才 es una palabra de tiempo («hace un momento») y puede ir al inicio.", [
  ["我|[刚]|到|家。", "Wǒ gāng dào jiā.", "Acabo de llegar a casa.", "很 的 吗"],
  ["刚才|谁|给|你|打|电话？", "Gāngcái shéi gěi nǐ dǎ diànhuà?", "¿Quién te llamó hace un momento?"],
  ["他|刚才|还|在|这里。", "Tā gāngcái hái zài zhèlǐ.", "Hace un momento todavía estaba aquí."]]],
[3, "Ya: 已经…了", "已经 + verbo + 了", "Indica que algo ya ha pasado o ya es así.", [
  ["我|[已经]|吃|过|饭|了。", "Wǒ yǐjīng chī guo fàn le.", "Ya he comido.", "正在 太 很"],
  ["他|[已经]|走|了。", "Tā yǐjīng zǒu le.", "Él ya se fue.", "正在 还 太"],
  ["现在|[已经]|十|点|了。", "Xiànzài yǐjīng shí diǎn le.", "Ya son las diez.", "正在 还 太"]]],
[3, "Tarde o pronto: 才 y 就", "才 = tarde / poco · 就 = pronto / fácil", "Delante del verbo, 才 indica que algo ocurre más tarde de lo esperado; 就, que ocurre antes o enseguida.", [
  ["他|八点|[才]|起床。", "Tā bā diǎn cái qǐchuáng.", "No se levanta hasta las ocho.", "很 的 吗"],
  ["我|七点|[就]|到|了。", "Wǒ qī diǎn jiù dào le.", "Llegué ya a las siete.", "才 很 吗"],
  ["你|怎么|[才]|来？", "Nǐ zěnme cái lái?", "¿Cómo es que vienes tan tarde?", "很 吗 的"]]],
[3, "Finalidad: 为了", "为了 + objetivo，(sujeto) + acción", "Introduce el propósito de una acción: «para…».", [
  ["[为了]|学|好|汉语，|我|每天|练习。", "Wèile xué hǎo Hànyǔ, wǒ měitiān liànxí.", "Para aprender bien chino, practico cada día.", "虽然 但是 所以"],
  ["[为了]|健康，|他|每天|跑步。", "Wèile jiànkāng, tā měitiān pǎobù.", "Por su salud, corre cada día.", "虽然 但是 所以"],
  ["他|[为了]|孩子|努力|工作。", "Tā wèile háizi nǔlì gōngzuò.", "Trabaja duro por sus hijos.", "虽然 但是 所以"]]],
[3, "Dos cualidades: 又…又…", "又 + adj 1 + 又 + adj 2", "Une dos cualidades o acciones que se dan a la vez.", [
  ["这个|菜|[又]|好吃|又|便宜。", "Zhège cài yòu hǎochī yòu piányi.", "Este plato está rico y es barato.", "的 再 才"],
  ["她|又|高|[又]|漂亮。", "Tā yòu gāo yòu piàoliang.", "Ella es alta y guapa.", "很 再 才"],
  ["孩子们|又|唱|又|跳。", "Háizimen yòu chàng yòu tiào.", "Los niños cantan y bailan a la vez."]]],
[3, "Los tres «de»: 的, 得 y 地", "的 (posesivo) · 得 (grado) · 地 (modo)", "的 va entre poseedor y cosa. 得 va tras el verbo y antes del adjetivo de grado. 地 va tras un adjetivo o adverbio y antes del verbo: 高兴地说.", [
  ["她|唱|[得]|很|好。", "Tā chàng de hěn hǎo.", "Ella canta muy bien.", "地 着 了"],
  ["他|高兴|[地]|笑|了。", "Tā gāoxìng de xiào le.", "Se rió alegremente.", "吗 过 很"],
  ["这|是|我|[的]|书。", "Zhè shì wǒ de shū.", "Este es mi libro.", "得 地 着"]]],
[3, "Se dice que: 听说 y 看起来", "听说 + frase · 看起来 + frase", "听说 introduce información de segunda mano («dicen que…»). 看起来 expresa una impresión («parece que…»).", [
  ["[听说]|他|病|了。", "Tīngshuō tā bìng le.", "Dicen que está enfermo.", "说话 谢谢 欢迎"],
  ["这个|菜|[看起来]|很|好吃。", "Zhège cài kànqǐlái hěn hǎochī.", "Este plato parece muy rico.", "说话 谢谢 欢迎"],
  ["他|[看起来]|很|累。", "Tā kànqǐlái hěn lèi.", "Parece muy cansado.", "说话 谢谢 欢迎"]]],

[4, "Aunque: 即使…也…", "即使 A，也 B", "«Aunque / incluso si A, B igualmente». A es hipotético o extremo.", [
  ["[即使]|下雨，|我|也|要|去。", "Jíshǐ xià yǔ, wǒ yě yào qù.", "Aunque llueva, iré.", "所以 因此 然后"],
  ["即使|很|累，|他|[也]|坚持|工作。", "Jíshǐ hěn lèi, tā yě jiānchí gōngzuò.", "Aunque esté cansado, sigue trabajando.", "很 的 吗"],
  ["即使|你|不|说，|我|[也]|知道。", "Jíshǐ nǐ bù shuō, wǒ yě zhīdào.", "Aunque no lo digas, lo sé.", "很 的 吗"]]],
[4, "Ya que: 既然…就…", "既然 A，就 B", "«Ya que A, entonces B»: A es un hecho ya conocido.", [
  ["[既然]|你|不|想|去，|就|别|去|了。", "Jìrán nǐ bù xiǎng qù, jiù bié qù le.", "Ya que no quieres ir, no vayas.", "即使 虽然 无论"],
  ["既然|来|了，|[就]|坐|一下|吧。", "Jìrán lái le, jiù zuò yíxià ba.", "Ya que has venido, siéntate un rato.", "才 却 很"],
  ["既然|你|同意，|我们|[就]|开始|吧。", "Jìrán nǐ tóngyì, wǒmen jiù kāishǐ ba.", "Ya que estás de acuerdo, empecemos.", "才 却 很"]]],
[4, "No importa: 不管…都…", "不管 + condición abierta，都 + resultado", "«No importa lo que / cómo… siempre…». Suele llevar 什么, 怎么, 多…", [
  ["[不管]|天气|怎么样，|我们|都|去。", "Bùguǎn tiānqì zěnmeyàng, wǒmen dōu qù.", "Haga el tiempo que haga, vamos.", "因为 虽然 所以"],
  ["不管|多|忙，|他|[都]|来。", "Bùguǎn duō máng, tā dōu lái.", "Por muy ocupado que esté, viene.", "却 很 的"],
  ["不管|你|说|什么，|我|[都]|相信。", "Bùguǎn nǐ shuō shénme, wǒ dōu xiāngxìn.", "Digas lo que digas, te creo.", "却 很 的"]]],
[4, "Solo si: 只有…才…", "只有 A，才 B", "«Solo si A, B»: A es la única condición. A diferencia de 只要…就, aquí A es indispensable.", [
  ["[只有]|努力，|才|能|成功。", "Zhǐyǒu nǔlì, cái néng chénggōng.", "Solo esforzándote puedes triunfar.", "虽然 即使 既然"],
  ["只有|你|来，|我|[才]|放心。", "Zhǐyǒu nǐ lái, wǒ cái fàngxīn.", "Solo si vienes tú me quedo tranquilo.", "的 吗 得"],
  ["只有|多|听|多|说，|[才]|能|学好|汉语。", "Zhǐyǒu duō tīng duō shuō, cái néng xuéhǎo Hànyǔ.", "Solo escuchando y hablando mucho se aprende chino.", "的 吗 得"]]],
[4, "Antes que: 宁可…也…", "宁可 A，也不 B", "«Preferir A antes que B»: se elige lo menos malo.", [
  ["我|[宁可]|走路，|也|不|坐|那|辆|车。", "Wǒ nìngkě zǒulù, yě bú zuò nà liàng chē.", "Prefiero ir a pie antes que subir a ese coche.", "只要 既然 因为"],
  ["他|宁可|饿|着，|[也]|不|吃|这个。", "Tā nìngkě è zhe, yě bù chī zhège.", "Prefiere pasar hambre antes que comer esto.", "很 的 吗"],
  ["我|宁可|晚|睡，|[也]|要|做|完|作业。", "Wǒ nìngkě wǎn shuì, yě yào zuò wán zuòyè.", "Prefiero acostarme tarde, pero acabaré los deberes.", "很 的 吗"]]],
[4, "En vez de: 与其…不如…", "与其 A，不如 B", "«En lugar de A, mejor B»: se recomienda B.", [
  ["[与其]|坐|车，|不如|走路。", "Yǔqí zuò chē, bùrú zǒulù.", "En vez de ir en coche, mejor ir a pie.", "即使 既然 只要"],
  ["与其|等，|[不如]|自己|去。", "Yǔqí děng, bùrú zìjǐ qù.", "En vez de esperar, mejor ir yo mismo.", "不管 不但 因此"],
  ["与其|在|家|看|电视，|[不如]|出去|玩。", "Yǔqí zài jiā kàn diànshì, bùrú chūqù wán.", "En vez de ver la tele en casa, mejor salir a jugar.", "不管 不但 因此"]]],
[4, "Contraste inesperado: 却", "A，却 B", "却 va delante del verbo y marca un contraste inesperado con lo anterior.", [
  ["房间|不|大，|[却]|很|干净。", "Fángjiān bú dà, què hěn gānjìng.", "La habitación no es grande, pero está muy limpia.", "所以 因为 如果"],
  ["他|很|聪明，|学习|[却]|不|努力。", "Tā hěn cōngming, xuéxí què bù nǔlì.", "Es listo, pero no se esfuerza.", "所以 因为 如果"],
  ["我|等|了|很|久，|他|[却]|没|来。", "Wǒ děng le hěn jiǔ, tā què méi lái.", "Esperé mucho, pero él no vino.", "所以 因为 如果"]]],
[4, "Si no: 否则 / 不然", "A，否则 / 不然 B", "«Si no, …»: advierte de una consecuencia negativa si no se cumple A.", [
  ["快|点|走，|[否则]|要|迟到|了。", "Kuài diǎn zǒu, fǒuzé yào chídào le.", "Date prisa, si no llegarás tarde.", "虽然 而且 并且"],
  ["多|穿|点|衣服，|[不然]|会|感冒|的。", "Duō chuān diǎn yīfu, bùrán huì gǎnmào de.", "Abrígate más, si no te resfriarás.", "虽然 而且 并且"],
  ["你|要|早|点|睡，|[否则]|明天|起|不|来。", "Nǐ yào zǎo diǎn shuì, fǒuzé míngtiān qǐ bu lái.", "Acuéstate temprano, si no mañana no podrás levantarte.", "虽然 而且 并且"]]],
[4, "Para…: 对…来说", "对 + persona + 来说，…", "«Para / desde el punto de vista de…».", [
  ["[对]|我|来说，|这|很|容易。", "Duì wǒ láishuō, zhè hěn róngyì.", "Para mí esto es fácil.", "给 从 和"],
  ["对|孩子|来说，|这|本|书|太|难|了。", "Duì háizi láishuō, zhè běn shū tài nán le.", "Para un niño, este libro es demasiado difícil."],
  ["对|学生|[来说]，|时间|最|重要。", "Duì xuésheng láishuō, shíjiān zuì zhòngyào.", "Para un estudiante, el tiempo es lo más importante.", "来看 说话 看起来"]]],
[4, "Sobre: 关于", "关于 + tema", "关于 introduce el tema del que se habla o escribe. Puede ir al principio o modificar a un sustantivo con 的.", [
  ["[关于]|这个|问题，|我们|明天|讨论。", "Guānyú zhège wèntí, wǒmen míngtiān tǎolùn.", "Sobre este problema, hablaremos mañana.", "从 给 向"],
  ["这|是|一|本|[关于]|历史|的|书。", "Zhè shì yì běn guānyú lìshǐ de shū.", "Este es un libro sobre historia.", "从 给 向"],
  ["[关于]|这|件|事，|我|不|太|清楚。", "Guānyú zhè jiàn shì, wǒ bú tài qīngchu.", "Sobre este asunto, no tengo muy claro.", "从 给 向"]]],
[4, "Según y mediante: 根据 / 通过", "根据 + base · 通过 + medio", "根据 («según, en base a») introduce una fuente o evidencia. 通过 = a través de, mediante.", [
  ["[根据]|天气|预报，|明天|有|雨。", "Gēnjù tiānqì yùbào, míngtiān yǒu yǔ.", "Según el pronóstico, mañana lloverá.", "为了 从 向"],
  ["我|[通过]|朋友|认识|了|他。", "Wǒ tōngguò péngyou rènshi le tā.", "Lo conocí a través de un amigo.", "根据 对于 向"],
  ["[通过]|学习，|我|进步|了|很多。", "Tōngguò xuéxí, wǒ jìnbù le hěn duō.", "Gracias al estudio, he progresado mucho.", "根据 向 从"]]],
[4, "Causar un estado: 使 / 让", "A + 使 / 让 + B + verbo / adjetivo", "使 y 让 expresan que algo provoca un estado en alguien: 使我很高兴.", [
  ["这个|消息|[使]|我|很|高兴。", "Zhège xiāoxi shǐ wǒ hěn gāoxìng.", "Esta noticia me alegra.", "把 被 对"],
  ["这|件|事|[让]|我|很|担心。", "Zhè jiàn shì ràng wǒ hěn dānxīn.", "Este asunto me preocupa mucho.", "把 被 对"],
  ["他|的|话|[使]|大家|笑|了。", "Tā de huà shǐ dàjiā xiào le.", "Sus palabras hicieron reír a todos.", "把 对 在"]]],
[4, "Intensificar: 极了 / 得很 / 多了", "adjetivo + 极了 / 得很 / 多了", "极了 y 得很 refuerzan el adjetivo («muy…»). 多了 se usa en comparaciones: «mucho más».", [
  ["这个|电影|好|[极了]！", "Zhège diànyǐng hǎo jíle!", "¡Esta película es buenísima!", "很了 太了 非常了"],
  ["他|累|[得很]。", "Tā lèi de hěn.", "Está muy cansado.", "很了 太了 非常了"],
  ["今天|比|昨天|冷|[多了]。", "Jīntiān bǐ zuótiān lěng duō le.", "Hoy hace mucho más frío que ayer.", "极了 得很 太了"]]],
[4, "Repetir el verbo", "verbo + verbo", "Repetir un verbo suaviza la acción («echar un vistazo, probar a…»): 看看, 聊聊, 休息休息.", [
  ["我们|[聊聊]|吧。", "Wǒmen liáoliao ba.", "Charlemos un rato.", "聊了 聊过 聊得"],
  ["你|[看看]，|这个|怎么样？", "Nǐ kànkan, zhège zěnmeyàng?", "Échale un vistazo, ¿qué tal está esto?", "看得 看地 看很"],
  ["周末|我|想|在|家|[休息休息]。", "Zhōumò wǒ xiǎng zài jiā xiūxi xiūxi.", "El fin de semana quiero descansar un poco en casa.", "休息了 休息过 休息得"]]],
[4, "Si…: …的话", "如果 / 要是 + A + 的话，B", "的话 va al final de la condición y refuerza el sentido de «si».", [
  ["如果|你|有|空|的话，|请|来|一下。", "Rúguǒ nǐ yǒu kòng de huà, qǐng lái yíxià.", "Si tienes tiempo, ven un momento."],
  ["下雨|的话，|我|就|不|去|了。", "Xià yǔ de huà, wǒ jiù bú qù le.", "Si llueve, no iré."],
  ["要是|你|不|喜欢|的话，|可以|换|一个。", "Yàoshi nǐ bù xǐhuan de huà, kěyǐ huàn yí ge.", "Si no te gusta, puedes cambiarlo por otro."]]],
[4, "Dar tiempo: 来得及 / 来不及", "来得及 · 来不及 + verbo", "来得及 = hay tiempo para; 来不及 = no da tiempo.", [
  ["现在|走|还|来得及。", "Xiànzài zǒu hái láidejí.", "Si salimos ahora, aún da tiempo."],
  ["时间|太|短|了，|我|[来不及]|吃|早饭|了。", "Shíjiān tài duǎn le, wǒ láibují chī zǎofàn le.", "Había muy poco tiempo, no me dio tiempo a desayunar.", "来得到 来过 来了"],
  ["别|着急，|我们|来得及。", "Bié zháojí, wǒmen láidejí.", "No te preocupes, aún da tiempo."]]],
[4, "Pregunta retórica: 难道…吗", "难道 + frase + 吗？", "Expresa sorpresa o reproche: «¿acaso…?».", [
  ["[难道]|你|不|知道|吗？", "Nándào nǐ bù zhīdào ma?", "¿Acaso no lo sabes?", "即使 虽然 所以"],
  ["难道|他|没|来|[吗]？", "Nándào tā méi lái ma?", "¿Acaso no vino?", "得 很 在"],
  ["难道|这|就|是|你的|答案|吗？", "Nándào zhè jiù shì nǐ de dá'àn ma?", "¿Acaso esta es tu respuesta?"]]],
[4, "Insistir en la pregunta: 到底 / 究竟", "到底 + pregunta", "到底 y 究竟 intensifican una pregunta: «¿en realidad…?».", [
  ["你|[到底]|想|去|哪里？", "Nǐ dàodǐ xiǎng qù nǎlǐ?", "¿Dónde quieres ir en realidad?", "的 吗 呢"],
  ["他|[究竟]|是|谁？", "Tā jiūjìng shì shéi?", "¿Quién es él en realidad?", "很 的 吗"],
  ["这|到底|是|怎么|回|事？", "Zhè dàodǐ shì zěnme huí shì?", "¿Qué está pasando en realidad?"]]],
[4, "Empezar y seguir: 起来 / 下去", "verbo + 起来 / 下去", "起来 indica el inicio de una acción o una impresión («ponerse a…»). 下去 indica que continúa («seguir…»).", [
  ["她|突然|笑|[起来]|了。", "Tā tūrán xiào qǐlái le.", "De repente se echó a reír.", "下去 进去 回去"],
  ["这个|问题|我们|要|讨论|[下去]。", "Zhège wèntí wǒmen yào tǎolùn xiàqù.", "Tenemos que seguir discutiendo este problema.", "进去 回去 出去"],
  ["天|慢慢|黑|[起来]|了。", "Tiān mànmàn hēi qǐlái le.", "Poco a poco se hizo de noche.", "进去 回去 出去"]]],
[4, "Secuencia: 先…然后…", "先 A，然后 B", "Secuencia de pasos: primero A y después B (más formal que 再).", [
  ["我|[先]|复习，|然后|做|练习。", "Wǒ xiān fùxí, ránhòu zuò liànxí.", "Primero repaso y luego hago ejercicios.", "很 的 吗"],
  ["他|先|吃|了|饭，|[然后]|去|上班。", "Tā xiān chī le fàn, ránhòu qù shàngbān.", "Primero comió y luego fue a trabajar.", "很 的 吗"],
  ["你|先|想|一|想，|[然后]|告诉|我。", "Nǐ xiān xiǎng yi xiǎng, ránhòu gàosu wǒ.", "Piénsalo primero y luego dímelo.", "很 的 吗"]]],
[4, "Adverbios de opinión: 其实, 果然, 当然", "其实 · 果然 · 当然", "其实 = en realidad (corrige una impresión). 果然 = tal como se esperaba. 当然 = por supuesto.", [
  ["[其实]|我|也|不|知道。", "Qíshí wǒ yě bù zhīdào.", "En realidad yo tampoco lo sé.", "已经 一直 正在"],
  ["天气|预报|说|会|下雨，|[果然]|下|了。", "Tiānqì yùbào shuō huì xià yǔ, guǒrán xià le.", "El pronóstico dijo que llovería, y efectivamente llovió.", "一直 正在 曾经"],
  ["你|能|帮|我|吗？|当然|可以！", "Nǐ néng bāng wǒ ma? Dāngrán kěyǐ!", "¿Puedes ayudarme? ¡Por supuesto!"]]],
[4, "Antes, después y cuando", "… 以前 · … 以后 · … 的时候", "Se colocan después de la expresión de tiempo o de la acción: 吃饭以前 (antes de comer), 我小的时候 (cuando era pequeño).", [
  ["吃饭|[以前]，|请|洗|手。", "Chīfàn yǐqián, qǐng xǐ shǒu.", "Antes de comer, lávate las manos.", "一下 因为 所以"],
  ["我|小|[的时候]，|住|在|农村。", "Wǒ xiǎo de shíhou, zhù zài nóngcūn.", "Cuando era pequeño, vivía en el campo.", "一下 因为 所以"],
  ["下课|[以后]，|我们|一起|去|吃饭。", "Xià kè yǐhòu, wǒmen yìqǐ qù chīfàn.", "Después de clase, vamos a comer juntos.", "一下 因为 所以"]]]
);
