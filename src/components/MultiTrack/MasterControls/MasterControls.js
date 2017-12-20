import React, { Component } from 'react';
import { View } from 'react-native';

import { Audio, FileSystem } from 'expo';

import ControlButton from './ControlButton';

import styles from './_styles_MasterControls';


export default class MasterControls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // isMultiTrackPlaying: false,
      isMultiTrackPlayingAllowed: true,
      isMultiTrackRecording: false,
      isMultiTrackRecordingAllowed: false,
      recording: null,
    }
  }

  _getArmedTrackIndex = () => {
    const audioTracksList = this.props.multiTrackStatus.audioTracks
    const audioTracksListLength = audioTracksList.length;
    for (let i = 0; i < audioTracksListLength; i++) {
      if (audioTracksList[i].isArmed) {
        return i;
      }
    }
  }

  _getReadyToRecord = async() => {
    console.log('Getting ready to record...');
    // Invoked when component mounted and after recording
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true, // Makes sound come out of phone speaker on iPhone...
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    })
    const recordingInstance = new Audio.Recording();
    await recordingInstance.prepareToRecordAsync(this.recordingSettings)
    await this.setState({
      isMultiTrackRecordingAllowed: true,
      recording: recordingInstance,
    }, () => {
      console.log('Ready to record.');
      return;
    })
  }

  _getReadyToPlay = () => {
    return Audio.setAudioModeAsync({
      allowsRecordingIOS: false, // Makes sound come out of regular speaker on iPhone
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      playsInSilentLockedModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    })
  }

  _getTracksWithSounds = () => {
    const { audioTracks } = this.props.multiTrackStatus;
    const soundsInTracks = [];
    for (let i = 0; i < audioTracks.length; i++) {
      const { soundData } = audioTracks[i]
      if (soundData) soundsInTracks.push(soundData)
    }
    return soundsInTracks[0] ? soundsInTracks : false;
  }

  _onPlayPausePressed = () => {
    const { toggleIsMultiTrackPlaying } = this.props;
    const { isPlaying } = this.props.multiTrackStatus;
    const tracksWithSounds = this._getTracksWithSounds();

    if (isPlaying && tracksWithSounds) {
      tracksWithSounds.forEach(({ sound }) => {
        sound.pauseAsync();
      })
      toggleIsMultiTrackPlaying();
    } else if (!isPlaying && tracksWithSounds) {
      tracksWithSounds.forEach(({ sound }) => {
        this._getReadyToPlay();
        sound.playAsync();
      })
      toggleIsMultiTrackPlaying();
    }
  }

  _stopAllTracks = () => {
    const { toggleIsMultiTrackPlaying } = this.props;
    const { isPlaying } = this.props.multiTrackStatus;
    const tracksWithSounds = this._getTracksWithSounds();

    if (isPlaying && tracksWithSounds) {
      tracksWithSounds.forEach(({ sound }) => {
        sound.stopAsync()
      })
      toggleIsMultiTrackPlaying();
    }
  }

  _onStopPressed = () => {
    this._stopAllTracks()
  }

  _onRecordPressed = () => {
    if (this.state.isMultiTrackRecording) {
      this._stopRecordingAndEnablePlayback();
    } else {
      this._stopPlaybackAndBeginRecording();
    }
  }

  _stopPlaybackAndBeginRecording = async() => {
    if (!this.state.recording) {
      await this._getReadyToRecord()
    }
    this.setState({
      isMultiTrackRecording: true,
    })
    await this.state.recording.startAsync()
    console.log('Recording...', this.state.recording);

    // For updating recording duration in GUI for audioTrack:
    this.state.recording.setProgressUpdateInterval(2);
    this.state.recording.setOnRecordingStatusUpdate((ms) => {
      this.props.setRecordingDuration(this._getArmedTrackIndex(), ms)
    })
  }

  _stopRecordingAndEnablePlayback = async() => {
    await this.state.recording.stopAndUnloadAsync()
    this.setState({
      isMultiTrackRecording: false,
      isMultiTrackRecordingAllowed: false,
    })
    await this._getReadyToPlay()
    const info = await FileSystem.getInfoAsync(this.state.recording.getURI())
    const soundData = await this.state.recording.createNewLoadedSound({
      isLooping: true,
      isMuted: false,
      volume: 1.0,
      rate: 1.0,
      shouldCorrectPitch: true,
    })
    // Save recorded sound in store:
    this.props.saveSoundData(this._getArmedTrackIndex(), soundData);
    this.setState({
      isMultiTrackPlayingAllowed: true,
      isMultiTrackRecordingAllowed: true,
      recording: null,
    })
  }

  render() {
    return (
      <View style={styles.main}>

        <View style={styles.buttonWrapper}>
          { this.state.isMultiTrackPlayingAllowed &&
            <ControlButton
              type="PLAY"
              specificFunction={this._onPlayPausePressed}
            />
          }
          <ControlButton
            type="STOP"
            specificFunction={this._onStopPressed}
          />
          <ControlButton
            type="REC"
            specificFunction={this._onRecordPressed}
          />
        </View>

      </View>
    )
  }
}
