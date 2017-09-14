import { combineReducers } from 'redux'

import todoReducer from '../todo/todoReducer'

// sempre que mudar o estado, ira retornar o objeto evoluido
const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer