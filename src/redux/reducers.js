initialState = {
  multiTracks: {
    0: {
      audioTracks: {
        0: {
          isArmed: true
        }
      }
    }
  }
}

const rootReducer = (state = initialState, action) => {
  const { multiTrackId, audioTrackId } = action;
  switch (action.type) {
    case 'TOGGLE_ARM_TRACK':
      return {
        ...state,
        multiTracks: {
          [multiTrackId]: {
            audioTracks: {
              [audioTrackId]: {
                isArmed: !state.multiTracks[multiTrackId].audioTracks[audioTrackId].isArmed
              }
            }
          }
        }
      }
    default:
      return state;
  }
}

export default rootReducer
