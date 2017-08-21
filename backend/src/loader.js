const server = require('./config/server')
require('./config/database') // config db e starta conexao
require('./config/routes')(server) // chama funcao exportada pelo metodo exports