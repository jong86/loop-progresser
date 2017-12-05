import React from 'react';
import { View } from 'react-native';

import AudioTrack from './AudioTrack/AudioTrack'
import MasterControls from './MasterControls/MasterControls'

import styles from './_styles_FourTrack';

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
