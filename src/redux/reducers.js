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
      const targetTrackList = state.multiTracks[multiTrackId].audioTracks
      const targetTrack = state.multiTracks[multiTrackId].audioTracks[audioTrackIndex];

      if (!targetTrack.isArmed) {
      // TODO could do this ^ check before dispatching
        // console.log('exclusively arming track', targetTrack.id);

        // Disable all first (track arming is exclusive)
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

    default:
      return state;
  }
}

export default rootReducer
