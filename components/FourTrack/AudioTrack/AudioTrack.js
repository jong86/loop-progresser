import React from 'react';
import { Text, View } from 'react-native';
import { Svg } from 'expo';

import styles from './_styles_AudioTrack';
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
