import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AppWithState from './AppWithState'
import rootReducer from './redux/reducers'

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithState />
      </Provider>
    )
  }
}

Expo.registerRootComponent(App);
