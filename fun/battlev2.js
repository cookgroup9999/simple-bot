const Discord = require('discord.js')
module.exports = {
  name: "battlev2",
  aliases: [],
  description: "Battle's the user who you mentioned, but in a version 2 style!",
  usage: "{prefix}battlev2 <mention>",
  run: async(client, message, args) => {
const { MessageButton, MessageActionRow } = require('discord-buttons');

try {
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let myHP = 100
let enemyHP = 100

if(!member) return message.reply("Please specify a user to battle");

let sword = new MessageButton()
.setLabel("Sword")
.setStyle("blurple")
.setID("1")

let hammer = new MessageButton()
.setLabel("Hammer")
.setStyle("red")
.setID("2")

let football = new MessageButton()
.setLabel("Football")
.setStyle("gray")
.setID("3")

let ensword = new MessageButton()
.setLabel("Sword")
.setStyle("blurple")
.setID("1")

let enhammer = new MessageButton()
.setLabel("Hammer")
.setStyle("red")
.setID("2")

let enfootball = new MessageButton()
.setLabel("Football")
.setStyle("gray")
.setID("3")

let buttons = new MessageActionRow()
.addComponents(sword, hammer, football)

let buttons2 = new MessageActionRow()
.addComponents(ensword, enhammer, enfootball)

message.channel.send(`There are going to be 3 messages after this, 2 of them are going to be enemy's weapons and your weapons. The other one is the HP monitor`)

const mi = await message.channel.send(`${message.author.username}'s HP: ${myHP} \n${member.user.username}'s HP: ${enemyHP}`)
const me = await message.channel.send(`${message.author} react to the buttons below to damage the enemy!`, buttons)
const ene = await message.channel.send(`${member} react to the buttons below to damage the enemy!`, buttons2)

// ** Weapon Damage Value(s) ** //

let swordMax = 35
let hammerMax = 40
let footballMax = 20
let timeLength = 3 * (60 * 1000)

// ** Filters ** //

const myFilter = (button) => button.clicker.user.id === message.author.id && button.id === "1";
const myFilter2 = (button) => button.clicker.user.id === message.author.id && button.id === "2";
const myFilter3 = (button) => button.clicker.user.id === message.author.id && button.id === "3";

const enFilter = (button) => button.clicker.user.id === member.user.id && button.id === "1";
const enFilter2 = (button) => button.clicker.user.id === member.user.id && button.id === "2";
const enFilter3 = (button) => button.clicker.user.id === member.user.id && button.id === "3";

// ** Button Collector(S) ** //

const myCol = me.createButtonCollector(myFilter, {time: timeLength })
const myCol2 = me.createButtonCollector(myFilter2, {time: timeLength })
const myCol3 = me.createButtonCollector(myFilter3, {time: timeLength })

const enCol = ene.createButtonCollector(enFilter, {time: timeLength })
const enCol2 = ene.createButtonCollector(enFilter2, {time: timeLength })
const enCol3 = ene.createButtonCollector(enFilter3, {time: timeLength })

const stopAll = async () => {
	await myCol.stop()
	await myCol2.stop()
	await myCol3.stop()
	await enCol.stop()
	await enCol2.stop()
	await enCol3.stop()
	await me.delete()
	await ene.delete()
	await mi.edit(`HP MONITOR: __MATCH ENDED MOMENTS AGO__`)
}

myCol.on('collect', async button => {
let randomDamage = Math.floor(Math.random() * swordMax)
enemyHP = enemyHP - randomDamage
if(0 >= enemyHP) {
	message.channel.send(`${message.author} won the battle with ${myHP} hp left!`)
	button.reply.defer()
	return stopAll()
}
	mi.edit(`${message.author.username}'s HP: ${myHP} \n${member.user.username}'s HP: ${enemyHP}`)
	button.reply.defer("Damaged the enemy!")
})

myCol2.on('collect', async button => {
let randomDamage = Math.floor(Math.random() * hammerMax)
enemyHP = enemyHP - randomDamage
if(0 >= enemyHP) {
	message.channel.send(`${message.author} won the battle with ${myHP} hp left!`)
	button.reply.defer()
	return stopAll()
}
	mi.edit(`${message.author.username}'s HP: ${myHP} \n${member.user.username}'s HP: ${enemyHP}`)
	button.reply.defer("Damaged the enemy!")
})

myCol3.on('collect', async button => {
let randomDamage = Math.floor(Math.random() * footballMax)
enemyHP = enemyHP - randomDamage
if(0 >= enemyHP) {
	message.channel.send(`${message.author} won the battle with ${myHP} hp left!`)
	button.reply.defer()
	return stopAll()
}
	mi.edit(`${message.author.username}'s HP: ${myHP} \n${member.user.username}'s HP: ${enemyHP}`)
	button.reply.defer("Damaged the enemy!")
})

enCol.on('collect', async button => {
let randomDamage = Math.floor(Math.random() * swordMax)
myHP = myHP - randomDamage
if(0 >= enemyHP) {
	message.channel.send(`${member} won the battle with ${enemyHP} hp left!`)
	button.reply.defer()
	return stopAll()
}
	mi.edit(`${message.author.username}'s HP: ${myHP} \n${member.user.username}'s HP: ${enemyHP}`)
	button.reply.defer("Damaged the enemy!")
})
enCol2.on('collect', async button => {
let randomDamage = Math.floor(Math.random() * hammerMax)
myHP = myHP - randomDamage
if(0 >= enemyHP) {
	message.channel.send(`${member} won the battle with ${enemyHP} hp left!`)
	button.reply.defer()
	return stopAll()
}
	mi.edit(`${message.author.username}'s HP: ${myHP} \n${member.user.username}'s HP: ${enemyHP}`)
	button.reply.defer("Damaged the enemy!")
})
enCol3.on('collect', async button => {
let randomDamage = Math.floor(Math.random() * footballMax)
myHP = myHP - randomDamage
if(0 >= enemyHP) {
	message.channel.send(`${member} won the battle with ${enemyHP} hp left!`)
	button.reply.defer()
	return stopAll()
}
	mi.edit(`${message.author.username}'s HP: ${myHP} \n${member.user.username}'s HP: ${enemyHP}`)
	button.reply.defer("Damaged the enemy!")
})





} catch(err) { message.channel.send(`${err}`) }
	}
};
