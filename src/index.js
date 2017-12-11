import React, { Component } from 'react'
import { Provider } from 'react-redux'

import App from './App'
import rootReducer from './redux/reducers'

import { createStore } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';
const store = createStore(rootReducer, devToolsEnhancer({ realtime: true }));

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

Expo.registerRootComponent(Root);
