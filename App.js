import React from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store/store.js';

import FourTrack from './components/FourTrack/FourTrack';
import World from './components/World/World';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden />
        <Provider store={store}>
          <FourTrack />
          {/* <World /> */}
        </Provider>
      </View>
    );
  }
}
