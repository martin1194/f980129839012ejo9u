//  "random": "Math.floor (Math.random() *(number -1 + 1)) + 1"


const Discord = require('discord.js');
//const config = require("./config.json");
const bot = new Discord.Client();

bot.on('ready',() => {
  console.log(`成功登入 ${bot.user.tag}`);
});

bot.on('message', msg => {
  //變量(variables)
  //var sender = message.author; // The person who sent the message
  //var msg = message.content.toUpperCase(); // Takes the message, and makes it all uppercase
  //var prefix = '/' // The text before commands, you can set this to what ever you want

  if(msg.content === '嗨'){
    msg.reply('嗨');
  }

  if (msg.content === prefix + 'help'){
    msg.reply({embed:{
      title: "想得到幫助?" ,
      description: "暫時沒有資料^^" ,
      color: 0xFF4E28
    }})
  }
  if (msg.content === '419208498190248'){
    msg.reply({embed:{
      title: "本機器人仍在開發中" ,
      description: "請細心稍後?" ,
      color: 0xFF4E28
    }})
  }
});

//bot.on('guildMemberAdd', function(member)
//{
//  member.send("歡迎來到這白癡熊的伺服器XD");
  //member.guild.channels.get(config.lobby).send('**' + member.user.username + '**加入到頻道');
//})  ;
//bot.on('guildMemberRemove', member => {

  //member.guild.channels.get(config.lobby).send('**' + member.user.username + '**離開到頻道');
//})
//bot.login(config.token);
bot.login(process.env.BOT_TOKEN)
