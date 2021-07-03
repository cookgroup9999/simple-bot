module.exports = {
  name: "ping",
  aliases: [],
  description: "Gets the bot's ping",
  usage: "{prefix}ping",
  run: async(client, message, args, Discord) => {
    
    message.channel.send(`Pong! ${client.ws.ping}ms`)
    
  }
}
