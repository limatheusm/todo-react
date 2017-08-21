const Todo = require('./todo') // retorna o mongoose.Schema

// post - insercao, put - alteracao
Todo.methods(['get', 'post', 'put', 'delete']) // Aplica os metodos

// new - retornar valor atualizado
// runValidators - validar informacoes
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo