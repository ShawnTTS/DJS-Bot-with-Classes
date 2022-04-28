let Bot = require('./base/Bot.js'),
bot = new Bot(),
process = require('process');
process.on('uncaughtException', function(err) {
  console.log(err);
});
bot.start(process.env.token);