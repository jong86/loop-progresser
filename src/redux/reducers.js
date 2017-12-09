import update from 'react-addons-update'

initialState = {
  multiTracks: {
    0: {
      audioTracks: []
    }
  }
}

const rootReducer = (state = initialState, action) => {
  const { audioTrackIndex, audioTrackId, multiTrackId} = action;
  switch (action.type) {
    case 'ADD_TRACK':
      return {
        ...state,
        multiTracks: {
          ...state.multiTracks,
          [multiTrackId]: {
            ...state.multiTracks[multiTrackId],
            audioTracks: state.multiTracks[multiTrackId].audioTracks.concat([action.audioTrackInitialState]),
          }
        }
      }

      case 'TOGGLE_ARM_TRACK':
        console.log('action', action);
        return update(state, {
          multiTracks: {
            [multiTrackId]: {
              audioTracks: {
                [audioTrackIndex]: {
                  isArmed: {$set: !state.multiTracks[multiTrackId].audioTracks[audioTrackIndex].isArmed}
                }
              }
            }
          }
        })
    default:
      return state;
  }
}

export default rootReducer
