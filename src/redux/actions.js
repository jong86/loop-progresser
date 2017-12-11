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
  console.log("you sent:",options);
  return {
    type: 'TOGGLE_ARM_TRACK',
    ...options
  }
}

export const setTrackIsLoading = (options) => {
  return {
    type: 'SET_TRACK_IS_LOADING',
    ...options,
  }
}
