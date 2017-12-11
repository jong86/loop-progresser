import React, { Component } from 'react';
import { connect } from 'react-redux';

import MasterControls from '../../../components/MultiTrack/MasterControls/MasterControls';

function mapStateToProps(state, ownProps) {
  return {
    // TODO: refactor this to return only the info that is used
    multiTrackStatus: state.multiTracks[ownProps.multiTrackId]
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  // const { multiTrackId } = ownProps;

  // console.log("MasterControlsContainer ownProps:", ownProps);



  return({
    setTrackIsLoading: (armedTrack) => {dispatch(setTrackIsLoading(armedTrack))},
  })
}

export default MasterControlsContainer = connect(mapStateToProps, mapDispatchToProps)(MasterControls)
