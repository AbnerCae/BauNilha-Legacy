module.exports = {
name: 'daily',
aliases: ['diaria', 'diária'],
code: `
$reply[$messageID;💵 Você recebeu $random[15;100] zap zap tá moeto.]
$setUserVar[money;$random[15;100]]
$cooldown[1d;Espere %time% para pegar mais daily.]
`
}
