import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './_styles_AudioTrack';

import { connect } from 'react-redux'

import { armTrackToggle } from '../../../redux/actions';

const ArmButton = (props) => {
  console.log("ArmButton props:", props);
  const { dispatch, isArmed } = props
  return (
    <TouchableHighlight
      style={[styles.armButton, { backgroundColor: isArmed ? "tomato" : "grey" }]}
      onPress={() => {
        dispatch(armTrackToggle())
      }}
    >
      <Text>
        ARM
      </Text>
    </TouchableHighlight>
  )
}

const mapStateToProps = (state) => {
  return { isArmed: state.isArmed };
};

export default connect(mapStateToProps)(ArmButton)


