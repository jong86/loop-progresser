import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './_styles_Menu';


export default class Menu extends Component {
  _onBackPressed = () => {
    console.log("pressed back button", this.props);
    this.props.setZoomScale();
    this.props.scrollToPosition(null, true);
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.main}
        onPress={this._onBackPressed}
      >
        <Ionicons name="ios-arrow-up" size={32} color={"white"} />
      </TouchableHighlight>
    )
  }
}
