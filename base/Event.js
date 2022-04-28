/** @format */
const Discord = require('discord.js');
const Bot = require('./Bot.js');
/** 
* @template {keyof Discord.ClientEvents} K
* @param {Client} bot
* @param {...Discord.ClientEvents[K]} eventArgs
*/
function runFunction(bot, ...eventArgs) {}

/** 
* @template {keyof Discord.ClientEvents} K
*/
module.exports = class Event {
  /** 
  * @param {K} event
  * @param {runFunction} runFunction
  */
  constructor(event, runFunction) {
    this.event = event;
    this.run = runFunction;
  }
}