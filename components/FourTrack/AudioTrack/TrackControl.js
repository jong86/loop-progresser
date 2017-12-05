import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const TrackControl = (props) => {
  let specificStyle;
  switch(props.type) {
    case "PLAY":
      specificStyle = styles.buttonPlay;
      break;
    case "REC":
      specificStyle = styles.buttonRec;
      break;
    default:
      break;
  }

  return (
    <View
      style={[styles.trackControl, specificStyle]}>
      <Text
        style={styles.trackControlText}>
        {props.type}
      </Text>
    </View>
  )
}

export { TrackControl }
