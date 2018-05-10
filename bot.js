const Discord = require('discord.js');
const client = new Discord.Client();



var prefix = 'a?'

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', message => {
  if (message.content === prefix + 'son video') {
    message.channel.send('https://www.youtube.com/watch?v=XAXvndBxQ7I');
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
    message.reply('https://www.youtube.com/watch?v=Tb2KzuNKuJY');
  }  
});

client.on('message', message => {
  if (message.content === 'toprak') {
    message.channel.sendMessage('Yetkisini isteyen bir masum ve benim Yapımcım');
  }  
});

client.on('message', message => {
  if (message.content === 'yiğit') {
    message.channel.sendMessage('Kaslı yakışıklı ama Topraka yetkisini vermeyen bir kurucu');
  }  
});

client.login('NDI5MzQ1NzA4ODUyNzcyODc0.DdRZFg.cEodkIrAuZ1P4-QtAlBo2jItQB0');
