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
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('pong');
  }

  if(message.content == '천호') {
    let img = 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fmblogthumb4.phinf.naver.net%2F20141201_243%2Fmunsai_1417364357691yMUSp_JPEG%2FIMG_0160.JPG%3Ftype%3Dw2&imgrefurl=http%3A%2F%2Fm.blog.naver.com%2Fmunsai%2F220196793415&tbnid=6ur0MYYoBuifGM&vet=12ahUKEwjwuJan-K7tAhURhJQKHbdwC64QMygDegUIARCkAQ..i&docid=lMFJy8LRw9jdAM&w=740&h=552&q=%EB%8F%99%EC%84%9C%EB%8C%80%20%EC%B2%9C%ED%98%B8&ved=2ahUKEwjwuJan-K7tAhURhJQKHbdwC64QMygDegUIARCkAQ';
    let embed = new Discord.RichEmbed()
      .setTitle('타이틀')
      .setURL('http://www.naver.com')
      .setAuthor('나긋해', img, 'http://www.naver.com')
      .setThumbnail(img)
      .addBlankField()
      .addField('Inline field title', 'Some value here')
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here1\nSome value here2\nSome value here3\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('나긋해가 만듬', img)
      

    message.channel.send(embed)
  } 
});


client.login(token);