import React, { Component } from 'react';
import { connect } from 'react-redux';

import MasterControls from '../../../components/MultiTrack/MasterControls/MasterControls';

import { setRecordingDuration, saveSoundURI } from '../../../redux/actions';

function mapStateToProps(state, ownProps) {
  return {
    // TODO: refactor this to return only the info that is used
    multiTrackStatus: state.multiTracks[ownProps.multiTrackId]
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { multiTrackId } = ownProps;
  return {
    setRecordingDuration: (audioTrackIndex, duration) => {dispatch(setRecordingDuration({ audioTrackIndex, multiTrackId, duration }))},
    saveSoundURI: (audioTrackIndex, soundURI) => {dispatch(saveSoundURI({ audioTrackIndex, multiTrackId, soundURI }))}
  }
}

export default MasterControlsContainer = connect(mapStateToProps, mapDispatchToProps)(MasterControls)
