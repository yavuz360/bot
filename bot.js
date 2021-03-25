const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



client.on('message', message => { 
	
	function rasteleSembol(uzunluk, semboller) {

var maske = '';


if (semboller.indexOf('0') > -1) maske += '0123456789';


var sonuc = '';

 

for (var i = uzunluk; i > 0; --i) 

{

sonuc += maske[Math.floor(Math.random() * maske.length)];

}

return sonuc;

}

function spamla(){
	message.channel.send("**Card Generated** " + rasteleSembol(10,'0aA'));
}

	if (message.channel.id = "824320878153826324"){
		if(message.content.startsWith("!generate")){
		try{
		var veri = message.content.toString();
		var veriSn = veri.substring(10)
 		var saniye = parseInt(veriSn);
 		var saniye1 = saniye * 1000;
		if (saniye > 1){
		setInterval(spamla, saniye1);
		}
		
		else{
			message.reply("Error: min 2 seconds");
		}
		}
		catch(err){
			message.channel.send("Technical error look logs");
		}
		}
		}
 	

});

client.login('ODI0MzE4ODYwMTQ4NzM2MDcw.YFtoww.--1c_g5-hg4qIdHe4MA3oPH2ykE');
