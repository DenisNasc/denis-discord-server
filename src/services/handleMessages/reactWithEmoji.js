const handleError = require('Services/handleError.js')

const reactWithEmoji = async (message, emoji) => {
  try {
    await message.react(emoji)
  } catch (error) {
    handleError(error.message)
  }
}

module.exports = reactWithEmoji
