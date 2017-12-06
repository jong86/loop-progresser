//
// Action types
//

export const ADD_MULTITRACK = 'ADD_MULTITRACK'
export const ADD_AUDIOTRACK = 'ADD_AUDIOTRACK'
export const SAVE_AUDIO_RECORDING = 'SAVE_AUDIO_RECORDING'


//
// Action creators
//

export function addMultiTrack() {
  return { type: ADD_MULTITRACK }
}

export function addAudioTrack(multiTrackId) {
  return { type: ADD_AUDIOTRACK, multiTrackId: multiTrackId }
}

export function saveAudioRecording(audioTrackId) {
  return { type: SAVE_AUDIO_RECORDING, audioTrackId: audioTrackId }
}