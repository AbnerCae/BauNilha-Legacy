module.exports = {
name: 'inventory',
aliases: ['inventario', 'inventário', 'i'],
code: `
$reply[$messageID;
$if[$getUserVar[money]>=1]
{field:💧 Mana:$getUserVar[money]:yes}
$else
{field:💁 Não achei nada no seu Inventário: Obtenha mana agora! usando *$getServerVar[prefix]daily*!}
$endIf
$color[PURPLE]]`
}
