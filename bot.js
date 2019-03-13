const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const myid = ['552647908478943243'];
const prefix = ['-'];

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});



client.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**- ابجد هوز حطي كلمن سعفس كرشط برشط هرشطط **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply('#credit @Omar Alzhrani#7191 1000 ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client2.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@552647908478943243>')
    }
});

client2.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`** - آبجد هوز حطي كلمن صعفز كرشط برشط هرشط **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client2.on("message",async msg => {
    if(msg.content.startsWith(prefix + "say")){
        let args = '';
        let fltr = m => m.author.id === msg.author.id
        await msg.reply("**اكتب شي لجعلي اكتب شيئ الان**").then(p =>{
            p.delete(2222)
        })
        msg.channel.awaitMessages(fltr, {
time: 60000,
max: 1
        })
        .then(sy => {
            args = sy.first().content
            sy.first().delete();
            msg.delete(2222);
            msg.channel.send(args)
        })
    }
})
client.on("message",async msg => {
    if(msg.content.startsWith(prefix + "say")){
        let args = '';
        let fltr = m => m.author.id === msg.author.id
        await msg.reply("**اكتب شي لجعلي اكتب شيئ الان**").then(p =>{
            p.delete(2222)
        })
        msg.channel.awaitMessages(fltr, {
time: 60000,
max: 1
        })
        .then(sy => {
            args = sy.first().content
            sy.first().delete();
            msg.delete(2222);
            msg.channel.send(args)
        })
    }
})

client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
