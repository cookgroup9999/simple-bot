const Discord = require('discord.js')
module.exports = {
  name: "help",
  aliases: [],
  description: "Makes an embed that shows you the command(s)",
  usage: "{prefix}help | {prefix}help <command:name>",
  run: async(client, message, args) => {
let commandName = args[0];

let noName = new Discord.MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL({dynamic: true}))
.setDescription(`${client.user.username}'s commands! \n\n\`Information\`: \n${client.information.join(", ")} \n\n\`Fun:\` \n${client.fun.join(", ")} `)

message.channel.send(noName)
	}
}
