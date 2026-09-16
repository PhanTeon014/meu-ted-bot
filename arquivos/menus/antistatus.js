const fs = require('fs');

async function execute(sock, info, args) {
    const chatId = info.key.remoteJid;
    const isGroup = chatId.endsWith('@g.us');

    // 1. Verifica se está em um grupo
    if (!isGroup) {
        return await sock.sendMessage(chatId, { text: "❌ Este comando só pode ser usado em grupos!" }, { quoted: info });
    }

    // 2. Verifica se o usuário enviou "ligar" ou "desligar"
    const acao = args[0]?.toLowerCase();
    if (acao !== 'ligar' && acao !== 'desligar') {
        return await sock.sendMessage(chatId, { text: "💡 Como usar: \n*#antistatus ligar* - Para ativar\n*#antistatus desligar* - Para desativar" }, { quoted: info });
    }

    let listaAnti = [];
    const dbPath = './database/antistatus.json';

    // 3. Lê o banco de dados atual
    try {
        if (fs.existsSync(dbPath)) {
            listaAnti = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        }
    } catch (e) {
        listaAnti = [];
    }

    // 4. Executa a ação escolhida
    if (acao === 'ligar') {
        if (listaAnti.includes(chatId)) {
            return await sock.sendMessage(chatId, { text: "✅ O Anti-Status já está ativado neste grupo!" }, { quoted: info });
        }
        listaAnti.push(chatId);
        fs.writeFileSync(dbPath, JSON.stringify(listaAnti, null, 2));
        await sock.sendMessage(chatId, { text: "🔒 Anti-Status ativado com sucesso! Mensagens de status enviadas aqui serão apagadas automaticamente." }, { quoted: info });
    } else if (acao === 'desligar') {
        if (!listaAnti.includes(chatId)) {
            return await sock.sendMessage(chatId, { text: "❌ O Anti-Status já está desativado neste grupo!" }, { quoted: info });
        }
        listaAnti = listaAnti.filter(id => id !== chatId);
        fs.writeFileSync(dbPath, JSON.stringify(listaAnti, null, 2));
        await sock.sendMessage(chatId, { text: "🔓 Anti-Status desativado neste grupo." }, { quoted: info });
    }
}

module.exports = { execute };

