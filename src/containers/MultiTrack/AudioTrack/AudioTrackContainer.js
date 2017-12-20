import React, {Component} from 'react';
import { connect } from 'react-redux'

import AudioTrack from '../../../components/MultiTrack/AudioTrack/AudioTrack';
import { toggleArmTrack } from '../../../redux/actions';

function mapStateToProps(state, ownProps) {
  return {
    audioTrackState: state.multiTracks[ownProps.multiTrackId].audioTracks[ownProps.audioTrackIndex],
    isMultiTrackPlaying: state.multiTracks[ownProps.multiTrackId].isPlaying,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  const { audioTrackIndex, multiTrackId } = ownProps;
  return({
    toggleArmTrack: () => {dispatch(toggleArmTrack({ audioTrackIndex, multiTrackId }))},
    // toggleTrackIsRecording: () => {dispatch(toggleTrackIsRecording({ }))}
  })
}

export default AudioTrackContainer = connect(mapStateToProps, mapDispatchToProps)(AudioTrack)
