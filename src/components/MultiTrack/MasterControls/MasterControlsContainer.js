import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux'

import MasterControls from './MasterControls';

import styles from './_styles_MasterControls';
import { getArmedTrack } from '../../../redux/actions';


function mapStateToProps(state, props) {
  return {
    multiTrackStatus: state[props.multiTrackId]
  };
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default MasterControlsContainer = connect(mapStateToProps)(MasterControls)
