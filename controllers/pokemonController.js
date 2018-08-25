const pokeModel = require('../models/pokemonModel')

module.exports = {
  getDetails: (req, res) => {
    const pokemon = pokeModel.getOne(req.params.id)
    if (pokemon) return res.status(200).json(pokemon)
    return res.status(404).json('Specified pokemon does not exist in local db')
  },
  getAll: (req, res) => {
    const pokemon = pokeModel.getAll()
    return res.status(200).json(pokemon)
  }
}