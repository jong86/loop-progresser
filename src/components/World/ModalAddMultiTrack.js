import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from './_styles_World';

export default class Button extends Component {
  render() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 8,
          height: 48,
          width: '85%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'silver',
          padding: 4,
        }}
      >
        <Text>Place new multi-track on the map</Text>
      </View>
    )
  }
}
