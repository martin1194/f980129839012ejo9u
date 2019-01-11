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
  client.user.setStatus('Online'); // Online/idle/invisible/dnd
//  client.user.setGame('say /noice for noice') //
  client.user.setActivity("回到家(23:40)", { type: "PLAYING"})//WATCHING;PLAYING

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
      title: "想得到幫助?" ,
      description: "無指令呀XD!! 都無聊天功能(!)" ,
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
  if (checkCommand(msg,"notice")){
    msg.channel.send("你就ON9!!!");
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
    return msg.content.toLowerCase().startsWith("!" + commandName)
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
