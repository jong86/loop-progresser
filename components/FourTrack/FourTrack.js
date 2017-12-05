import React from 'react';
import { View } from 'react-native';

import AudioTrack from './AudioTrack'
import Controls from './Controls'

import styles from './styles';

export default class FourTrack extends React.Component {
  render() {
    return (
      <View
        style={styles.main}>

        <AudioTrack />
        <AudioTrack />
        <AudioTrack />
        <AudioTrack />

        <Controls />

      </View>
    );
  }
}
