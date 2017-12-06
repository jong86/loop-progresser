import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducers from './reducers'
import App from './App.js'

let store = createStore(appReducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
)