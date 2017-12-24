import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './_styles_GlobalMenu';

export default class Button extends Component {
  handleOnPress() {
    console.log("you touched me")
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.handleOnPress}
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
