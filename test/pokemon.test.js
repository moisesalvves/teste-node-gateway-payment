const request = require('supertest');
const { expect } = require('chai');
const app = require('../server');

describe('Testes da Rota de Compra de Pokemons', () => {
    it('Deve retornar erro 400 se faltar dados da compra', async () => {
        const requisicaoIncompleta = {
            pokemon: "Pikachu",
            cartao: "1111222233334444"
            //sem valor
        };

        const resposta = await request(app)
            .post('/pokemons/buy')
            .send(requisicaoIncompleta);
        expect(resposta.status).to.equal(400);
        expect(resposta.body).to.have.property('erro');
        expect(resposta.body.erro).to.equal("Faltam dados da compra!");
    });

    it('Deve retonar sucesso (200) e no mock da Pagar.me com dados corretos', async () => {
        const requisicaoCorreta = {
        pokemon: "Charizard",
        valor: 5000,
        cartao: "1234567890123456"
        };

        const resposta = await request(app)
      .post('/pokemons/buy')
      .send(requisicaoCorreta);

    expect(resposta.status).to.equal(200);
    expect(resposta.body).to.have.property('mensagem', "Pokemon comprado com sucesso");
    expect(resposta.body.resultado).to.have.property('status', 'pago');
    expect(resposta.body.resultado).to.have.property('transacao_id');
    
    });

})