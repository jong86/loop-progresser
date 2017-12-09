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
      return update(state, {
        multiTracks: {
          [multiTrackId]: {
            audioTracks: {$push: [action.audioTrackInitialState]},
          }
        }
      })

    case 'TOGGLE_ARM_TRACK':
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
