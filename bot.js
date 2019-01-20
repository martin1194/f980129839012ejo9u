const Discord = require('discord.js');
//const config = require("./config.json");
//"prefix": "/",
//"lobby": "440791343258927105",
//import config from ('./config.json')
const client = new Discord.Client();
//const prefix = '/';

client.on('ready',() => {

//  client.user.setPresence({
//        status: 'idle' //online;idle;invisible
//    })

//  console.log(`成功登入 ${client.user.tag}`);
  client.user.setStatus('idle'); // Online/idle/invisible/dnd
//  client.user.setGame('say /noice for noice') //
  client.user.setActivity("sleep(23:50", { type: "PLAYING"})//WATCHING;PLAYING

});
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


client.on('message', msg => {
  if(msg.author.bot) return;
  var on9 = []
  if(msg.content === '嗨'){
    msg.reply("嗨");
  }
  if(msg.content === '嗨!!'){
    msg.channel.send("嗨!!");
  }
  if(msg.content === ('on9')){
    msg.channel.send("你就ON9!!!");
  }
  if (checkCommand(msg,"help")){
    msg.reply({embed:{
      title: "未來行程" ,
      description: "輸入「!!000」可查看未來時間安排" ,
      color: 0xFF4E28
    }});
    msg.reply({embed:{
      title: "未來上課日" ,
      description: "輸入「!!001」可查看未來上課日" ,
      color: 0xFF4E28
    }})
    msg.reply({embed:{
      title: "未來加班日" ,
      description: "輸入「!!002」可查看未來加班日" ,
      color: 0xFF4E28
    }})
    msg.reply({embed:{
      title: "未來休息日" ,
      description: "輸入「!!003」可查看未來休息日" ,
      color: 0xFF4E28
    }})
    msg.reply({embed:{
      title: "是日預計時間安排" ,
      description: "輸入「!!004」可查看是日預計安排" ,
      color: 0xFF4E28
    }})
  }
    if (checkCommand(msg,"notice")){
    msg.reply({embed:{
      title: "我" ,
      description: "暫時沒有資料XD" ,
      color: 0xFF4E28
    }})
  }
  if (checkCommand(msg,"000")){//未來行程
    msg.channel.send("未來行程:");
    msg.channel.send("24/1 20:00 出門食飯");
  }
  if (checkCommand(msg,"001")){//未來上課日
    msg.channel.send("本周上課天為星期一、三、四、五");
  }
  if (checkCommand(msg,"002")){//未來加班日
    msg.channel.send("未來加班日:");
    msg.channel.send("1月26日(六)");
    msg.channel.send("1月27日(日)");
  }  
  if (checkCommand(msg,"003")){//未來休息日
    msg.channel.send("未來休息日:");
    msg.channel.send("無哂LU");
  }
    if (checkCommand(msg,"004")){//是日預計安排
    msg.channel.send("是日預計安排:");
    msg.channel.send("08:00上班 18:00下班");
    msg.channel.send("18:45上課 21:45下課");
  }
  if (checkCommand(msg,"on9")) {
    msg.reply("@___@... 唔好啦~")
  }
  if (msg.content === '419208498190248'){
    msg.reply({embed:{
      title: "本機器人仍在開發中" ,
      description: "請細心稍後?" ,
      color: 0xFF4E28
    }})
  }
  function checkCommand(msg, commandName)
  {
    return msg.content.toLowerCase().startsWith("!!" + commandName)
  }
});

//Client.on('guildMemberAdd', function(member)
//{
//  member.send("歡迎來到這白癡熊的伺服器XD");
  //member.guild.channels.get(config.lobby).send('**' + member.user.username + '**加入到頻道');
//})  ;
//client.on('guildMemberRemove', member => {

  //member.guild.channels.get(config.lobby).send('**' + member.user.username + '**離開到頻道');
//})
//client.login(config.token);
client.login(process.env.BOT_TOKEN)
