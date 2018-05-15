const Discord = require('discord.js');
const client = new Discord.Client();



var prefix = 'a?'

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', message => {
  if (message.content === prefix + 'son video') {
    message.channel.send('https://www.youtube.com/watch?v=iDyOpm0qJl4');
  }  
});

client.on('message', message => {
  if (message.content === 'baban') {
    message.channel.send('Benim babam Toprak');
  }  
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'toprak') {
    message.channel.send('@ABRAXUS  yüzünden ağlıyor');
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
    message.reply('https://www.youtube.com/watch?v=0oDKB3-rwPU');
  }  
});

client.login('NDI5MzQ1NzA4ODUyNzcyODc0.DdpSvA.r0Vx-wlKGwpeMfYrw5LexL7vcE0');
