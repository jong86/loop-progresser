import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './_styles_Menu';


export default class Menu extends Component {
  onBackPressed = () => {
    return;
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.main}
        onPress={this.onBackPressed}
      >
        <Ionicons name="ios-arrow-up" size={32} color={"white"} />
      </TouchableHighlight>
    )
  }
}
