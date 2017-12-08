import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducers from './src/reducers'
import App from './src/App.js'

let store = createStore(appReducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
)