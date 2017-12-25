import React, { Component } from 'react';
import { connect } from 'react-redux';

import MasterControls from '../../../../components/World/MultiTrack/MasterControls/MasterControls';

import { action } from '../../../../redux/actions';

function mapStateToProps(state, ownProps) {
  return {
    multiTrackData: state.multiTracks[ownProps.multiTrackId],
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { multiTrackId } = ownProps;
  return {
    addTrack: () => {
      dispatch(action('ADD_TRACK', {
        multiTrackId: ownProps.id,
        audioTrackInitialState: {
          id: uuidv4(),
          isArmed: false,
          recordingDuration: null,
          soundData: {},
          soundDuration: null,
          recordingSettings: JSON.parse(JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY)),
        }
      }))
    },

    setRecordingDuration: (audioTrackIndex, duration) => {
      dispatch(action('SET_RECORDING_DURATION', { audioTrackIndex, multiTrackId, duration }))
    },
    updateSoundStatus: (audioTrackIndex, status) => {
      dispatch(action('UPDATE_SOUND_STATUS', { audioTrackIndex, multiTrackId, status }))
    },
    saveSoundData: (audioTrackIndex, soundData) => {
      dispatch(action('SAVE_SOUND_DATA', { audioTrackIndex, multiTrackId, soundData }))
    },
    toggleIsMultiTrackPlaying: () => {
      dispatch(action('TOGGLE_IS_MULTI_TRACK_PLAYING', { multiTrackId }))
    }
  }
}

export default MasterControlsContainer = connect(mapStateToProps, mapDispatchToProps)(MasterControls)
