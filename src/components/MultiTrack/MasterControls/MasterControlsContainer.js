import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux'

import MasterControls from './MasterControls';

import styles from './_styles_MasterControls';
import { getArmedTrack } from '../../../redux/actions';


function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return({
    onRecordPressed: () => { dispatch(getArmedTrack()) }
  })
}

export default MasterControlsContainer = connect(mapStateToProps, mapDispatchToProps)(MasterControls)

