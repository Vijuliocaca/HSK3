// Lecturas graduadas: [HSK, título, frases, preguntas, glosario, personaje]
//   frases (una por línea): chino por palabras separadas con / | pinyin por palabras separado con espacios | español | (opcional) 2 si habla la segunda persona de una conversación
//   preguntas (una por línea; 4 por lectura, siempre en este orden: o, x, z, f)
//     o|pregunta|opción 1|opción 2|opción 3|opción 4    elige (comprensión o deducción); la correcta va PRIMERA y la app mezcla
//     x|pregunta|opción 1|opción 2|opción 3|opción 4    elige la que NO se deduce del texto; esa va PRIMERA
//     z|N    elige cuál de 4 frases del texto (en chino) significa la frase N (1 = la primera); las otras 3 las elige la app con longitud parecida
//     f|N    ordena las palabras de la frase N
//     Los falsos de «o» y las ciertas de «x» deben ser plausibles, de longitud parecida y no pedir recordar una frase concreta (lo vigila tests/datos.js)
//   glosario (opcional): hanzi|significado para palabras que no están en el vocabulario; se comparte entre todas las lecturas
//   personaje: id de personajes.js (o «id+id» para una conversación entre dos; la primera persona habla en las frases sin «2»); quién cuenta la lectura (se elige según de qué habla)
(self.LECTS = self.LECTS || []).push(
[1, '🐱 Mi gato', `我/有/一/只/小/猫。|Wǒ yǒu yì zhī xiǎo māo.|Tengo un gatito.
它/很/小，/也/很/可爱。|Tā hěn xiǎo, yě hěn kě'ài.|Es muy pequeño y muy mono.
它/喜欢/吃/鱼。|Tā xǐhuan chī yú.|Le gusta comer pescado.
晚上，/它/在/我/的/床/上/睡觉。|Wǎnshang, tā zài wǒ de chuáng shang shuìjiào.|Por la noche duerme en mi cama.
我/爱/我/的/小/猫。|Wǒ ài wǒ de xiǎo māo.|Quiero a mi gatito.`, `o|¿Qué actitud muestra el narrador hacia su gato?|Cariño: lo describe con ternura y lo quiere mucho|Preocupación: teme que se pierda o enferme|Orgullo: presume de tener un gato muy poco común|Cansancio: cuidarlo le da demasiado trabajo
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|El gato pasa el día entero fuera de casa|El gato duerme muy cerca de su dueño|Al gato le gusta comer pescado|El narrador y el gato viven en la misma casa
z|5
f|1`, `十八|dieciocho
这个|este
每天|cada día
星期六|sábado
十五|quince
很多|mucho
拍照|sacar fotos
一点|un poco
聊天|charlar
喝茶|beber té
天天|todos los días
暑假|vacaciones de verano
西安|Xi'an
成年|adulto
八月|agosto; octavo mes
圆|redondo
全家人|toda la familia
聚|reunirse
身在|estar (en un lugar)
落|caer
这种|este tipo de
等等|etcétera
上海|Shanghái
大多|en su mayoría
看书|leer
年轻人|jóvenes
留在|quedarse en
老家|pueblo natal
小明|Xiao Ming (nombre)
中国人|chino (persona)`, 'payolink'],

[1, '👨‍👩‍👧 Mi familia', `我/家/有/四/口/人：/爸爸、/妈妈、/哥哥/和/我。|Wǒ jiā yǒu sì kǒu rén: bàba, māma, gēge hé wǒ.|En mi casa somos cuatro: papá, mamá, mi hermano mayor y yo.
爸爸/是/医生，/他/在/医院/工作。|Bàba shì yīshēng, tā zài yīyuàn gōngzuò.|Mi padre es médico y trabaja en un hospital.
妈妈/是/老师，/她/很/忙。|Māma shì lǎoshī, tā hěn máng.|Mi madre es profesora y está muy ocupada.
哥哥/今年/十八/岁，/他/是/大学生。|Gēge jīnnián shíbā suì, tā shì dàxuéshēng.|Mi hermano tiene dieciocho años y es universitario.
我们/都/很/爱/这个/家。|Wǒmen dōu hěn ài zhège jiā.|Todos queremos mucho a esta familia.`, `o|¿Cómo se siente el narrador con su familia?|Unido a ella: la quiere mucho|Distante, por el trabajo de sus padres|Agobiado por tantas obligaciones|Preocupado por el futuro de su hermano
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|El hermano mayor trabaja en el hospital de su padre|El padre atiende a pacientes en el hospital donde trabaja|La madre se dedica a dar clase a sus alumnos|El hermano mayor sigue estudiando en la universidad
z|2
f|3`, ``, 'samu'],

[1, '📅 Mi día', `我/每天/六/点/起床。|Wǒ měitiān liù diǎn qǐchuáng.|Todos los días me levanto a las seis.
七/点/我/吃/早饭，/喝/一/杯/牛奶。|Qī diǎn wǒ chī zǎofàn, hē yì bēi niúnǎi.|A las siete desayuno y bebo un vaso de leche.
八/点/我/去/学校/上课。|Bā diǎn wǒ qù xuéxiào shàngkè.|A las ocho voy a la escuela a clase.
中午/我/在/学校/吃饭。|Zhōngwǔ wǒ zài xuéxiào chīfàn.|Al mediodía como en la escuela.
下午/五/点/我/回/家。|Xiàwǔ wǔ diǎn wǒ huí jiā.|A las cinco de la tarde vuelvo a casa.
晚上/十/点/我/睡觉。|Wǎnshang shí diǎn wǒ shuìjiào.|A las diez de la noche me acuesto.`, `o|Entre que sale hacia la escuela y que vuelve a casa, ¿cuánto tiempo pasa fuera?|Unas nueve horas|Unas siete horas|Unas ocho horas|Unas diez horas
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|El narrador cena todos los días en la escuela|Su jornada tiene un horario muy regular y ordenado|Desayuna antes de ir a clase por la mañana|Pasa la hora de comer dentro de la escuela
z|4
f|3`, ``, 'samu'],

[1, '🛍️ En la tienda', `今天/我/和/妈妈/去/商店。|Jīntiān wǒ hé māma qù shāngdiàn.|Hoy voy a la tienda con mamá.
我们/买/了/苹果、/米饭/和/水。|Wǒmen mǎi le píngguǒ, mǐfàn hé shuǐ.|Compramos manzanas, arroz y agua.
苹果/五/块/钱/一/斤，/不/贵。|Píngguǒ wǔ kuài qián yì jīn, bú guì.|Las manzanas cuestan cinco yuanes el jin; no son caras.
我/还/想/买/一/个/杯子。|Wǒ hái xiǎng mǎi yí ge bēizi.|También quiero comprar un vaso.
妈妈/说/可以。|Māma shuō kěyǐ.|Mamá dice que sí.`, `o|¿Qué se deduce de que la madre responda que sí al vaso?|Que accede a comprárselo|Que el vaso estaba muy barato|Que el narrador ya tenía otro igual|Que prefiere comprarlo otro día
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|Las manzanas estaban de oferta ese día|Al narrador le parece barato el precio de las manzanas|El narrador y su madre fueron juntos a comprar|Compraron comida y también bebida
z|3
f|1`, ``, 'samu'],

[1, '🍉 Me encanta la sandía', `夏天/很/热。|Xiàtiān hěn rè.|El verano es muy caluroso.
我/最/喜欢/吃/西瓜。|Wǒ zuì xǐhuan chī xīguā.|Lo que más me gusta comer es la sandía.
西瓜/又/大/又/甜。|Xīguā yòu dà yòu tián.|La sandía es grande y dulce.
我/和/朋友/一起/吃/西瓜。|Wǒ hé péngyou yìqǐ chī xīguā.|Como sandía con mis amigos.
一/个/西瓜/五/块/钱。|Yí ge xīguā wǔ kuài qián.|Una sandía cuesta cinco yuanes.
我/每天/都/想/吃。|Wǒ měitiān dōu xiǎng chī.|Todos los días tengo ganas de comerla.`, `o|¿Qué relación ve Samu entre el calor y la sandía?|Le apetece sobre todo cuando hace calor|Solo se vende en la época de calor|El calor le quita las ganas de comer|La come para refrescarse con amigos
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|Samu prefiere comer la sandía él solo|Samu comparte la sandía con amigos|A Samu le parece dulce y grande|Samu querría comer sandía a diario
z|2
f|4`, ``, 'samu'],

[2, '🧑‍🤝‍🧑 Mi amigo Xiao Ming', `小明/是/我/最/好/的/朋友。|Xiǎomíng shì wǒ zuì hǎo de péngyou.|Xiao Ming es mi mejor amigo.
我们/是/同学，/每天/一起/上学。|Wǒmen shì tóngxué, měitiān yìqǐ shàngxué.|Somos compañeros y vamos juntos a la escuela cada día.
他/很/喜欢/踢/足球，/我/喜欢/唱歌。|Tā hěn xǐhuan tī zúqiú, wǒ xǐhuan chànggē.|A él le encanta jugar al fútbol y a mí cantar.
星期六，/他/常常/来/我/家/玩。|Xīngqīliù, tā chángcháng lái wǒ jiā wán.|Los sábados suele venir a jugar a mi casa.
我们/一起/做/作业，/一起/玩/游戏。|Wǒmen yìqǐ zuò zuòyè, yìqǐ wán yóuxì.|Hacemos los deberes y jugamos juntos.
有/这样/的/朋友，/我/很/高兴。|Yǒu zhèyàng de péngyou, wǒ hěn gāoxìng.|Tener un amigo así me hace muy feliz.`, `o|¿Qué muestra el texto sobre la amistad de los dos?|Que comparten tiempo, aunque tienen gustos distintos|Que se conocen desde hace muy poco y apenas hablan|Que solo se ven durante las clases y en el recreo|Que compiten entre ellos en todo lo que hacen juntos
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|A los dos les gusta jugar al fútbol|Los dos van juntos a la escuela|Sus aficiones no son las mismas|Xiao Ming suele visitar al narrador
z|3
f|2`, ``, 'yuyue'],

[2, '🚲 Ir en bicicleta', `我/家/离/学校/不/太/远，/所以/我/骑/自行车/去/学校。|Wǒ jiā lí xuéxiào bú tài yuǎn, suǒyǐ wǒ qí zìxíngchē qù xuéxiào.|Mi casa no está muy lejos de la escuela, así que voy en bicicleta.
骑/车/要/十五/分钟。|Qí chē yào shíwǔ fēnzhōng.|Tardo quince minutos pedaleando.
下雨/的/时候，/我/坐/公共汽车。|Xiàyǔ de shíhou, wǒ zuò gōnggòngqìchē.|Cuando llueve, voy en autobús.
今天/天气/很/好，/我/骑/得/很/快。|Jīntiān tiānqì hěn hǎo, wǒ qí de hěn kuài.|Hoy hace buen tiempo y pedaleo muy rápido.
我/到/学校/的/时候，/老师/还/没/来。|Wǒ dào xuéxiào de shíhou, lǎoshī hái méi lái.|Cuando llego a la escuela, el profesor aún no ha llegado.`, `o|Si el profesor aún no ha llegado cuando llega el narrador, ¿qué se deduce?|Que ese día el narrador llegó pronto|Que el profesor suele llegar siempre tarde|Que ese día no había clase en la escuela|Que el narrador llegó tarde a clase
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|El narrador va siempre a la escuela en autobús|Cuando llueve cambia de medio de transporte para ir|La escuela queda bastante cerca de la casa del narrador|En bicicleta el trayecto hasta la escuela resulta corto
z|4
f|3`, ``, 'binhao'],

[2, '🎁 Un regalo', `明天/是/妈妈/的/生日。|Míngtiān shì māma de shēngrì.|Mañana es el cumpleaños de mamá.
我/想/给/她/买/一/个/礼物，/可是/不/知道/买/什么。|Wǒ xiǎng gěi tā mǎi yí ge lǐwù, kěshì bù zhīdào mǎi shénme.|Quiero comprarle un regalo, pero no sé qué.
朋友/说，/妈妈/喜欢/花，/也/喜欢/茶。|Péngyou shuō, māma xǐhuan huā, yě xǐhuan chá.|Mi amigo dice que a mamá le gustan las flores y el té.
所以/我/买/了/漂亮/的/花，/还/买/了/好/茶。|Suǒyǐ wǒ mǎi le piàoliang de huā, hái mǎi le hǎo chá.|Así que compré flores bonitas y también buen té.
妈妈/看到/礼物，/笑/了。|Māma kàndào lǐwù, xiào le.|Cuando mamá ve el regalo, sonríe.
她/说/谢谢/你，/她/非常/喜欢。|Tā shuō xièxie nǐ, tā fēicháng xǐhuan.|Dice gracias; le gusta muchísimo.`, `o|¿Por qué pide consejo el narrador a un amigo?|Porque no sabía qué le gustaría a su madre|Porque no tenía dinero para comprar el regalo|Porque quería regalarle algo también a su amigo|Porque su madre se lo había pedido el día antes
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|La madre ya había pedido flores y té|El regalo se eligió con el consejo de un amigo|A la madre le gustó mucho el regalo|El narrador compró dos cosas distintas
z|3
f|1`, ``, 'samu'],

[2, '🌳 Un día en el parque', `这个/周末/天气/很/好，/我们/去/公园/玩。|Zhège zhōumò tiānqì hěn hǎo, wǒmen qù gōngyuán wán.|Este fin de semana hace buen tiempo y vamos al parque.
公园/里/有/很/多/人，/有/的/人/跑步，/有/的/人/唱歌。|Gōngyuán lǐ yǒu hěn duō rén, yǒu de rén pǎobù, yǒu de rén chànggē.|Hay mucha gente: unos corren y otros cantan.
弟弟/想/喝/水，/我/就/去/买/了/两/瓶。|Dìdi xiǎng hē shuǐ, wǒ jiù qù mǎi le liǎng píng.|Mi hermano pequeño tenía sed y fui a comprar dos botellas.
我们/玩/了/三/个/小时/才/回/家。|Wǒmen wán le sān ge xiǎoshí cái huí jiā.|Jugamos tres horas antes de volver a casa.
真/是/快乐/的/一/天！|Zhēn shì kuàilè de yì tiān!|¡Qué día tan feliz!`, `o|¿Qué ambiente transmite el texto?|Un día tranquilo y agradable en familia|Una jornada agotadora y llena de prisas|Un día de tensión entre hermanos|Una excursión con muchos problemas
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|Todas las personas del parque hacían lo mismo|En el parque había gente haciendo cosas distintas|Lo pasaron bien y jugaron durante un buen rato|El hermano pequeño necesitaba beber algo
z|3
f|5`, ``, 'payolink'],

[2, '🥛 Sin leche, por favor', `我/和/朋友/去/咖啡店。|Wǒ hé péngyou qù kāfēidiàn.|Voy con un amigo a una cafetería.
我/想/喝/一/杯/咖啡，/可是/我/不/能/喝/牛奶。|Wǒ xiǎng hē yì bēi kāfēi, kěshì wǒ bù néng hē niúnǎi.|Quiero tomar un café, pero no puedo beber leche.
喝/了/牛奶，/我/的/肚子/会/不/舒服。|Hē le niúnǎi, wǒ de dùzi huì bù shūfu.|Si bebo leche, me sienta mal el estómago.
所以/我/对/服务员/说，/请/不要/放/牛奶。|Suǒyǐ wǒ duì fúwùyuán shuō, qǐng búyào fàng niúnǎi.|Así que le digo al camarero que, por favor, no ponga leche.
服务员/笑/着/说，/没/问题，/你/可以/喝/黑/咖啡。|Fúwùyuán xiào zhe shuō, méi wèntí, nǐ kěyǐ hē hēi kāfēi.|El camarero sonríe y dice: no hay problema, puedes tomar café solo.
我/的/朋友/喝/了/奶茶，/我/喝/的/是/黑/咖啡。|Wǒ de péngyou hē le nǎichá, wǒ hē de shì hēi kāfēi.|Mi amigo toma té con leche y yo, café solo.`, `o|¿Cómo resuelve Payolink su problema con la leche en la cafetería?|Lo explica con naturalidad y pide algo que le conviene|Renuncia a pedir nada para no complicarle la vida al camarero|Pide lo mismo que su amigo y aguanta las molestias|Se queja al camarero y se marcha de la cafetería
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|El camarero se niega a preparar café sin leche|Hay bebidas que Payolink sí puede tomar sin problema|Payolink y su amigo piden bebidas bastante distintas|Payolink sabe bien qué alimentos le sientan mal
z|2
f|1`, `咖啡店|cafetería
肚子|estómago
服务员|camarero; camarera
笑|sonreír; reír
着|(partícula: acción en curso)
黑咖啡|café solo (sin leche)
奶茶|té con leche`, 'payolink'],

[2, '🍗 Hoy comemos KFC', `今天/是/星期六，/我/想/吃/肯德基。|Jīntiān shì xīngqīliù, wǒ xiǎng chī Kěndéjī.|Hoy es sábado y quiero comer KFC.
我/是/中国人，/可是/我/很/喜欢/吃/炸鸡。|Wǒ shì Zhōngguórén, kěshì wǒ hěn xǐhuan chī zhájī.|Soy china, pero me encanta el pollo frito.
我/每/个/星期/都/去/一/次。|Wǒ měi ge xīngqī dōu qù yí cì.|Voy una vez por semana.
我/常常/点/炸鸡/和/蛋挞，/还/要/一/杯/可乐。|Wǒ chángcháng diǎn zhájī hé dàntà, hái yào yì bēi kělè.|Suelo pedir pollo frito y tartaletas de huevo, y además un vaso de cola.
朋友/说/我/吃/得/太/多，/可是/我/觉得/很/好吃。|Péngyou shuō wǒ chī de tài duō, kěshì wǒ juéde hěn hǎochī.|Mis amigos dicen que como demasiado, pero a mí me parece riquísimo.
下/个/星期六，/我/还/要/去！|Xià ge xīngqīliù, wǒ hái yào qù!|¡El próximo sábado volveré a ir!`, `o|¿Qué imagen da YuYue de su relación con el KFC?|Es un capricho habitual, aunque bromeen sus amigos|Es algo que hace por obligación social|Es una costumbre que quiere dejar en cuanto pueda|Es un sitio que solo visita en fechas especiales
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|Los amigos de YuYue la acompañan siempre al KFC|YuYue come en el KFC con regularidad, casi cada semana|YuYue disfruta mucho de lo que suele pedir allí|Otras personas piensan que YuYue come demasiado
z|2
f|1`, `肯德基|KFC
炸鸡|pollo frito
蛋挞|tartaleta de huevo
点|pedir (en un restaurante)`, 'yuyue'],

[2, '💼 Me encanta mi trabajo', `我/在/一/家/公司/工作。|Wǒ zài yì jiā gōngsī gōngzuò.|Trabajo en una empresa.
我/非常/喜欢/我/的/工作。|Wǒ fēicháng xǐhuan wǒ de gōngzuò.|Me encanta mi trabajo.
每天/早上，/我/都/高兴/地/去/上班。|Měitiān zǎoshang, wǒ dōu gāoxìng de qù shàngbān.|Cada mañana voy contento al trabajo.
我/的/同事/都/很/好，/我们/常常/一起/吃/午饭。|Wǒ de tóngshì dōu hěn hǎo, wǒmen chángcháng yìqǐ chī wǔfàn.|Mis compañeros son muy buenos y solemos comer juntos.
有/时候/工作/很/忙，/可是/我/不/觉得/累。|Yǒu shíhou gōngzuò hěn máng, kěshì wǒ bù juéde lèi.|A veces hay mucho trabajo, pero no me siento cansado.
因为/我/喜欢/做/的/事，/所以/每天/都/很/快乐。|Yīnwèi wǒ xǐhuan zuò de shì, suǒyǐ měitiān dōu hěn kuàilè.|Como me gusta lo que hago, cada día soy feliz.`, `o|¿Qué relación ve BinHao entre su trabajo y su felicidad?|Es feliz porque hace algo que le gusta|Es feliz porque gana mucho dinero|Es feliz porque trabaja muy pocas horas|Es feliz porque no tiene jefe que le mande
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|BinHao cambiaría de trabajo si pudiera|BinHao se lleva bien con su equipo|A BinHao no le pesa el trabajo duro|BinHao empieza cada día con buen ánimo
z|5
f|1`, `同事|compañero de trabajo
上班|ir a trabajar`, 'binhao'],

[3, '🌸 Primavera en Pekín', `春天/来/了，/北京/的/花/都/开/了。|Chūntiān lái le, Běijīng de huā dōu kāi le.|Llegó la primavera y las flores de Pekín han florecido.
周末，/我/和/朋友/去/公园/看/花。|Zhōumò, wǒ hé péngyou qù gōngyuán kàn huā.|El fin de semana fui con mis amigos a ver las flores.
那里/有/红/的、/白/的、/黄/的，/特别/漂亮。|Nàlǐ yǒu hóng de, bái de, huáng de, tèbié piàoliang.|Había flores rojas, blancas y amarillas, muy bonitas.
很多/人/在/花/前/拍照，/我们/也/拍/了/很多/照片。|Hěnduō rén zài huā qián pāizhào, wǒmen yě pāi le hěnduō zhàopiàn.|Mucha gente se fotografiaba ante las flores; nosotros sacamos muchas fotos.
回家/的/路上，/天/突然/下/起/雨/来/了。|Huíjiā de lùshang, tiān tūrán xià qǐ yǔ lái le.|De camino a casa empezó a llover de repente.
可是/我们/一点/也/不/难过。|Kěshì wǒmen yìdiǎn yě bù nánguò.|Pero no estábamos nada tristes.`, `o|Tras empezar a llover, ¿qué se deduce de «no estábamos nada tristes»?|Que disfrutaron tanto que la lluvia no les importó|Que ya llevaban paraguas y no se mojaron en absoluto|Que habían previsto con antelación que iba a llover|Que se olvidaron de las flores por la lluvia
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|Fueron a ver las flores sin compañía de nadie|Disfrutaron del paseo a pesar del final inesperado|El plan lo compartieron con un grupo de amigos|Guardaron recuerdos del día con muchas fotografías
z|5
f|6`, ``, 'yuyue'],

[3, '🐼 En el zoológico', `上/个/月，/我/和/家人/去/了/动物园。|Shàng ge yuè, wǒ hé jiārén qù le dòngwùyuán.|El mes pasado fui con mi familia al zoo.
我们/先/看/了/大熊猫。|Wǒmen xiān kàn le dàxióngmāo.|Primero vimos los pandas gigantes.
它们/正在/吃/竹子，/样子/非常/可爱。|Tāmen zhèngzài chī zhúzi, yàngzi fēicháng kě'ài.|Estaban comiendo bambú y se veían adorables.
然后/我们/又/去/看/了/老虎/和/猴子。|Ránhòu wǒmen yòu qù kàn le lǎohǔ hé hóuzi.|Después vimos los tigres y los monos.
猴子/特别/聪明，/还/会/跟/人/玩。|Hóuzi tèbié cōngmíng, hái huì gēn rén wán.|Los monos son muy listos y hasta juegan con la gente.
中午/我们/在/动物园/里/吃/了/午饭，/下午/才/回/家。|Zhōngwǔ wǒmen zài dòngwùyuán lǐ chī le wǔfàn, xiàwǔ cái huí jiā.|Comimos en el zoo y volvimos a casa por la tarde.`, `o|¿Cómo fue, en conjunto, la visita al zoo?|Una excursión familiar completa, de mañana a tarde|Una visita rápida de apenas una hora por la mañana|Una excursión organizada por la escuela|Un paseo nocturno para ver animales con linterna
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|Los pandas estuvieron durmiendo todo el rato|La familia comió dentro del zoo antes de volver|Los pandas parecían tranquilos y muy simpáticos|Vieron animales de varias clases durante la visita
z|1
f|2`, `大熊猫|panda gigante
竹子|bambú
老虎|tigre
猴子|mono`, 'payolink'],

[3, '📖 Aprender chino', `我/学/汉语/已经/一/年/了。|Wǒ xué Hànyǔ yǐjīng yì nián le.|Llevo un año estudiando chino.
刚/开始/的/时候，/我/觉得/声调/很/难。|Gāng kāishǐ de shíhou, wǒ juéde shēngdiào hěn nán.|Al principio los tonos me parecían muy difíciles.
后来/我/每天/听/中文/歌，/也/看/中文/电影。|Hòulái wǒ měitiān tīng Zhōngwén gē, yě kàn Zhōngwén diànyǐng.|Luego escuchaba canciones en chino cada día y veía películas.
现在/我/可以/和/中国/朋友/聊天/了。|Xiànzài wǒ kěyǐ hé Zhōngguó péngyou liáotiān le.|Ahora ya puedo charlar con amigos chinos.
老师/说/我/进步/很/快，/我/听/了/非常/高兴。|Lǎoshī shuō wǒ jìnbù hěn kuài, wǒ tīng le fēicháng gāoxìng.|El profesor dice que progreso rápido y eso me alegra mucho.
我/会/继续/努力，/明年/参加/考试。|Wǒ huì jìxù nǔlì, míngnián cānjiā kǎoshì.|Seguiré esforzándome y el año que viene haré el examen.`, `o|¿Qué evolución cuenta el narrador?|De sentirse perdido con los tonos a charlar con chinos|De hablar muy bien a olvidarse de casi todo lo aprendido|De estudiar solo en casa a abandonar el curso por completo|De escribir muy bien a hablar con mucha dificultad
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|El narrador piensa dejar de estudiar chino|El narrador se ayuda con música y cine|Su profesor está contento con su avance|El narrador quiere certificar su nivel
z|2
f|1`, `声调|tonos
进步|progresar
继续|continuar
努力|esforzarse`, 'samu'],

[3, '🍵 En casa de mi abuela', `放假/的/时候，/我/常常/去/奶奶/家。|Fàngjià de shíhou, wǒ chángcháng qù nǎinai jiā.|En vacaciones suelo ir a casa de mi abuela.
奶奶/住/在/一/个/小/城市，/那里/很/安静。|Nǎinai zhù zài yí ge xiǎo chéngshì, nàlǐ hěn ānjìng.|Mi abuela vive en una ciudad pequeña y muy tranquila.
每天/下午，/她/都/会/给/我/泡/一/杯/热/茶。|Měitiān xiàwǔ, tā dōu huì gěi wǒ pào yì bēi rè chá.|Cada tarde me prepara una taza de té caliente.
我们/一边/喝茶，/一边/聊天。|Wǒmen yìbiān hēchá, yìbiān liáotiān.|Charlamos mientras tomamos el té.
她/给/我/讲/小时候/的/故事，/我/总是/听/得/很/认真。|Tā gěi wǒ jiǎng xiǎoshíhou de gùshi, wǒ zǒngshì tīng de hěn rènzhēn.|Me cuenta historias de cuando era pequeña y la escucho con atención.
我/希望/奶奶/身体/健康，/天天/开心。|Wǒ xīwàng nǎinai shēntǐ jiànkāng, tiāntiān kāixīn.|Deseo que mi abuela tenga salud y esté feliz cada día.`, `o|¿Qué papel tiene el té en las visitas a la abuela?|Es el momento de charlar y de pasar tiempo juntos|Es una medicina tradicional que ella le da cada tarde|Es una costumbre antigua que él no soporta nada|Es lo único que toman juntos durante toda la visita
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|La abuela vive junto al mar|La abuela vive tranquila en una ciudad pequeña|Los dos conversan y ella cuenta historias|El narrador desea que su abuela esté sana
z|2
f|4`, `泡|preparar (té) con agua caliente`, 'yuyue'],

[3, '🐱 El gato y la leche', `我/的/猫/很/喜欢/喝/牛奶。|Wǒ de māo hěn xǐhuan hē niúnǎi.|A mi gato le encanta la leche.
可是/我/不/能/喝/牛奶，/因为/我/的/肚子/会/疼。|Kěshì wǒ bù néng hē niúnǎi, yīnwèi wǒ de dùzi huì téng.|Pero yo no puedo beberla, porque me duele el estómago.
昨天/我/带/猫/去/看/兽医。|Zuótiān wǒ dài māo qù kàn shòuyī.|Ayer llevé a mi gato al veterinario.
兽医/说，/很多/猫/喝/了/牛奶/也/会/不/舒服。|Shòuyī shuō, hěnduō māo hē le niúnǎi yě huì bù shūfu.|El veterinario dijo que a muchos gatos también les sienta mal la leche.
兽医/让/我/的/猫/多/喝/水。|Shòuyī ràng wǒ de māo duō hē shuǐ.|El veterinario recomendó que mi gato beba más agua.
现在/我们/都/不/喝/牛奶，/我们/都/喝/水。|Xiànzài wǒmen dōu bù hē niúnǎi, wǒmen dōu hē shuǐ.|Ahora ninguno de los dos bebe leche: los dos bebemos agua.`, `o|¿Qué deciden hacer Payolink y su gato al final?|Dejar la leche y beber agua|Pasarse a la leche sin lactosa|Beber menos agua que antes|Ir al veterinario todos los meses
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|El gato nunca ha probado la leche|La leche también puede sentar mal a los gatos|Payolink tiene molestias cuando toma leche|El veterinario aconseja darle agua al gato
z|6
f|1`, `疼|doler
兽医|veterinario; veterinaria`, 'payolink'],

[4, '🚄 Un viaje en tren', `去年/暑假，/我/一/个/人/坐/火车/去/西安。|Qùnián shǔjià, wǒ yí ge rén zuò huǒchē qù Xī'ān.|El verano pasado fui solo en tren a Xi'an.
火车/开/了/十/个/小时，/我/在/车上/认识/了/一/位/老人。|Huǒchē kāi le shí ge xiǎoshí, wǒ zài chēshang rènshi le yí wèi lǎorén.|El tren tardó diez horas y conocí a un anciano.
他/给/我/介绍/了/西安/的/历史，/还/推荐/了/几/个/好吃/的/地方。|Tā gěi wǒ jièshào le Xī'ān de lìshǐ, hái tuījiàn le jǐ ge hǎochī de dìfang.|Me habló de la historia de Xi'an y me recomendó sitios para comer.
到/了/以后，/我/先/去/看/了/兵马俑。|Dào le yǐhòu, wǒ xiān qù kàn le Bīngmǎyǒng.|Al llegar fui primero a ver los guerreros de terracota.
那些/士兵/的/数量/让/我/非常/吃惊。|Nàxiē shìbīng de shùliàng ràng wǒ fēicháng chījīng.|La cantidad de soldados me dejó muy asombrado.
这/次/旅行/让/我/明白，/一/个/人/出门/也/可以/很/有趣。|Zhè cì lǚxíng ràng wǒ míngbai, yí ge rén chūmén yě kěyǐ hěn yǒuqù.|Este viaje me hizo ver que viajar solo también puede ser muy divertido.`, `o|¿Qué conclusión saca el narrador de su viaje?|Que viajar solo también puede ser muy divertido|Que es mucho mejor viajar con otras personas|Que el tren es un transporte demasiado incómodo|Que Xi'an es una ciudad demasiado cara para visitar
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|Hizo el viaje con un grupo de amigos|Hizo el viaje en vacaciones|Recibió consejos de una persona mayor|Le impresionó lo que vio en Xi'an
z|2
f|5`, `兵马俑|guerreros de terracota
士兵|soldado
数量|cantidad
吃惊|asombrarse`, 'payolink'],

[4, '😴 Dormir bien', `很/多/人/觉得/睡觉/是/浪费/时间，/其实/这/是/错/的。|Hěn duō rén juéde shuìjiào shì làngfèi shíjiān, qíshí zhè shì cuò de.|Mucha gente cree que dormir es perder el tiempo, pero en realidad es un error.
如果/睡/得/不/够，/第二/天/你/会/觉得/很/累，/也/很/难/集中/精神。|Rúguǒ shuì de bú gòu, dì'èr tiān nǐ huì juéde hěn lèi, yě hěn nán jízhōng jīngshén.|Si duermes poco, al día siguiente te sentirás cansado y te costará concentrarte.
成年/人/每天/最好/睡/七/到/八/个/小时。|Chéngnián rén měitiān zuìhǎo shuì qī dào bā ge xiǎoshí.|Los adultos deberían dormir de siete a ocho horas al día.
睡/前/不要/玩/手机，/因为/屏幕/的/光/会/影响/睡眠。|Shuì qián búyào wán shǒujī, yīnwèi píngmù de guāng huì yǐngxiǎng shuìmián.|No uses el móvil antes de dormir, porque la luz de la pantalla afecta al sueño.
另外，/房间/要/安静、/黑暗，/温度/也/不/能/太/高。|Lìngwài, fángjiān yào ānjìng, hēi'àn, wēndù yě bù néng tài gāo.|Además, la habitación debe ser tranquila y oscura, y no demasiado cálida.
养成/好/习惯，/你/的/身体/会/感谢/你。|Yǎngchéng hǎo xíguàn, nǐ de shēntǐ huì gǎnxiè nǐ.|Crea buenos hábitos y tu cuerpo te lo agradecerá.`, `o|¿Cuál es la idea principal del texto?|Dormir bien es importante y requiere buenos hábitos|Hay que dormir lo menos posible para rendir mejor en todo|Solo los niños pequeños necesitan dormir bastante|El móvil ayuda a conciliar mejor el sueño por las noches
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|Usar el móvil en la cama es bueno para relajarse|Dormir poco dificulta concentrarse|Conviene una habitación tranquila y oscura|Los hábitos de sueño influyen en el cuerpo
z|1
f|6`, `集中|concentrar
精神|ánimo; atención
屏幕|pantalla
睡眠|sueño
黑暗|oscuro
养成|crear (un hábito)`, 'binhao'],

[4, '💻 Comprar por internet', `现在/很/多/人/喜欢/在/网上/买/东西。|Xiànzài hěn duō rén xǐhuan zài wǎngshàng mǎi dōngxi.|Hoy a mucha gente le gusta comprar por internet.
你/只要/打开/手机，/就/能/看到/很/多/商品。|Nǐ zhǐyào dǎkāi shǒujī, jiù néng kàndào hěn duō shāngpǐn.|Con solo abrir el móvil puedes ver muchísimos productos.
买/好/以后，/快递/员/会/把/东西/送到/你/家。|Mǎi hǎo yǐhòu, kuàidì yuán huì bǎ dōngxi sòngdào nǐ jiā.|Cuando terminas de comprar, el repartidor lleva el paquete a tu casa.
价格/常常/比/商店/便宜，/还/可以/退货。|Jiàgé chángcháng bǐ shāngdiàn piányi, hái kěyǐ tuìhuò.|El precio suele ser más barato que en la tienda y además se puede devolver.
不过/有时候/东西/和/照片/不/一样，/所以/要/看/评价。|Búguò yǒushíhou dōngxi hé zhàopiàn bù yíyàng, suǒyǐ yào kàn píngjià.|Pero a veces el producto no se parece a la foto, así que conviene leer las valoraciones.
我/觉得/网上/购物/很/方便，/但是/也/要/小心。|Wǒ juéde wǎngshàng gòuwù hěn fāngbiàn, dànshì yě yào xiǎoxīn.|Creo que comprar online es muy cómodo, pero hay que tener cuidado.`, `o|¿Cuál es la postura del autor sobre comprar por internet?|Equilibrada: es cómodo y útil, pero con precauciones|A favor sin ningún reparo ni precaución alguna|Totalmente en contra, porque casi siempre sale mal|Indiferente: le da igual comprar de un modo u otro
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|Comprar por internet es siempre más caro que en tienda|Se puede devolver un producto que no convence al comprador|Las valoraciones ayudan a decidir qué conviene comprar|El producto llega hasta la puerta de casa del cliente
z|2
f|4`, `快递|mensajería; paquete urgente
退货|devolver un producto
评价|valoración
购物|comprar; ir de compras`, 'binhao'],

[4, '🎻 Aprender violín', `小时候，/我/的/爸爸/让/我/学/小提琴。|Xiǎoshíhou, wǒ de bàba ràng wǒ xué xiǎotíqín.|De pequeño, mi padre me hizo aprender violín.
刚/开始，/我/一点/也/不/喜欢，/因为/每天/都/要/练习/一/个/小时。|Gāng kāishǐ, wǒ yìdiǎn yě bù xǐhuan, yīnwèi měitiān dōu yào liànxí yí ge xiǎoshí.|Al principio no me gustaba nada, porque tenía que practicar una hora al día.
有/一/次/我/拉/得/很/难听，/真/想/放弃。|Yǒu yí cì wǒ lā de hěn nántīng, zhēn xiǎng fàngqì.|Una vez toqué fatal y quise rendirme.
老师/对/我/说，/只要/坚持，/一定/会/进步。|Lǎoshī duì wǒ shuō, zhǐyào jiānchí, yídìng huì jìnbù.|El profesor me dijo que con constancia seguro mejoraría.
后来/我/真/的/越/拉/越/好，/还/参加/了/学校/的/比赛。|Hòulái wǒ zhēn de yuè lā yuè hǎo, hái cānjiā le xuéxiào de bǐsài.|Más tarde fui mejorando y hasta participé en un concurso de la escuela.
现在/我/特别/感谢/爸爸/当年/的/决定。|Xiànzài wǒ tèbié gǎnxiè bàba dāngnián de juédìng.|Ahora agradezco mucho la decisión que tomó mi padre entonces.`, `o|¿Qué cambió la opinión del narrador sobre el violín?|Comprobar que mejoraba gracias a la constancia|Dejar de practicar durante mucho tiempo|Que su padre dejó por fin de obligarle a tocar|Que su profesor le subió de nivel enseguida
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|Al narrador siempre le gustó practicar|Hoy el narrador agradece la decisión de su padre|En algún momento estuvo a punto de abandonar|Sus resultados mejoraron con el paso del tiempo
z|4
f|1`, `小提琴|violín
拉|tocar (violín); tirar
放弃|rendirse; abandonar
坚持|perseverar
当年|en aquel entonces`, 'payolink'],

[4, '🍉 Cómo elegir una sandía', `我/有/自己/的/办法/来/挑/西瓜。|Wǒ yǒu zìjǐ de bànfǎ lái tiāo xīguā.|Tengo mi propio método para elegir sandías.
首先，/看/外面/的/皮：/颜色/要/深，/形状/要/圆。|Shǒuxiān, kàn wàimiàn de pí: yánsè yào shēn, xíngzhuàng yào yuán.|Primero miro la piel: el color debe ser oscuro y la forma, redonda.
听说，/轻轻/敲/一/下，/声音/低沉/的/西瓜/更/熟。|Tīngshuō, qīngqīng qiāo yí xià, shēngyīn dīchén de xīguā gèng shú.|Dicen que si le das un golpecito y suena grave, está más madura.
还有，/西瓜/底下/最好/有/一/块/黄色。|Háiyǒu, xīguā dǐxia zuìhǎo yǒu yí kuài huángsè.|Además, es mejor que por debajo tenga una zona amarilla.
不过/这些/办法/不/一定/都/对。|Búguò zhèxiē bànfǎ bù yídìng dōu duì.|Pero estos métodos no siempre son correctos.
就算/挑/错/了，/和/朋友/一起/吃/也/很/开心。|Jiùsuàn tiāo cuò le, hé péngyou yìqǐ chī yě hěn kāixīn.|Aunque me equivoque, comerla con amigos es divertido.`, `o|¿Qué se deduce de «Pero estos métodos no siempre son correctos»?|Que aun siguiéndolos puede salir mala|Que los métodos no sirven para nada|Que solo valen para sandías pequeñas|Que conviene preguntar al vendedor
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|Una sandía madura suena siempre aguda|Hay que fijarse en varios detalles a la vez|El narrador disfruta aunque se equivoque|Algunos consejos son de oídas, no seguros
z|6
f|5`, `挑|elegir; escoger
皮|piel; cáscara
形状|forma
低沉|grave (sonido); apagado
底下|debajo; la parte de abajo
就算|aunque; incluso si
轻轻|suavemente; con delicadeza`, 'samu'],

[4, '💼 Un día de trabajo', `今天/早上/九/点，/我/参加/了/一/个/会议。|Jīntiān zǎoshang jiǔ diǎn, wǒ cānjiā le yí ge huìyì.|Hoy a las nueve participé en una reunión.
会上，/我/向/大家/介绍/了/我们/的/新/计划。|Huìshang, wǒ xiàng dàjiā jièshào le wǒmen de xīn jìhuà.|En la reunión presenté a todos nuestro nuevo plan.
中午/没有/时间/休息，/我/一边/吃/面包，/一边/回/邮件。|Zhōngwǔ méiyǒu shíjiān xiūxi, wǒ yìbiān chī miànbāo, yìbiān huí yóujiàn.|Al mediodía no tuve tiempo de descansar: comía pan y contestaba correos a la vez.
下午，/客户/提出/了/一/个/新/要求，/我们/只好/重新/做/方案。|Xiàwǔ, kèhù tíchū le yí ge xīn yāoqiú, wǒmen zhǐhǎo chóngxīn zuò fāng'àn.|Por la tarde un cliente pidió algo nuevo y tuvimos que rehacer la propuesta.
虽然/很/累，/但是/看到/客户/满意/的/笑容，/我/觉得/一切/都/值得。|Suīrán hěn lèi, dànshì kàndào kèhù mǎnyì de xiàoróng, wǒ juéde yíqiè dōu zhídé.|Aunque estaba cansado, al ver la sonrisa satisfecha del cliente sentí que todo había valido la pena.
这/就是/我/喜欢/我/的/工作/的/原因。|Zhè jiùshì wǒ xǐhuan wǒ de gōngzuò de yuányīn.|Esa es la razón por la que me gusta mi trabajo.`, `o|¿Qué sentimiento domina al final del día de BinHao?|Satisfacción, pese al cansancio|Frustración por el cliente|Alivio porque por fin termina|Aburrimiento por la rutina
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|El cliente se enfadó con la propuesta final|La jornada fue intensa y sin descansos largos|El cliente quedó contento al final del día|El trabajo previsto cambió a mitad de la jornada
z|3
f|6`, `会议|reunión
会上|en la reunión
计划|plan; proyecto
邮件|correo electrónico
客户|cliente
提出|plantear; proponer
要求|petición; exigencia
只好|no tener más remedio que
重新|de nuevo; otra vez
方案|propuesta; plan
满意|satisfecho
笑容|sonrisa; expresión sonriente
一切|todo
值得|valer la pena
原因|razón; causa`, 'binhao'],

[5, '🌕 Festival del Medio Otoño', `中秋节/是/中国/的/传统/节日，/在/农历/八月/十五。|Zhōngqiūjié shì Zhōngguó de chuántǒng jiérì, zài nónglì bāyuè shíwǔ.|El Festival del Medio Otoño es una fiesta tradicional china el día 15 del octavo mes lunar.
这/一/天/的/月亮/又/大/又/圆，/象征/着/团圆。|Zhè yì tiān de yuèliang yòu dà yòu yuán, xiàngzhēng zhe tuányuán.|Ese día la luna es grande y redonda y simboliza la reunión familiar.
全家人/会/聚/在/一起，/一边/赏月，/一边/吃/月饼。|Quánjiārén huì jù zài yìqǐ, yìbiān shǎngyuè, yìbiān chī yuèbǐng.|La familia se reúne y come pasteles de luna mientras contempla la luna.
月饼/有/甜/的，/也/有/咸/的，/馅/有/很/多/种。|Yuèbǐng yǒu tián de, yě yǒu xián de, xiàn yǒu hěn duō zhǒng.|Hay pasteles de luna dulces y salados, con muchos tipos de relleno.
关于/这个/节日，/还有/嫦娥/奔月/的/传说。|Guānyú zhège jiérì, háiyǒu Cháng'é bēnyuè de chuánshuō.|Sobre esta fiesta existe la leyenda de Chang'e, que voló a la luna.
无论/身在/何处，/人们/都/会/抬头/看/月亮，/想念/家人。|Wúlùn shēnzài héchù, rénmen dōu huì táitóu kàn yuèliang, xiǎngniàn jiārén.|Estén donde estén, la gente mira la luna y piensa en su familia.`, `o|¿Qué idea une la luna redonda, los pasteles y mirar la luna?|La reunión de la familia|La riqueza que traerá el año|La buena cosecha de la temporada|El comienzo del invierno
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|Es una fiesta que solo se celebra en las ciudades|Es una fiesta que gira en torno a la reunión de la familia|Mirar la luna une a quienes están lejos de los suyos|Tiene una leyenda muy conocida que la acompaña
z|1
f|5`, `中秋节|Festival del Medio Otoño
农历|calendario lunar
象征|simbolizar
团圆|reunión familiar
赏月|contemplar la luna
月饼|pastel de luna
馅|relleno
嫦娥|Chang'e (diosa de la luna)
奔月|volar a la luna
传说|leyenda
何处|dónde (literario)
抬头|levantar la cabeza`, 'yuyue'],

[5, '🍵 Historia del té', `中国/是/茶/的/故乡，/喝茶/已经/有/几/千/年/的/历史。|Zhōngguó shì chá de gùxiāng, hēchá yǐjīng yǒu jǐ qiān nián de lìshǐ.|China es la patria del té y se bebe desde hace miles de años.
据说，/神农/在/煮/水/的/时候，/几/片/树叶/落/进/锅/里，/他/发现/这种/水/很/香。|Jùshuō, Shénnóng zài zhǔ shuǐ de shíhou, jǐ piàn shùyè luò jìn guō lǐ, tā fāxiàn zhèzhǒng shuǐ hěn xiāng.|Cuenta la leyenda que Shennong hervía agua cuando cayeron unas hojas, y descubrió que olía muy bien.
后来，/茶/从/药物/变成/了/人们/日常/的/饮料。|Hòulái, chá cóng yàowù biànchéng le rénmen rìcháng de yǐnliào.|Más tarde el té pasó de ser medicina a bebida cotidiana.
今天，/中国/有/绿茶、/红茶、/乌龙茶/等等/许多/种类。|Jīntiān, Zhōngguó yǒu lǜchá, hóngchá, wūlóngchá děngděng xǔduō zhǒnglèi.|Hoy hay té verde, rojo, oolong y muchos otros tipos.
不同/的/茶/要/用/不同/温度/的/水/来/泡。|Bùtóng de chá yào yòng bùtóng wēndù de shuǐ lái pào.|Cada té requiere agua a una temperatura distinta.
对/很/多/中国人/来/说，/喝茶/不/只是/习惯，/更/是/一/种/生活/态度。|Duì hěn duō Zhōngguórén lái shuō, hēchá bù zhǐshì xíguàn, gèng shì yì zhǒng shēnghuó tàidù.|Para muchos chinos beber té es más que un hábito: es una actitud ante la vida.`, `o|¿Qué quiere decir «es más que un hábito: es una actitud ante la vida»?|Que el té forma parte del modo de vivir de muchos chinos|Que el té solo se bebe en ceremonias especiales y bodas|Que beber té es una obligación para todos los chinos|Que el té sustituye a las comidas principales del día
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|Todos los tés se preparan exactamente igual|El té tiene un origen muy antiguo en el territorio de China|Existen muchos tipos de té diferentes entre sí|Con el paso del tiempo el té cambió de uso
z|1
f|4`, `故乡|tierra natal
神农|Shennong (figura legendaria)
煮|hervir; cocer
树叶|hoja de árbol
锅|olla
药物|medicamento
日常|cotidiano
饮料|bebida
绿茶|té verde
红茶|té rojo
乌龙茶|té oolong
种类|tipo; clase
温度|temperatura
泡|preparar (té)
态度|actitud`, 'yuyue'],

[5, '🚄 El tren de alta velocidad', `近/十/年，/中国/的/高铁/发展/得/非常/快。|Jìn shí nián, Zhōngguó de gāotiě fāzhǎn de fēicháng kuài.|En la última década el tren de alta velocidad chino se ha desarrollado muy rápido.
从/北京/到/上海，/坐/高铁/只/需要/四/个/多/小时。|Cóng Běijīng dào Shànghǎi, zuò gāotiě zhǐ xūyào sì ge duō xiǎoshí.|De Pekín a Shanghái, el tren de alta velocidad tarda algo más de cuatro horas.
相比/飞机，/高铁/不/受/天气/影响，/而且/车站/大多/在/市区。|Xiāngbǐ fēijī, gāotiě bú shòu tiānqì yǐngxiǎng, érqiě chēzhàn dàduō zài shìqū.|Frente al avión, no depende del clima y las estaciones suelen estar en el centro.
乘客/可以/在/车上/吃饭、/看书，/或者/用/手机/办公。|Chéngkè kěyǐ zài chēshang chīfàn, kànshū, huòzhě yòng shǒujī bàngōng.|Los pasajeros pueden comer, leer o trabajar con el móvil.
因此，/越来越/多/的/人/选择/高铁/出行。|Yīncǐ, yuèláiyuè duō de rén xuǎnzé gāotiě chūxíng.|Por eso cada vez más gente elige el tren para viajar.
有/人/认为，/高铁/不仅/改变/了/交通，/也/改变/了/人们/的/生活/方式。|Yǒu rén rènwéi, gāotiě bùjǐn gǎibiàn le jiāotōng, yě gǎibiàn le rénmen de shēnghuó fāngshì.|Hay quien piensa que ha cambiado no solo el transporte, sino también el modo de vida.`, `o|¿Por qué cada vez más gente elige el tren?|Por varias ventajas prácticas frente al avión|Porque es más barato que el autobús|Porque ya no quedan vuelos disponibles|Porque la ley lo exige en trayectos largos
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|El tren solo sirve para trayectos muy cortos|El clima afecta bastante menos al tren que al avión|Dentro del tren se puede trabajar con el móvil|Las estaciones suelen estar bien situadas en las ciudades
z|4
f|5`, `高铁|tren de alta velocidad
相比|en comparación con
市区|casco urbano; centro
乘客|pasajero
办公|trabajar (en la oficina)
因此|por eso
出行|viajar; salir
不仅|no solo
方式|modo; manera`, 'binhao'],

[5, '🏙️ Ciudad y campo', `越来越/多/的/年轻人/选择/留在/大/城市/工作。|Yuèláiyuè duō de niánqīngrén xuǎnzé liúzài dà chéngshì gōngzuò.|Cada vez más jóvenes eligen quedarse a trabajar en las grandes ciudades.
大/城市/机会/多、/收入/高，/但是/房价/贵、/压力/也/大。|Dà chéngshì jīhuì duō, shōurù gāo, dànshì fángjià guì, yālì yě dà.|En la gran ciudad hay más oportunidades y sueldos altos, pero la vivienda es cara y el estrés alto.
相反，/农村/的/空气/新鲜，/生活/节奏/慢，/人们/更/容易/放松。|Xiāngfǎn, nóngcūn de kōngqì xīnxiān, shēnghuó jiézòu màn, rénmen gèng róngyì fàngsōng.|En cambio, en el campo el aire es fresco, el ritmo lento y es más fácil relajarse.
不过，/农村/的/教育/和/医疗/条件/还/需要/改善。|Búguò, nóngcūn de jiàoyù hé yīliáo tiáojiàn hái xūyào gǎishàn.|Pero la educación y la sanidad rurales aún deben mejorar.
有些/人/先/在/城市/工作/几/年，/再/回/老家/创业。|Yǒuxiē rén xiān zài chéngshì gōngzuò jǐ nián, zài huí lǎojiā chuàngyè.|Algunos trabajan unos años en la ciudad y luego vuelven a su pueblo a emprender.
选择/哪里，/其实/取决于/每/个/人/的/追求。|Xuǎnzé nǎlǐ, qíshí qǔjuéyú měi ge rén de zhuīqiú.|Elegir dónde vivir depende en realidad de lo que busca cada uno.`, `o|¿Cuál es la conclusión del texto?|Que lo mejor depende de lo que busque cada persona|Que es siempre mejor vivir en una gran ciudad|Que el campo es siempre mejor para todo el mundo|Que casi nadie vuelve después a su pueblo de origen
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|En el campo hay más oportunidades de trabajo|En la ciudad se gana más, pero hay más presión|El campo es más tranquilo y fresco|Algunos regresan al pueblo con un proyecto propio
z|4
f|1`, `收入|ingresos
房价|precio de la vivienda
压力|presión; estrés
相反|en cambio; al contrario
农村|campo; zona rural
节奏|ritmo
放松|relajarse
医疗|atención médica
条件|condiciones
改善|mejorar
创业|emprender un negocio
取决于|depender de
追求|aspiración; búsqueda`, 'binhao'],

[5, '🍗 El KFC en China', `一九/八七/年，/肯德基/在/北京/开/了/中国/的/第一/家/店。|Yījiǔ bāqī nián, Kěndéjī zài Běijīng kāi le Zhōngguó de dìyī jiā diàn.|En 1987, KFC abrió en Pekín su primera tienda en China.
那时候，/很多/中国人/第一次/吃到/炸鸡。|Nàshíhou, hěnduō Zhōngguórén dìyīcì chīdào zhájī.|Entonces muchos chinos probaron el pollo frito por primera vez.
今天，/肯德基/的/菜单/里/有/很多/中国/特色。|Jīntiān, Kěndéjī de càidān lǐ yǒu hěnduō Zhōngguó tèsè.|Hoy el menú de KFC tiene muchos toques chinos.
比如，/早上/你/可以/吃到/粥/和/油条。|Bǐrú, zǎoshang nǐ kěyǐ chīdào zhōu hé yóutiáo.|Por ejemplo, por la mañana se pueden tomar gachas de arroz y yóutiáo.
对/我/这样/的/年轻人/来/说，/肯德基/不/只是/快餐，/也是/和/朋友/见面/的/地方。|Duì wǒ zhèyàng de niánqīngrén lái shuō, Kěndéjī bù zhǐshì kuàicān, yěshì hé péngyou jiànmiàn de dìfang.|Para jóvenes como yo, KFC no es solo comida rápida: también es un lugar para quedar con amigos.
当然，/炸鸡/吃/多/了/对/身体/不/好，/所以/我/会/注意/不要/吃/得/太/多。|Dāngrán, zhájī chī duō le duì shēntǐ bù hǎo, suǒyǐ wǒ huì zhùyì búyào chī de tài duō.|Claro, comer demasiado pollo frito no es sano, así que procuro no pasarme.`, `o|¿Qué muestra el texto sobre cómo se adaptó KFC en China?|Que añadió platos locales, como las gachas, a su menú|Que dejó de vender pollo frito para vender comida local|Que se convirtió en una cadena de comida china tradicional|Que solo abre sus tiendas para servir desayunos
x|¿Cuál de estas afirmaciones NO se puede deducir del texto?|KFC llegó a China hace muy pocos años|KFC abrió su primera tienda china en Pekín|Hoy el menú incluye platos de sabor local|Para YuYue también es un sitio de encuentro
z|1
f|2`, `一九|uno nueve (cifras del año)
八七|ocho siete (cifras del año)
肯德基|KFC
炸鸡|pollo frito
第一|primero
第一次|la primera vez
菜单|menú; carta
特色|rasgo característico; toque propio
粥|gachas de arroz (congee)
油条|yóutiáo (masa frita alargada)
快餐|comida rápida
吃到|llegar a comer; probar
也是|también es`, 'yuyue'],
[1, '🍗 Vamos al KFC', `你/好！/今天/你/想/吃/什么？|Nǐ hǎo! Jīntiān nǐ xiǎng chī shénme?|Hola, ¿qué quieres comer hoy?
我/想/吃/鸡。/你/呢？|Wǒ xiǎng chī jī. Nǐ ne?|Quiero comer pollo. ¿Y tú?|2
我/也/想/吃/鸡！/我们/去/肯德基/吧。|Wǒ yě xiǎng chī jī! Wǒmen qù Kěndéjī ba.|¡Yo también quiero pollo! Vamos al KFC.
好。/我/不/能/喝/牛奶，/我/喝/水。|Hǎo. Wǒ bù néng hē niúnǎi, wǒ hē shuǐ.|Vale. Yo no puedo beber leche, beberé agua.|2
你/家/的/猫/吃/鸡/吗？|Nǐ jiā de māo chī jī ma?|¿Tu gato come pollo?
它/喜欢/吃/鱼，/不/喜欢/吃/鸡。|Tā xǐhuan chī yú, bù xǐhuan chī jī.|Le gusta el pescado y no el pollo.|2
那/你/吃/什么？|Nà nǐ chī shénme?|Entonces, ¿tú qué comes?
我/吃/米饭/和/菜。|Wǒ chī mǐfàn hé cài.|Yo como arroz y verdura.|2`, `o|¿Por qué Payolink pide agua en vez de leche?|Porque su cuerpo no tolera los lácteos|Porque el agua le parece más barata|Porque en el KFC no sirven leche|Porque hoy prefiere algo más frío
x|¿Cuál de estas afirmaciones NO se puede deducir de la conversación?|Payolink come en el KFC cada semana|YuYue propone ir al KFC|A Payolink no le sientan bien los lácteos|Al gato de Payolink le gusta el pescado
z|5
f|4`, `肯德基|KFC`, 'yuyue+payolink'],

[2, '💼 Después del trabajo', `你/好！/你/喜欢/你/的/工作/吗？|Nǐ hǎo! Nǐ xǐhuan nǐ de gōngzuò ma?|Hola, ¿te gusta tu trabajo?
我/很/喜欢！/我/每天/都/很/高兴。|Wǒ hěn xǐhuan! Wǒ měitiān dōu hěn gāoxìng.|¡Me gusta mucho! Todos los días estoy muy contento.|2
你/几/点/上班？|Nǐ jǐ diǎn shàngbān?|¿A qué hora entras a trabajar?
我/八/点/上班，/五/点/下班。|Wǒ bā diǎn shàngbān, wǔ diǎn xiàbān.|Entro a las ocho y salgo a las cinco.|2
下班/以后，/你/做/什么？|Xiàbān yǐhòu, nǐ zuò shénme?|Después del trabajo, ¿qué haces?
我/常常/骑/自行车/回/家。|Wǒ chángcháng qí zìxíngchē huí jiā.|Suelo volver a casa en bici.|2
回/家/以后，/我们/一起/吃/西瓜/吧！|Huí jiā yǐhòu, wǒmen yìqǐ chī xīguā ba!|Al llegar a casa, ¡comamos sandía juntos!
好/啊！/夏天/吃/西瓜/最/好。|Hǎo a! Xiàtiān chī xīguā zuì hǎo.|¡Vale! En verano la sandía es lo mejor.|2`, `o|¿Cómo se siente BinHao con su trabajo?|Contento: disfruta de cada día de trabajo|Cansado: trabaja demasiadas horas|Aburrido: preferiría tener otro empleo|Nervioso: teme llegar tarde a la oficina
x|¿Cuál de estas afirmaciones NO se puede deducir de la conversación?|BinHao va al trabajo en coche|BinHao termina de trabajar a las cinco|BinHao vuelve a casa en bicicleta|Samu propone comer algo al llegar a casa
z|4
f|7`, ``, 'samu+binhao'],

[1, '🐱 El gato Xiaobai', `你/有/猫/吗？|Nǐ yǒu māo ma?|¿Tienes un gato?
有，/我/有/一/只/小/猫。|Yǒu, wǒ yǒu yì zhī xiǎo māo.|Sí, tengo un gatito.|2
它/叫/什么/名字？|Tā jiào shénme míngzi?|¿Cómo se llama?
它/叫/小白。/它/很/可爱。|Tā jiào Xiǎobái. Tā hěn kě'ài.|Se llama Xiaobai. Es muy mono.|2
它/多/大/了？|Tā duō dà le?|¿Cuántos años tiene?
它/两/岁/了。|Tā liǎng suì le.|Tiene dos años.|2
我/可以/看看/它/吗？|Wǒ kěyǐ kànkan tā ma?|¿Puedo verlo?
当然/可以！/来/我/家/吧。|Dāngrán kěyǐ! Lái wǒ jiā ba.|¡Claro que sí! Ven a mi casa.|2`, `o|¿Qué desea YuYue al final de la conversación?|Conocer en persona al gato de su amiga|Adoptar un gato como el de su amiga|Llevarle un regalo al gato|Averiguar qué come el gato
x|¿Cuál de estas afirmaciones NO se puede deducir de la conversación?|Xiaobai es ya un gato muy viejo|Payolink tiene un gato pequeño|El gato se llama Xiaobai|Payolink invita a YuYue a su casa
z|7
f|2`, `小白|Xiaobai (nombre del gato)
看看|echar un vistazo`, 'yuyue+payolink'],

[1, '🍵 Una bebida caliente', `你/喝/什么？|Nǐ hē shénme?|¿Qué bebes?
我/喝/茶。/我/不/能/喝/牛奶。|Wǒ hē chá. Wǒ bù néng hē niúnǎi.|Yo bebo té. No puedo beber leche.|2
为什么？|Wèishénme?|¿Por qué?
我/喝/牛奶/以后/不/舒服。|Wǒ hē niúnǎi yǐhòu bù shūfu.|Después de beber leche me siento mal.|2
那/你/可以/喝/水/或者/茶。|Nà nǐ kěyǐ hē shuǐ huòzhě chá.|Entonces puedes beber agua o té.
对，/我/喜欢/热/茶。|Duì, wǒ xǐhuan rè chá.|Sí, me gusta el té caliente.|2
我/也/喝/茶。/我们/一起/喝/吧！|Wǒ yě hē chá. Wǒmen yìqǐ hē ba!|Yo también bebo té. ¡Bebamos juntos!
好，/谢谢/你！|Hǎo, xièxie nǐ!|Vale, ¡gracias!|2`, `o|¿Qué le ocurre a Payolink cuando bebe leche?|Se siente mal después de tomarla|Le entra mucho sueño enseguida|Se le quita por completo el apetito|Le sube un poco la temperatura
x|¿Cuál de estas afirmaciones NO se puede deducir de la conversación?|A Payolink le gusta el té helado|BinHao pregunta qué quiere beber|Payolink toma té en lugar de leche|Los dos beberán té juntos
z|6
f|7`, ``, 'binhao+payolink']
);
