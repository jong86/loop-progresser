import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './_styles_AudioTrack';


export default class ArmButton extends Component {
  constructor(props) {
    super(props)
    this.props.toggleArmTrack(this.props.audioTrackIndex, this.props.audioTrackId, this.props.multiTrackId)
  }

  render() {
    const { audioTrackIndex, audioTrackId, multiTrackId, toggleArmTrack, isArmed } = this.props
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          toggleArmTrack(audioTrackIndex, audioTrackId, multiTrackId)
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
