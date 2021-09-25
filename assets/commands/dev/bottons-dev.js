module.exports = [{
name: 'bc',
code: `
$buttonCollector[$get[id];$authorID;1m;click;awaitclick;Only $userName can use this interaction,,64]
$let[id;$apiMessage[$channelID;hi;;{actionRow:click me,2,1,click};;yes]]
`
}, {
type: 'awaitedCommand',
name: 'awaitclick',
code: `
$interactionReply[Hello;;;64]
`
}];
