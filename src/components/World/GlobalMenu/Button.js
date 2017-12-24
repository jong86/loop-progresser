import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './_styles_GlobalMenu';

export default class Button extends Component {
  render() {
    const backgroundColor = this.props.isEnabled ? '#666' : 'silver';

    return (
      <TouchableWithoutFeedback
        onPress={this.props.buttonFunction}
      >
        <View
          style={[styles.button, this.props.style, {backgroundColor: backgroundColor}]}
        >
          {this.props.icon}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
