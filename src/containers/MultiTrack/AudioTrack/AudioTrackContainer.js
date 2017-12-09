import React, {Component} from 'react';
import { connect } from 'react-redux'

import AudioTrack from '../../../components/MultiTrack/AudioTrack/AudioTrack';
import { toggleArmTrack } from '../../../redux/actions';

function mapStateToProps(state, ownProps) {
  return {
    audioTrackState: state.multiTracks[ownProps.multiTrackId].audioTracks[ownProps.audioTrackId]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  const { audioTrackIndex, audioTrackId, multiTrackId } = ownProps;
  return({
    toggleArmTrack: () => {dispatch(toggleArmTrack(audioTrackIndex, audioTrackId, multiTrackId))}
  })
}

export default AudioTrackContainer = connect(mapStateToProps, mapDispatchToProps)(AudioTrack)
