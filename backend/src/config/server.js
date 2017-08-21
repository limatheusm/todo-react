const port = 3003

const bodyParser = require('body-parser')
const express = require('express') // servidor web, roda em cima do node
const allowCors = require('./cors')
const server = express()

// middleware - config requisicoes no padrao urlencoded
// extended - possibilita suporte para mais tipos de dados do que o padrao urlenconded
// todas as requisicoes irao passar por este middleware
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json()); // outro middleware
server.use(allowCors) // permitir requisicao de origens diferentes

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server