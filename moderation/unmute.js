const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  name: "unmute",
  aliases: [],
  description: "Unmutes the member you mention",
  usage: "{prefix}unmute <user>",
  run: async(client, message, args) => {
if(message.member.hasPermission("MANAGE_ROLES")) {
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member) return message.reply("Please specify the user that you want to unmute!");
let role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');
if(!role) return message.reply("Theres no muted role so how come is the user muted?");
if(role.position >= message.guild.me.roles.highest.position) return message.reply("I am unable to unmute the user because the role is higher than my highest role.")
if(member.roles.cache.has(role)) return message.reply("The user isn't muted.")

member.roles.remove(role)
message.channel.send(`Unmuted ${member.user.tag}`)
    }
	}
}
