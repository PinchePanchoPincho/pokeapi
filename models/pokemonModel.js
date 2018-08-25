const fs = require('fs')
const promisify = require('util').promisify
const read = promisify(fs.readFile)

const URL = '192.168.1.228:3000'

const pokemon = JSON.parse(fs.readFileSync(__dirname + '/pokemon.json'))
  .map(el => ({...el, img: `http://${URL}/images/${el.id}.png`, gif: `http://${URL}/gifs/${el.id}.gif`}))

const pokeDetails = JSON.parse(fs.readFileSync(__dirname + '/pokeDetails.json'))
  .reduce((acc, el, i) => {
    if (el.pkdx_id <= 151) {
      return [
        ...acc,
        {
          id: el.pkdx_id,
          name: el.name,
          description: el.description,
          types: el.types,
          sprite: pokemon[i].img,
          gif: pokemon[i].gif,
        }
      ]
    } else return acc
  }, [])

module.exports = {
  getAll: () => pokemon,
  getOne: id => pokeDetails[id - 1]
}