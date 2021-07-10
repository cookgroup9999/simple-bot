const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  name: "unlock",
  aliases: [],
  description: "Unlocks the channel that you mention",
  usage: "{prefix}unlock <channel>",
  run: async(client, message, args) => {
		try {
if(message.member.hasPermission("MANAGE_CHANNELS")) {
	let channel = message.mentions.channels.first() || message.channel;

	await channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: null }, `Unlocked by ${message.author.tag}`)
	await channel.send(`This channel was unlocked by ${message.author.tag}.`)
	await message.channel.send(`Unlocked ${channel}!`)
} else {
	message.reply("You dont have enough permission to use this command.")
}
		} catch(err) { message.reply(`ERROR: ${err}`) }
	}
};
