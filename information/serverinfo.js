const Discord = require('discord.js')
const { Color } = require("../../config.js")

module.exports = {
  name: "serverinfo",
  aliases: ["serveri", "si", "serverinformation"],
  description: "Gets the server's information",
  usage: "{prefix}serverinformation",
  run: async(client, message, args) => {
  
  let Guild = message.guild;
  
  //** Guild Information **//
  
  let iconURL = Guild.iconURL({ dynamic: true})
  let name = Guild.name
  let id = Guild.id
  let owner = Guild.owner.user.tag
	let channels = Guild.channels.cache.size
  let roles = Guild.roles.cache.size
  let emojis = Guild.emojis.cache.size
  let totalmember = Guild.memberCount
  let humans = Guild.members.cache.filter(i => !i.user.bot).size
	let bots = Guild.members.cache.filter(i => i.user.bot).size
	let boostLevel = Guild.premiumTier
  let boosts = Guild.premiumSubscriptionCount
  
  //** Embed builder ** //
  
  const send = (a) => {

let embed = new Discord.MessageEmbed()
.setAuthor(name, iconURL)
.addField('Name', name, true)
.addField('ID', id, true)
.addField('Owner', owner, true)
.addField('Roles', roles, true)
.addField('Emojis', emojis, true)
.addField('Channels', channels, true)
.addField('Total Members', totalmember, true)
.addField('Humans', humans, true)
.addField('Bots', bots, true)
.setThumbnail(iconURL)
.setFooter(`Boost Level: ${boostLevel} | Boosts: ${boosts}`)
.setColor(client.color)

a.send(embed)
}

send(message.channel)
  
     }
  }
