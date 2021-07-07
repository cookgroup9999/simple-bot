const Discord = require('discord.js')

module.exports = {
  name: "uptime",
  aliases: [],
  description: "Gets the bot's uptime",
  usage: "{prefix}uptime",
  run: async(client, message, args) => {
const now = new Date(client.uptime);
let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()

message.channel.send(`I have been up for \`${hours}h ${minutes}m ${seconds}s\`!`)
	}
}
