const Discord = require('discord.js')
module.exports = {
  name: "8ball",
  aliases: [],
  description: "Ask the 8ball Anything!",
  usage: "{prefix}8ball <question>",
  run: async(client, message, args) => {
		let question = args.slice(0).join(" ")
let questions = [
	"Not sure.",
	"No",
	"Never!",
	"Of Course!",
	"I am busy fixing your room mirror, ask me later!",
	"Yes!",
	"100% yes.",
	"Ask me later",
	"idk mate",
	"might be right might not"
]

let Result = questions[Math.floor(Math.random() * questions.length)];

if(!question) return message.channel.send("Please make sure you are asking something to the 8ball!");

message.reply(`The 8ball said ${Result}`)
	}
}
