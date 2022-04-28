const Command = require('../base/Command.js');
const Discord = require('discord.js');
module.exports = new Command({
  name: 'ping',
  description: 'Holaaaaaaa',
  async run(bot, msg, args) {
    msg.reply({ embeds: [new Discord.MessageEmbed().setDescription(`${bot.ws.ping}ms`).setColor(bot.fns.selectColor('blue'))] });
  }
});