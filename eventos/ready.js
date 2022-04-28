const Event = require('../base/Event.js');
module.exports = new Event('ready', (bot) => {
  console.log(`${bot.user.tag} ha iniciado.`)
});