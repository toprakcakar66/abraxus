const Discord = require('discord.js');
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

client.on('message', message => {
  if (message.content === prefix + 'yardım') {
    message.channel.send('```Selam ben ABRAXUS buda komutlarım.\n a?son video :Abraxus un son videosunu atar. \n a?abone ol :Abraxus Youtube kanalını atar.\n a?yayın :Abraxus yayında ise yayın linkini atar\n Sende suncuya özel bot istiyorsan bana ulaş\n Toprak T#9528```');
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
    message.reply('Yayında değil.Lütfen daha sonra tekrar yaz.');
  }  
});

client.login('NDI5MzQ1NzA4ODUyNzcyODc0.Dd-Bqw.d_M0hk8k5ICGR4_PgqG38DNd798');
