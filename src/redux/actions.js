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

// export const toggleIsMultiTrackRecording = (options) => {

// }

export const toggleIsMultiTrackPlaying = (options) => {
  return {
    type: 'TOGGLE_IS_MULTI_TRACK_PLAYING',
    ...options
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
