const config = require ('../../config/config');
const log = require('../logger');

const processarPagamento = async (cartao, valor) => {
    log.info({ valor, cartaoFinal: cartao.slice(-4) }, 'Enviando pagamento para Pagar.me...');

    return {
        status: 'pago',
        transacao_id: 'pgme_' + Math.floor(Math.random () * 1000)
    };
};

module.exports = { processarPagamento};