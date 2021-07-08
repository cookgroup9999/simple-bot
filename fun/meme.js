const got = require('got')
const Discord = require('discord.js')
module.exports = {
  name: "meme",
  aliases: [],
  description: "Gets a random Dank meme",
  usage: "{prefix}meme",
  run: async(client, message, args) => {

const wait = await message.channel.send(`${message.author}, please wait we are fetching a meme from reddit...`)

got(`https://reddit.com/r/memes/random.json`).then(async response => {

const embed = new Discord.MessageEmbed()

        let content = JSON.parse(response.body);

//if(!message.channel.nsfw) return message.reply("We investigated that 25% of the memes are NSFW contents, so we made this command NSFW only!");

if(!content[0]) return message.reply("I am unable to find any memes!");

        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
				let rredirect = content[0].data.children[0].data.subreddit_name_prefixed;
				let ratio = content[0].data.children[0].data.upvote_ratio;
				let awards = content[0].data.children[0].data.total_awards_received;

				embed.setTitle(memeTitle)
				embed.setURL(memeUrl)
				embed.setImage(memeImage)
				embed.setFooter(`👍 ${memeUpvotes.toLocaleString()} | 👎 ${memeDownvotes.toLocaleString()}`)
				embed.setColor(client.color)

				wait.edit("", embed)



})
	}
}
