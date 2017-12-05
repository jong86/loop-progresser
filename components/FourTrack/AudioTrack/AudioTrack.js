import React from 'react';
import { Text, View } from 'react-native';
import styles from './stylesAudioTrack';
import { Svg } from 'expo';
import { TrackControl } from './TrackControl'


export default class AudioTrack extends React.Component {
  render() {
    return (
      <View
        style={styles.main}>

        <TrackControl
          type="PLAY"
        />

        <TrackControl
          type="REC"
        />

      </View>
    );
  }
}
