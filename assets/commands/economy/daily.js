module.exports = {
name: 'daily',
aliases: ['diaria', 'diária'],
code: `
$reply[$messageID;💧 Você recebeu $random[15;70] Mana.$if[$getUserVar[money]>=1]\n🎒 Você tem no total de $sum[$getUserVar[money];$random[15;70]]!] $elseIf$endIf]
$setUserVar[money;$random[15;70]]
$cooldown[1d;Espere %time% para pegar mais daily.]
`
}
