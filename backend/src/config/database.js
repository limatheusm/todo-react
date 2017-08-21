// fazer mapeamento dos obj js para os documentos que vao pro mongo
// serve para fazer a conexao com o mongo e mandando as querys
const mongoose = require('mongoose')
mongoose.Promise = global.Promise // utilizar a api do node
module.exports = mongoose.connect('mongodb://localhost/todo')