// Diálogos cortos por nivel: [HSK, título, líneas (hablante|chino|pinyin|español), preguntas (pregunta|correcta|falsa|falsa)]
(self.DIALS = self.DIALS || []).push(
[1, '👋 Presentarse', `binhao|你好！我叫斌浩。你叫什么名字？|Nǐ hǎo! Wǒ jiào Bīnhào. Nǐ jiào shénme míngzi?|¡Hola! Me llamo BinHao. ¿Cómo te llamas?
chiki|我叫奇基。我是西班牙人。你呢？|Wǒ jiào Qíjī. Wǒ shì Xībānyá rén. Nǐ ne?|Me llamo Chiki. Soy español. ¿Y tú?
binhao|我是中国人。认识你很高兴。|Wǒ shì Zhōngguó rén. Rènshi nǐ hěn gāoxìng.|Soy chino. Encantado de conocerte.
chiki|认识你我也很高兴。|Rènshi nǐ wǒ yě hěn gāoxìng.|Yo también estoy encantado de conocerte.`, `¿De dónde es Chiki?|De España|De China|De Estados Unidos
¿Cómo se llama el que es chino?|BinHao|Chiki|Samu`],

[1, '🛒 En el mercado', `lucia|你好，这个苹果多少钱？|Nǐ hǎo, zhège píngguǒ duōshao qián?|Hola, ¿cuánto cuesta esta manzana?
samu|五块钱一斤。|Wǔ kuài qián yì jīn.|Cinco yuanes el jin (medio kilo).
lucia|我要两斤。|Wǒ yào liǎng jīn.|Quiero dos jin.
samu|好的，一共十块钱。|Hǎo de, yígòng shí kuài qián.|Bien, son diez yuanes en total.`, `¿Qué quiere comprar el cliente?|Manzanas|Peras|Plátanos
¿Cuánto cuesta cada jin?|5 yuanes|2 yuanes|10 yuanes
¿Cuánto paga en total?|10 yuanes|5 yuanes|2 yuanes`],

[1, '🍜 En el restaurante', `yuyue|你想吃什么？|Nǐ xiǎng chī shénme?|¿Qué quieres comer?
payolink|我想吃米饭和鱼。你呢？|Wǒ xiǎng chī mǐfàn hé yú. Nǐ ne?|Quiero arroz y pescado. ¿Y tú?
yuyue|我吃面条。我们喝茶吧。|Wǒ chī miàntiáo. Wǒmen hē chá ba.|Yo como fideos. Bebamos té.
payolink|好的。服务员，我们要两杯茶。|Hǎo de. Fúwùyuán, wǒmen yào liǎng bēi chá.|Vale. Camarero, queremos dos tés.`, `¿Qué come Payolink?|Arroz y pescado|Fideos|Pollo
¿Qué beben?|Té|Agua|Café`],

[1, '🚕 En el taxi', `carlos|师傅，我去火车站。|Shīfu, wǒ qù huǒchēzhàn.|Conductor, voy a la estación de tren.
chiki|好的，请坐。|Hǎo de, qǐng zuò.|Bien, siéntese.
carlos|火车站远吗？|Huǒchēzhàn yuǎn ma?|¿Está lejos la estación?
chiki|不远，二十分钟就到。|Bù yuǎn, èrshí fēnzhōng jiù dào.|No, en veinte minutos llegamos.`, `¿A dónde va el pasajero?|A la estación de tren|Al aeropuerto|Al hospital
¿Cuánto tarda en llegar?|20 minutos|10 minutos|30 minutos`],

[2, '🏥 En el médico', `teo|你怎么了？|Nǐ zěnme le?|¿Qué te pasa?
laura|医生，我头疼，也有点发烧。|Yīshēng, wǒ tóu téng, yě yǒudiǎn fāshāo.|Doctor, me duele la cabeza y tengo algo de fiebre.
teo|你昨天吃药了吗？|Nǐ zuótiān chī yào le ma?|¿Ayer tomaste medicina?
laura|没有，我昨天没吃药。|Méiyǒu, wǒ zuótiān méi chī yào.|No, ayer no tomé medicina.
teo|现在吃药，多喝水，在家休息。|Xiànzài chī yào, duō hē shuǐ, zài jiā xiūxi.|Toma la medicina ahora, bebe mucha agua y descansa en casa.`, `¿Qué le duele al paciente?|La cabeza|El estómago|Las piernas
¿Tomó medicina ayer?|No|Sí|No se sabe
¿Qué le recomienda el médico?|Descansar en casa|Ir a trabajar|Hacer deporte`],

[2, '🎬 Quedar con un amigo', `lucia|明天你有时间吗？我们去看电影，好吗？|Míngtiān nǐ yǒu shíjiān ma? Wǒmen qù kàn diànyǐng, hǎo ma?|¿Tienes tiempo mañana? ¿Vamos al cine?
payolink|明天上午我要上班，下午可以。|Míngtiān shàngwǔ wǒ yào shàngbān, xiàwǔ kěyǐ.|Mañana por la mañana trabajo; por la tarde puedo.
lucia|那我们下午三点在电影院门口见面。|Nà wǒmen xiàwǔ sān diǎn zài diànyǐngyuàn ménkǒu jiànmiàn.|Entonces nos vemos a las tres de la tarde en la puerta del cine.
payolink|好，不见不散！|Hǎo, bú jiàn bú sàn!|¡Vale, no faltes!`, `¿Qué van a hacer?|Ver una película|Ir de compras|Comer fuera
¿A qué hora quedan?|A las 3 de la tarde|A las 3 de la mañana|A las 5 de la tarde
¿Dónde se ven?|En la puerta del cine|En casa de Payolink|En un restaurante`],

[2, '🌧️ El tiempo', `laura|今天天气怎么样？|Jīntiān tiānqì zěnmeyàng?|¿Qué tiempo hace hoy?
anto|今天很冷，还下雨。|Jīntiān hěn lěng, hái xià yǔ.|Hoy hace mucho frío y además llueve.
laura|是吗？那我不出去了。|Shì ma? Nà wǒ bù chūqù le.|¿Sí? Entonces no salgo.
anto|对，在家看电视吧。明天是晴天。|Duì, zài jiā kàn diànshì ba. Míngtiān shì qíngtiān.|Sí, mejor ve la tele en casa. Mañana estará soleado.`, `¿Qué tiempo hace hoy?|Frío y lluvia|Calor y sol|Viento y nieve
¿Qué decide hacer Laura?|Quedarse en casa|Salir con paraguas|Ir a la montaña
¿Y mañana?|Soleado|Lluvioso|Nevará`],

[2, '📱 Comprar un móvil', `jersio|你好，我想买一个手机。|Nǐ hǎo, wǒ xiǎng mǎi yí ge shǒujī.|Hola, quiero comprar un móvil.
samu|这个怎么样？很好用，也不贵。|Zhège zěnmeyàng? Hěn hǎoyòng, yě bú guì.|¿Qué tal este? Es muy práctico y no es caro.
jersio|多少钱？|Duōshao qián?|¿Cuánto cuesta?
samu|两千块，但是今天可以便宜两百块。|Liǎng qiān kuài, dànshì jīntiān kěyǐ piányi liǎng bǎi kuài.|2000 yuanes, pero hoy puedo rebajarle 200.
jersio|好，我买这个。|Hǎo, wǒ mǎi zhège.|Vale, me llevo este.`, `¿Qué compra Jersio?|Un móvil|Un ordenador|Un reloj
¿Cuánto paga al final?|1800 yuanes|2000 yuanes|200 yuanes`],

[3, '✈️ En el aeropuerto', `lucia|您好，请给我看一下您的护照。|Nín hǎo, qǐng gěi wǒ kàn yíxià nín de hùzhào.|Buenas, enséñeme su pasaporte, por favor.
teo|给你。我要去上海，行李只有一个箱子。|Gěi nǐ. Wǒ yào qù Shànghǎi, xíngli zhǐyǒu yí ge xiāngzi.|Aquí tiene. Voy a Shanghái; solo tengo una maleta.
lucia|好的。飞机十点起飞，请九点半以前到登机口。|Hǎo de. Fēijī shí diǎn qǐfēi, qǐng jiǔ diǎn bàn yǐqián dào dēngjīkǒu.|Bien. El avión sale a las diez; llegue a la puerta de embarque antes de las nueve y media.
teo|请问，登机口在哪里？|Qǐngwèn, dēngjīkǒu zài nǎlǐ?|Perdone, ¿dónde está la puerta de embarque?
lucia|在三楼，一直往前走就到了。|Zài sān lóu, yìzhí wǎng qián zǒu jiù dào le.|En el tercer piso; siga recto y llegará.`, `¿A dónde viaja el pasajero?|A Shanghái|A Pekín|A Cantón
¿Cuánto equipaje lleva?|Una maleta|Dos maletas|Ninguna
¿A qué hora sale el avión?|A las 10|A las 9:30|A las 3
¿En qué piso está la puerta de embarque?|En el tercero|En el primero|En el quinto`],

[3, '🏨 En el hotel', `carlos|你好，我昨天订了一个房间。|Nǐ hǎo, wǒ zuótiān dìng le yí ge fángjiān.|Hola, ayer reservé una habitación.
chana|请问您的名字是什么？|Qǐngwèn nín de míngzi shì shénme?|¿Cuál es su nombre, por favor?
carlos|我叫卡洛斯，住两个晚上。|Wǒ jiào Kǎluòsī, zhù liǎng ge wǎnshang.|Me llamo Carlos y me quedo dos noches.
chana|好的，您的房间在五楼，房间里可以上网。这是您的钥匙。|Hǎo de, nín de fángjiān zài wǔ lóu, fángjiān lǐ kěyǐ shàngwǎng. Zhè shì nín de yàoshi.|Bien, su habitación está en el quinto piso y tiene internet. Esta es su llave.
carlos|早饭几点开始？|Zǎofàn jǐ diǎn kāishǐ?|¿A qué hora empieza el desayuno?
chana|早上七点到九点。|Zǎoshang qī diǎn dào jiǔ diǎn.|De siete a nueve de la mañana.`, `¿Cuántas noches se queda?|Dos|Una|Tres
¿En qué piso está la habitación?|En el quinto|En el segundo|En el tercero
¿Cuándo es el desayuno?|De 7 a 9|De 8 a 10|De 6 a 7`],

[3, '🚇 Preguntar el camino', `jersio|请问，附近有地铁站吗？|Qǐngwèn, fùjìn yǒu dìtiězhàn ma?|Perdone, ¿hay una estación de metro cerca?
chiki|有。你一直往前走，到红绿灯往左走。|Yǒu. Nǐ yìzhí wǎng qián zǒu, dào hónglǜdēng wǎng zuǒ zǒu.|Sí. Siga recto y en el semáforo vaya a la izquierda.
jersio|远不远？|Yuǎn bu yuǎn?|¿Está lejos?
chiki|不太远，走路大概五分钟。|Bú tài yuǎn, zǒulù dàgài wǔ fēnzhōng.|No mucho, a pie unos cinco minutos.
jersio|谢谢你！|Xièxie nǐ!|¡Gracias!`, `¿Qué busca Jersio?|El metro|Un banco|Una parada de autobús
¿Hacia dónde gira en el semáforo?|A la izquierda|A la derecha|Sigue recto
¿Cuánto se tarda a pie?|Unos 5 minutos|Unos 15 minutos|Unos 50 minutos`],

[3, '👕 Cambiar una prenda', `yuyue|你好，这件衣服太小了，我想换一件大的。|Nǐ hǎo, zhè jiàn yīfu tài xiǎo le, wǒ xiǎng huàn yí jiàn dà de.|Hola, esta prenda me queda pequeña; quiero cambiarla por una más grande.
samu|请问你是什么时候买的？|Qǐngwèn nǐ shì shénme shíhou mǎi de?|¿Cuándo la compró?
yuyue|昨天下午买的，我还没穿过。|Zuótiān xiàwǔ mǎi de, wǒ hái méi chuān guo.|Ayer por la tarde; aún no me la he puesto.
samu|没问题。这件是大号，颜色也一样。|Méi wèntí. Zhè jiàn shì dà hào, yánsè yě yíyàng.|Sin problema. Esta es la talla grande y el color es el mismo.`, `¿Qué problema tiene la prenda?|Es demasiado pequeña|Es muy cara|No le gusta el color
¿Cuándo la compró?|Ayer por la tarde|Hoy por la mañana|La semana pasada`],

[4, '💼 Entrevista de trabajo', `laura|请先介绍一下你自己。|Qǐng xiān jièshào yíxià nǐ zìjǐ.|Preséntese primero, por favor.
chiki|我叫奇基，大学学的是经济，毕业以后在一家公司工作了三年。|Wǒ jiào Qíjī, dàxué xué de shì jīngjì, bìyè yǐhòu zài yì jiā gōngsī gōngzuò le sān nián.|Me llamo Chiki; estudié economía y, tras graduarme, trabajé tres años en una empresa.
laura|你为什么想来我们公司？|Nǐ wèi shénme xiǎng lái wǒmen gōngsī?|¿Por qué quiere venir a nuestra empresa?
chiki|因为贵公司发展很快，我希望能学到更多东西。|Yīnwèi guì gōngsī fāzhǎn hěn kuài, wǒ xīwàng néng xuédào gèng duō dōngxi.|Porque su empresa crece rápido y espero aprender más cosas.
laura|你什么时候可以开始上班？|Nǐ shénme shíhou kěyǐ kāishǐ shàngbān?|¿Cuándo puede empezar a trabajar?
chiki|下个月一号就可以。|Xià ge yuè yī hào jiù kěyǐ.|El día uno del mes que viene.`, `¿Qué estudió Chiki?|Economía|Medicina|Arte
¿Cuántos años trabajó antes?|Tres|Uno|Cinco
¿Cuándo puede empezar?|El día 1 del mes próximo|Mañana mismo|El año que viene`],

[4, '📚 En la biblioteca', `anto|你好，我想借几本关于中国历史的书。|Nǐ hǎo, wǒ xiǎng jiè jǐ běn guānyú Zhōngguó lìshǐ de shū.|Hola, quiero pedir prestados algunos libros sobre historia de China.
yuyue|可以。请把你的学生证给我。|Kěyǐ. Qǐng bǎ nǐ de xuéshēngzhèng gěi wǒ.|Claro. Deme su carné de estudiante.
anto|对不起，我忘带了。怎么办？|Duìbuqǐ, wǒ wàng dài le. Zěnme bàn?|Lo siento, se me olvidó traerlo. ¿Qué hago?
yuyue|没关系，告诉我你的名字和电话号码就行。|Méi guānxi, gàosu wǒ nǐ de míngzi hé diànhuà hàomǎ jiù xíng.|No pasa nada, con decirme su nombre y su teléfono basta.
anto|谢谢。这些书可以借多久？|Xièxie. Zhèxiē shū kěyǐ jiè duō jiǔ?|Gracias. ¿Cuánto tiempo puedo quedarme los libros?
yuyue|一个月。到时候请按时还。|Yí ge yuè. Dào shíhou qǐng ànshí huán.|Un mes. Devuélvalos a tiempo.`, `¿Sobre qué quiere libros Anto?|Historia de China|Cocina china|Ciencia
¿Qué olvidó Anto?|El carné de estudiante|El móvil|La cartera
¿Cuánto dura el préstamo?|Un mes|Dos semanas|Un año`],

[4, '🏠 Alquilar un piso', `carlos|我看了你们的广告，那套房子还在吗？|Wǒ kàn le nǐmen de guǎnggào, nà tào fángzi hái zài ma?|He visto su anuncio, ¿sigue disponible ese piso?
teo|还在，两室一厅，离地铁站很近，每个月三千块。|Hái zài, liǎng shì yì tīng, lí dìtiězhàn hěn jìn, měi ge yuè sānqiān kuài.|Sí: dos habitaciones y salón, cerca del metro, 3000 yuanes al mes.
carlos|有点贵，能不能便宜一点？|Yǒudiǎn guì, néng bu néng piányi yìdiǎn?|Es algo caro, ¿se puede rebajar un poco?
teo|如果你住一年，我可以每个月便宜两百块。|Rúguǒ nǐ zhù yì nián, wǒ kěyǐ měi ge yuè piányi liǎng bǎi kuài.|Si se queda un año, puedo rebajarle 200 yuanes al mes.
carlos|好，我周末来看房，再决定。|Hǎo, wǒ zhōumò lái kàn fáng, zài juédìng.|Bien, iré a ver el piso el fin de semana y decidiré.`, `¿Cuántas habitaciones tiene el piso?|Dos y un salón|Una y un salón|Tres y un salón
¿Cuánto cuesta al mes sin descuento?|3000 yuanes|2000 yuanes|3200 yuanes
Si Carlos se queda un año, ¿cuánto paga al mes?|2800 yuanes|3000 yuanes|2600 yuanes
¿Cuándo irá a ver el piso?|El fin de semana|Mañana|El mes que viene`],

[4, '🎂 Fiesta de cumpleaños', `chana|周六是我的生日，你能来参加聚会吗？|Zhōuliù shì wǒ de shēngrì, nǐ néng lái cānjiā jùhuì ma?|El sábado es mi cumpleaños, ¿puedes venir a la fiesta?
lucia|真的吗？祝你生日快乐！可是我周六要加班。|Zhēn de ma? Zhù nǐ shēngrì kuàilè! Kěshì wǒ zhōuliù yào jiābān.|¿De verdad? ¡Feliz cumpleaños! Pero el sábado tengo que hacer horas extra.
chana|没关系，聚会晚上七点开始，你下班以后再来吧。|Méi guānxi, jùhuì wǎnshang qī diǎn kāishǐ, nǐ xiàbān yǐhòu zài lái ba.|No importa, la fiesta empieza a las siete de la tarde; ven cuando salgas del trabajo.
lucia|那我一定去，我还会给你带一个礼物。|Nà wǒ yídìng qù, wǒ hái huì gěi nǐ dài yí ge lǐwù.|Entonces iré seguro, y además te llevaré un regalo.`, `¿Qué celebra Chana?|Su cumpleaños|Su boda|Su graduación
¿Por qué Lucía no puede ir antes?|Tiene que hacer horas extra|Está enfermo|Está de viaje
¿A qué hora empieza la fiesta?|A las 7 de la tarde|A las 7 de la mañana|A las 5 de la tarde`],

[5, '🌍 Medio ambiente', `anto|你觉得现在的环境污染问题严重吗？|Nǐ juéde xiànzài de huánjìng wūrǎn wèntí yánzhòng ma?|¿Crees que el problema de la contaminación es grave hoy en día?
laura|我认为非常严重，尤其是大城市的空气质量。|Wǒ rènwéi fēicháng yánzhòng, yóuqí shì dà chéngshì de kōngqì zhìliàng.|Creo que es gravísimo, sobre todo la calidad del aire de las grandes ciudades.
anto|对，不过我觉得每个人都可以为保护环境做一点贡献。|Duì, búguò wǒ juéde měi ge rén dōu kěyǐ wèi bǎohù huánjìng zuò yìdiǎn gòngxiàn.|Sí, pero creo que todos podemos contribuir a proteger el medio ambiente.
laura|比如少开车，多坐公共交通，还要节约用水用电。|Bǐrú shǎo kāichē, duō zuò gōnggòng jiāotōng, hái yào jiéyuē yòng shuǐ yòng diàn.|Por ejemplo, conducir menos, usar más el transporte público y ahorrar agua y electricidad.
anto|你说得对，从小事做起最重要。|Nǐ shuō de duì, cóng xiǎo shì zuòqǐ zuì zhòngyào.|Tienes razón, lo más importante es empezar por las cosas pequeñas.`, `¿De qué hablan?|De la contaminación|De la inflación|Del tráfico
¿Qué problema destaca Laura en las grandes ciudades?|La calidad del aire|El ruido|La vivienda
¿Qué ejemplo de acción dan?|Usar el transporte público|Comprar un coche eléctrico|Cambiar de ciudad`],

[5, '🤖 Noticias de tecnología', `guidozcos|你看到今天的新闻了吗？有一家公司发布了新的人工智能产品。|Nǐ kàndào jīntiān de xīnwén le ma? Yǒu yì jiā gōngsī fābù le xīn de réngōng zhìnéng chǎnpǐn.|¿Has visto la noticia de hoy? Una empresa lanzó un nuevo producto de inteligencia artificial.
payolink|我看到了。有人担心它会取代很多工作，你怎么看？|Wǒ kàndào le. Yǒu rén dānxīn tā huì qǔdài hěn duō gōngzuò, nǐ zěnme kàn?|Sí, lo vi. Algunos temen que reemplace muchos trabajos, ¿tú qué piensas?
guidozcos|我觉得不用太担心。技术进步会带来新的机会。|Wǒ juéde búyòng tài dānxīn. Jìshù jìnbù huì dàilái xīn de jīhuì.|Creo que no hay que preocuparse tanto. El progreso técnico traerá nuevas oportunidades.
payolink|也许吧，但我们必须不断学习，才能适应变化。|Yěxǔ ba, dàn wǒmen bìxū búduàn xuéxí, cáinéng shìyìng biànhuà.|Quizá, pero debemos aprender sin parar para poder adaptarnos a los cambios.`, `¿Qué lanzó la empresa?|Un producto de inteligencia artificial|Un coche nuevo|Un teléfono plegable
¿Qué temen algunas personas?|Que reemplace muchos trabajos|Que sea muy caro|Que no funcione
¿Qué opina Guidozcos?|Que no hay que preocuparse tanto|Que hay que prohibirlo|Que es una moda pasajera`],

[5, '🧧 Fiesta de la Primavera', `samu|春节快到了，你打算怎么过？|Chūnjié kuài dào le, nǐ dǎsuàn zěnme guò?|Se acerca el Año Nuevo chino, ¿cómo piensas celebrarlo?
yuyue|我要回老家和家人团聚，大家一起包饺子、看春晚。|Wǒ yào huí lǎojiā hé jiārén tuánjù, dàjiā yìqǐ bāo jiǎozi, kàn Chūnwǎn.|Volveré a mi pueblo a reunirme con mi familia: haremos jiaozi y veremos la gala de la Fiesta de la Primavera.
samu|听说春节有很多传统习俗，比如发红包、放鞭炮，是吗？|Tīngshuō Chūnjié yǒu hěn duō chuántǒng xísú, bǐrú fā hóngbāo, fàng biānpào, shì ma?|He oído que hay muchas costumbres tradicionales, como dar sobres rojos o lanzar petardos, ¿es cierto?
yuyue|是的，不过现在很多城市为了安全，已经禁止放鞭炮了。|Shì de, búguò xiànzài hěn duō chéngshì wèile ānquán, yǐjīng jìnzhǐ fàng biānpào le.|Sí, pero ahora muchas ciudades ya prohíben los petardos por seguridad.`, `¿Qué hará YuYue en el Año Nuevo?|Volver a casa con su familia|Viajar al extranjero|Trabajar
¿Qué comida van a preparar?|Jiaozi|Fideos|Arroz frito
¿Qué ocurre hoy con los petardos?|Están prohibidos en muchas ciudades|Son obligatorios|Solo se usan en el campo`],

[5, '🎓 Estudiar en el extranjero', `carlos|你打算毕业以后出国留学吗？|Nǐ dǎsuàn bìyè yǐhòu chūguó liúxué ma?|¿Piensas estudiar en el extranjero después de graduarte?
anto|我正在考虑。留学可以开阔眼界，还能提高外语水平。|Wǒ zhèngzài kǎolǜ. Liúxué kěyǐ kāikuò yǎnjiè, hái néng tígāo wàiyǔ shuǐpíng.|Lo estoy pensando. Estudiar fuera amplía horizontes y mejora el nivel de idiomas.
carlos|不过费用很高，而且要一个人适应新环境，会很不容易。|Búguò fèiyòng hěn gāo, érqiě yào yí ge rén shìyìng xīn huánjìng, huì hěn bù róngyì.|Pero cuesta mucho y además hay que adaptarse solo a un entorno nuevo, lo cual no es fácil.
anto|是的，所以我打算先申请奖学金，再做最后的决定。|Shì de, suǒyǐ wǒ dǎsuàn xiān shēnqǐng jiǎngxuéjīn, zài zuò zuìhòu de juédìng.|Sí, por eso pienso pedir primero una beca y luego tomar la decisión final.`, `¿Qué ventaja ve Anto en estudiar fuera?|Ampliar horizontes y mejorar idiomas|Ganar más dinero|Vivir con su familia
¿Qué inconveniente menciona Carlos?|Es caro y cuesta adaptarse|El clima|Los exámenes
¿Qué piensa hacer Anto antes de decidir?|Pedir una beca|Buscar trabajo|Preguntar a sus padres`]
);
