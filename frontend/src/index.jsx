// Entry point
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//Middlewares
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

// DevTools for Chrome
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
                 && window.__REDUX_DEVTOOLS_EXTENSION__()

// Todos os dados da aplicacao. 
// Controlados pelo redux
//const store = createStore(reducers, devTools)
// promise eh o middleware
const store = applyMiddleware(multi, promise, thunk)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))