import React, { Component } from 'react';
import { connect } from 'react-redux';

import MasterControls from '../../../components/MultiTrack/MasterControls/MasterControls';

import { setTrackIsLoading } from '../../../redux/actions';

function mapStateToProps(state, ownProps) {
  return {
    // TODO: refactor this to return only the info that is used
    multiTrackStatus: state.multiTracks[ownProps.multiTrackId]
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { multiTrackId }= ownProps;
  return {
    setTrackIsLoading: (audioTrackIndex) => {dispatch(setTrackIsLoading({ audioTrackIndex, multiTrackId }))},
  }
}

export default MasterControlsContainer = connect(mapStateToProps, mapDispatchToProps)(MasterControls)
