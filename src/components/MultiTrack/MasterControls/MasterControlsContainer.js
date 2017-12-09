import React, { Component } from 'react';
import { connect } from 'react-redux'

import MasterControls from './MasterControls';

function mapStateToProps(state, props) {
  return {
    // TODO: refactor this to only return isArmed status of the audioTracks
    multiTrackStatus: state.multiTracks[props.multiTrackId]
  };
}

export default MasterControlsContainer = connect(mapStateToProps)(MasterControls)
