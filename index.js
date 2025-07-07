// let binarysearch=`
// `;
const { Telegraf } = require('telegraf');
 const bot=new Telegraf('7310424310:AAEYlvrc-X12CUQoJcVgkofcMzljnHwWY1c');
bot.start((ctx) => ctx.reply('Welcome to the bot created by Aditya'))
//bot.command('binarysearchjs',(ctx)=>ctx.reply(binarysearch));
bot.command('about', (ctx) => {
  ctx.reply('🤖 This is a demo bot made using Telegraf. You can extend it however you like!');
});

 bot.launch();









// index.js
// const fs = require('fs');
// const csv = require('csv-parser');
// const { Telegraf } = require('telegraf');
// const bot=new Telegraf('7310424310:AAEYlvrc-X12CUQoJcVgkofcMzljnHwWY1c');
// //const bot = new Telegraf('YOUR_BOT_TOKEN');

// // Hospital search function
// function getHospitalsByPincode(pincode, callback) {
//   const results = [];
//   fs.createReadStream('hospital_directory.csv')
//     .pipe(csv())
//     .on('data', (row) => {
//       if (row['Pincode'] && row['Pincode'].trim() === pincode) {
//         results.push({
//           name: row['Facility Name'],
//           type: row['Ownership'],
//           state: row['State Name'],
//           district: row['District Name']
//         });
//       }
//     })
//     .on('end', () => callback(results));
// }

// // Bot logic


// bot.on('text', (ctx) => {
//   const input = ctx.message.text.trim();

//   // Check if it's a valid 6-digit pincode
//   if (/^\d{6}$/.test(input)) {
//     getHospitalsByPincode(input, (hospitals) => {
//       if (hospitals.length === 0) {
//         ctx.reply(' No hospitals found for this PIN code.');
//       } else {
//         let reply = `🏥 Hospitals in PIN ${input}:\n\n`;
//         hospitals.slice(0, 10).forEach(h => {
//           reply += `• ${h.name} (${h.type}) - ${h.district}, ${h.state}\n`;
//         });
//         ctx.reply(reply);
//       }
//     });
//   } else {
//     ctx.reply('Please enter a valid 6-digit PIN code.');
//   }
// });


// bot.launch();
