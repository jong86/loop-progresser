import React from 'react';
import { connect } from 'react-redux'
import { Audio } from 'expo';
import uuidv4 from 'uuid/v4';
import { action } from '../../../redux/actions';
import MultiTrack from '../../../components/World/MultiTrack/MultiTrack'

function mapStateToProps(state, ownProps) {
  return {
    multiTrackData: state.multiTracks[ownProps.id],
    multiTrackId: ownProps.id,
    viewMode: state.viewMode,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return({
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
    zoomIn: () => {
      dispatch(action('SET_ZOOM_SCALE', { zoomScale: 1.0 }))
    },
    switchToMultiTrackViewMode: () => {
      dispatch(action('SET_VIEW_MODE', { viewMode: 'MULTI_TRACK' }))
    },
  })
}

export default MultiTrackContainer = connect(mapStateToProps, mapDispatchToProps)(MultiTrack)
