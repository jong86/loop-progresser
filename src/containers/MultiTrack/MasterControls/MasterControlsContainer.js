import React, { Component } from 'react';
import { connect } from 'react-redux';

import MasterControls from '../../../components/MultiTrack/MasterControls/MasterControls';

function mapStateToProps(state, ownProps) {
  return {
    // TODO: refactor this to only return isArmed status of the audioTracks
    multiTrackStatus: state.multiTracks[ownProps.multiTrackId]
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { audioTrackIndex, multiTrackId } = ownProps;
  return({
    toggleArmTrack: () => {dispatch(toggleArmTrack(audioTrackIndex, multiTrackId))},
    setTrackIsLoading: () => {dispatch(setTrackIsLoading(audioTrackIndex, multiTrackId))},
  })
}

export default MasterControlsContainer = connect(mapStateToProps)(MasterControls)
