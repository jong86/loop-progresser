initialState = {
  multiTracks: {
    0: {
      audioTracks: []
    }
  }
}

const rootReducer = (state = initialState, action) => {
  const { multiTrackId, audioTrackId } = action;
  switch (action.type) {
    case 'ADD_TRACK':
      return {
        ...state,
        multiTracks: {
          ...state.multiTracks,
          [multiTrackId]: {
            ...state.multiTracks[multiTrackId],
            audioTracks: {
              ...state.multiTracks[multiTrackId].audioTracks,
              [audioTrackId]: action.audioTrackInitialState
            }
          }
        }
      }

      case 'TOGGLE_ARM_TRACK':
      return {
        ...state,
        multiTracks: {
          ...state.multiTracks,
          [multiTrackId]: {
            ...state.multiTracks[multiTrackId],
            audioTracks: {
              ...state.multiTracks[multiTrackId].audioTracks,
              [audioTrackId]: {
                ...state.multiTracks[multiTrackId].audioTracks[audioTrackId],
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
