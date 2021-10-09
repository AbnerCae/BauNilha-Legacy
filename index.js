const aoijs = require('aoi.js');
const bot = new aoijs.Bot({
	autoUpdate: false,
	databasePath: './assets/database/',
	prefix: ['$getServerVar[prefix]'],
	token: process.env.TOKEN
});
bot.variables({
	prefix: 'b/',
	money: '0'
});
bot.onMessage({
	guildOnly: true
});
bot.loadCommands('./assets/commands/');

const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);