const Event = require('../base/Event.js');
module.exports = new Event('interactionCreate', async (bot, int) => {
  const slash = bot.slash.get(int.commandName);
  if(!int.isCommand() || !slash) return;
  else {
    await int.deferReply({ ephemeral: true }).catch(() => {});
  }
  try {
    await slash.run(bot, int);
  } catch (err) {
    console.log(err);
  }
});