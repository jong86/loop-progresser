import { combineReducers } from 'redux'
import {
  ADD_MULTITRACK,
  ADD_AUDIOTRACK,
  SAVE_AUDIO_RECORDING
} from '../actions'



// function multiTracks(state = {}, action) {
//   switch (action.type) {
//     case ADD_MULTITRACK:
//       const id = uuidv4();
//       return Object.assign({}, ...state,
//         {
//           id: {
//             id: id,
//             attributes: 'stuff'
//           }
//         }
//       )
//     default:
//       return state;
//   }
// }


function recordings(state = {}, action) {
  switch (action.type) {
    case CREATE_AUDIO_RECORDING:
      return Object.assign({}, ...state,
        {
          id: {
            id: action.id,
            audioTrackId: action.audioTrackId,
            path: 'fake/path/'
          }
        }
      )
    case SAVE_AUDIO_RECORDING:
      return Object.assign({}, ...state,
        {
          id: {
            id: action.id,
            audioTrackId: action.audioTrackId,
            path: 'fake/path/'
          }
        }
      )
    default:
      return state;
  }
}

const appReducers = combineReducers({
  recordings
})

export default appReducers