const Discord = require('discord.js');
const Bot = require('./Bot.js');
/** 
* @param {Bot} bot
* @param {Discord.Message | Discord.Interaction} msg
* @param {String[]} args
*/
function RunFunction(bot, msg, args) {}
module.exports = class Command {
  /** 
  * @typedef {{name: string, description: string, run: RunFunction}} CommandOptions
  * @param {CommandOptions} options
  */
  constructor(options) {
    this.name = options.name;
    this.description = options.description;
    this.run = options.run;
  }
}