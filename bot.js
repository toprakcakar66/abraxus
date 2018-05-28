const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = 'a?'

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'YOUI'); // Burada girişte verilcek rolu seçelim.
  member.addRole(joinRole); // seçtiğimiz rolu verelim.

  const channel = member.guild.channels.find('name', 'sohbet'); // burda ise kanalı belirleyelim hangi kanala atsın ben mod-log dedim.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya katıldı!')
  .setTimestamp()
  .setImage(`https://resmim.net/preview/ZbAtdu.jpg`)
  channel.sendEmbed(embed); // belirlediğimiz kanala mesaj gönderelim.
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'temizle 100') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("100 adet mesaj silindi!");
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'temizle 10') {
    msg.channel.bulkDelete(10);
    msg.channel.sendMessage("10 adet mesaj silindi!");
  }
});  

client.on('message', message => {
  if (message.content === prefix + 'son video') {
    message.channel.sendMessage('https://www.youtube.com/watch?v=3HDxxnuSB-8');
  }  
});

client.on('message', message => {
  if (message.content.toLowerCase() ==='sa') {
    message.channel.send('**Aleyküm Selam**');
  }  
});

client.on('message', message => {
  if (message.content === prefix + 'abone ol') {
    message.channel.send('https://www.youtube.com/channel/UCCMnMpRipcSwt865ZEFDong');
  }  
});

client.on('message', message => {
  if (message.content === prefix + 'yayın') {
    message.reply('Şu anda yayında değil.Daha sonra tekrar yaz.');
  }  
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(ayarlar.prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'topla') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'çıkar') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p-c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'çarp') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p*c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'böl') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p/c);
    message.channel.sendMessage(`${total}`);
  }
});

client.login('NDI5MzQ1NzA4ODUyNzcyODc0.Dd-Bqw.d_M0hk8k5ICGR4_PgqG38DNd798');
