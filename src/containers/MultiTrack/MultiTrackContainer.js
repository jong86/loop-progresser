import React from 'react';
import { connect } from 'react-redux'

import MultiTrack from '../../components/MultiTrack/MultiTrack'
import { addTrack } from '../../redux/actions';

import { Audio } from 'expo';

import uuidv4 from 'uuid/v4';

const DEV_MULTITRACK_ID = 0

function mapStateToProps(state) {
  return {
    multiTrackStatus: state.multiTracks[DEV_MULTITRACK_ID],
    multiTrackId: DEV_MULTITRACK_ID,
  };
}

function mapDispatchToProps(dispatch) {
  return({
    addTrack: () => {dispatch(addTrack({
      multiTrackId: DEV_MULTITRACK_ID,
      audioTrackInitialState: {
        id: uuidv4(),
        fontLoaded: false,
        isArmed: false,
        isPlaybackAllowed: false,
        isPlaying: false,
        isSeeking: false,
        muted: false,
        rate: 1.0,
        recording: null,
        recordingDuration: null,
        shouldPlay: false,
        shouldPlayAtEndOfSeek: false,
        shouldCorrectPitch: true,
        sound: null,
        soundDuration: null,
        soundPosition: null,
        volume: 1.0,
        recordingSettings: JSON.parse(JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY)),
      },
    }))}
  })
}

export default MultiTrackContainer = connect(mapStateToProps, mapDispatchToProps)(MultiTrack)
