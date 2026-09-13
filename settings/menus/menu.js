const config = require("../config.json");

function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
    const time = now.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" });
    return { date, time };
}

function generateMenu() {
    const { date, time } = getCurrentDateTime();
    return `┏╾═╼❋╾═╼⟡╾═╼❋╾═╼┓
┣┄┄┅┄┅┄┅┄┅┄┅┄┄┫
┃ 卐 553. Kenzo 卐 
┃ 𖦹 ${date} 
┃ 𖦹 ${time} 
┃ 𖦹 Dono: ${config.NickDono} 
┣┄┄┅┄┅┄┅┄┅┄┅┄┄┫
┃ ᛋᛋ 553.Kenzo's Code ᛋᛋ 
┣┄┄┄┄┄┄┄┄┄┄┄┄┄┫
┃ ⌁ ${config.prefix}menuadm
┃ ⌁ ${config.prefix}brincadeiras
┃ ⌁ ${config.prefix}menulogos
┣┄┄┄┄┄┄┄┄┄┄┄┄┄┫
┃ ꖦ 553. Kenzo's System ꖦ 
┣┄┄┄┄┄┄┄┄┄┄┄┄┄┫
┃ ⌁ ${config.prefix}ping
┃ ⌁ ${config.prefix}status
┃ ⌁ ${config.prefix}stats
┃ ⌁ ${config.prefix}roubar
┃ ⌁ ${config.prefix}revelar
┃ ⌁ ${config.prefix}sticker
┃ ⌁ ${config.prefix}pack
┃ ⌁ ${config.prefix}legenda
┃ ⌁ ${config.prefix}toimg
┃ ⌁ ${config.prefix}jeff
┃ ⌁ ${config.prefix}faber
┃ ⌁ ${config.prefix}norian
┃ ⌁ ${config.prefix}fdc
┃ ⌁ ${config.prefix}wf
┃ ⌁ ${config.prefix}nano
┃ ⌁ ${config.prefix}nano2
┣┄┄┄┄┄┄┄┄┄┄┄┄┄┫
┃ 卐 553. Kenzo's Convert 卐 
┣┄┄┄┄┄┄┄┄┄┄┄┄┄┫
┃ ⌁ ${config.prefix}totext
┃ ⌁ ${config.prefix}ptvmsg
┃ ⌁ ${config.prefix}attp
┃ ⌁ ${config.prefix}ttp
┃ ⌁ ${config.prefix}brat
┃ ⌁ ${config.prefix}gerarlink
┃ ⌁ ${config.prefix}rvisu
┣┄┄┄┄┄┄┄┄┄┄┄┄┄┫
┃ ᛋᛋ 553. Kenzo's Download ᛋᛋ 
┣┄┄┄┄┄┄┄┄┄┄┄┄┄┫
┃ ⌁ ${config.prefix}tomp3
┃ ⌁ ${config.prefix}8d
┃ ⌁ ${config.prefix}shazam
┃ ⌁ ${config.prefix}play
┃ ⌁ ${config.prefix}play2
┃ ⌁ ${config.prefix}play3
┃ ⌁ ${config.prefix}playvid2
┃ ⌁ ${config.prefix}ytp
┃ ⌁ ${config.prefix}sc
┃ ⌁ ${config.prefix}ttk
┃ ⌁ ${config.prefix}ttk2
┃ ⌁ ${config.prefix}tiktok
┃ ⌁ ${config.prefix}tiktok2
┃ ⌁ ${config.prefix}kwai
┃ ⌁ ${config.prefix}instamp3
┃ ⌁ ${config.prefix}instamp4
┃ ⌁ ${config.prefix}myinstants
┃ ⌁ ${config.prefix}Pintemp3
┃ ⌁ ${config.prefix}Pintemp4
┃ ⌁ ${config.prefix}Pinterest
┃ ⌁ ${config.prefix}Pinterest2
┃ ⌁ ${config.prefix}gif
┃ ⌁ ${config.prefix}robloxcodes
┣┄┄┄┄┄┄┄┄┄┄┄┄┄┫
┃ ❖ 卐 553. Kenzo's Profile 卐  
┣┄┄┄┄┄┄┄┄┄┄┄┄┄┫
┃ ⌁ ${config.prefix}perfil
┃ ⌁ ${config.prefix}perfilff
┣┄┄┄┄┄┄┄┄┄┄┄┄┄┫
┃ ❖ ᛋᛋ Kenzo's Voice ᛋᛋ 
┣┄┄┄┄┄┄┄┄┄┄┄┄┄┫
┃ ⌁ ${config.prefix}alteradores
┣┄┄┅┄┅┄┅┄┅┄┅┄┄┫
┗╾═╼❋╾═╼⟡╾═╼❋╾═╼┛`;
}

module.exports = generateMenu;
