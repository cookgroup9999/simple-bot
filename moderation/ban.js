const Discord = require('discord.js')
module.exports = {
  name: "ban",
  aliases: [],
  description: "Bans the user that you mention",
  usage: "{prefix}ban <user> <reason>",
  run: async(client, message, args) => {
if(message.member.hasPermission("BAN_MEMBERS")) {
let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let reason = args.slice(1).join(" ");
let me = message.guild.me;
let mem = message.member

if(!user) return message.reply('Please mention a user to ban');
if(!me.hasPermission("BAN_MEMBERS")) return message.reply("I don't have enough permission to ban that member. Try checking my permissions.");
if(user.roles.highest.positions >= mem.roles.highest.position) return message.reply(`You are unable to ban ${user} because the user that you are trying to ban have higher or the same roles than you.`);
if(user.roles.highest.position >= me.roles.highest.position) return message.reply(`I am unable to ban ${user} because my roles are the same or lower than ${user.user.username}'s roles!`);
if(message.guild.owner.user.id === user.user.id) return message.reply(`You can't ban the owner.`);

try {
	user.ban({
		reason: `${mem.user.tag}: ${reason || 'No reason specified'}`,
	})
	message.channel.send(`Banned ${user.user.tag}.`)
} catch(err) {
	message.reply('There was an error on Ban the user.')
}
} else {
	message.reply('You dont have enough permission to use this command.')
}
	}
}
