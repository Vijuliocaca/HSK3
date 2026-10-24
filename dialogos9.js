// Diálogos de los personajes: [HSK, título, líneas (hablante|chino|pinyin|español; el hablante es el nombre del personaje), preguntas (pregunta|correcta|falsa|falsa)]
(self.DIALS = self.DIALS || []).push(
[3, '🦷 Jersio en el dentista', `jersio|医生，我的牙有点疼。|Yīshēng, wǒ de yá yǒudiǎn téng.|Doctor, me duele un poco una muela.
kevin|你是不是每天晚上都吃冰淇淋？|Nǐ shì bu shì měitiān wǎnshang dōu chī bīngqílín?|¿No será que comes un helado cada noche?
jersio|对，可是我只吃一个，因为我有糖尿病。|Duì, kěshì wǒ zhǐ chī yí ge, yīnwèi wǒ yǒu tángniàobìng.|Sí, pero solo me como uno, porque tengo diabetes.
kevin|那你要多刷牙，晚上也要刷。|Nà nǐ yào duō shuāyá, wǎnshang yě yào shuā.|Entonces cepíllate más, también por la noche.
jersio|好的。你也少抽烟吧！|Hǎo de. Nǐ yě shǎo chōuyān ba!|Vale. ¡Tú también fuma menos!
kevin|哈哈，你说得对。|Hāhā, nǐ shuō de duì.|Jaja, tienes razón.`, `¿Qué le duele a Jersio?|Una muela|La cabeza|El estómago
¿Qué le aconseja Kevin?|Cepillarse más los dientes|Dejar el helado|Comer más fruta`],

[3, '💃 Chana y Chiki', `chana|今天晚上你有空吗？|Jīntiān wǎnshang nǐ yǒu kòng ma?|¿Tienes tiempo esta noche?
chiki|有，可是我下午要踢足球。|Yǒu, kěshì wǒ xiàwǔ yào tī zúqiú.|Sí, pero por la tarde tengo que jugar al fútbol.
chana|踢完球，我们一起去跳舞吧。|Tī wán qiú, wǒmen yìqǐ qù tiàowǔ ba.|Cuando acabes, vamos a bailar juntos.
chiki|好啊，可是我跳得不好。|Hǎo a, kěshì wǒ tiào de bù hǎo.|Vale, pero yo bailo mal.
chana|没关系，我教你。|Méi guānxi, wǒ jiāo nǐ.|No importa, yo te enseño.
chiki|谢谢，你最好！|Xièxie, nǐ zuì hǎo!|Gracias, ¡eres la mejor!`, `¿Qué hace Chiki por la tarde?|Jugar al fútbol|Bailar|Trabajar
¿Quién enseñará a bailar?|Chana|Chiki|Un profesor`],

[3, '🍦 En el McDonald\'s', `jersio|你好，我要一个冰淇淋。|Nǐ hǎo, wǒ yào yí ge bīngqílín.|Hola, quiero un helado.
chana|只要冰淇淋？你不吃汉堡吗？|Zhǐ yào bīngqílín? Nǐ bù chī hànbǎo ma?|¿Solo un helado? ¿No comes hamburguesa?
jersio|不吃，我有糖尿病，这是我的晚饭。|Bù chī, wǒ yǒu tángniàobìng, zhè shì wǒ de wǎnfàn.|No, tengo diabetes y esta es mi cena de siempre.
chana|你每天都吃这个吗？|Nǐ měitiān dōu chī zhège ma?|¿Todos los días comes esto?
jersio|对，我每天都来，他们都认识我了。|Duì, wǒ měitiān dōu lái, tāmen dōu rènshi wǒ le.|Sí, vengo cada día y ya todos me conocen.
chana|哈哈，那我明天和你一起来！|Hāhā, nà wǒ míngtiān hé nǐ yìqǐ lái!|Jaja, ¡entonces mañana vengo contigo!`, `¿Qué pide Jersio?|Un helado|Una hamburguesa|Un refresco
¿Con qué frecuencia va?|Todos los días|Una vez por semana|Solo los fines de semana`]
);

// Palabras de los diálogos que no están en el vocabulario (hanzi|significado); se unen al glosario de las lecturas
self.DIALGLOS = `斌浩|BinHao (nombre)
奇基|Chiki (nombre)
卡洛斯|Carlos (nombre)
西班牙|España
这个|este, esta
二十|veinte
有点|un poco
散|dispersarse (en 不见不散: «no te vayas hasta que nos veamos»)
好用|práctico, fácil de usar
一下|un momento, un poco
上海|Shanghái
登机口|puerta de embarque
红绿灯|semáforo
学到|llegar a aprender
学生证|carné de estudiante
三千|tres mil
一点|un poco
房|casa, habitación
周六|sábado
做起|empezar por
团聚|reunirse (la familia)
春晚|gala de la Fiesta de la Primavera
红包|sobre rojo (regalo de dinero)
四十五|cuarenta y cinco
早期|fase temprana
治愈|curar
说说|decir, contar un poco
期望|expectativa
认|reconocer
平房|casa de una planta
高楼|rascacielos, edificio alto
老街|calle antigua
词汇量|cantidad de vocabulario
每天|cada día
五十|cincuenta
途|camino (en 半途而废: dejar algo a medias)
废|abandonar, desistir
定|fijar, decidir
头条|titular, noticia principal
严谨|riguroso
周五|viernes
修改稿|versión corregida
礼堂|auditorio
会场|sala del congreso
觉|dormir (睡一觉: echar un sueño)
下跌|caer (precios)
亏|perder (dinero)
买入|comprar (acciones)
牙|diente, muela
冰淇淋|helado
刷牙|cepillarse los dientes
汉堡|hamburguesa
不容易|no es fácil`;
