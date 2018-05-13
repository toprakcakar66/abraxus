const Discord = require('discord.js');
const client = new Discord.Client();



var prefix = 'a?'

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', message => {
  if (message.content === prefix + 'son video') {
    message.channel.send('https://www.youtube.com/watch?v=UgFHmlCVVkM');
  }  
});

client.on('message', message => {
  if (message.content === 'baban') {
    message.channel.send('Benim babam Toprak');
  }  
});

  client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
  });

client.on('message', message => {
  if (message.content === prefix + 'abone ol') {
    message.channel.send('https://www.youtube.com/channel/UCCMnMpRipcSwt865ZEFDong');
  }  
});

client.on('message', message => {
  if (message.content === prefix + 'yayın') {
    message.reply('Yayında Değil');
  }  
});

client.login('NDI5MzQ1NzA4ODUyNzcyODc0.Ddg4zQ.EaCun0VMBv__bbIB3oH7CRnPbxA');
