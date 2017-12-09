import React from 'react';
import { connect } from 'react-redux'

import MultiTrack from './MultiTrack'
import { addTrack } from '../../redux/actions';

import uuidv4 from 'uuid/v4';

function mapStateToProps(state) {
  return {
    multiTrackStatus: state.multiTracks[0]
  };
}

function mapDispatchToProps(dispatch) {
  return({
    addTrack: () => {dispatch(addTrack(uuidv4(), 0))}
  })
}

export default MultiTrackContainer = connect(mapStateToProps, mapDispatchToProps)(MultiTrack)
