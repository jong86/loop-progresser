import React from 'react';
import { View } from 'react-native';
import styles from './_styles_AudioTrack';

export default AudioTrack = (props) => (
  <View style={styles.main}>
    {props.children}
  </View>
)
