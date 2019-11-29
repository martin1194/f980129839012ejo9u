const Discord = require('discord.js');
//const config = require("./config.json");
//"lobby": "440791343258927105",
//import config from ('http://raw.githubusercontent.com/martin1194/JFIJAIS12/master/config.json');
//const config = require('http://raw.githubusercontent.com/martin1194/JFIJAIS12/master/config.json').parse;
//const config = require('config.json').parse;
//import config from 'config.json';
const client = new Discord.Client();
const prefix = '_';
// require nodeJS 內建 http 模組.
const config = require("./config.json");
const ytdl = require('ytdl-core');
//const queue = new Map();



//var requireFromUrl = require('require-from-url/sync');
//var config = requireFromUrl("https://raw.githubusercontent.com/martin1194/JFIJAIS12/master/config.json");
//function setup(){
//	loadJSON("https://raw.githubusercontent.com/martin1194/JFIJAIS12/master/config.json",gotData);
//}
//function gotData(data){
//	println(config);
//}
//  client.user.setPresence({

var currentdate = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"}); 
currentdate = new Date(currentdate);
var datetime = "Last Sync: " + currentdate.getDate() + "/" + (currentdate.getMonth()+1) + "/" + currentdate.getFullYear() + " @ " + (currentdate.getHours()) + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
var stat1 = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"}); 
stat1 = new Date(config.year1, config.month1 - 1, config.day1, config.hour1, config.min1);



var month = currentdate.getMonth()+1;
	if('0'<= month && month <='9'){
 u_month = "" + month
 }
	else{u_month = month}


var date = currentdate.getDate();
	if('0'<= date && date <='9'){
 u_date = "" + date
	}
	else{u_date = date}




var hour = currentdate.getHours();
	if('0'<= hour && hour <='9'){
		u_hour = "0" + hour
	}
	else{u_hour = hour}
var minute = currentdate.getMinutes();
	if('0'<= minute && minute  <='9'){
		u_minute = "0" + minute
	}
	else{u_minute = minute}
	if(stat1 > currentdate){
		var bottime = config.hour1 + ":" + config.min1;
		var botactivity = config.activity1;
		if(config.stat1 === '1'){
			customstat = "Online";
		}
		if(config.stat1 === '2'){
			customstat = "idle";
		}
		if(config.stat1 === '3'){
			customstat = "invisible";
		}
		if(config.stat1 === '4'){
			customstat = "dnd";
		}
		}
	else{
		var bottime = config.time;
		var botactivity = config.activity;
		if(config.stat === '1'){
			customstat = "Online";
		}
		if(config.stat === '2'){
			customstat = "idle";
		}
		if(config.stat === '3'){
			customstat = "invisible";
		}
		if(config.stat === '4'){
			customstat = "dnd";
		}
	}
//        status: 'idle' //online;idle;invisible
//    })
client.on('ready',() => {
//  console.log(`成功登入 ${client.user.tag}`);
	client.user.setStatus(customstat); // Online/idle/invisible/dnd''
//  client.user.setGame('say /noice for noice') //
//	client.user.setActivity(botactivity + "(" + bottime + ")", { type: "PLAYING"})//WATCHING;PLAYING"""";
	function botstat(botactivity,bottime){
		return client.user.setActivity(botactivity + "(" + bottime + ")", { type: "PLAYING"})//WATCHING;PLAYING"""";
	};
	botstat(config.activity,u_date+"/"+u_month+" "+u_hour + ":" + u_minute);
	
	/*client.channels.get('533365287278346240').send(
	{embed:{
      title: "" ,
      description: "目前活動:"+config.activity+"\n"+"更新時間:"+ u_hour + ":" + u_minute +"\n目前此BOT不具備任何指令\n亦不具備溝通/聊天功能" ,
      color: 0xFF4E28
    }});*/
	
	/*client.channels.get('533365287278346240').send(
	{embed:{
      title: "" ,
      description: "更新時間:"+ u_hour + ":" + u_minute+"\n沒有指令" ,
      color: 0xFF4E28
    }});*/
	
	//client.channels.get('533365287278346240').send(
	//{embed:{
    //  title: "" ,
    //  description: "http://wordpress-239016-733028.cloudwaysapps.com/"+"\n最後更新: 12/2/2019" ,
    //  color: 0x004E28
    //}});
	
	
	


	
//變量(variables)
//var sender = message.author; // The person who sent the message
//var msg = message.content.toUpperCase(); // Takes the message, and makes it all uppercase
//var prefix = '/' // The text before commands, you can set this to what ever you want
//  let args = message.content.slice(prefix.length).trim().split('');
//  let cmd = arg.shift().toLowerCase();
//  if (message.author.bot) return; //This wwill ignore all bots
//  if (!message.content.startsWith(prefix)) return; //This will return if the message doesn't start with your prefix
//  //Command handler
//  try {
//      //Bonus: Auto-Reload (You should move this into it's own command)
//      delete require.cache[require.resolve(`./commands/${cmd}.js`)]
//      let commandFile =require(`./commands/${cmd}.js`)// This will require a file in the command s folder
//      commandFile.run(client, message, args); // This will pass three variables into the file

//  } catch (e) { //Thiss will catch any errors, either within the code or if the command doesn't exitst
//      console.log(e.stack);

//  }
});










