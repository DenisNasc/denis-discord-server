const MessageEmbed = require('discord.js').MessageEmbed

const handleError = require('Services/handleError')

const createEmbedMessage = embedData => {
  try {
    const messageEmbed = new MessageEmbed(embedData)
    messageEmbed.setColor('RANDOM')

    return messageEmbed
  } catch (error) {
    handleError(error.message)
  }
}

module.exports = createEmbedMessage
