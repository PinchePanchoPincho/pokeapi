const express = require('express')
const app = express()
const cors = require('cors')

const router = require('./router')

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static('pokemon'))
  .use(router)
  .listen(3000, () => console.log('app listening in port 3000'))