initialState = {
  0: {
    0: {
      isArmed: true
    }
  }
}

const rootReducer = (state = initialState, action) => {
  const { multiTrackId, audioTrackId } = action;
  switch (action.type) {
    case 'TOGGLE_ARM_TRACK':
      return {
        ...state,
        [multiTrackId]: {
          [audioTrackId]: {
            isArmed: !state[multiTrackId][audioTrackId].isArmed
          }
        }
      }
    default:
      return state;
  }
}

export default rootReducer
