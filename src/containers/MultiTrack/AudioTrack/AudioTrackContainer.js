import React, {Component} from 'react';
import { connect } from 'react-redux'

import AudioTrack from '../../../components/MultiTrack/AudioTrack/AudioTrack';
import { toggleArmTrack } from '../../../redux/actions';

function mapStateToProps(state, ownProps) {
  // console.log("ownProps in audioTrackContainer", ownProps)
  return {
    audioTrackState: state.multiTracks[ownProps.multiTrackId].audioTracks[ownProps.audioTrackIndex]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  const { audioTrackIndex, multiTrackId } = ownProps;
  return({
    toggleArmTrack: () => {dispatch(toggleArmTrack({ audioTrackIndex, multiTrackId }))}
  })
}

export default AudioTrackContainer = connect(mapStateToProps, mapDispatchToProps)(AudioTrack)
