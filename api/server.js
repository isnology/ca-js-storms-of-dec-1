const express = requires('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())

// routes


server.listen(7000, (error) => {
  consol.log('Server started at http://localhost:7000')
})