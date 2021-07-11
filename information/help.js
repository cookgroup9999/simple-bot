const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  name: "help",
  aliases: [],
  description: "Makes an embed that shows you the command(s)",
  usage: "{prefix}help | {prefix}help <command:name>",
  run: async(client, message, args) => {
let commandName = args[0];

let command = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName));

let noName = new Discord.MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL({dynamic: true}))
.setDescription(`${client.user.username}'s commands! \n\n\`Information\`: \n${client.information.join(", ")} \n\n\`Fun:\` \n${client.fun.join(", ")} \n\n\`Moderation:\` \n${client.moderation.join(", ")}`)
.setColor(client.color)
.setFooter('Total commands: ' + client.commands.size)

if(!commandName) {
message.channel.send(noName)
} else if(commandName) {
	if(command) {
	let embed = new Discord.MessageEmbed()
	.setAuthor(client.user.tag, client.user.displayAvatarURL({dynamic: true}))
	.addField('Command name', command.name, true)
	.addField("Command description", command.description, true)
	.addField("Command usage", command.usage.replace("{prefix}", `${db.get('prefix') || client.prefix}`), true)
	.setColor(client.color)
	
	message.channel.send(embed)
	} else {
		message.channel.send(noName)
	}
}
	}
}
