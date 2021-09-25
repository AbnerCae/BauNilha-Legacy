const aoijs = require('aoi.js');
const bot = new aoijs.Bot({
prefix: ['$getServerVar[prefix]'],
token: process.env.TOKEN
});
bot.onMessage()
