import React from "react";
import { View } from 'react-native';

import AudioTrackContainer from './AudioTrack/AudioTrackContainer';
import MasterControls from './MasterControls/MasterControls';

import styles from './_styles_MultiTrack';

export default MultiTrack = () => (
  <View
    style={styles.main}>
    <AudioTrackContainer />
    <MasterControls />
  </View>
)
