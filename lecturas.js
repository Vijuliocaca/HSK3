// Lecturas graduadas: [HSK, título, frases, preguntas, glosario, personaje]
//   frases (una por línea): chino por palabras separadas con / | pinyin por palabras separado con espacios | español
//   preguntas (una por línea, 4 por lectura): tipo|pregunta|opción 1|opción 2|opción 3|opción 4
//     o = elige (la correcta va primera; la app mezcla) · x = elige la afirmación FALSA (la falsa va primera) · r = ordena los hechos (van en el orden correcto)
//     los falsos de «o» y las verdaderas de «x» deben salir del propio texto para que no se resuelvan por descarte (lo comprueba tests/datos.js)
//   glosario (opcional): hanzi|significado para palabras que no están en el vocabulario; se comparte entre todas las lecturas
//   personaje: id de personajes.js; quién cuenta la lectura (se elige según de qué habla)
(self.LECTS = self.LECTS || []).push(
[1, '🐱 Mi gato', `我/有/一/只/小/猫。|Wǒ yǒu yì zhī xiǎo māo.|Tengo un gatito.
它/很/小，/也/很/可爱。|Tā hěn xiǎo, yě hěn kě'ài.|Es muy pequeño y muy mono.
它/喜欢/吃/鱼。|Tā xǐhuan chī yú.|Le gusta comer pescado.
晚上，/它/在/我/的/床/上/睡觉。|Wǎnshang, tā zài wǒ de chuáng shang shuìjiào.|Por la noche duerme en mi cama.
我/爱/我/的/小/猫。|Wǒ ài wǒ de xiǎo māo.|Quiero a mi gatito.`, `o|¿Qué se dice del gatito en la segunda frase?|Que es muy pequeño y muy mono|Que es muy gordo y muy mono|Que es muy pequeño y muy travieso|Que es muy blanco y muy pequeño
o|¿Cuándo duerme el gatito en la cama del narrador?|Por la noche|Por la tarde|Al mediodía|Después de comer pescado
x|¿Cuál de estas afirmaciones es FALSA según el texto?|El gatito duerme en el sofá|Al gatito le gusta el pescado|El gatito es pequeño|El narrador quiere a su gatito
r|En el orden en que aparecen en el texto:|Dice que tiene un gatito|Cuenta cómo es el gatito|Dice qué le gusta comer|Dice dónde duerme`, `十八|dieciocho
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
我们/都/很/爱/这个/家。|Wǒmen dōu hěn ài zhège jiā.|Todos queremos mucho a esta familia.`, `o|¿Quién trabaja en un hospital?|Su padre, que es médico|Su madre, que es enfermera|Su hermano, que es médico|Su padre, que es profesor
o|¿Qué edad y qué ocupación tiene el hermano del narrador?|Dieciocho años y es universitario|Dieciocho años y es profesor|Ocho años y es universitario|Veinte años y es médico
x|¿Cuál de estas afirmaciones es FALSA según el texto?|En la casa viven seis personas|La madre está muy ocupada|El padre es médico|El narrador tiene un hermano mayor
r|En el orden en que aparecen en el texto:|Cuántos son en casa|A qué se dedica el padre|A qué se dedica la madre|Qué edad tiene el hermano`, ``, 'samu'],

[1, '📅 Mi día', `我/每天/六/点/起床。|Wǒ měitiān liù diǎn qǐchuáng.|Todos los días me levanto a las seis.
七/点/我/吃/早饭，/喝/一/杯/牛奶。|Qī diǎn wǒ chī zǎofàn, hē yì bēi niúnǎi.|A las siete desayuno y bebo un vaso de leche.
八/点/我/去/学校/上课。|Bā diǎn wǒ qù xuéxiào shàngkè.|A las ocho voy a la escuela a clase.
中午/我/在/学校/吃饭。|Zhōngwǔ wǒ zài xuéxiào chīfàn.|Al mediodía como en la escuela.
下午/五/点/我/回/家。|Xiàwǔ wǔ diǎn wǒ huí jiā.|A las cinco de la tarde vuelvo a casa.
晚上/十/点/我/睡觉。|Wǎnshang shí diǎn wǒ shuìjiào.|A las diez de la noche me acuesto.`, `o|¿Qué hace el narrador justo después de desayunar?|Va a la escuela a clase|Come en la escuela al mediodía|Vuelve a casa por la tarde|Se levanta de la cama temprano
o|¿Cuántas horas pasan entre que va a la escuela y que vuelve a casa?|Nueve horas|Siete horas|Ocho horas|Diez horas
x|¿Cuál de estas afirmaciones es FALSA según el texto?|Desayuna a las ocho|Se acuesta a las diez de la noche|Come en la escuela al mediodía|Se levanta a las seis
r|En el orden en que aparecen en el texto:|Desayuna y bebe leche|Va a la escuela a clase|Come en la escuela|Vuelve a casa`, ``, 'samu'],

[1, '🛍️ En la tienda', `今天/我/和/妈妈/去/商店。|Jīntiān wǒ hé māma qù shāngdiàn.|Hoy voy a la tienda con mamá.
我们/买/了/苹果、/米饭/和/水。|Wǒmen mǎi le píngguǒ, mǐfàn hé shuǐ.|Compramos manzanas, arroz y agua.
苹果/五/块/钱/一/斤，/不/贵。|Píngguǒ wǔ kuài qián yì jīn, bú guì.|Las manzanas cuestan cinco yuanes el jin; no son caras.
我/还/想/买/一/个/杯子。|Wǒ hái xiǎng mǎi yí ge bēizi.|También quiero comprar un vaso.
妈妈/说/可以。|Māma shuō kěyǐ.|Mamá dice que sí.`, `o|¿Cuánto cuestan las manzanas y qué opina el narrador del precio?|Cinco yuanes el jin; no son caras|Cinco yuanes el jin; son caras|Diez yuanes el jin; no son caras|Dos yuanes el jin; no son caras
o|Además de lo que ya compraron, ¿qué quiere el narrador y qué responde su madre?|Un vaso; ella dice que sí|Un vaso; ella dice que no|Un bolso; ella dice que sí|Más agua; ella dice que sí
x|¿Cuál de estas afirmaciones es FALSA según el texto?|Compraron pan y leche|Fueron a la tienda con mamá|Compraron arroz|Las manzanas se compran por jin
r|En el orden en que aparecen en el texto:|Van a la tienda con mamá|Compran manzanas, arroz y agua|Se dice el precio de las manzanas|El narrador pide también un vaso`, ``, 'samu'],

[2, '🧑‍🤝‍🧑 Mi amigo Xiao Ming', `小明/是/我/最/好/的/朋友。|Xiǎomíng shì wǒ zuì hǎo de péngyou.|Xiao Ming es mi mejor amigo.
我们/是/同学，/每天/一起/上学。|Wǒmen shì tóngxué, měitiān yìqǐ shàngxué.|Somos compañeros y vamos juntos a la escuela cada día.
他/很/喜欢/踢/足球，/我/喜欢/唱歌。|Tā hěn xǐhuan tī zúqiú, wǒ xǐhuan chànggē.|A él le encanta jugar al fútbol y a mí cantar.
星期六，/他/常常/来/我/家/玩。|Xīngqīliù, tā chángcháng lái wǒ jiā wán.|Los sábados suele venir a jugar a mi casa.
我们/一起/做/作业，/一起/玩/游戏。|Wǒmen yìqǐ zuò zuòyè, yìqǐ wán yóuxì.|Hacemos los deberes y jugamos juntos.
有/这样/的/朋友，/我/很/高兴。|Yǒu zhèyàng de péngyou, wǒ hěn gāoxìng.|Tener un amigo así me hace muy feliz.`, `o|¿Qué le gusta a cada uno?|A Xiao Ming el fútbol y al narrador cantar|A Xiao Ming cantar y al narrador el fútbol|A los dos les gusta el fútbol|A Xiao Ming el fútbol y al narrador dibujar
o|¿Dónde pasan juntos los sábados?|En casa del narrador|En casa de Xiao Ming|En la escuela|En el campo de fútbol
x|¿Cuál de estas afirmaciones es FALSA según el texto?|Xiao Ming nunca va a casa del narrador|Hacen los deberes juntos|A Xiao Ming le gusta el fútbol|El narrador considera a Xiao Ming su mejor amigo
r|En el orden en que aparecen en el texto:|Presenta a su mejor amigo|Dice que van juntos a la escuela|Habla de lo que le gusta a cada uno|Cuenta lo que hacen los sábados`, ``, 'yuyue'],

[2, '🚲 Ir en bicicleta', `我/家/离/学校/不/太/远，/所以/我/骑/自行车/去/学校。|Wǒ jiā lí xuéxiào bú tài yuǎn, suǒyǐ wǒ qí zìxíngchē qù xuéxiào.|Mi casa no está muy lejos de la escuela, así que voy en bicicleta.
骑/车/要/十五/分钟。|Qí chē yào shíwǔ fēnzhōng.|Tardo quince minutos pedaleando.
下雨/的/时候，/我/坐/公共汽车。|Xiàyǔ de shíhou, wǒ zuò gōnggòngqìchē.|Cuando llueve, voy en autobús.
今天/天气/很/好，/我/骑/得/很/快。|Jīntiān tiānqì hěn hǎo, wǒ qí de hěn kuài.|Hoy hace buen tiempo y pedaleo muy rápido.
我/到/学校/的/时候，/老师/还/没/来。|Wǒ dào xuéxiào de shíhou, lǎoshī hái méi lái.|Cuando llego a la escuela, el profesor aún no ha llegado.`, `o|¿Por qué va a la escuela en bicicleta?|Porque su casa no está muy lejos|Porque el autobús es muy caro para él|Porque le gusta hacer deporte cada día|Porque hoy no llueve y hace sol
o|Hoy el profesor aún no ha llegado cuando llega el narrador. ¿Qué se deduce?|Que hoy el narrador llegó pronto|Que hoy el narrador llegó tarde|Que el profesor faltó a clase|Que hoy llovió y el profesor se retrasó
x|¿Cuál de estas afirmaciones es FALSA según el texto?|Tarda una hora en llegar|Tarda quince minutos|Cuando llueve va en autobús|Hoy hace buen tiempo
r|En el orden en que aparecen en el texto:|Explica por qué va en bicicleta|Dice cuánto tarda|Cuenta qué hace cuando llueve|Cuenta cómo le fue hoy`, ``, 'binhao'],

[2, '🎁 Un regalo', `明天/是/妈妈/的/生日。|Míngtiān shì māma de shēngrì.|Mañana es el cumpleaños de mamá.
我/想/给/她/买/一/个/礼物，/可是/不/知道/买/什么。|Wǒ xiǎng gěi tā mǎi yí ge lǐwù, kěshì bù zhīdào mǎi shénme.|Quiero comprarle un regalo, pero no sé qué.
朋友/说，/妈妈/喜欢/花，/也/喜欢/茶。|Péngyou shuō, māma xǐhuan huā, yě xǐhuan chá.|Mi amigo dice que a mamá le gustan las flores y el té.
所以/我/买/了/漂亮/的/花，/还/买/了/好/茶。|Suǒyǐ wǒ mǎi le piàoliang de huā, hái mǎi le hǎo chá.|Así que compré flores bonitas y también buen té.
妈妈/看到/礼物，/笑/了。|Māma kàndào lǐwù, xiào le.|Cuando mamá ve el regalo, sonríe.
她/说/谢谢/你，/她/非常/喜欢。|Tā shuō xièxie nǐ, tā fēicháng xǐhuan.|Dice gracias; le gusta muchísimo.`, `o|¿Quién da la idea del regalo?|Un amigo del narrador|El padre del narrador|La propia madre|Una vendedora de la tienda
o|¿Qué problema tenía el narrador al principio?|No sabía qué comprar|No tenía dinero|Se le había olvidado el cumpleaños|No encontraba la tienda
x|¿Cuál de estas afirmaciones es FALSA según el texto?|El narrador compró un libro|Compró flores bonitas|La madre sonrió al ver el regalo|Un amigo le dijo qué le gustaba a su madre
r|En el orden en que aparecen en el texto:|Recuerda que mañana es el cumpleaños|No sabe qué regalar|Compra flores y té|Su madre sonríe y da las gracias`, ``, 'samu'],

[2, '🌳 Un día en el parque', `这个/周末/天气/很/好，/我们/去/公园/玩。|Zhège zhōumò tiānqì hěn hǎo, wǒmen qù gōngyuán wán.|Este fin de semana hace buen tiempo y vamos al parque.
公园/里/有/很/多/人，/有/的/人/跑步，/有/的/人/唱歌。|Gōngyuán lǐ yǒu hěn duō rén, yǒu de rén pǎobù, yǒu de rén chànggē.|Hay mucha gente: unos corren y otros cantan.
弟弟/想/喝/水，/我/就/去/买/了/两/瓶。|Dìdi xiǎng hē shuǐ, wǒ jiù qù mǎi le liǎng píng.|Mi hermano pequeño tenía sed y fui a comprar dos botellas.
我们/玩/了/三/个/小时/才/回/家。|Wǒmen wán le sān ge xiǎoshí cái huí jiā.|Jugamos tres horas antes de volver a casa.
真/是/快乐/的/一/天！|Zhēn shì kuàilè de yì tiān!|¡Qué día tan feliz!`, `o|¿Por qué compró el narrador dos botellas?|Porque su hermano pequeño tenía sed|Porque hacía mucho calor en el parque|Porque las vendían muy baratas allí|Porque quería regalárselas a alguien
o|¿Qué se puede deducir de la última frase («¡Qué día tan feliz!»)?|Que disfrutó mucho del día|Que estaba muy cansado|Que quería volver pronto|Que se aburrió en el parque
x|¿Cuál de estas afirmaciones es FALSA según el texto?|Todos los que estaban en el parque cantaban|Unos corrían|Fueron al parque con buen tiempo|Volvieron a casa después de jugar tres horas
r|En el orden en que aparecen en el texto:|Deciden ir al parque|Ven gente corriendo y cantando|Compra agua para su hermano|Vuelven a casa`, ``, 'payolink'],

[3, '🌸 Primavera en Pekín', `春天/来/了，/北京/的/花/都/开/了。|Chūntiān lái le, Běijīng de huā dōu kāi le.|Llegó la primavera y las flores de Pekín han florecido.
周末，/我/和/朋友/去/公园/看/花。|Zhōumò, wǒ hé péngyou qù gōngyuán kàn huā.|El fin de semana fui con mis amigos a ver las flores.
那里/有/红/的、/白/的、/黄/的，/特别/漂亮。|Nàlǐ yǒu hóng de, bái de, huáng de, tèbié piàoliang.|Había flores rojas, blancas y amarillas, muy bonitas.
很多/人/在/花/前/拍照，/我们/也/拍/了/很多/照片。|Hěnduō rén zài huā qián pāizhào, wǒmen yě pāi le hěnduō zhàopiàn.|Mucha gente se fotografiaba ante las flores; nosotros sacamos muchas fotos.
回家/的/路上，/天/突然/下/起/雨/来/了。|Huíjiā de lùshang, tiān tūrán xià qǐ yǔ lái le.|De camino a casa empezó a llover de repente.
可是/我们/一点/也/不/难过。|Kěshì wǒmen yìdiǎn yě bù nánguò.|Pero no estábamos nada tristes.`, `o|¿De qué colores eran las flores?|Rojas, blancas y amarillas|Rojas, rosas y blancas|Blancas, amarillas y azules|Rojas, amarillas y moradas
o|¿Qué se deduce de «Pero no estábamos nada tristes» respecto a la lluvia?|Que la lluvia no estropeó su buen ánimo|Que se mojaron mucho y se enfadaron|Que ya esperaban que lloviera ese día|Que dejaron de ver las flores por ella
x|¿Cuál de estas afirmaciones es FALSA según el texto?|Empezó a llover mientras hacían fotos|Fueron a ver las flores con sus amigos|Sacaron muchas fotos de las flores|Las flores ya habían florecido en Pekín
r|En el orden en que aparecen en el texto:|Llega la primavera|Van a ver las flores|Sacan muchas fotos|Empieza a llover de camino a casa`, ``, 'yuyue'],

[3, '🐼 En el zoológico', `上/个/月，/我/和/家人/去/了/动物园。|Shàng ge yuè, wǒ hé jiārén qù le dòngwùyuán.|El mes pasado fui con mi familia al zoo.
我们/先/看/了/大熊猫。|Wǒmen xiān kàn le dàxióngmāo.|Primero vimos los pandas gigantes.
它们/正在/吃/竹子，/样子/非常/可爱。|Tāmen zhèngzài chī zhúzi, yàngzi fēicháng kě'ài.|Estaban comiendo bambú y se veían adorables.
然后/我们/又/去/看/了/老虎/和/猴子。|Ránhòu wǒmen yòu qù kàn le lǎohǔ hé hóuzi.|Después vimos los tigres y los monos.
猴子/特别/聪明，/还/会/跟/人/玩。|Hóuzi tèbié cōngmíng, hái huì gēn rén wán.|Los monos son muy listos y hasta juegan con la gente.
中午/我们/在/动物园/里/吃/了/午饭，/下午/才/回/家。|Zhōngwǔ wǒmen zài dòngwùyuán lǐ chī le wǔfàn, xiàwǔ cái huí jiā.|Comimos en el zoo y volvimos a casa por la tarde.`, `o|¿Qué animales vieron después de los pandas?|Tigres y monos|Monos y elefantes|Tigres y osos|Pandas y tigres
o|¿Qué se cuenta de los monos?|Que son muy listos y hasta juegan con la gente|Que estaban comiendo bambú cuando llegaron|Que eran muy perezosos y dormían todo el día|Que se escondieron cuando vieron a la gente
x|¿Cuál de estas afirmaciones es FALSA según el texto?|Los pandas dormían|Comieron en el zoo|Fueron con su familia|Volvieron a casa por la tarde
r|En el orden en que aparecen en el texto:|Ven a los pandas|Ven a los tigres y a los monos|Comen en el zoo|Vuelven a casa`, `大熊猫|panda gigante
竹子|bambú
老虎|tigre
猴子|mono`, 'payolink'],

[3, '📖 Aprender chino', `我/学/汉语/已经/一/年/了。|Wǒ xué Hànyǔ yǐjīng yì nián le.|Llevo un año estudiando chino.
刚/开始/的/时候，/我/觉得/声调/很/难。|Gāng kāishǐ de shíhou, wǒ juéde shēngdiào hěn nán.|Al principio los tonos me parecían muy difíciles.
后来/我/每天/听/中文/歌，/也/看/中文/电影。|Hòulái wǒ měitiān tīng Zhōngwén gē, yě kàn Zhōngwén diànyǐng.|Luego escuchaba canciones en chino cada día y veía películas.
现在/我/可以/和/中国/朋友/聊天/了。|Xiànzài wǒ kěyǐ hé Zhōngguó péngyou liáotiān le.|Ahora ya puedo charlar con amigos chinos.
老师/说/我/进步/很/快，/我/听/了/非常/高兴。|Lǎoshī shuō wǒ jìnbù hěn kuài, wǒ tīng le fēicháng gāoxìng.|El profesor dice que progreso rápido y eso me alegra mucho.
我/会/继续/努力，/明年/参加/考试。|Wǒ huì jìxù nǔlì, míngnián cānjiā kǎoshì.|Seguiré esforzándome y el año que viene haré el examen.`, `o|¿Qué le parecía difícil al principio?|Los tonos|Los caracteres|La gramática|El vocabulario
o|¿Qué hizo para mejorar?|Escuchar canciones y ver películas en chino|Hablar con su profesor todos los días|Leer periódicos y revistas en chino|Viajar a China durante las vacaciones
x|¿Cuál de estas afirmaciones es FALSA según el texto?|Ya ha hecho el examen|Lleva un año estudiando|Su profesor dice que progresa rápido|Ya puede charlar con amigos chinos
r|En el orden en que aparecen en el texto:|Los tonos le parecían difíciles|Escucha canciones y ve películas|Ya puede charlar con amigos chinos|Planea hacer el examen`, `声调|tonos
进步|progresar
继续|continuar
努力|esforzarse`, 'samu'],

[3, '🍵 En casa de mi abuela', `放假/的/时候，/我/常常/去/奶奶/家。|Fàngjià de shíhou, wǒ chángcháng qù nǎinai jiā.|En vacaciones suelo ir a casa de mi abuela.
奶奶/住/在/一/个/小/城市，/那里/很/安静。|Nǎinai zhù zài yí ge xiǎo chéngshì, nàlǐ hěn ānjìng.|Mi abuela vive en una ciudad pequeña y muy tranquila.
每天/下午，/她/都/会/给/我/泡/一/杯/热/茶。|Měitiān xiàwǔ, tā dōu huì gěi wǒ pào yì bēi rè chá.|Cada tarde me prepara una taza de té caliente.
我们/一边/喝茶，/一边/聊天。|Wǒmen yìbiān hēchá, yìbiān liáotiān.|Charlamos mientras tomamos el té.
她/给/我/讲/小时候/的/故事，/我/总是/听/得/很/认真。|Tā gěi wǒ jiǎng xiǎoshíhou de gùshi, wǒ zǒngshì tīng de hěn rènzhēn.|Me cuenta historias de cuando era pequeña y la escucho con atención.
我/希望/奶奶/身体/健康，/天天/开心。|Wǒ xīwàng nǎinai shēntǐ jiànkāng, tiāntiān kāixīn.|Deseo que mi abuela tenga salud y esté feliz cada día.`, `o|¿Cómo es la ciudad de la abuela?|Pequeña y tranquila|Pequeña y muy ruidosa|Grande y muy tranquila|Grande y bastante antigua
o|¿Cuándo le prepara el té su abuela?|Cada tarde|Cada mañana|Solo los domingos|Después de cenar
x|¿Cuál de estas afirmaciones es FALSA según el texto?|La abuela vive en una gran ciudad|El narrador va a verla en vacaciones|Charlan mientras toman el té|El narrador desea que su abuela tenga salud
r|En el orden en que aparecen en el texto:|Va a casa de su abuela en vacaciones|La abuela prepara té por la tarde|Charlan y ella cuenta historias|Él le desea salud y felicidad`, `泡|preparar (té) con agua caliente`, 'yuyue'],

[4, '🚄 Un viaje en tren', `去年/暑假，/我/一/个/人/坐/火车/去/西安。|Qùnián shǔjià, wǒ yí ge rén zuò huǒchē qù Xī'ān.|El verano pasado fui solo en tren a Xi'an.
火车/开/了/十/个/小时，/我/在/车上/认识/了/一/位/老人。|Huǒchē kāi le shí ge xiǎoshí, wǒ zài chēshang rènshi le yí wèi lǎorén.|El tren tardó diez horas y conocí a un anciano.
他/给/我/介绍/了/西安/的/历史，/还/推荐/了/几/个/好吃/的/地方。|Tā gěi wǒ jièshào le Xī'ān de lìshǐ, hái tuījiàn le jǐ ge hǎochī de dìfang.|Me habló de la historia de Xi'an y me recomendó sitios para comer.
到/了/以后，/我/先/去/看/了/兵马俑。|Dào le yǐhòu, wǒ xiān qù kàn le Bīngmǎyǒng.|Al llegar fui primero a ver los guerreros de terracota.
那些/士兵/的/数量/让/我/非常/吃惊。|Nàxiē shìbīng de shùliàng ràng wǒ fēicháng chījīng.|La cantidad de soldados me dejó muy asombrado.
这/次/旅行/让/我/明白，/一/个/人/出门/也/可以/很/有趣。|Zhè cì lǚxíng ràng wǒ míngbai, yí ge rén chūmén yě kěyǐ hěn yǒuqù.|Este viaje me hizo ver que viajar solo también puede ser muy divertido.`, `o|¿Qué hizo el anciano que conoció en el tren?|Le habló de la historia de Xi'an y le recomendó dónde comer|Le guió por la ciudad y le enseñó los guerreros de terracota|Le vendió el billete de tren y le explicó los horarios|Le enseñó a viajar solo y a organizar sus viajes
o|¿Qué conclusión saca el narrador del viaje?|Que viajar solo también puede ser muy divertido|Que es mucho mejor viajar con otras personas|Que el tren es un medio de transporte incómodo|Que Xi'an es una ciudad demasiado cara
x|¿Cuál de estas afirmaciones es FALSA según el texto?|Fue a Xi'an en avión|Conoció a un anciano en el tren|Fue a ver los guerreros de terracota|El viaje en tren duró diez horas
r|En el orden en que aparecen en el texto:|Viaja en tren hasta Xi'an|Conoce a un anciano|Visita los guerreros de terracota|Concluye que viajar solo es divertido`, `兵马俑|guerreros de terracota
士兵|soldado
数量|cantidad
吃惊|asombrarse`, 'payolink'],

[4, '😴 Dormir bien', `很/多/人/觉得/睡觉/是/浪费/时间，/其实/这/是/错/的。|Hěn duō rén juéde shuìjiào shì làngfèi shíjiān, qíshí zhè shì cuò de.|Mucha gente cree que dormir es perder el tiempo, pero en realidad es un error.
如果/睡/得/不/够，/第二/天/你/会/觉得/很/累，/也/很/难/集中/精神。|Rúguǒ shuì de bú gòu, dì'èr tiān nǐ huì juéde hěn lèi, yě hěn nán jízhōng jīngshén.|Si duermes poco, al día siguiente te sentirás cansado y te costará concentrarte.
成年/人/每天/最好/睡/七/到/八/个/小时。|Chéngnián rén měitiān zuìhǎo shuì qī dào bā ge xiǎoshí.|Los adultos deberían dormir de siete a ocho horas al día.
睡/前/不要/玩/手机，/因为/屏幕/的/光/会/影响/睡眠。|Shuì qián búyào wán shǒujī, yīnwèi píngmù de guāng huì yǐngxiǎng shuìmián.|No uses el móvil antes de dormir, porque la luz de la pantalla afecta al sueño.
另外，/房间/要/安静、/黑暗，/温度/也/不/能/太/高。|Lìngwài, fángjiān yào ānjìng, hēi'àn, wēndù yě bù néng tài gāo.|Además, la habitación debe ser tranquila y oscura, y no demasiado cálida.
养成/好/习惯，/你/的/身体/会/感谢/你。|Yǎngchéng hǎo xíguàn, nǐ de shēntǐ huì gǎnxiè nǐ.|Crea buenos hábitos y tu cuerpo te lo agradecerá.`, `o|Según el texto, ¿por qué no conviene usar el móvil antes de dormir?|Porque la luz de la pantalla afecta al sueño|Porque el móvil gasta mucha batería por la noche|Porque distrae de los estudios a esas horas|Porque el ruido de las notificaciones despierta
o|Si alguien duerme solo cinco horas, ¿qué le puede pasar al día siguiente?|Estará cansado y le costará concentrarse|Tendrá dolor de cabeza y mal humor|Tendrá más hambre|No le pasará nada si descansa al mediodía
x|¿Cuál de estas afirmaciones es FALSA según el texto?|Los adultos deben dormir cuatro o cinco horas|La habitación debe ser tranquila y oscura|Dormir poco dificulta concentrarse al día siguiente|Dormir no es perder el tiempo
r|En el orden en que aparecen en el texto:|Dormir no es perder el tiempo|Dormir poco causa cansancio|Cuántas horas deben dormir los adultos|No hay que usar el móvil antes de dormir`, `集中|concentrar
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
我/觉得/网上/购物/很/方便，/但是/也/要/小心。|Wǒ juéde wǎngshàng gòuwù hěn fāngbiàn, dànshì yě yào xiǎoxīn.|Creo que comprar online es muy cómodo, pero hay que tener cuidado.`, `o|¿Por qué conviene leer las valoraciones?|Porque a veces el producto no se parece a la foto|Porque los precios cambian mucho de un día a otro|Porque el repartidor puede tardar varios días en llegar|Porque después no se puede devolver el producto
o|¿Qué opina el autor de comprar por internet?|Que es cómodo, pero hay que tener cuidado|Que es peligroso y es mejor evitarlo siempre|Que siempre es mejor que ir a la tienda|Que es caro, pero llega muy rápido a casa
x|¿Cuál de estas afirmaciones es FALSA según el texto?|Lo comprado por internet no se puede devolver|El repartidor lleva el paquete hasta tu casa|Suele costar menos que en una tienda normal|A veces el producto no se parece a la foto
r|En el orden en que aparecen en el texto:|Se abre el móvil y se ven muchos productos|El repartidor lleva el paquete a casa|Se cuentan las ventajas: más barato y se puede devolver|Se avisa de que conviene leer las valoraciones`, `快递|mensajería; paquete urgente
退货|devolver un producto
评价|valoración
购物|comprar; ir de compras`, 'binhao'],

[4, '🎻 Aprender violín', `小时候，/我/的/爸爸/让/我/学/小提琴。|Xiǎoshíhou, wǒ de bàba ràng wǒ xué xiǎotíqín.|De pequeño, mi padre me hizo aprender violín.
刚/开始，/我/一点/也/不/喜欢，/因为/每天/都/要/练习/一/个/小时。|Gāng kāishǐ, wǒ yìdiǎn yě bù xǐhuan, yīnwèi měitiān dōu yào liànxí yí ge xiǎoshí.|Al principio no me gustaba nada, porque tenía que practicar una hora al día.
有/一/次/我/拉/得/很/难听，/真/想/放弃。|Yǒu yí cì wǒ lā de hěn nántīng, zhēn xiǎng fàngqì.|Una vez toqué fatal y quise rendirme.
老师/对/我/说，/只要/坚持，/一定/会/进步。|Lǎoshī duì wǒ shuō, zhǐyào jiānchí, yídìng huì jìnbù.|El profesor me dijo que con constancia seguro mejoraría.
后来/我/真/的/越/拉/越/好，/还/参加/了/学校/的/比赛。|Hòulái wǒ zhēn de yuè lā yuè hǎo, hái cānjiā le xuéxiào de bǐsài.|Más tarde fui mejorando y hasta participé en un concurso de la escuela.
现在/我/特别/感谢/爸爸/当年/的/决定。|Xiànzài wǒ tèbié gǎnxiè bàba dāngnián de juédìng.|Ahora agradezco mucho la decisión que tomó mi padre entonces.`, `o|¿Quién decidió que el narrador aprendiera violín?|Su padre|Su profesor|Él mismo|Su madre
o|Según el profesor, ¿qué hacía falta para mejorar?|Constancia|Talento natural|Participar en concursos|Cambiar de instrumento
x|¿Cuál de estas afirmaciones es FALSA según el texto?|Ganó el concurso de la escuela|Al principio practicaba una hora al día|Una vez quiso rendirse|Ahora agradece la decisión de su padre
r|En el orden en que aparecen en el texto:|Su padre le hace aprender violín|Quiere rendirse tras tocar fatal|El profesor le anima a ser constante|Participa en un concurso de la escuela`, `小提琴|violín
拉|tocar (violín); tirar
放弃|rendirse; abandonar
坚持|perseverar
当年|en aquel entonces`, 'payolink'],

[5, '🌕 Festival del Medio Otoño', `中秋节/是/中国/的/传统/节日，/在/农历/八月/十五。|Zhōngqiūjié shì Zhōngguó de chuántǒng jiérì, zài nónglì bāyuè shíwǔ.|El Festival del Medio Otoño es una fiesta tradicional china el día 15 del octavo mes lunar.
这/一/天/的/月亮/又/大/又/圆，/象征/着/团圆。|Zhè yì tiān de yuèliang yòu dà yòu yuán, xiàngzhēng zhe tuányuán.|Ese día la luna es grande y redonda y simboliza la reunión familiar.
全家人/会/聚/在/一起，/一边/赏月，/一边/吃/月饼。|Quánjiārén huì jù zài yìqǐ, yìbiān shǎngyuè, yìbiān chī yuèbǐng.|La familia se reúne y come pasteles de luna mientras contempla la luna.
月饼/有/甜/的，/也/有/咸/的，/馅/有/很/多/种。|Yuèbǐng yǒu tián de, yě yǒu xián de, xiàn yǒu hěn duō zhǒng.|Hay pasteles de luna dulces y salados, con muchos tipos de relleno.
关于/这个/节日，/还有/嫦娥/奔月/的/传说。|Guānyú zhège jiérì, háiyǒu Cháng'é bēnyuè de chuánshuō.|Sobre esta fiesta existe la leyenda de Chang'e, que voló a la luna.
无论/身在/何处，/人们/都/会/抬头/看/月亮，/想念/家人。|Wúlùn shēnzài héchù, rénmen dōu huì táitóu kàn yuèliang, xiǎngniàn jiārén.|Estén donde estén, la gente mira la luna y piensa en su familia.`, `o|Según el texto, ¿qué hace la gente que está lejos de su familia ese día?|Mira la luna y piensa en su familia|Viaja para reunirse con ella esa noche|Come pasteles de luna a solas en casa|Cuenta la leyenda de Chang'e a sus amigos
o|¿Cómo son los pasteles de luna?|Los hay dulces y salados, con muchos rellenos|Solo los hay dulces y con un único relleno|Son salados y están rellenos de carne y verdura|Son dulces y se rellenan siempre de judía roja
x|¿Cuál de estas afirmaciones es FALSA según el texto?|La fiesta se celebra el día 5 del quinto mes lunar|La luna redonda simboliza la reunión familiar|Se comen pasteles de luna|Existe una leyenda sobre Chang'e que voló a la luna
r|En el orden en que aparecen en el texto:|Se dice cuándo es la fiesta|Se explica qué simboliza la luna|Se habla de los pasteles de luna|Se cuenta la leyenda de Chang'e`, `中秋节|Festival del Medio Otoño
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
对/很/多/中国人/来/说，/喝茶/不/只是/习惯，/更/是/一/种/生活/态度。|Duì hěn duō Zhōngguórén lái shuō, hēchá bù zhǐshì xíguàn, gèng shì yì zhǒng shēnghuó tàidù.|Para muchos chinos beber té es más que un hábito: es una actitud ante la vida.`, `o|Según la leyenda, ¿cómo se descubrió el té?|Cayeron unas hojas en agua que hervía|Shennong probó una planta medicinal en el campo|Un monje lo trajo de otro país lejano|Se secaron unas hojas al sol de la mañana
o|¿Qué ocurrió con el té con el paso del tiempo?|Pasó de ser medicina a bebida cotidiana|Pasó de ser una bebida a ser una medicina|Se dejó de beber durante muchos siglos|Pasó a beberse solo en las ceremonias
x|¿Cuál de estas afirmaciones es FALSA según el texto?|La misma agua sirve para preparar todos los tés|Para muchos chinos el té es una actitud ante la vida|Hoy existen el té verde, el rojo y el oolong|La leyenda habla de Shennong
r|En el orden en que aparecen en el texto:|China es la patria del té|La leyenda de Shennong|El té pasa de medicina a bebida cotidiana|Los tipos de té y la temperatura del agua`, `故乡|tierra natal
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
有/人/认为，/高铁/不仅/改变/了/交通，/也/改变/了/人们/的/生活/方式。|Yǒu rén rènwéi, gāotiě bùjǐn gǎibiàn le jiāotōng, yě gǎibiàn le rénmen de shēnghuó fāngshì.|Hay quien piensa que ha cambiado no solo el transporte, sino también el modo de vida.`, `o|¿Qué ventajas frente al avión se mencionan?|No depende del clima y las estaciones están en el centro|Es bastante más barato que el avión y siempre más rápido|Tiene más horarios al día y casi no hay que esperar nunca|No necesita billete y resulta más cómodo que el avión
o|¿Qué piensan algunas personas del efecto del tren de alta velocidad?|Que ha cambiado también el modo de vida|Que ha empeorado el transporte|Que solo ha cambiado el precio de los viajes|Que no ha cambiado nada
x|¿Cuál de estas afirmaciones es FALSA según el texto?|De Pekín a Shanghái tarda unas dos horas|Los pasajeros pueden trabajar a bordo|Las estaciones suelen estar en el centro|Cada vez más gente lo elige para viajar
r|En el orden en que aparecen en el texto:|Se ha desarrollado muy rápido en diez años|Se dice cuánto tarda de Pekín a Shanghái|Se comparan sus ventajas con el avión|Se comenta que cambia el modo de vida`, `高铁|tren de alta velocidad
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
选择/哪里，/其实/取决于/每/个/人/的/追求。|Xuǎnzé nǎlǐ, qíshí qǔjuéyú měi ge rén de zhuīqiú.|Elegir dónde vivir depende en realidad de lo que busca cada uno.`, `o|¿Qué desventajas de la gran ciudad se mencionan?|Vivienda cara y estrés alto|Aire contaminado y poco trabajo|Poca educación y poca sanidad|Ritmo lento y sueldos bajos
o|¿Qué dos aspectos del campo todavía deben mejorar?|La educación y la sanidad|El aire y el ritmo de vida|La vivienda y los sueldos|El transporte y las oportunidades
x|¿Cuál de estas afirmaciones es FALSA según el texto?|En el campo la vivienda es muy cara|En la ciudad hay sueldos altos|Algunos vuelven a su pueblo a emprender|Lo mejor depende de lo que busque cada persona
r|En el orden en que aparecen en el texto:|Muchos jóvenes se quedan en las grandes ciudades|Se cuentan las ventajas y los inconvenientes de la ciudad|Se habla de las ventajas del campo|Algunos vuelven a su pueblo a emprender`, `收入|ingresos
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
追求|aspiración; búsqueda`, 'binhao']
);
