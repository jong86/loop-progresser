//
// Action creators
//

export const toggleArmTrack = (audioTrackId, multiTrackId) => {
  console.log("arm track toggled for:", audioTrackId, multiTrackId);
  return {
    type: 'TOGGLE_ARM_TRACK',
    audioTrackId,
    multiTrackId,
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
