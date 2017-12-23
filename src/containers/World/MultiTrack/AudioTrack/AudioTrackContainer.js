import React, {Component} from 'react';
import { connect } from 'react-redux';

import AudioTrack from '../../../../components/World/MultiTrack/AudioTrack/AudioTrack';

import { action } from '../../../../redux/actions';

function mapStateToProps(state, ownProps) {
  return {
    audioTrackState: state.multiTracks[ownProps.multiTrackId].audioTracks[ownProps.audioTrackIndex],
    isMultiTrackPlaying: state.multiTracks[ownProps.multiTrackId].isPlaying,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  const { audioTrackIndex, multiTrackId } = ownProps;
  return({
    toggleArmTrack: () => {
      dispatch(action('TOGGLE_ARM_TRACK', { audioTrackIndex, multiTrackId }))
    },
  })
}

export default AudioTrackContainer = connect(mapStateToProps, mapDispatchToProps)(AudioTrack)
