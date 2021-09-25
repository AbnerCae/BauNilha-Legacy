const aoijs = require('aoi.js');
const bot = new aoijs.Bot({
autoupdate: true
prefix: ['$getServerVar[prefix]'],
token: process.env.TOKEN,
intents: 'all'
});
bot.variables({
prefix: 'b/'
});
bot.onMessage();
bot.loadCommands('./assets/commands/');
