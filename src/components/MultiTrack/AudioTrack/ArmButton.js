import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './_styles_AudioTrack';

import { connect } from 'react-redux'

import { toggleArmTrack } from '../../../redux/actions';

const ArmButton = (props) => {
  const { dispatch, isArmed, audioTrackIndex, audioTrackId, multiTrackId } = props
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        dispatch(toggleArmTrack(audioTrackIndex, audioTrackId, multiTrackId))
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

const mapStateToProps = (state, props) => {
  console.log('entire state', state);
  console.log('state for armButton', state);
  return { isArmed: state.multiTracks[props.multiTrackId].audioTracks[props.audioTrackIndex].isArmed };
};

export default connect(mapStateToProps)(ArmButton)
