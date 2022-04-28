const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('ping')
  .setDescription('El ping actual del bot.'),
  async run(bot, int) {
    int.editReply(`${bot.ws.ping}ms`)
  }
}