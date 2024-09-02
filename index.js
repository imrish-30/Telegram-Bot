// let binarysearch=`
// `;
const { Telegraf } = require('telegraf');
const bot=new Telegraf('7310424310:AAEYlvrc-X12CUQoJcVgkofcMzljnHwWY1c');
bot.start((ctx) => ctx.reply('Welcome to the bot created by Aditya'))
//bot.command('binarysearchjs',(ctx)=>ctx.reply(binarysearch));

 bot.launch();