const Discord = require('discord.js')
const { Color } = require("../../config.js")

module.exports = {
  name: "userinfo",
  aliases: ["ui", "userinformation"],
  description: "Gets the user that you pinged informations",
  usage: "{prefix}userinfo <user>",
  run: async(client, message, args) => {

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

let userID = member.user.id;
let userTag = member.user.tag;
let userUsername = member.user.username;
let userCreatedAt = `${member.user.createdAt.toDateString()} (${((new Date() - member.user.createdAt) / 86400000).toFixed(0)} days since account was created)`;
let display = member.displayName;
let roles = [];
let highestrole = member.roles.highest;
let admin = member.hasPermission("ADMINISTRATOR")

let time = new Date().getTime()
let timestamp = time = time + 60000





member.roles.cache.forEach(async i => {

		await roles.push(`${i}`)
	
})

let embed = new Discord.MessageEmbed()
.setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic: true}))
.setDescription(`\n**Main Information** \n\n┎Username: ${userUsername} \n┟Tag: ${userTag} \n┕Created at: ${userCreatedAt} \n\n**Member's Server information** \n\n┎Displayname: ${display} \n┟Admin?: ${admin} \n┟Highest role: ${highestrole} \n┕Roles: ${roles.join(", ")}`)
.setColor(client.color)
.setTimestamp(timestamp)

message.channel.send(embed)


	}
}
