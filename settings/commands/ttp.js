const axios = require('axios');

module.exports = {
    name: 'ttp',
    category: 'utilidade',
    description: 'Transforma texto em figurinha',
    async execute(client, message, args) {
        // Pega todo o texto enviado após o comando
        const texto = args.join(' ');

        // Se o usuário não digitou nada, avisa
        if (!texto) {
            return message.reply('⚠️ | Por favor, digite um texto! Exemplo: .ttp Seu Nome');
        }

        try {
            // Avisa que está processando
            await message.reply('⏳ | Confeccionando sua figurinha...');

            // API pública estável para gerar a imagem do texto
            const apiUrl = `https://lolhuman.xyz{encodeURIComponent(texto)}`;

            // Envia a imagem diretamente como figurinha (sticker)
            await client.sendMessage(message.from, { 
                sticker: { url: apiUrl } 
            }, { quoted: message });

        } catch (error) {
            console.error(error);
            message.reply('❌ | Ocorreu um erro ao confeccionar a figurinha. Tente novamente mais tarde.');
        }
    }
};

