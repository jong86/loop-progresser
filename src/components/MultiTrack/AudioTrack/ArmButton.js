import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './_styles_AudioTrack';

// import { connect } from 'react-redux'

// import { toggleArmTrack } from '../../../redux/actions';

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
          style={[styles.armButton, { backgroundColor: isArmed ? "tomato" : "grey" }]}
        >
          <Text>
            ARM
          </Text>
        </View>

      </TouchableWithoutFeedback>
    )
  }
}

// const mapStateToProps = (state, props) => {
//   console.log('entire state', state);
//   console.log('state for armButton', state);
//   return { isArmed: state.multiTracks[props.multiTrackId].audioTracks[props.audioTrackIndex].isArmed };
// };

// export default connect(mapStateToProps)(ArmButton)
