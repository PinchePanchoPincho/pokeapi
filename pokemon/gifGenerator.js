const pokemonGif = require('pokemon-gif');
const fetch = require('node-fetch');
const write = require('util').promisify(require('fs').writeFile)

for (let i = 1; i <=151; i++) {
  gif = pokemonGif(i)
  fetch(gif)
    .then(res => res.buffer())
    .then(res => write(`./gifs/${i}.gif`, res))
}