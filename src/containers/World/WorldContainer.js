import React, { Component } from 'react';
import { connect } from 'react-redux'

import uuidv4 from 'uuid/v4';

import World from '../../components/World/World';

import { action } from '../../redux/actions';

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    addMultiTrack: (position) => {
      const uniqueId = uuidv4();
      dispatch(action('ADD_MULTI_TRACK', {
        multiTrackData: {
          id: uniqueId,
          position: position,
          name: 'MultiTrack 0', // not used yet
          color: '#222', // not used yet
          bpm: 120, // not used yet
          isMetronomeEnabled: false, // not used yet
          audioTracks: [],
          isPlaying: false,
          isRecording: false,
        }
      }))
    },

    setZoomScale: (zoomScale) => {
      dispatch(action('SET_ZOOM_SCALE', { zoomScale }))
    },
  })
}

export default WorldContainer = connect(mapStateToProps, mapDispatchToProps)(World)
