import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './_styles_AudioTrack';

import { connect } from 'react-redux'

import { toggleArmTrack } from '../../../redux/actions';

const ArmButton = (props) => {
  const { dispatch, isArmed, audioTrackId, multiTrackId } = props
  return (
    <TouchableHighlight
      style={[styles.armButton, { backgroundColor: isArmed ? "tomato" : "grey" }]}
      onPress={() => {
        dispatch(toggleArmTrack(audioTrackId, multiTrackId))
      }}
    >
      <Text>
        ARM
      </Text>
    </TouchableHighlight>
  )
}

const mapStateToProps = (state, props) => {
  return { isArmed: state.multiTracks[props.multiTrackId].audioTracks[props.audioTrackId].isArmed };
};

export default connect(mapStateToProps)(ArmButton)
