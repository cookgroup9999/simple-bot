const Discord = require('discord.js')
module.exports = {
  name: "ping",
  aliases: [],
  description: "Gets the bot's ping",
  usage: "{prefix}ping",
  run: async(client, message, args) => {
    
   let m = await message.channel.send("Please wait, we are doing stuff to get the ping...");

	 let embed = new Discord.MessageEmbed()
	 .setDescription(`\`\`\`Bot ping: ${client.ws.ping}ms \nResponse time: ${new Date() - message.createdTimestamp}ms \nMessage Delay: ${new Date() - m.createdTimestamp}ms\`\`\``)
	 .setColor(client.color)
	 .setAuthor(`${client.user.username}'s latency information`)

	 m.edit("", embed)
    
  }
}
