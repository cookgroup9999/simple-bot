
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const fs = require("fs");
const client = new Discord.Client();
disbut(client)
const { prefix, Color, Token } = require("./config.js");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.color = Color;
client.prefix = prefix;


//** Packages **/

let db = require("quick.db")

//** Command help **/

client.fun = [];
client.information = [];
client.util = [];
client.moderation = [];

// ** Script ** //

client.on("ready", async () => {
console.log(`[-------------- The bot ${client.user.username} is ready! --------------]`)
await client.user.setActivity(`with ${client.users.cache.size} users | ${prefix}help`)
});



let modules = ["information", "fun", "moderation"];

modules.forEach(function(module) {
  fs.readdir(`./commands/${module}`, function(err, files) {
    if(err) return new Error("ERROR WHILE RUNNING A SCRIPT, PLEASE MAKE SURE THE FOLDER IS THERE!");
		console.log(`--------------${module}--------------`)
    files.forEach(function(file) {
      if (!file.endsWith(".js")) return;
      let command = require(`./commands/${module}/${file}`);
      if (command.name) client.commands.set(command.name, command);
			console.log(`${command.name} was loaded successfully`);
			if(module === 'information') {
				client.information.push(prefix + command.name)
			} else if(module === 'fun') {
				client.fun.push(prefix + command.name)
			} else if(module === 'moderation') {
				client.moderation.push(prefix + command.name)
			}
      if (command.aliases) {
        command.aliases.forEach(alias =>
          client.aliases.set(alias, command.name));
			}
      if(command.aliases.length === 0) command.aliases = null;
    });
  });
});

client.on("message", async message => {
  if(message.channel.type === "dm") return;
  if(message.author.bot) return;
  if(!message.content.toLowerCase().startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(" ");
  const cmd = args.shift().toLowerCase();

if(!cmd) return;

  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

if(!command) return;

let random = Math.floor(Math.random() * 2010)

const fire = () => {
if(random > 1990) {
	message.channel.send(`Like the bot ${message.author}? Join this server https://discord.gg/c5mME8YQJz`)
}
}

try {

command.run(client, message, args, Discord, Color)
fire()

} catch(err) { console.log(err) }
});

client.login(Token);