client.on('message', msg => {
	/*	if(msg.author.bot) return;
		const serverQueue = queue.get(msg.guild.id);
		
		if (checkCommand(msg,"play")) {
		execute(msg, serverQueue);
		return;
	} else if (checkCommand(msg,"skip")) {
		skip(msg, serverQueue);
		return;
	} else if (checkCommand(msg,"stop")) {
		stop(msg, serverQueue);
		return;
	} else {
		msg.channel.send('You need to enter a valid command!')
	};
*/
if (msg.content.startsWith(prefix)) {
		let args = msg.content.slice(prefix.length).trim().split(' ');
		let cmd = args.shift().toLowerCase();
		
		if (msg.author.bot) return;
		
		try {
			let commandFile = require(`./commands/%{cmd}.js`);
			commandFile.run(client, msg, args);
			
		} catch (e) {
			console.log(e.stack);
		}
}
		
		if(msg.content === '嗨'){
			msg.reply("嗨");
		}
		else if(msg.content === '嗨!!'){
			msg.channel.send("嗨!!");
		}
		else if(msg.content === ('on9')){
			msg.channel.send("你就ON9!!!");
		}
		else if (checkCommand(msg,"help")){
	msg.reply("\n感謝你使用呢個BOT\n暫時沒有任何指令")
	msg.reply({embed:{
      title: "HI" ,
      description: "HI" ,
      color: 0xFF4E28
    }})
		}
    else if (checkCommand(msg,"notice")){
    msg.reply({embed:{
      title: "我" ,
      description: "暫時沒有資料XD" ,
      color: 0xFF4E28
    }})
  }
	//if (checkCommand(msg,"")){
	//	var random = Math.floor(Math.random()*100);
    //msg.reply("啊~ 我唔識應機丫");
	//}
	else if (checkCommand(msg,"12312312")){//未來行程
    msg.channel.send("未來行程:");
    msg.channel.send("n/a");
  }
	else if (checkCommand(msg,"on9")) {
    msg.reply("@___@... 唔好啦~\n"+ "BYE\n"+ stat1 + "\n"+currentdate);
  }
	else if (checkCommand(msg,"csgo"))
	{var reply1 = getRandom(1,15);
		switch (reply1){
			case 1 :msg.reply("CSGO? 你睇下樹熊!! NOVA1啦!! 哈哈!!"); break;
			case 2 :msg.reply("聽聞樹熊唔玩DUST2"); break;
			case 3 :msg.reply("一齊買AWP去RUSH B!!! "); break;
			case 4 :msg.reply("=3=　CSGO啊? 好似免費遊戲黎WO"); break;
			case 5 :msg.reply("呵呵呵!! SILVER之路，由樹熊開創。"); break;
			case 6 :msg.reply("仲諗,快D變到樹熊咁肥。\ｎ然後去塞住mirage既T appartment條路啦"); break;
			case 7 :msg.reply("GOGOGO!!"); break;
			case 8 :msg.reply("仲諗? 快D去射下wyatt先啦"); break;
			case 9 :msg.reply("OH NO!? 買AWP先黎RUSH B?"); break;
			case 10 :msg.reply("FUCK!! NEED BACKUP!!"); break;
			case 11 :msg.reply("啊~ 樹熊傻左啦!! 快D叫BARRY幫佢FLASH啦~"); break;
			case 12 :msg.reply("呀?! CSGO~? 跌到NOVA2不是夢"); break;
			case 13 :msg.reply("silver 1 awper已經絕跡係CSGO了"); break;
			case 14 :msg.reply("HI!! BYE!! HI!! BYE!! HI!! BYE!!"); break;
			case 15 :msg.reply("......!? ((被炸死"); break;
		}
	}

	else if(checkCommand(msg,"")){var reply2 = getRandom(1,23);
		switch (reply2){
			case 1 :msg.reply("我，唔識答。"); break;
			case 2 :msg.reply("我唔知點回應，但我D回覆無連貫性。"); break;
			case 3 :msg.reply("啊？！　你講緊咩野Ｔ＿Ｔ"); break;
			case 4 :msg.reply("不如你直接同ＴＲＥＥＢＥＡＲ講啦　ＱＷＱ"); break;
			case 5 :msg.reply("我太蠢啦～　又肥又蠢"); break;
			case 6 :msg.reply("快Ｄ黎打樹熊啦～"); break;
			case 7 :msg.reply("我好似樹熊咁蠢，答唔到你。"); break;
			case 8 :msg.reply("傻啦，你以為我識答你問題？　太天真"); break;
			case 9 :msg.reply("喂呀！！　唔好打Ｄ野我唔明ＯＡＯ"); break;
			case 10 :msg.reply("樹熊呀！！！　有人打Ｄ我唔明既野出黎啊ＯＡＯ"); break;
			case 11 :msg.reply("ＯＨ　ＮＯ！！！　ａｐｐａｒｔｍｅｎｔ　１　ｈａｖｅ　ｇｕｎ。"); break;
			case 12 :msg.reply("呀！！！　我唔識答你呀。"); break;
			case 13 :msg.reply("點算啊　我好蠢啊！！　快Ｄ餵我食樹葉補下腦！"); break;
			case 14 :msg.reply("我唔知啊～　你打死我，我都唔識答你"); break;
			case 15 :msg.reply("唏呀　唏呀　唏呀唏～　團結一心好轉機。"); break;
			case 16 :msg.reply("我好似樹熊咁蠢。　唔識答你　Ｔ＿Ｔ"); break;
			case 17 :msg.reply("啊！　你直接問樹熊好過啦"); break;
			case 18 :msg.reply("呢個BOT依家仲好蠢。"); break;
			case 19 :msg.reply("過去十八歲沒戴錶不過有時間～"); break;
			case 20 :msg.reply("Ｔ＿Ｔ　講Ｄ電腦話好唔好？　我聽唔明人話"); break;
			case 21 :msg.reply("我唔識答啊QWQ"); break;
			case 22 :msg.reply("啊!! 樹熊啊!! 有人蝦我唔識人話啊!"); break;
			case 23 :msg.reply("OH NO!!! 我唔識答啊"); break;
		}
	};
	

 //if (msg.content === '419208498190248'){
 //   msg.reply({embed:{
 //     title: "本機器人仍在開發中" ,
 //     description: "請細心稍後1?" ,
 //     color: 0xFF4E28
 //   }})}
  
  
  /*
   function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and speak in your voice channel!');
	}

	const songInfo = ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return message.channel.send('There is no song that I could skip!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}









  
  
  
  
  
  
  
  
  
  
  

//Client.on('guildMemberAdd', function(member)
//{
//  member.send("歡迎來到這白癡熊的伺服器XD");
  //member.guild.channels.get(config.lobby).send('**' + member.user.username + '**加入到頻道');
//})  ;
//client.on('guildMemberRemove', member => {

  //member.guild.channels.get(config.lobby).send('**' + member.user.username + '**離開到頻道');
//})
//client.login(config.token);



*/



});

  function checkCommand(msg, commandName)
  {
    return msg.content.toLowerCase().startsWith("!!" + commandName)
  };
  	function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};
	
client.login(process.env.BOT_TOKEN)
