anaconst Discord = require('discord.js');
const client = new Discord.Client();



var prefix = 'a?'

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', message => {
  if (message.content === prefix + 'son video') {
    message.channel.sendMessage('https://www.youtube.com/watch?v=11y2ZtLu-ds');
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
    message.reply('Yayında değil.Lütfen daha sonra yaz kardeşim.');
  }  
});

client.login('NDI5MzQ1NzA4ODUyNzcyODc0.DdpSvA.r0Vx-wlKGwpeMfYrw5LexL7vcE0');
