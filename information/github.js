const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  name: "github",
  aliases: [],
  description: "Gives you the free source github that this bot is using!",
  usage: "{prefix}github",
	cooldown: 5,
  run: async(client, message, args) => {
let embed = new Discord.MessageEmbed()
.setAuthor("simple-bot")
.setDescription("This bot is using a free open source from [DevFurry-1064/simple-bot](https://github.com/DevFurry-1064/simple-bot)")
.setColor(client.color)

message.channel.send(embed)
	}
};
