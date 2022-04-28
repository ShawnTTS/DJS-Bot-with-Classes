const Discord = require('discord.js');
const Command = require('./Command.js');
const Event = require('./Event.js');
const fs = require('fs');
const validations = require('./utils/validations.json');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const cmds = [];

module.exports = class bot extends Discord.Client {
  constructor() {
    super({ intents: 32767 });
    /** 
    * @type {Discord.Collection<string, Command>}
    */
    this.commands = new Discord.Collection();
    this.slash = new Discord.Collection();
    this.events = new Discord.Collection();
    this.fns = new (require('./utils/functions.js'))(this);
  }
  start(token) {
    if(typeof token !== 'string') throw new TypeError(`El token debe ser un string.`);
    fs.readdirSync('./cmd').filter(f => f.endsWith('.js')).forEach(cmd => {
      /** 
      * @type {Command}
      */
      const comando = require(`../cmd/${cmd}`);
      console.log(`Comando cargado: ${cmd}`);
      this.commands.set(comando.name, comando);
    });
    fs.readdirSync('./eventos').filter(e => e.endsWith('.js')).forEach(evnt => {
      /** 
      * @type {Event}
      */
      const evento = require(`../eventos/${evnt}`);
      console.log(`Evento cargado: ${evnt}`);
      if(!evento.event || evento.event == ``) throw new Error(`${evnt} - No has escrito el nombre del evento.`);
      if(!validations.event.includes(evento.event)) throw new TypeError(`${evnt} - El nombre del evento es inválido.`);
      this.on(evento.event, evento.run.bind(null, this));
    });
    fs.readdirSync('./slashcmds').filter(f => f.endsWith('.js')).forEach(slashcmd => {
      const slash = require(`../slashcmds/${slashcmd}`);
      this.slash.set(slash.data.name, slash);
      cmds.push(slash.data.toJSON());
    });
    const rest = new REST({ version: '9' }).setToken(process.env.token);
    Slash();
    async function Slash() {
      try {
        await rest.put(Routes.applicationGuildCommands(process.env.botID, process.env.testServer), { body: cmds });
        console.log('Slash Commands Cargados.');
      } catch (error) {
        console.log(error);
      }
    }
    this.login(token);
  }
}