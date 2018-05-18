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
  
   if (msg.content.toLowerCase () === prefix + 'sunucubilgi') {
   if (message.channel.type !== 'dm') {
      const ozelmesajkontrol = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`${message.guild.name} suncusunun bilgilerini özelden attım`);
      message.channel.sendEmbed(ozelmesajkontrol) }
    const pingozel = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField('Sunucu Adı', message.guild.name, true)
      .addField('Sunucu ID', message.guild.id, true)
      .addField('Sunucu Sahibi', message.guild.owner, true)
      .addField('Toplam Üye Sayısı', message.guild.memberCount, true)
      .addField('AFK Süresi', message.guild.afkTimeout, true)
      .addField('Oluşturulma Tarihi' + message.guild.createdAt)
      return message.author.sendEmbed(pingozel)
    }
});

client.on('message', message => {
  if (message.content === prefix + 'botyaptır') {
    message.channel.send('Sunucuna özel botlar yapmak istiyorsan bana ulaş Toprak T#9528.Uygun fiyata anlaşılır yada ücretsiz olur.');
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
