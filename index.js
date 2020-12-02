//git add *
//git commit -m "커밋할 메시지"
//git push 
// 차례로 한 후 heroku 에서 
//deploy 에서 deploy branch


//https://discord.com/developers/applications/781454845882007552/bot
const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '!help를 쳐보세요.' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('pong');
  }

  if(message.content == '!help') {
    let img = 'https://file3.instiz.net/data/file3/2018/05/05/1/c/d/1cdd07939cc168ca86a510622006d904.gif';
    let embed = new Discord.RichEmbed()
      .setAuthor('뭐물래', img, 'https://file3.instiz.net/data/file3/2018/05/05/1/c/d/1cdd07939cc168ca86a510622006d904.gif')
      .setThumbnail(img)
      .addBlankField()
      .addField('명령어', '\n!한식\n!분식\n!일식\n!양식\n!중식\n!천호 ')
      .addBlankField()
      .setTimestamp()
      .setFooter('명령어 모음', img)
      

    message.channel.send(embed)
  }
  

  if(message.content == '!천호') {
    let img = 'https://lh3.googleusercontent.com/proxy/_vnQDg9FoFsMoCUXl974zdRQXczi6uOVlcS4hrXhW6vrk2Oojqf1k-WpZhmwlcQ9NkFBu-EdlabOhT1U7789wk7uYbed6p87qsbTmFDUhSdbJKMTRB6XucNMq00Be2LO4ljr42DPpuRla9C4n51uG7FbMJjxxiPoop7x';
    let embed = new Discord.RichEmbed()
      .setTitle('천호')
      .setURL('http://localhost:3000/la1')
      .setAuthor('앙 기모띠', img, 'http://localhost:3000/la1')
      .setThumbnail(img)
      .addBlankField()
      .addField('크롤링', '데이따')
      .addField('Inline field title', '크', true)
      .addField('Inline field title', '롤', true)
      .addField('Inline field title', '링', true)
      .addField('Inline field title', '크\n크\n크\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('앙 기모링~', img)
      

    message.channel.send(embed)
  }
  
  

});


client.login(token);