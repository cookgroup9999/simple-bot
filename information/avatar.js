module.exports = {
  name: "avatar",
  aliases: ["av", "pfp", "icon"],
  description: "Avatar",
  usage: "Get user avatar",
  run: async(client, message, args, Color, Discord) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    
    let embed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic: true})
    .setImage(member.user.displayAvatarURL({dynamic: true})
    .setDescription(`[Click here for avatar page](${member.user.displayAvatarURL({dynamic: true})}`)
     .setColor(Color)
              
      message.channel.send(embed)
  }
}
