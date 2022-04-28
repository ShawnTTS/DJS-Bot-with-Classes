const Command = require('../base/Command.js');
const Discord = require('discord.js');
module.exports = new Command({
  name: 'say',
  description: 'Holaaaaaaa',
  async run(bot, msg, args) {
    if(!args[1]) return;
    msg.delete({ timeout: 500 });
    msg.channel.send(`${args.slice(1).join(' ')}`);
  }
});