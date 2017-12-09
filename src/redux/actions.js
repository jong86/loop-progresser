//
// Action creators
//

export const armTrackToggle = (audioTrackId, multiTrackId) => {
  console.log("arm track toggled for:", audioTrackId, multiTrackId);
  return {
    type: 'ARM_TRACK_TOGGLE',
    audioTrackId,
    multiTrackId,
  }
}

export const saveTake = (filepath, audioTrackId, multiTrackId) => {
  return {
    type: 'SAVE_AUDIO_RECORDING',
    filepath: filepath,
    audioTrackId,
    multiTrackId,
  }
}
