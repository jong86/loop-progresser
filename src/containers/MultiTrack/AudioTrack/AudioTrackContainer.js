import React, {Component} from 'react';
import { connect } from 'react-redux'

import AudioTrack from '../../../components/MultiTrack/AudioTrack/AudioTrack';

function mapStateToProps(state, props) {
  return {
    audioTrackState: state.multiTracks[props.multiTrackId].audioTracks[props.audioTrackId]
  }
}

export default AudioTrackContainer = connect(mapStateToProps)(AudioTrack)