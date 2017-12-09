import React, { Component } from 'react';
import { View } from 'react-native';

import ControlButton from './ControlButton';

import styles from './_styles_MasterControls';


export default class MasterControls extends Component {
  constructor(props) {
    super(props)
  }

  _onRecordPressed = () => {
    const audioTracksList = this.props.multiTrackStatus.audioTracks
    const audioTracksListLength = audioTracksList.length;
    let armedTrack;
    for (let i = 0; i < audioTracksListLength; i++) {
      if (audioTracksList[i].isArmed) {
        armedTrack = audioTracksList[i];
        break;
      }
    }
    console.log('Armed track:', armedTrack)

    this._stopPlaybackAndBeginRecording(armedTrack)
  }


  async _stopPlaybackAndBeginRecording(track) {
    console.log('inside _stopPlaybackAndBeginRecording -- track:', track)

    // TODO -- dispatch:
    /*
    track.isLoading: true,
    */


    // TODO -- Maybe scrap this stuff or minimize it to reduce lag on record start
    /*
    if (this.sound !== null) {
      await this.sound.unloadAsync();
      this.sound.setOnPlaybackStatusUpdate(null);
      this.sound = null;
    }
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
    if (this.recording !== null) {
      this.recording.setOnRecordingStatusUpdate(null);
      this.recording = null;
    }
    */


    // TODO -- Refactor this to use promise notation (I like it more)
    /*
    const recording = new Audio.Recording();
    recording.setProgressUpdateInterval(1); // I added this line to update every ms
    await recording.prepareToRecordAsync(this.recordingSettings);
    recording.setOnRecordingStatusUpdate(this._updateScreenForRecordingStatus);

    this.recording = recording;
    await this.recording.startAsync(); // Will call this._updateScreenForRecordingStatus to update the screen.
    */


    // TODO: when done:
    /*
    isLoading: false,
    saveFilePathToState() // And add file path param to audioTrack in store
    */
  }

  render() {
    return (
      <View style={styles.main}>

        <View style={styles.buttonWrapper}>
          <ControlButton
            // isOn={this.state.isPlaying}
            type="PLAY"
            // specificFunction={this._onPlayPausePressed}
          />
          <ControlButton
            type="STOP"
            // specificFunction={this._onStopPressed}
          />
          <ControlButton
            // isOn={this.state.isRecording}
            type="REC"
            specificFunction={this._onRecordPressed}
          />
        </View>

      </View>
    )
  }
}
