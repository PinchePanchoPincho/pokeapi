const express = require('express')
const router = express.Router()

const pokeController = require('./controllers/pokemonController')

router
  .get('/pokemons', pokeController.getAll)
  .get('/pokemons/:id', pokeController.getDetails)

module.exports = router