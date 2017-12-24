import update from 'react-addons-update'

initialState = {
  multiTracks: {
    0: {
      position: {x: 400, y: 800},
      name: 'MultiTrack 0', // not used yet
      color: '#222', // not used yet
      bpm: 120, // not used yet
      isMetronomeEnabled: false, // not used yet
      audioTracks: [],
      isPlaying: false,
      isRecording: false,
    }
  },
  focusedMultiTrack: 0, // deprecated
  viewMode: 'WORLD', // deprecated
  zoomScale: 1.0, // deprecated
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

    case 'SET_ZOOM_SCALE': // possibly deprecated
      const { zoomScale } = action;
      return update(state, {
        zoomScale: {$set: zoomScale}
      })

    case 'SET_VIEW_MODE': // possibly deprecated
      // Possible view modes:
      // 1. WORLD
      // 2. WORLD_EDIT_MULTI_TRACK
      // 3. MULTI_TRACK
      const { viewMode } = action;
      return update(state, {
        viewMode: {$set: viewMode}
      })

    default:
      return state;
  }
}

export default rootReducer
