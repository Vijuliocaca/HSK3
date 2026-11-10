// Gramática: puntos añadidos tras la auditoría (duración, frecuencia, relativo con 的, verbos separables, existencia, comparación negativa, dos verbos seguidos). Mismo formato que gramatica1.js
(self.GRAM = self.GRAM || []).push(
[2, "Dos verbos seguidos: medio o finalidad", "Sujeto + (去 / 来 / 坐…) + lugar o medio + verbo", "Cuando haces algo para otra cosa, o por un medio, los verbos van uno tras otro, en el orden en que ocurren y sin conectores: 去商店买东西 (voy a la tienda a comprar). El medio también va delante: 坐地铁去学校. Error típico: poner el lugar o el medio al final, como en español (我买东西在商店; 我去学校坐地铁 significa «voy a la escuela a coger el metro»).", [
  ["我|[去]|商店|买|东西。", "Wǒ qù shāngdiàn mǎi dōngxi.", "Voy a la tienda a comprar cosas.", "把 对 比"],
  ["周末|你|[来]|我|家|吃饭|吧。", "Zhōumò nǐ lái wǒ jiā chīfàn ba.", "El fin de semana ven a mi casa a comer.", "把 给 对"],
  ["我|[坐]|地铁|去|学校。", "Wǒ zuò dìtiě qù xuéxiào.", "Voy a la escuela en metro.", "把 给 对"]]],
[3, "Cuánto tiempo dura una acción", "V + 了 + duración (+ objeto) · V + objeto + V + 了 + duración", "La duración se pone después del verbo: 学了两年中文. Si hay objeto, la duración va entre el verbo y el objeto (学了两年中文) o se repite el verbo (学中文学了两年); si el objeto es una persona, va antes: 等了他一个小时. Con otro 了 al final la acción sigue: 我学了两年中文了 («llevo dos años estudiando chino»). Error típico: poner la duración antes del verbo (我两年学中文) o tras el objeto (我学中文两年).", [
  ["我|学[了]|两|年|中文。", "Wǒ xué le liǎng nián Zhōngwén.", "He estudiado chino dos años.", "着 得 在"],
  ["他|等[了]|一个|小时。", "Tā děng le yí ge xiǎoshí.", "Él esperó una hora.", "着 得 在"],
  ["他|看|书|看[了]|一个|小时。", "Tā kàn shū kàn le yí ge xiǎoshí.", "Estuvo leyendo una hora.", "着 得 在"],
  ["我|等了|他|半|个|[小时]。", "Wǒ děngle tā bàn ge xiǎoshí.", "Lo esperé media hora.", "次 遍 年"]]],
[3, "Cuántas veces: 次 y 遍", "V + número + 次 / 遍 (+ objeto)", "次 cuenta las veces que ocurre algo: 去过三次. 遍 cuenta las veces que una acción se hace completa, de principio a fin: leer un libro dos veces enteras, repetir una frase una vez más. Con una persona o un lugar, 次 puede ir detrás de ellos: 见过他两次, 去过北京三次. Error típico: usar 个 para contar las veces (去三个), o 次 cuando se quiere decir «entero» (看了两次 solo dice que lo viste dos veces).", [
  ["我|去过|北京|三[次]。", "Wǒ qùguo Běijīng sān cì.", "He estado tres veces en Pekín.", "遍 个 本"],
  ["这|本|书|我|看了|两[遍]。", "Zhè běn shū wǒ kànle liǎng biàn.", "Este libro lo he leído dos veces enteras.", "个 本 件"],
  ["请|再|说|一[遍]。", "Qǐng zài shuō yí biàn.", "Por favor, repítelo una vez más.", "个 位 件"],
  ["我|一个|星期|游泳|两[次]。", "Wǒ yí ge xīngqī yóuyǒng liǎng cì.", "Nado dos veces por semana.", "遍 个 本"]]],
[3, "Oración antes del sustantivo con 的", "Sujeto + verbo + 的 + sustantivo", "Para decir «el libro que compré ayer», toda la descripción va delante del sustantivo y se une con 的: 我昨天买的书. Sirve para cualquier verbo: 他写的字, 妈妈做的菜. También describe a quien hace la acción: 穿红衣服的人 («la persona que va de rojo»). Error típico: olvidar 的 o dejar la descripción detrás, como con «que» en español (书我昨天买很好看).", [
  ["我|昨天|买|[的]|书|很|好看。", "Wǒ zuótiān mǎi de shū hěn hǎokàn.", "El libro que compré ayer es muy bonito.", "得 地 和"],
  ["他|写|[的]|字|很|漂亮。", "Tā xiě de zì hěn piàoliang.", "Los caracteres que escribe él son muy bonitos.", "得 地 和"],
  ["妈妈|做|[的]|菜|真|好吃。", "Māma zuò de cài zhēn hǎochī.", "La comida que hace mamá está muy rica.", "得 地 和"],
  ["穿|红|衣服|[的]|人|是|我|姐姐。", "Chuān hóng yīfu de rén shì wǒ jiějie.", "La chica que va de rojo es mi hermana mayor.", "得 地 和"]]],
[3, "Verbos separables: verbo + objeto", "V + 了 / 过 / duración (的) + objeto · 跟 + persona + 见面 · 帮 + persona + 的忙", "Verbos como 见面, 帮忙, 睡觉, 游泳 son un verbo más su objeto, y se pueden partir: el aspecto, la duración o el complemento se meten en medio (睡了一觉, 游了一个小时的泳), y la persona se pone antes con 跟 (跟他见面) o dentro con 的 (帮我的忙). Error típico: poner otro objeto detrás, como en español (见面他, 帮忙我: di 跟他见面, 帮我 o 帮助我), o la duración al final (游泳了一个小时: di 游了一个小时的泳 o 游泳游了一个小时).", [
  ["我|明天|要|[跟]|他|见面。", "Wǒ míngtiān yào gēn tā jiànmiàn.", "Mañana voy a quedar con él.", "把 给 对"],
  ["我|昨天|睡[了]|一|觉。", "Wǒ zuótiān shuì le yí jiào.", "Ayer eché una siesta.", "着 得 在"],
  ["他|游[了]|一个|小时|的|泳。", "Tā yóu le yí ge xiǎoshí de yǒng.", "Nadó durante una hora.", "着 得 在"],
  ["他|帮了|我|[的]|忙。", "Tā bāngle wǒ de máng.", "Él me echó una mano.", "得 地 和"]]],
[3, "Existencia y aparición: lugar + 着 / 了", "Lugar + V着 + algo · Lugar + V了 + algo", "Para decir qué hay en un lugar, el lugar va primero y lo que hay, al final: 桌子上放着一本书. Con 着 se describe lo que está ahí; con 了 se cuenta algo que aparece: 我们班来了一个新同学. Lo que hay o aparece suele ser algo nuevo para el oyente (一本书, no 那本书). Error típico: empezar por la cosa, como en español (一本书在桌子上), o usar a la vez 有 y 在 (有一本书在桌子上).", [
  ["桌子|上|放[着]|一|本|书。", "Zhuōzi shàng fàngzhe yì běn shū.", "Sobre la mesa hay un libro.", "得 在 地"],
  ["门口|站[着]|一个|人。", "Ménkǒu zhànzhe yí ge rén.", "En la puerta hay una persona de pie.", "得 在 地"],
  ["我们|班|来[了]|一个|新|同学。", "Wǒmen bān láile yí ge xīn tóngxué.", "A nuestra clase ha llegado un compañero nuevo.", "得 地 着"]]],
[3, "Comparación negativa: 没有 y 不如", "A + 没有 + B (+ 那么) + adjetivo · A + 不如 + B (+ adjetivo)", "Para decir que A no llega a B, se usa 没有: 我没有他高 («no soy tan alto como él»). 不如 es «no es tan… como»; sin adjetivo, «no es tan bueno como»: 走路不如坐车快, 我唱歌不如我姐姐. El adjetivo va al final y no lleva 很. Error típico: decir 我不比他高 creyendo que significa «no soy tan alto» (en realidad dice «no soy más alto», puede ser igual).", [
  ["我|[没有]|他|高。", "Wǒ méiyǒu tā gāo.", "No soy tan alto como él.", "不有 很 也"],
  ["今天|[没有]|昨天|那么|冷。", "Jīntiān méiyǒu zuótiān nàme lěng.", "Hoy no hace tanto frío como ayer.", "不有 很 也"],
  ["走路|[不如]|坐|车|快。", "Zǒulù bùrú zuò chē kuài.", "Ir andando no es tan rápido como ir en coche.", "不有 很 也"],
  ["我|唱歌|[不如]|我|姐姐。", "Wǒ chànggē bùrú wǒ jiějie.", "No canto tan bien como mi hermana mayor.", "不 很 也"]]],
);
