const express = require ('express');
const router = express.Router();

const pokemonController = require ('../app/pokemons/pokemonController');

router.post('/pokemons/buy', pokemonController.comprar);

module.exports = router;