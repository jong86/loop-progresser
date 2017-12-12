import React, { Component } from 'react';
import { Text, View } from 'react-native';

import ArmButton from './ArmButton';
import styles from './_styles_AudioTrack';

import Expo, { Asset, Audio, FileSystem, Font, Permissions } from 'expo';

export default class AudioTrack extends Component {
  _getRecordingTimestamp = () => {
    _formatMilliseconds = (ms) => {
      return new Date(ms).toISOString().slice(14, -2);
    }

    if (this.props.recordingDuration) {
      const { durationMillis } = this.props.recordingDuration
      return `${_formatMilliseconds(durationMillis)}`;
    }
    return `${_formatMilliseconds(0)}`;
  }

  render() {
    // console.log('audioTrack props for track', this.props.audioTrackIndex, ":", this.props);
    return (
      <View style={styles.main}>
        <ArmButton
          isArmed={this.props.isArmed}
          toggleArmTrack={this.props.toggleArmTrack}
        />
        <Text>{this.props.audioTrackIndex}</Text>
        <Text style={styles.text}>{this._getRecordingTimestamp()}</Text>
      </View>
    )
  }
}
