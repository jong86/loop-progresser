import React from 'react';
import { Text, View } from 'react-native';

import styles from './_styles_AudioTrack';
import { TrackControl } from './TrackControl'

import Expo, { Audio, FileSystem, Font } from 'expo';


export default class AudioTrack extends React.Component {
  constructor() {
    super();
    this.recording = new Expo.Audio.Recording();
    this.state = {
      text: "hey",
      isRecording: false,
      isPlaying: false,
    }

    this.onPlay = this.onPlay.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onRecord = this.onRecord.bind(this);
  }

  onComponentWillMount() {
    return;
  }

  async onPlay() {
    try {
      const { soundObject, status } = await Expo.Audio.Sound.create(
        require('../../../assets/test.wav'),
        { shouldPlay: true }
      );
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }

  async onRecord() {
    console.warn("you hit onRecord")
    try {
      await this.recording.prepareToRecordAsync(Expo.Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await this.recording.startAsync();
      // You are now recording!
    } catch (error) {
      // An error occurred!
    }
  }

  async onStop() {
    try {
      await recording.stopAndUnloadAsync(Expo.Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
    } catch (error) {
      // An error occurred!
    }
  }


  render() {
    return (
      <View
        style={styles.main}>

        <TrackControl type="PLAY" specificFunction={this.onPlay} />

        <TrackControl type="STOP" specificFunction={this.onStop} />

        <TrackControl type="REC" specificFunction={this.onRecord} />

        <Text style={styles.text}>{this.state.text}</Text>

      </View>
    );
  }
}
