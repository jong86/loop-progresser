import update from 'react-addons-update'

initialState = {
  zoomScale: 1.0,
  multiTracks: {
    0: {
      audioTracks: [],
      isPlaying: false,
      isRecording: false,
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
      // Unarms all tracks first (track arming is exclusive):
      const targetTrackList = state.multiTracks[multiTrackId].audioTracks
      const targetTrack = state.multiTracks[multiTrackId].audioTracks[audioTrackIndex];
      if (!targetTrack.isArmed) {
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

    case 'TOGGLE_IS_MULTI_TRACK_PLAYING':
      return update(state, {
        multiTracks: {
          [multiTrackId]: {
            isPlaying: {$apply: (value) => !value}
          }
        }
      })

    // case 'TOGGLE_IS_MULTI_TRACK_RECORDING':
    //   return update(state, {
    //     multiTracks: {
    //       [multiTrackId]: {
    //         isRecording: {$set: true}
    //       }
    //     }
    //   })

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

    case 'SAVE_SOUND_DATA':
      const { soundData } = action;
      return update(state, {
        multiTracks: {
          [multiTrackId]: {
            audioTracks: {
              [audioTrackIndex]: {
                soundData: {$set: soundData}
              }
            }
          }
        }
      })

    case 'UPDATE_SOUND_STATUS':
      const { status } = action;
      return update(state, {
        multiTracks: {
          [multiTrackId]: {
            audioTracks: {
              [audioTrackIndex]: {
                soundData: {
                  status: {$set: status}
                }
              }
            }
          }
        }
      })

    case 'SET_ZOOM_SCALE':
      const { zoomScale } = action;
      // Also need to change position to keep centered on that multiTrack

      return update(state, {
        zoomScale: {$set: zoomScale}
      })

    default:
      return state;
  }
}

export default rootReducer
