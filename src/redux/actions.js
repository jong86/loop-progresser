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
  // console.log("you sent:",options);
  return {
    type: 'TOGGLE_ARM_TRACK',
    ...options
  }
}

export const setTrackIsLoadingStatus = (options) => {
  console.log('inside setTrackIsLoading for track', options);
  return {
    type: 'SET_TRACK_IS_LOADING_STATUS',
    ...options,
  }
}
