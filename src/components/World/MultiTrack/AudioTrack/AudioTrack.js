import React, { Component } from 'react';
import { Text, View } from 'react-native';

import ArmButton from './ArmButton';
import styles from './_styles_AudioTrack';

import Expo, { Asset, Audio, FileSystem, Font, Permissions } from 'expo';

export default class AudioTrack extends Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
      await Font.loadAsync({
      'monospace': require('../../../../assets/fonts/OverpassMono-Bold.ttf'),
    });

    this.setState({ fontLoaded: true })
  }

  _getTimestamp = () => {
    _formatMilliseconds = (milliseconds) => {
      return new Date(Number(milliseconds)).toISOString().slice(14, -2);
    }

    if (!this.props.isMultiTrackPlaying && this.props.recordingDuration) {
      // If a sound is currently being recorded
      const milliseconds = this.props.recordingDuration.durationMillis;
      console.log('milliseconds recorded:', milliseconds);
      return `${_formatMilliseconds(milliseconds)}`;
    } else if (this.props.isMultiTrackPlaying && this.props.soundData.status) {
      // If there's a sound already recorded
      const milliseconds = this.props.soundData.status.positionMillis;
      console.log('milliseconds played:', milliseconds);
      return `${_formatMilliseconds(milliseconds)}`;
    } else {
    return `${_formatMilliseconds(0)}`;
    }
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

        {
          this.state.fontLoaded && (
            <Text
              style={[styles.text, {fontFamily: 'monospace'}]}
            >
              {this._getTimestamp()}
            </Text>
          )
        }
      </View>
    )
  }
}
