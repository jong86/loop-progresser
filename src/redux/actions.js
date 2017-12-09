import { Audio } from 'expo';

//
// Action creators
//

export const addTrack = (audioTrackId, multiTrackId) => {
  console.log('addAudioTrack called for:', audioTrackId, multiTrackId)
  return {
    type: 'ADD_TRACK',
    audioTrackId: String(audioTrackId),
    multiTrackId: String(multiTrackId),
    audioTrackInitialState: {
      id: audioTrackId,
      fontLoaded: false,
      isArmed: false,
      isLoading: false,
      isPlaybackAllowed: false,
      isPlaying: false,
      isRecording: false,
      isSeeking: false,
      muted: false,
      rate: 1.0,
      recording: null,
      recordingDuration: null,
      shouldPlay: false,
      shouldPlayAtEndOfSeek: false,
      shouldCorrectPitch: true,
      sound: null,
      soundDuration: null,
      soundPosition: null,
      volume: 1.0,
      recordingSettings: JSON.parse(JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY)),
    },
  }
}

export const toggleArmTrack = (audioTrackIndex, audioTrackId, multiTrackId) => {
  console.log("arm track toggled for:", audioTrackId, multiTrackId);
  return {
    type: 'TOGGLE_ARM_TRACK',
    audioTrackIndex: String(audioTrackIndex),
    audioTrackId: String(audioTrackId),
    multiTrackId: String(multiTrackId),
  }
}

export const saveTake = (filepath, audioTrackId, multiTrackId) => {
  return {
    type: 'SAVE_TAKE',
    filepath: filepath,
    audioTrackId,
    multiTrackId,
  }
}
