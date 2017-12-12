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
      isRecording: false,
      isRecordingAllowed: false,
      recording: null,
    }

    this._stopPlaybackAndBeginRecording = this._stopPlaybackAndBeginRecording.bind(this)
  }

  componentWillMount = () => {
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
    return Audio.setAudioModeAsync({
      allowsRecordingIOS: true, // Makes sound come out of phone speaker on iPhone...
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
      const { sound } = audioTracks[i]
      if (sound) soundsInTracks.push(sound)
    }
    return soundsInTracks;
  }

  _onPlayPausePressed = () => {
    this._getTracksWithSounds().forEach((sound) => {
      if (this.state.isPlaying) {
        // Pause when sound is playing:
        this.setState({
          isPlaying: false,
        })
        sound.sound.pauseAsync()
        .then(() => {
          this._getReadyToRecord();
        })
      } else {
        // Play when sound not playing:
        this.setState({
          isPlaying: true,
        })
        this._getReadyToPlay()
        .then(() => {
          sound.sound.playAsync()
        });
      }
    })
  }

  _onStopPressed = () => {
    this._getTracksWithSounds().forEach((sound) => {
      if (this.state.isPlaying) {
        this.setState({
          isPlaying: false,
        })
        sound.sound.stopAsync()
        .then(() => {
          this._getReadyToRecord();
        })
      }
    })
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
      this._getReadyToPlay()
      .then(() => {
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
          }).then(() => {
            this.setState({
              isPlayingAllowed: true,
            })
          })
        })
      })
    })
  }

  render() {
    return (
      <View style={styles.main}>

        <View style={styles.buttonWrapper}>
          { this.state.isPlayingAllowed &&
            <ControlButton
              type="PLAY"
              specificFunction={this._onPlayPausePressed}
            />
          }
          <ControlButton
            type="STOP"
            specificFunction={this._onStopPressed}
          />
          { this.state.isRecordingAllowed &&
            <ControlButton
              type="REC"
              specificFunction={this._onRecordPressed}
            />
          }
        </View>

      </View>
    )
  }
}
