const Discord = require('discord.js')
module.exports = {
  name: "kick",
  aliases: [],
  description: "Kicks the user that you mention",
  usage: "{prefix}kick <user>",
  run: async(client, message, args) => {
if(message.member.hasPermission("KICK_MEMBERS")) {
let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let reason = args.slice(1).join(" ");
let me = message.guild.me;
let mem = message.member

if(!user) return message.reply('Please mention a user to kick');
if(!me.hasPermission("KICK_MEMBERS")) return message.reply("I don't have enough permission to ban that member. Try checking my permissions.");
if(user.roles.highest.positions >= mem.roles.highest.position) return message.reply(`You are unable to kick ${user} because the user that you are trying to kick have higher or the same roles than you.`);
if(user.roles.highest.position >= me.roles.highest.position) return message.reply(`I am unable to kick ${user} because my roles are the same or lower than ${user.user.username}'s roles!`);
if(message.guild.owner.user.id === user.user.id) return message.reply(`You can't kick the owner.`);

try {
	user.kick(`${mem.user.tag}: ${reason || 'No reason specified'}`)
	message.channel.send(`Kicked ${user.user.tag}.`)
} catch(err) {
	message.reply('There was an error on kicking the user.')
}
} else {
	message.reply('You dont have enough permission to use this command.')
}
	}
}
