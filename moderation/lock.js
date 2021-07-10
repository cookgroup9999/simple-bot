const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  name: "lock",
  aliases: [],
  description: "Locks the channel that you mention",
  usage: "{prefix}lock <channel>",
  run: async(client, message, args) => {
		try {
if(message.member.hasPermission("MANAGE_CHANNELS")) {
	let channel = message.mentions.channels.first() || message.channel;

	await channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: false }, `Locked by ${message.author.tag}`)
	await channel.send(`This channel is locked by ${message.author.tag}.`)
	await message.channel.send(`Locked ${channel}!`)
} else {
	message.reply("You dont have enough permission to use this command.")
}
		} catch(err) { message.reply(`ERROR: ${err}`) }
	}
};
