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
    ...options,
  }
}

export const toggleIsMultiTrackRecording = (options) => {
  return {
    type: 'TOGGLE_IS_MULTI_TRACK_RECORDING',
    ...options,
  }
}

export const toggleIsMultiTrackPlaying = (options) => {
  return {
    type: 'TOGGLE_IS_MULTI_TRACK_PLAYING',
    ...options,
  }
}

export const setRecordingDuration = (options) => {
  return {
    type: 'SET_RECORDING_DURATION',
    ...options,
  }
}

export const saveSoundData = (options) => {
  console.log("Saving sound:", options);
  return {
    type: 'SAVE_SOUND_DATA',
    ...options,
  }
}

export const updateSoundStatus = (options) => {
  console.log('options', options);
  return {
    type: 'UPDATE_SOUND_STATUS',
    ...options,
  }
}

export const setZoomScale = (options) => {
  return {
    type: 'SET_ZOOM_SCALE',
    ...options,
  }
}

export const setViewMode = (options) => {
  return {
    type: 'SET_VIEW_MODE',
    ...options,
  }
}
