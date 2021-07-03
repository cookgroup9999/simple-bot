const Discord = require('discord.js')

//** client ** //

const client = new Discord.Client()
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const { prefix, Color } = require('./config.js')

//** Packages variables **//

const fs = require('fs')
const db = require('quick.db')

//** Command loading **//

let modules = ["information", "moderation"];

modules.forEach(function(module) {
  fs.readdir(`./commands/${module}`, function(err, files) {
    if (err)
      return new Error(
        "Missing folder. please check the modules list"
      );
    files.forEach(function(file) {
      if (!file.endsWith(".js")) return;
      let command = require(`./commands/${module}/${file}`);
      if (command.name) client.commands.set(command.name, command);
      if (command.aliases) {
        command.aliases.forEach(alias =>
          client.aliases.set(alias, command.name)
        );
      }
      if (command.aliases.length === 0) command.aliases = null;
    });
  });
});

//** Script **//

// --[ Client Ready ]-- //

client.on('ready', async () => {

console.log(`${client.user.username} / Me is ready on ${client.guilds.cache.size} servers!`)

})

// --[ Client Message Handle ]-- //

client.on('message', async message => {
if(message.author.bot || message.channel.type === 'dm') return; // This returns if its a bot or in a dm channel

const args = message.content.slice(prefix.length).trim().split(" ")
let cmd = args.shift().toLowerCase()

if(cmd) {
    let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  
  if(command) {
    command.run(client, message, args)
  }
}
})
