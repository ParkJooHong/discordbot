//git add *
//git commit -m "커밋할 메시지"
//git push 
// git push -f origin master
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

  if(message.content == '안녕') {
    return message.reply('안녕하세요! 머물래에요:3');
  }

  if(message.content == '!help') {
    let img = 'https://file3.instiz.net/data/file3/2018/05/05/1/c/d/1cdd07939cc168ca86a510622006d904.gif';
    let embed = new Discord.RichEmbed()
      .setAuthor('뭐물래', img, 'https://file3.instiz.net/data/file3/2018/05/05/1/c/d/1cdd07939cc168ca86a510622006d904.gif')
      .setThumbnail(img)
      .addBlankField()
      .addField('!한식', '!토마토\n!천호', true)
      .addField('!분식', '!아맛나', true)
      .addField('!중식', '!황금룡\n!용빈각', true)
      .addField('!양식', '!오꾸닭\n!달리는꼬꼬', true)
      .addField('!일식', '!오이시스시\n!우마미', true)
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
      .setAuthor('한식 메뉴', img, 'http://localhost:3000/la1')
      .setThumbnail(img)
      //.addBlankField()
      .setImage('http://www.tresbe.com/files/attach/images/1149/167/001/d81622cc55cc4f59e23e9510864ad7d8.jpg')
      .addField('제육볶음', '5,000원', true)
      .addField('닭갈비', '4,500원', true)
      .addField('라면', '3,000원', true)
      .setTimestamp()
      .setFooter('오늘 오면 꽁짜', img)
    message.channel.send(embed)
  }
  
  if(message.content == '!황금룡') {
    let img = 'https://www.kbmaeil.com/news/photo/201905/814422_841631_2731.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('황금룡')
      .setURL('http://localhost:3000/ch1')
      .setAuthor('중식 메뉴', img, 'http://localhost:3000/ch1')
      .setThumbnail(img)
      //.addBlankField()
      .setImage('https://homecuisine.co.kr/files/attach/images/142/737/002/969e9f7dc60d42510c5c0353a58ba701.JPG')
      .addField('짜장면', '4,000원', true)
      .addField('짬뽕', '4,500원', true)
      .addField('짜+짬+탕', '1,5000원', true)
      .setTimestamp()
      .setFooter('맛남', img)
    message.channel.send(embed)
  }
});


client.login(token);