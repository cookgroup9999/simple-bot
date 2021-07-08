const Discord = require('discord.js')
module.exports = {
  name: "battle",
  aliases: [],
  description: "Battle's the user who you mentioned!",
  usage: "{prefix}battle <mention>",
  run: async(client, message, args) => {
	
	try {
		let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
		

		let myHP = 100
		let enemyHP = 100

		if(!member) return message.reply("Please specify a user to battle with.");
		if(member.user.bot) return message.reply("You can't battle a bot!");
		if(message.author.id === member.user.id) return message.reply("alright, you won the battle.");




message.channel.send(`__New Battle__ \n\nMatch: ${message.author} vs ${member}`)
const battle = await message.channel.send(`Mass React the reactions below so you can damage the enemy! The battle time is only 45 Seconds! \n\n${message.author} you are blue \n${member} you are red! \n\n\n${message.author.username}'s HP: ${myHP} \n${member.user.username}'s HP: ${enemyHP}`)

await battle.react('🔵')
await battle.react('🔴')

const bluefilter = (reaction, user) => {
	return reaction.emoji.name === '🔵' && user.id === message.author.id;
};
const redfilter = (reaction, user) => {
	return reaction.emoji.name === '🔴' && user.id === member.user.id;
};

const blue = battle.createReactionCollector(bluefilter, { time: 45000 });
const red = battle.createReactionCollector(redfilter, { time: 45000 });

blue.on('collect', async reaction => {
	let random = Math.floor(Math.random() * 25)

	enemyHP = enemyHP - random
	reaction.users.remove(message.author.id)

		if(0 >= enemyHP) {
		message.channel.send(`${message.author} won the battle, they were left with ${myHP} health!`)
		battle.edit("[ __Match Ended__ ]")
		blue.stop()
		return red.stop()
	}

battle.edit(`Mass React the reactions below so you can damage the enemy! The battle time is only 45 Seconds! \n\n${message.author} you are blue \n${member} you are red! \n\n\n${message.author.username}'s HP: ${myHP} \n${member.user.username}'s HP: ${enemyHP}`)
});

red.on('collect', async reaction => {
	let random = Math.floor(Math.random() * 25)

	myHP = myHP - random
		reaction.users.remove(member.user.id)

		if(0 >= myHP) {
		message.channel.send(`${message.author} won the battle, they were left with ${myHP} health!`)
		battle.edit("[ __Match Ended__ ]")
		blue.stop()
		return red.stop()
	}

battle.edit(`Mass React the reactions below so you can damage the enemy! The battle time is only 45 Seconds! \n\n${message.author} you are blue \n${member} you are red! \n\n\n${message.author.username}'s HP: ${myHP} \n${member.user.username}'s HP: ${enemyHP}`)
});

blue.on('end', collected => {
	if(0 >= myHP && 0 >= enemyHP) {
	message.channel.send('It looks like nobody won!')
	battle.edit(`[ __Match Ended__ ]`)
	}
});

	} catch(err) {
		message.channel.send("\`\`\`js\n${err}\`\`\`\`")
	}
	}
}
