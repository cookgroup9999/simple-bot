const Discord = require('discord.js')
const { Color } = require("../../config.js")

module.exports = {
  name: "avatar",
  aliases: ["av", "pfp", "icon"],
  description: "Avatar",
  usage: "Get user avatar",
  run: async(client, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    
    let embed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic: true}))
    .setImage(member.user.displayAvatarURL({size: 1024}))
    .setDescription(`[Click here for an animated version of the Avatar!](${member.user.displayAvatarURL({dynamic: true})})`)
    .setColor(client.color)
              
      message.channel.send(embed)
  }
}
