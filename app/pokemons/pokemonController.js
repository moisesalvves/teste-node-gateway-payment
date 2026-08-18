const pagarme = require ('../../common/pagarme');

const pokemonController = () => {
    const comprar = async (req, res) => {
        const { pokemon, valor, cartao } = req.body;

        if (!pokemon || !valor || !cartao) {
        return res.status(400).json({ erro: "Faltam dados da compra!" });
    }

    try {
        const resultado = await pagarme.processarPagamento(cartao, valor);

        return res.status(200).json({
            mensagem: "Pokemon comprado com sucesso",
            pokemon,
            resultado
        });
        
    } catch (erro){
        return res.status(500).json({ erro: "Falha ao processar no pagar.me"});
    }
};

    return {
        comprar
    };
};

module.exports = pokemonController();