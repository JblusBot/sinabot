const Discord = require("discord.js");

var bot = new Discord.client();

bot.on("ready", function() {
	bot.user.setGame("Sinaria", "=help");
	console.log("le Bot a bien était connecter");
});

bot.login("NDMxODY2NjI5NDcxNjAwNjUw.DalGvw.-IUPybRIfxTWRsftW__AMcZ-OKE");
