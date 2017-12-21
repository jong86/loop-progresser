import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './_styles_Menu';


export default class Menu extends Component {

  _onBackPressed = () => {
    console.log("pressed back button");
    this.props.backToWorldView();
  }

  render() {
    return (
      <View
        style={styles.main}
      >
        <TouchableWithoutFeedback onPress={this._onBackPressed}>
          <Ionicons name="ios-arrow-dropleft" size={32} color={"white"} />
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
