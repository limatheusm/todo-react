const INITIAL_STATE = { description: '', list: [] }

// Reducer recebe o estado atual e uma action(todoAction)
// Sempre que uma action for executada, os reducers 
// de sua app sao chamados e vc diz se quer mudar ou manter o estado
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}