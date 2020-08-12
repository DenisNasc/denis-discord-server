const path = require('path')
require('dotenv').config({path: path.join(process.cwd(), '.env')})

const Discord = require('discord.js')

console.log(process.env)

const bot = new Discord.Client()

bot.login(process.env.DISCORD_BOT_TOKEN)
