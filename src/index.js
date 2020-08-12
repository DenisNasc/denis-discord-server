const path = require('path')
require('dotenv').config({path: path.join(process.cwd(), '.env')})

const Discord = require('discord.js')
const bot = new Discord.Client()

const splitPrefixAndCommand = require('Services/splitPrefixAndCommand')

const reactWithEmoji = require('Services/handleMessages/reactWithEmoji')
const createEmbedMessage = require('Services/handleMessages/createEmbedMessage')

const botPrefixCommands = process.env.BOT_PREFIX.toLowerCase()

const handleMessages = async message => {
  const [prefix, command] = splitPrefixAndCommand(message.content)

  if (message.author.bot || prefix.toLowerCase() !== botPrefixCommands) return

  switch (command) {
    case '': {
      const embedData = {
        title: 'Lista de comandos válidos',
        description: 'Para executar qualquer um desses comandos basta escrever "~D comando".',
        fields: [
          {
            name: 'web-frontend',
            value: 'Veja qual é a minha stack para aplicações Web Frontend',
            inline: false
          },
          {name: 'comando 2', value: 'comando para ...', inline: false},
          {name: 'comando 3', value: 'comando para ...', inline: false}
        ]
      }
      const embedMessage = createEmbedMessage(embedData)

      await message.reply(embedMessage)
      await message.react('✅')
      break
    }
    case 'web-frontend': {
      await message.reply(
        'a minha stack básica para desenvolvimento Web Fronted é: React, Redux, React Router, Material UI e Styled Components.'
      )
      await reactWithEmoji(message, '✅')

      break
    }
    default: {
      await message.react('🚫')
      await message.reply(
        `Comando inválido. Digite "${process.env.BOT_PREFIX}" para ver os comando válidos.`
      )
    }
  }
}

bot.on('message', handleMessages)

bot.login(process.env.DISCORD_BOT_TOKEN)
