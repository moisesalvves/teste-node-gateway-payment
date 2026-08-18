const express = require('express');
const app = express();

app.use(express.json());

app.post('/pokemons/buy', (req, res) => {
    const {pokemon, valor, cartao } = req.body;
    if (!pokemon || !valor || !cartão) {
        return res.status(400) .json({erro: "Faltam dados da compra"});
    }
    const repostaDeSucesso = {
        mensagem: "Pagamento aprovado com sucesso!",
        pokemonComprado: pokemon,
        ValorCobrado: valor,
        status: "pago"
    };

    return res.status(200).json(respostaDeSucesso);
});

app.listen(3000, () => {
    console.log('Servidor rodando! A loja de pokemon está aberta na porta 3000');
});