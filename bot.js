const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = 'a?'

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', message => {
  if (message.content === prefix + 'son video') {
    message.channel.sendMessage('Bot not editable.');
  }  
});

client.on('message', message => {
  if (message.content === prefix + 'botyaptır') {
    message.channel.send('Bot not editable.');
  }  
});

client.on('message', message => {
  if (message.content ==='sa') {
    message.channel.send('Bot not editable.');
  }  
});

client.on('message', message => {
  if (message.content === prefix + 'abone ol') {
    message.channel.send('Bot not editable.');
  }  
});

client.on('message', message => {
  if (message.content === prefix + 'yayın') {
    message.reply('Bot not editable.');
  }  
});

client.login('NDI5MzQ1NzA4ODUyNzcyODc0.Dd-Bqw.d_M0hk8k5ICGR4_PgqG38DNd798');
