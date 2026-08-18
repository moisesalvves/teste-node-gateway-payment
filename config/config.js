require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    pagarmeApiKey: process.env.PAGARME_API_KEY || 'chave_de_teste_123'
};