const Discord = require('discord.js')
module.exports = {
  name: "unban",
  aliases: [],
  description: "Unbans the user that you mention",
  usage: "{prefix}unban <user>",
  run: async(client, message, args) => {
if(message.member.hasPermission("BAN_MEMBERS")) {

if(!args[0]) return message.reply('Please specify the user id to unban them.');
let a = args[0].replace("<@", "")
let user = args[0]
if(isNaN(user)) return message.reply('It must be an ID')
	if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("I don't have enough permission to unban any users. Try checking my permissions.");

	    let FetchBan = await message.guild.fetchBans();

    let Member;
    Member = FetchBan.find(b => b.user.username.toLowerCase() === user.toLocaleLowerCase()) ||FetchBan.get(user) || FetchBan.find(bm => bm.user.tag.toLowerCase() === user.toLocaleLowerCase());

		if(!Member) return message.reply('The user is not banned.')

	message.guild.members.unban(Member.user.id);
	message.channel.send(`Unbanned ${Member.user.tag}.`)
} else {
	message.reply("You dont have enough permission to use this command.")
}
	}
}
