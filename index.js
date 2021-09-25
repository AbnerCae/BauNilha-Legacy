const aoijs = require('aoi.js');
const bot = new aoijs.Bot({
prefix: ['$getServerVar[prefix]'],
token: process.env.TOKEN
});
bot.variables({
prefix: 'b/'
});
bot.onMessage();
bot.loadCommands('./assets/commands/');

//dev

bot.command({
name:"buttoncollector",
code:`
   $buttonCollector[$get[id];$authorID;1m;click;awaitclick;Only $userName can use this interaction,,64]
   $let[id;$apiMessage[$channelID;hi;;{actionRow:click me,2,1,click};;yes]]
     `
 })
bot.awaitedCommand({
name:"awaitclick",
code:`
   $interactionReply[Hello;;;64]
     `
 })
