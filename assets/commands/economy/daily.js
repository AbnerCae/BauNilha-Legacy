module.exports = {
name: 'daily',
aliases: ['diario', 'diário']
code: `
$reply[$messageID;💵 Você recebeu $random[15;100] zap zap tá moeto.]
$setUserVar[money;$random[15;100]]
$coowdown[1d;Espere %time% para pegar mais daily.]
`
}
