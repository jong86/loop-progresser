import React, { Component } from 'react';
import { Text, View } from 'react-native';

import ArmButton from './ArmButton';
import styles from './_styles_AudioTrack';

import Expo, { Asset, Audio, FileSystem, Font, Permissions } from 'expo';

export default class AudioTrack extends Component {
  render() {
    console.log('audioTrack props2:', this.props);
    return (
      <View style={styles.main}>
        <ArmButton audioTrackIndex={this.props.audioTrackIndex} multiTrackId={'0'}  />
        {/* <Text style={styles.text}>{this._getRecordingTimestamp()}</Text> */}
      </View>
    )
  }
}
