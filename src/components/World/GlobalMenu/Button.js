import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './_styles_GlobalMenu';

export default class Button extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.props.buttonFunction}
      >
        <View
          style={[styles.button, this.props.style]}
        >
          {this.props.icon}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
