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
    setScrollPosition: () => {dispatch(action('SET_SCROLL_POSITION', {x: 0, y: 0}))},

    scrollToPosition: ownProps.scrollToPosition,
  })
}

export default MultiTrackContainer = connect(mapStateToProps, mapDispatchToProps)(MultiTrack)
