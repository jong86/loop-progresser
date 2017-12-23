import React from 'react';
import { connect } from 'react-redux'

import MultiTrack from '../../../components/World/MultiTrack/MultiTrack'
import { action } from '../../../redux/actions';

import { Audio } from 'expo';

import uuidv4 from 'uuid/v4';

const DEV_MULTITRACK_ID = 0

function mapStateToProps(state) {
  return {
    multiTrackStatus: state.multiTracks[DEV_MULTITRACK_ID],
    multiTrackId: DEV_MULTITRACK_ID,
    viewMode: state.viewMode,
    scrollPosition: state.scrollPosition,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log('ownProps in MultiTrackContainer', ownProps);
  return({
    addTrack: () => {dispatch(action('ADD_TRACK', {
      multiTrackId: DEV_MULTITRACK_ID,
      audioTrackInitialState: {
        id: uuidv4(),
        isArmed: false,
        // isRecording: false,
        recordingDuration: null,
        soundData: {},
        soundDuration: null,
        recordingSettings: JSON.parse(JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY)),
      }
    }))},

    zoomIn: () => {dispatch(action('SET_ZOOM_SCALE', { zoomScale: 1.0 }))},
    switchToMultiTrackViewMode: () => {dispatch(action('SET_VIEW_MODE', { viewMode: 'MULTI_TRACK' }))},

    scrollToPosition: ownProps.scrollToPosition,
  })
}

export default MultiTrackContainer = connect(mapStateToProps, mapDispatchToProps)(MultiTrack)
