console.log('El bot esta listo para bardear');
const Discord = require('discord.js');
const bot= new Discord.Client({disableEveryone: false});



bot.on('ready', () => { console.log ('Estoy de vuelta, ¿me echabas de menos?');

bot.user.setPresence( {
       status: "online",
       game: {
           name: "50 Sombras de Nevra",
           type: "PLAYING"
       }
	});
});

bot.on('message', (message) => {
		
	if (message.channel.type === "dm") return;

	let messageArray = message.content.split(" ");

	if (message.author.bot) return;

	if (message.content.startsWith(`Anuncio`)) {
		message.channel.send('@everyone hoy es dia de ataque. Más información https://www.eldarya.es/forum/t4663,79-el-consejo-de-corvus-sal%C3%B3n-de-estrategias-ii.htm#p1428255');
	}

	if (message.content.startsWith(`hola`)) {
		message.reply('Hola preciosa :kissing_heart:');
	}
	if (message.content.startsWith(`holi`)) {
		message.reply('Hola, vienes por tus nalgadas diarias?');
	}
	if (message.content.startsWith(`Buenas`)) {
		message.reply('Hola preciosa :kissing_heart:');
	}
	
	if (message.content.startsWith(`Holi`)) {
		message.reply('Hola, vienes por tus nalgadas diarias?');
	}
	if (message.content.startsWith(`Hola`)) {
		message.reply('Hola preciosa :kissing_heart:');
	}
	if (message.content.startsWith(`si, azotame`)) {
		message.reply('Mejor no, que eso te gustaria demasiado :smiling_imp:');
	}
	if (message.content.startsWith(`gracias Nevra`)) {
		message.reply('De nada, amor :kissing_heart:');
	}
	if (message.content.startsWith(`Gracias Nevra`)) {
		message.reply('De nada, amor :kissing_heart:');
	}
	if (message.content.startsWith(`bienvenida`)) {
		message.channel.send('Hola preciosa :kissing_heart: Si no saludo antes es culpa de kerui que me tiene secuestrado');
	}
	if (message.content === `ey`) {
		message.channel.send('Hola a todas mis hermosas sombras :kissing_heart:');
	}
	if (message.content ===`:b`) {
		message.channel.send('Ese Bugsenta es un hombrecito triste y extraño. No perdais vuestro precioso tiempo con él');
	}
	if (message.content === `:a`) {
		message.channel.send('Robad todas las victorias a la guardia Absenta hasta que reconozcan nuestra superioridad :smirk_cat:');
	}
	if (message.content === `ob`) {
		message.channel.send('Obsidiana tiene a yayo Valky, por eso son buena gente');
	}
	if (message.content ===`Hemos ganado`) {
	message.channel.send('Os habeis librado del castigo. Estoy orgulloso');
	}
	if (message.content.startsWith(`Ganamos`)) {
		message.channel.send('Felicidades mis bellas princesas del anochecer. Han demostrado que la guardia Sombra es digna de estar en primer lugar y que ustedes son dignas de que su jefe las pueda amar :kissing_heart:');
	}
	if (message.content.startsWith(`Nevra, quiero mi premio`)) {
	message.reply('Enorgulleces a tu guardia preciosa, como premio te veo en mi habitación esta noche :kissing_heart:');
	}

	if (message.content ===`pre`) {
	message.channel.send('<@&635788465044193292> Mis sangrientas sombras preparaos para derramar la sangre del enemigo');
	}
	if (message.content ===`ata`) {
	message.channel.send('<@&635788465044193292> Hora de demostrar quienes son las mejores, atacar con todo :muscle:');
	}
	if (message.content ===`*`) {
	message.channel.send('@everyone comienza el ataque de hoy. Quiero ver como sube el marcador o habrá castigo del que no os gustará :smiling_imp: ');
	}

    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === "nevra") {
        if (!args[1]) return message.channel.send("Deja tu pregunta")
        let answers = ["No :smiling_imp: ", "Si :smirk: ", "Es posible :thinking:", "Lo dudas? :interrobang:", "lo hablamos esta noche en el cerezo :smirk: ", "¿Realmente quieres saberlo? :smirk: ", "No creo que sea necesario responderlo :smirk:", "estas buscando castigo? :smirk: ", "recuerden... siempre sombra, nunca insombra"]
        message.channel.send(answers[Math.floor(Math.random() * answers.length)]);
    }	   	
});



bot.login(process.env.token)
