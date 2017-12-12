import update from 'react-addons-update'

initialState = {
  multiTracks: {
    0: {
      audioTracks: []
    }
  }
}

const rootReducer = (state = initialState, action) => {
  const { audioTrackIndex, multiTrackId } = action;
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
      const targetTrackList = state.multiTracks[multiTrackId].audioTracks
      const targetTrack = state.multiTracks[multiTrackId].audioTracks[audioTrackIndex];
      if (!targetTrack.isArmed) {
        // Unarm all tracks first (track arming is exclusive):
        for (let i = 0; i < targetTrackList.length; i++) {
          targetTrackList[i].isArmed = false;
        }
        return update(state, {
          multiTracks: {
            [multiTrackId]: {
              audioTracks: {
                [audioTrackIndex]: {
                  isArmed: {$set: true}
                }
              }
            }
          }
        })
      }

    case 'SET_RECORDING_DURATION':
      const { duration } = action;
      return update(state, {
        multiTracks: {
          [multiTrackId]: {
            audioTracks: {
              [audioTrackIndex]: {
                recordingDuration: {$set: duration}
              }
            }
          }
        }
      })

    case 'SAVE_SOUND':
      const { sound } = action;
      return update(state, {
        multiTracks: {
          [multiTrackId]: {
            audioTracks: {
              [audioTrackIndex]: {
                sound: {$set: sound}
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
