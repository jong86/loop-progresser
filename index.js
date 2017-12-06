
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './App.js'

let store = createStore(main)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)