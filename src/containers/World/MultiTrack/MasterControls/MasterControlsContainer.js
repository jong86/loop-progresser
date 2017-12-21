import React, { Component } from 'react';
import { connect } from 'react-redux';

import MasterControls from '../../../../components/World/MultiTrack/MasterControls/MasterControls';

import {
  setRecordingDuration,
  saveSoundData,
  toggleIsMultiTrackPlaying,
  updateSoundStatus,
} from '../../../../redux/actions';

function mapStateToProps(state, ownProps) {
  return {
    // TODO: refactor this to return only the info that is used
    multiTrackStatus: state.multiTracks[ownProps.multiTrackId],
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { multiTrackId } = ownProps;
  return {
    setRecordingDuration: (audioTrackIndex, duration) => {dispatch(setRecordingDuration({ audioTrackIndex, multiTrackId, duration }))},
    updateSoundStatus: (audioTrackIndex, status) => {dispatch(updateSoundStatus({ audioTrackIndex, multiTrackId, status }))},
    saveSoundData: (audioTrackIndex, soundData) => {dispatch(saveSoundData({ audioTrackIndex, multiTrackId, soundData }))},
    toggleIsMultiTrackPlaying: () => {dispatch(toggleIsMultiTrackPlaying({ multiTrackId }))}
  }
}

export default MasterControlsContainer = connect(mapStateToProps, mapDispatchToProps)(MasterControls)