const express = require('express')
const app = express()

app.get('/', async (req, res) => {
	res.status(200).send("Working fine.")
	console.log({
		express: {
			status: "connected",
		}
	})
})

app.listen(8080) // This is a suggested PORT


require('dotenv').config()
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const cluster2 = new Discord.Client()
const { prefix, Color } = require("./config.js");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.color = Color;
let db = require("quick.db")

//** Command help **/

client.fun = [];
client.information = [];

// ** script ** //

client.on("ready", async () => {
console.log(`[-------------- The bot ${client.user.username} is ready! --------------]`)
});

let modules = ["information", "fun"];

modules.forEach(function(module) {
  fs.readdir(`./commands/${module}`, function(err, files) {
    if(err) return new Error("Missing folder. please check the modules list");
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
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(" ");
  const cmd = args.shift().toLowerCase();

if(!cmd) return;

  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

if(!command) return;

try {
command.run(client, message, args, Discord, Color)
} catch(err) {
console.log(err)
}

});

client.login(process.env.token);
