// Diálogos cortos por nivel: [HSK, título, líneas (hablante|chino|pinyin|español), preguntas (pregunta|correcta|falsa|falsa)]
(self.DIALS = self.DIALS || []).push(
[1, '👋 Presentarse', `A|你好！我叫李明。你叫什么名字？|Nǐ hǎo! Wǒ jiào Lǐ Míng. Nǐ jiào shénme míngzi?|¡Hola! Me llamo Li Ming. ¿Cómo te llamas?
B|我叫玛丽。我是美国人。你呢？|Wǒ jiào Mǎlì. Wǒ shì Měiguó rén. Nǐ ne?|Me llamo Mary. Soy estadounidense. ¿Y tú?
A|我是中国人。认识你很高兴。|Wǒ shì Zhōngguó rén. Rènshi nǐ hěn gāoxìng.|Soy chino. Encantado de conocerte.
B|认识你我也很高兴。|Rènshi nǐ wǒ yě hěn gāoxìng.|Yo también estoy encantada de conocerte.`, `¿De dónde es Mary?|De Estados Unidos|De China|De España
¿Cómo se llama el chico?|Li Ming|Wang Fang|Zhang Wei`],

[1, '🛒 En el mercado', `A|你好，这个苹果多少钱？|Nǐ hǎo, zhège píngguǒ duōshao qián?|Hola, ¿cuánto cuesta esta manzana?
B|五块钱一斤。|Wǔ kuài qián yì jīn.|Cinco yuanes el jin (medio kilo).
A|我要两斤。|Wǒ yào liǎng jīn.|Quiero dos jin.
B|好的，一共十块钱。|Hǎo de, yígòng shí kuài qián.|Bien, son diez yuanes en total.`, `¿Qué quiere comprar el cliente?|Manzanas|Peras|Plátanos
¿Cuánto cuesta cada jin?|5 yuanes|2 yuanes|10 yuanes
¿Cuánto paga en total?|10 yuanes|5 yuanes|2 yuanes`],

[1, '🍜 En el restaurante', `A|你想吃什么？|Nǐ xiǎng chī shénme?|¿Qué quieres comer?
B|我想吃米饭和鱼。你呢？|Wǒ xiǎng chī mǐfàn hé yú. Nǐ ne?|Quiero arroz y pescado. ¿Y tú?
A|我吃面条。我们喝茶吧。|Wǒ chī miàntiáo. Wǒmen hē chá ba.|Yo como fideos. Bebamos té.
B|好的。服务员，我们要两杯茶。|Hǎo de. Fúwùyuán, wǒmen yào liǎng bēi chá.|Vale. Camarero, queremos dos tés.`, `¿Qué come B?|Arroz y pescado|Fideos|Pollo
¿Qué beben?|Té|Agua|Café`],

[1, '🚕 En el taxi', `A|师傅，我去火车站。|Shīfu, wǒ qù huǒchēzhàn.|Conductor, voy a la estación de tren.
B|好的，请坐。|Hǎo de, qǐng zuò.|Bien, siéntese.
A|火车站远吗？|Huǒchēzhàn yuǎn ma?|¿Está lejos la estación?
B|不远，二十分钟就到。|Bù yuǎn, èrshí fēnzhōng jiù dào.|No, en veinte minutos llegamos.`, `¿A dónde va el pasajero?|A la estación de tren|Al aeropuerto|Al hospital
¿Cuánto tarda en llegar?|20 minutos|10 minutos|30 minutos`],

[2, '🏥 En el médico', `A|你怎么了？|Nǐ zěnme le?|¿Qué te pasa?
B|医生，我头疼，也有点发烧。|Yīshēng, wǒ tóu téng, yě yǒudiǎn fāshāo.|Doctor, me duele la cabeza y tengo algo de fiebre.
A|你昨天吃药了吗？|Nǐ zuótiān chī yào le ma?|¿Ayer tomaste medicina?
B|没有，我昨天没吃药。|Méiyǒu, wǒ zuótiān méi chī yào.|No, ayer no tomé medicina.
A|现在吃药，多喝水，在家休息。|Xiànzài chī yào, duō hē shuǐ, zài jiā xiūxi.|Toma la medicina ahora, bebe mucha agua y descansa en casa.`, `¿Qué le duele al paciente?|La cabeza|El estómago|Las piernas
¿Tomó medicina ayer?|No|Sí|No se sabe
¿Qué le recomienda el médico?|Descansar en casa|Ir a trabajar|Hacer deporte`],

[2, '🎬 Quedar con un amigo', `A|明天你有时间吗？我们去看电影，好吗？|Míngtiān nǐ yǒu shíjiān ma? Wǒmen qù kàn diànyǐng, hǎo ma?|¿Tienes tiempo mañana? ¿Vamos al cine?
B|明天上午我要上班，下午可以。|Míngtiān shàngwǔ wǒ yào shàngbān, xiàwǔ kěyǐ.|Mañana por la mañana trabajo; por la tarde puedo.
A|那我们下午三点在电影院门口见面。|Nà wǒmen xiàwǔ sān diǎn zài diànyǐngyuàn ménkǒu jiànmiàn.|Entonces nos vemos a las tres de la tarde en la puerta del cine.
B|好，不见不散！|Hǎo, bú jiàn bú sàn!|¡Vale, no faltes!`, `¿Qué van a hacer?|Ver una película|Ir de compras|Comer fuera
¿A qué hora quedan?|A las 3 de la tarde|A las 3 de la mañana|A las 5 de la tarde
¿Dónde se ven?|En la puerta del cine|En casa de B|En un restaurante`],

[2, '🌧️ El tiempo', `A|今天天气怎么样？|Jīntiān tiānqì zěnmeyàng?|¿Qué tiempo hace hoy?
B|今天很冷，还下雨。|Jīntiān hěn lěng, hái xià yǔ.|Hoy hace mucho frío y además llueve.
A|是吗？那我不出去了。|Shì ma? Nà wǒ bù chūqù le.|¿Sí? Entonces no salgo.
B|对，在家看电视吧。明天是晴天。|Duì, zài jiā kàn diànshì ba. Míngtiān shì qíngtiān.|Sí, mejor ve la tele en casa. Mañana estará soleado.`, `¿Qué tiempo hace hoy?|Frío y lluvia|Calor y sol|Viento y nieve
¿Qué decide hacer A?|Quedarse en casa|Salir con paraguas|Ir a la montaña
¿Y mañana?|Soleado|Lluvioso|Nevará`],

[2, '📱 Comprar un móvil', `A|你好，我想买一个手机。|Nǐ hǎo, wǒ xiǎng mǎi yí ge shǒujī.|Hola, quiero comprar un móvil.
B|这个怎么样？很好用，也不贵。|Zhège zěnmeyàng? Hěn hǎoyòng, yě bú guì.|¿Qué tal este? Es muy práctico y no es caro.
A|多少钱？|Duōshao qián?|¿Cuánto cuesta?
B|两千块，但是今天可以便宜两百块。|Liǎng qiān kuài, dànshì jīntiān kěyǐ piányi liǎng bǎi kuài.|2000 yuanes, pero hoy puedo rebajarle 200.
A|好，我买这个。|Hǎo, wǒ mǎi zhège.|Vale, me llevo este.`, `¿Qué compra A?|Un móvil|Un ordenador|Un reloj
¿Cuánto paga al final?|1800 yuanes|2000 yuanes|200 yuanes`],

[3, '✈️ En el aeropuerto', `A|您好，请给我看一下您的护照。|Nín hǎo, qǐng gěi wǒ kàn yíxià nín de hùzhào.|Buenas, enséñeme su pasaporte, por favor.
B|给你。我要去上海，行李只有一个箱子。|Gěi nǐ. Wǒ yào qù Shànghǎi, xíngli zhǐyǒu yí ge xiāngzi.|Aquí tiene. Voy a Shanghái; solo tengo una maleta.
A|好的。飞机十点起飞，请九点半以前到登机口。|Hǎo de. Fēijī shí diǎn qǐfēi, qǐng jiǔ diǎn bàn yǐqián dào dēngjīkǒu.|Bien. El avión sale a las diez; llegue a la puerta de embarque antes de las nueve y media.
B|请问，登机口在哪里？|Qǐngwèn, dēngjīkǒu zài nǎlǐ?|Perdone, ¿dónde está la puerta de embarque?
A|在三楼，一直往前走就到了。|Zài sān lóu, yìzhí wǎng qián zǒu jiù dào le.|En el tercer piso; siga recto y llegará.`, `¿A dónde viaja el pasajero?|A Shanghái|A Pekín|A Cantón
¿Cuánto equipaje lleva?|Una maleta|Dos maletas|Ninguna
¿A qué hora sale el avión?|A las 10|A las 9:30|A las 3
¿En qué piso está la puerta de embarque?|En el tercero|En el primero|En el quinto`],

[3, '🏨 En el hotel', `A|你好，我昨天订了一个房间。|Nǐ hǎo, wǒ zuótiān dìng le yí ge fángjiān.|Hola, ayer reservé una habitación.
B|请问您的名字是什么？|Qǐngwèn nín de míngzi shì shénme?|¿Cuál es su nombre, por favor?
A|我叫王明，住两个晚上。|Wǒ jiào Wáng Míng, zhù liǎng ge wǎnshang.|Me llamo Wang Ming y me quedo dos noches.
B|好的，您的房间在五楼，房间里可以上网。这是您的钥匙。|Hǎo de, nín de fángjiān zài wǔ lóu, fángjiān lǐ kěyǐ shàngwǎng. Zhè shì nín de yàoshi.|Bien, su habitación está en el quinto piso y tiene internet. Esta es su llave.
A|早饭几点开始？|Zǎofàn jǐ diǎn kāishǐ?|¿A qué hora empieza el desayuno?
B|早上七点到九点。|Zǎoshang qī diǎn dào jiǔ diǎn.|De siete a nueve de la mañana.`, `¿Cuántas noches se queda?|Dos|Una|Tres
¿En qué piso está la habitación?|En el quinto|En el segundo|En el tercero
¿Cuándo es el desayuno?|De 7 a 9|De 8 a 10|De 6 a 7`],

[3, '🚇 Preguntar el camino', `A|请问，附近有地铁站吗？|Qǐngwèn, fùjìn yǒu dìtiězhàn ma?|Perdone, ¿hay una estación de metro cerca?
B|有。你一直往前走，到红绿灯往左走。|Yǒu. Nǐ yìzhí wǎng qián zǒu, dào hónglǜdēng wǎng zuǒ zǒu.|Sí. Siga recto y en el semáforo vaya a la izquierda.
A|远不远？|Yuǎn bu yuǎn?|¿Está lejos?
B|不太远，走路大概五分钟。|Bú tài yuǎn, zǒulù dàgài wǔ fēnzhōng.|No mucho, a pie unos cinco minutos.
A|谢谢你！|Xièxie nǐ!|¡Gracias!`, `¿Qué busca A?|El metro|Un banco|Una parada de autobús
¿Hacia dónde gira en el semáforo?|A la izquierda|A la derecha|Sigue recto
¿Cuánto se tarda a pie?|Unos 5 minutos|Unos 15 minutos|Unos 50 minutos`],

[3, '👕 Cambiar una prenda', `A|你好，这件衣服太小了，我想换一件大的。|Nǐ hǎo, zhè jiàn yīfu tài xiǎo le, wǒ xiǎng huàn yí jiàn dà de.|Hola, esta prenda me queda pequeña; quiero cambiarla por una más grande.
B|请问你是什么时候买的？|Qǐngwèn nǐ shì shénme shíhou mǎi de?|¿Cuándo la compró?
A|昨天下午买的，我还没穿过。|Zuótiān xiàwǔ mǎi de, wǒ hái méi chuān guo.|Ayer por la tarde; aún no me la he puesto.
B|没问题。这件是大号，颜色也一样。|Méi wèntí. Zhè jiàn shì dà hào, yánsè yě yíyàng.|Sin problema. Esta es la talla grande y el color es el mismo.`, `¿Qué problema tiene la prenda?|Es demasiado pequeña|Es muy cara|No le gusta el color
¿Cuándo la compró?|Ayer por la tarde|Hoy por la mañana|La semana pasada`],

[4, '💼 Entrevista de trabajo', `A|请先介绍一下你自己。|Qǐng xiān jièshào yíxià nǐ zìjǐ.|Preséntese primero, por favor.
B|我叫张华，大学学的是经济，毕业以后在一家公司工作了三年。|Wǒ jiào Zhāng Huá, dàxué xué de shì jīngjì, bìyè yǐhòu zài yì jiā gōngsī gōngzuò le sān nián.|Me llamo Zhang Hua; estudié economía y, tras graduarme, trabajé tres años en una empresa.
A|你为什么想来我们公司？|Nǐ wèi shénme xiǎng lái wǒmen gōngsī?|¿Por qué quiere venir a nuestra empresa?
B|因为贵公司发展很快，我希望能学到更多东西。|Yīnwèi guì gōngsī fāzhǎn hěn kuài, wǒ xīwàng néng xuédào gèng duō dōngxi.|Porque su empresa crece rápido y espero aprender más cosas.
A|你什么时候可以开始上班？|Nǐ shénme shíhou kěyǐ kāishǐ shàngbān?|¿Cuándo puede empezar a trabajar?
B|下个月一号就可以。|Xià ge yuè yī hào jiù kěyǐ.|El día uno del mes que viene.`, `¿Qué estudió Zhang Hua?|Economía|Medicina|Arte
¿Cuántos años trabajó antes?|Tres|Uno|Cinco
¿Cuándo puede empezar?|El día 1 del mes próximo|Mañana mismo|El año que viene`],

[4, '📚 En la biblioteca', `A|你好，我想借几本关于中国历史的书。|Nǐ hǎo, wǒ xiǎng jiè jǐ běn guānyú Zhōngguó lìshǐ de shū.|Hola, quiero pedir prestados algunos libros sobre historia de China.
B|可以。请把你的学生证给我。|Kěyǐ. Qǐng bǎ nǐ de xuéshēngzhèng gěi wǒ.|Claro. Deme su carné de estudiante.
A|对不起，我忘带了。怎么办？|Duìbuqǐ, wǒ wàng dài le. Zěnme bàn?|Lo siento, se me olvidó traerlo. ¿Qué hago?
B|没关系，告诉我你的名字和电话号码就行。|Méi guānxi, gàosu wǒ nǐ de míngzi hé diànhuà hàomǎ jiù xíng.|No pasa nada, con decirme su nombre y su teléfono basta.
A|谢谢。这些书可以借多久？|Xièxie. Zhèxiē shū kěyǐ jiè duō jiǔ?|Gracias. ¿Cuánto tiempo puedo quedarme los libros?
B|一个月。到时候请按时还。|Yí ge yuè. Dào shíhou qǐng ànshí huán.|Un mes. Devuélvalos a tiempo.`, `¿Sobre qué quiere libros A?|Historia de China|Cocina china|Ciencia
¿Qué olvidó A?|El carné de estudiante|El móvil|La cartera
¿Cuánto dura el préstamo?|Un mes|Dos semanas|Un año`],

[4, '🏠 Alquilar un piso', `A|我看了你们的广告，那套房子还在吗？|Wǒ kàn le nǐmen de guǎnggào, nà tào fángzi hái zài ma?|He visto su anuncio, ¿sigue disponible ese piso?
B|还在，两室一厅，离地铁站很近，每个月三千块。|Hái zài, liǎng shì yì tīng, lí dìtiězhàn hěn jìn, měi ge yuè sānqiān kuài.|Sí: dos habitaciones y salón, cerca del metro, 3000 yuanes al mes.
A|有点贵，能不能便宜一点？|Yǒudiǎn guì, néng bu néng piányi yìdiǎn?|Es algo caro, ¿se puede rebajar un poco?
B|如果你住一年，我可以每个月便宜两百块。|Rúguǒ nǐ zhù yì nián, wǒ kěyǐ měi ge yuè piányi liǎng bǎi kuài.|Si se queda un año, puedo rebajarle 200 yuanes al mes.
A|好，我周末来看房，再决定。|Hǎo, wǒ zhōumò lái kàn fáng, zài juédìng.|Bien, iré a ver el piso el fin de semana y decidiré.`, `¿Cuántas habitaciones tiene el piso?|Dos y un salón|Una y un salón|Tres y un salón
¿Cuánto cuesta al mes sin descuento?|3000 yuanes|2000 yuanes|3200 yuanes
Si A se queda un año, ¿cuánto paga al mes?|2800 yuanes|3000 yuanes|2600 yuanes
¿Cuándo irá a ver el piso?|El fin de semana|Mañana|El mes que viene`],

[4, '🎂 Fiesta de cumpleaños', `A|周六是我的生日，你能来参加聚会吗？|Zhōuliù shì wǒ de shēngrì, nǐ néng lái cānjiā jùhuì ma?|El sábado es mi cumpleaños, ¿puedes venir a la fiesta?
B|真的吗？祝你生日快乐！可是我周六要加班。|Zhēn de ma? Zhù nǐ shēngrì kuàilè! Kěshì wǒ zhōuliù yào jiābān.|¿De verdad? ¡Feliz cumpleaños! Pero el sábado tengo que hacer horas extra.
A|没关系，聚会晚上七点开始，你下班以后再来吧。|Méi guānxi, jùhuì wǎnshang qī diǎn kāishǐ, nǐ xiàbān yǐhòu zài lái ba.|No importa, la fiesta empieza a las siete de la tarde; ven cuando salgas del trabajo.
B|那我一定去，我还会给你带一个礼物。|Nà wǒ yídìng qù, wǒ hái huì gěi nǐ dài yí ge lǐwù.|Entonces iré seguro, y además te llevaré un regalo.`, `¿Qué celebra A?|Su cumpleaños|Su boda|Su graduación
¿Por qué B no puede ir antes?|Tiene que hacer horas extra|Está enfermo|Está de viaje
¿A qué hora empieza la fiesta?|A las 7 de la tarde|A las 7 de la mañana|A las 5 de la tarde`],

[5, '🌍 Medio ambiente', `A|你觉得现在的环境污染问题严重吗？|Nǐ juéde xiànzài de huánjìng wūrǎn wèntí yánzhòng ma?|¿Crees que el problema de la contaminación es grave hoy en día?
B|我认为非常严重，尤其是大城市的空气质量。|Wǒ rènwéi fēicháng yánzhòng, yóuqí shì dà chéngshì de kōngqì zhìliàng.|Creo que es gravísimo, sobre todo la calidad del aire de las grandes ciudades.
A|对，不过我觉得每个人都可以为保护环境做一点贡献。|Duì, búguò wǒ juéde měi ge rén dōu kěyǐ wèi bǎohù huánjìng zuò yìdiǎn gòngxiàn.|Sí, pero creo que todos podemos contribuir a proteger el medio ambiente.
B|比如少开车，多坐公共交通，还要节约用水用电。|Bǐrú shǎo kāichē, duō zuò gōnggòng jiāotōng, hái yào jiéyuē yòng shuǐ yòng diàn.|Por ejemplo, conducir menos, usar más el transporte público y ahorrar agua y electricidad.
A|你说得对，从小事做起最重要。|Nǐ shuō de duì, cóng xiǎo shì zuòqǐ zuì zhòngyào.|Tienes razón, lo más importante es empezar por las cosas pequeñas.`, `¿De qué hablan?|De la contaminación|De la inflación|Del tráfico
¿Qué problema destaca B en las grandes ciudades?|La calidad del aire|El ruido|La vivienda
¿Qué ejemplo de acción dan?|Usar el transporte público|Comprar un coche eléctrico|Cambiar de ciudad`],

[5, '🤖 Noticias de tecnología', `A|你看到今天的新闻了吗？有一家公司发布了新的人工智能产品。|Nǐ kàndào jīntiān de xīnwén le ma? Yǒu yì jiā gōngsī fābù le xīn de réngōng zhìnéng chǎnpǐn.|¿Has visto la noticia de hoy? Una empresa lanzó un nuevo producto de inteligencia artificial.
B|我看到了。有人担心它会取代很多工作，你怎么看？|Wǒ kàndào le. Yǒu rén dānxīn tā huì qǔdài hěn duō gōngzuò, nǐ zěnme kàn?|Sí, lo vi. Algunos temen que reemplace muchos trabajos, ¿tú qué piensas?
A|我觉得不用太担心。技术进步会带来新的机会。|Wǒ juéde búyòng tài dānxīn. Jìshù jìnbù huì dàilái xīn de jīhuì.|Creo que no hay que preocuparse tanto. El progreso técnico traerá nuevas oportunidades.
B|也许吧，但我们必须不断学习，才能适应变化。|Yěxǔ ba, dàn wǒmen bìxū búduàn xuéxí, cáinéng shìyìng biànhuà.|Quizá, pero debemos aprender sin parar para poder adaptarnos a los cambios.`, `¿Qué lanzó la empresa?|Un producto de inteligencia artificial|Un coche nuevo|Un teléfono plegable
¿Qué temen algunas personas?|Que reemplace muchos trabajos|Que sea muy caro|Que no funcione
¿Qué opina A?|Que no hay que preocuparse tanto|Que hay que prohibirlo|Que es una moda pasajera`],

[5, '🧧 Fiesta de la Primavera', `A|春节快到了，你打算怎么过？|Chūnjié kuài dào le, nǐ dǎsuàn zěnme guò?|Se acerca el Año Nuevo chino, ¿cómo piensas celebrarlo?
B|我要回老家和家人团聚，大家一起包饺子、看春晚。|Wǒ yào huí lǎojiā hé jiārén tuánjù, dàjiā yìqǐ bāo jiǎozi, kàn Chūnwǎn.|Volveré a mi pueblo a reunirme con mi familia: haremos jiaozi y veremos la gala de la Fiesta de la Primavera.
A|听说春节有很多传统习俗，比如发红包、放鞭炮，是吗？|Tīngshuō Chūnjié yǒu hěn duō chuántǒng xísú, bǐrú fā hóngbāo, fàng biānpào, shì ma?|He oído que hay muchas costumbres tradicionales, como dar sobres rojos o lanzar petardos, ¿es cierto?
B|是的，不过现在很多城市为了安全，已经禁止放鞭炮了。|Shì de, búguò xiànzài hěn duō chéngshì wèile ānquán, yǐjīng jìnzhǐ fàng biānpào le.|Sí, pero ahora muchas ciudades ya prohíben los petardos por seguridad.`, `¿Qué hará B en el Año Nuevo?|Volver a casa con su familia|Viajar al extranjero|Trabajar
¿Qué comida van a preparar?|Jiaozi|Fideos|Arroz frito
¿Qué ocurre hoy con los petardos?|Están prohibidos en muchas ciudades|Son obligatorios|Solo se usan en el campo`],

[5, '🎓 Estudiar en el extranjero', `A|你打算毕业以后出国留学吗？|Nǐ dǎsuàn bìyè yǐhòu chūguó liúxué ma?|¿Piensas estudiar en el extranjero después de graduarte?
B|我正在考虑。留学可以开阔眼界，还能提高外语水平。|Wǒ zhèngzài kǎolǜ. Liúxué kěyǐ kāikuò yǎnjiè, hái néng tígāo wàiyǔ shuǐpíng.|Lo estoy pensando. Estudiar fuera amplía horizontes y mejora el nivel de idiomas.
A|不过费用很高，而且要一个人适应新环境，会很不容易。|Búguò fèiyòng hěn gāo, érqiě yào yí ge rén shìyìng xīn huánjìng, huì hěn bù róngyì.|Pero cuesta mucho y además hay que adaptarse solo a un entorno nuevo, lo cual no es fácil.
B|是的，所以我打算先申请奖学金，再做最后的决定。|Shì de, suǒyǐ wǒ dǎsuàn xiān shēnqǐng jiǎngxuéjīn, zài zuò zuìhòu de juédìng.|Sí, por eso pienso pedir primero una beca y luego tomar la decisión final.`, `¿Qué ventaja ve B en estudiar fuera?|Ampliar horizontes y mejorar idiomas|Ganar más dinero|Vivir con su familia
¿Qué inconveniente menciona A?|Es caro y cuesta adaptarse|El clima|Los exámenes
¿Qué piensa hacer B antes de decidir?|Pedir una beca|Buscar trabajo|Preguntar a sus padres`]
);
