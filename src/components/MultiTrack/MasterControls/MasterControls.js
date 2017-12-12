import React, { Component } from 'react';
import { View } from 'react-native';

import { Audio, FileSystem } from 'expo';

import ControlButton from './ControlButton';

import styles from './_styles_MasterControls';


export default class MasterControls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
      isPlayingAllowed: false,
      isRecordingAllowed: false,
      isRecording: false,
      recording: null,
    }

    this._stopPlaybackAndBeginRecording = this._stopPlaybackAndBeginRecording.bind(this)
  }

  componentWillMount = () => {
    console.log('MasterControls mounting');
    this._getReadyToRecord()
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

  _getReadyToRecord = () => {
    // Invoked when component mounted and after recording
    Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    }).then(() => {
      const recordingInstance = new Audio.Recording();
      recordingInstance.prepareToRecordAsync(this.recordingSettings)
        .then(() => {
          this.setState({
            isRecordingAllowed: true,
            recording: recordingInstance,
          }, () => {
            console.log('Ready to record.');
          })
        })
      })
  }

  _onPlayPausePressed = () => {
    const { audioTracks } = this.props.multiTrackStatus;
    const soundsToPlay = [];
    for (let i = 0; i < audioTracks.length; i++) {
      const { sound } = audioTracks[i]
      if (sound) soundsToPlay.push(sound)
    }
    console.log('soundsToPlay', soundsToPlay);

    if (this.state.isPlaying) {
      soundsToPlay.forEach(sound => {
        sound.sound.pauseAsync();
      })
    } else {
      soundsToPlay.forEach(sound => {
        sound.sound.playAsync();
      })
    }
  }

  _onRecordPressed = () => {
    if (this.state.isRecording) {
      this._stopRecordingAndEnablePlayback();
    } else {
      this._stopPlaybackAndBeginRecording();
    }
  }

  _stopPlaybackAndBeginRecording = () => {
    this.setState({
      isRecording: true,
    }, () => {
      console.log('Recording...', this.state.recording);
    })
    this.state.recording.startAsync() // Starts recording
    this.state.recording.setProgressUpdateInterval(2);
    this.state.recording.setOnRecordingStatusUpdate((ms) => {
      const { setRecordingDuration } = this.props;
      setRecordingDuration(this._getArmedTrackIndex(), ms)
    })

  }

  _stopRecordingAndEnablePlayback = () => {
    this.setState({
      isRecording: false,
      isRecordingAllowed: false,
    });
    this.state.recording.stopAndUnloadAsync()
      .then(() => {
        console.log('this.state.recording', this.state.recording);
        Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          playsInSilentLockedModeIOS: true,
          shouldDuckAndroid: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        }).then(() => {
          FileSystem.getInfoAsync(this.state.recording.getURI())
            .then((info) => {
              this.state.recording.createNewLoadedSound({
                isLooping: true,
                isMuted: false,
                volume: 1.0,
                rate: 1.0,
                shouldCorrectPitch: true,
              }).then((sound) => {
                console.log('sound', sound);
                const { saveSound } = this.props;
                saveSound(this._getArmedTrackIndex(), sound);
              })
              this._getReadyToRecord();
            })
        })
      })
  }

  render() {
    return (
      <View style={styles.main}>

        <View style={styles.buttonWrapper}>
          <ControlButton
            // isOn={this.state.isPlaying}
            type="PLAY"
            specificFunction={this._onPlayPausePressed}
          />
          <ControlButton
            type="STOP"
            // specificFunction={this._onStopPressed}
          />
          { this.state.isRecordingAllowed &&
            <ControlButton
              // isOn={this.state.isRecording}
              type="REC"
              specificFunction={this._onRecordPressed}
            />
          }
        </View>

      </View>
    )
  }
}
