import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AppWithState from './AppWithState'
import multiTracks from './redux/reducers'

const store = createStore(multiTracks)

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
