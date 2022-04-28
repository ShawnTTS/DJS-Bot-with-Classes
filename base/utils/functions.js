module.exports = class fns {
  constructor(bot) {
    this.bot = bot;
  }
  selectColor(color, lean) {
    if (!color || typeof color !== 'string') throw Error('Necesitas seleccionar un color y que sea un String');
    let c = color.toLowerCase(),
      colors = require('./colors.js');
    if (!(c in colors)) throw TypeError('Especifica un color válido');
    let a = colors[c];
    return !lean ? `#${a[Math.floor(Math.random() * a.length)]}` : `${a[Math.floor(Math.random() * a.length)]}`;
  }
}