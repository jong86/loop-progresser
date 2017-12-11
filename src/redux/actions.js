//
// Action creators
//

export const addTrack = (options) => {
  return {
    type: 'ADD_TRACK',
    ...options,
  }
}

export const toggleArmTrack = (options) => {
  return {
    type: 'TOGGLE_ARM_TRACK',
    ...options
  }
}

export const setTrackIsLoadingStatus = (options) => {
  return {
    type: 'SET_TRACK_IS_LOADING_STATUS',
    ...options,
  }
}

export const setRecordingDuration = (options) => {
  return {
    type: 'SET_RECORDING_DURATION',
    ...options,
  }
}
