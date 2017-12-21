import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './_styles_AudioTrack';


export default class ArmButton extends Component {
  constructor(props) {
    super(props)
    this.props.toggleArmTrack()
  }

  render() {
    const { toggleArmTrack, isArmed } = this.props
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          toggleArmTrack()
        }}
      >

        <View
          style={[styles.armButton, { backgroundColor: isArmed ? "tomato" : "#555555" }]}
        >
          <Text>
            ARM
          </Text>
        </View>

      </TouchableWithoutFeedback>
    )
  }
}
