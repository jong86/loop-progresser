import React, { Component } from 'react';
import { connect } from 'react-redux';

import MasterControls from '../../../components/MultiTrack/MasterControls/MasterControls';

import { setRecordingDuration, saveSound } from '../../../redux/actions';

function mapStateToProps(state, ownProps) {
  return {
    // TODO: refactor this to return only the info that is used
    multiTrackStatus: state.multiTracks[ownProps.multiTrackId]
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { multiTrackId }= ownProps;
  return {
    setRecordingDuration: (audioTrackIndex, duration) => {dispatch(setRecordingDuration({ audioTrackIndex, multiTrackId, duration }))},
    saveSound: (audioTrackIndex, sound) => {dispatch(saveSound(audioTrackIndex, sound))}
  }
}

export default MasterControlsContainer = connect(mapStateToProps, mapDispatchToProps)(MasterControls)
