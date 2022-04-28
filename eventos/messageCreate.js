const Event = require('../base/Event.js');
const validations = require('../base/utils/validations.json');
const Discord = require('discord.js');

module.exports = new Event('messageCreate', async (bot, msg) => {
  let prefix = 'x!';
  const args = msg.content.substring(prefix.length).split(` `);
  const cmd = bot.commands.find(x => x.name === args[0].toLowerCase());

  if(!msg.guild || msg.author.bot || !msg.content.startsWith(prefix) || !args[0]) return;
  
  if(!cmd) return msg.reply(`Este comando no existe`);
  else {
    try {
      cmd.run(bot, msg, args);
    } catch (error) {
      console.log(error);
    }
  }
});