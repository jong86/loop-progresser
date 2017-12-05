import React from 'react';
import { View } from 'react-native';

import AudioTrack from './AudioTrack'
import MasterControls from './MasterControls'

import styles from './stylesFourTrack';

export default class FourTrack extends React.Component {
  render() {
    return (
      <View
        style={styles.main}>

        <AudioTrack />
        <AudioTrack />
        <AudioTrack />
        <AudioTrack />

        <MasterControls />

      </View>
    );
  }
}
