const Discord = require('discord.js')
module.exports = {
  name: "permissions",
  aliases: ["perms"],
  description: "Gets the user's staff permissions",
  usage: "{prefix}permissions <mention:user>",
  run: async(client, message, args) => {
		let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
let per = ['KICK_MEMBERS','BAN_MEMBERS','ADMINISTRATOR','MANAGE_CHANNELS','MANAGE_GUILD','VIEW_AUDIT_LOG','MANAGE_MESSAGES','MENTION_EVERYONE','MANAGE_NICKNAMES','MANAGE_ROLES','MANAGE_WEBHOOKS','MANAGE_EMOJIS']

let tr = [];
let cur = 1
per.forEach(i => {
	if(member.hasPermission(i)) {
		tr.push(`${cur}. ${i}`)
		cur = cur + 1
	}
})

message.channel.send(`${member.user.username} staff permissions are: \`\`\`${tr.join("\n")}\`\`\``)
	}
}
