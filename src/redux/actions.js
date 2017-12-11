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

export const setRecordingDuration = (options) => {
  return {
    type: 'SET_RECORDING_DURATION',
    ...options,
  }
}

export const saveSound = (options) => {
  return {
    type: 'SAVE_SOUND',
    ...options,
  }
}
