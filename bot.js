const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = 'a?'

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'BOT'); // Burada girişte verilcek rolu seçelim.
  member.addRole(joinRole); // seçtiğimiz rolu verelim.

  const channel = member.guild.channels.find('name', 'nomesajo'); // burda ise kanalı belirleyelim hangi kanala atsın ben mod-log dedim.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya katıldı!')
  .setTimestamp()
  channel.sendEmbed(embed); // belirlediğimiz kanala mesaj gönderelim.
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
  if (message.content.toLowerCase() ==='sa') {
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
