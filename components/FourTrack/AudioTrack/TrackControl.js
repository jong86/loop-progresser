import React from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import styles from './stylesAudioTrack';

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

  onPress = () => {
    return;
  }

  return (
    <TouchableHighlight
      style={[styles.trackControl, specificStyle]}
      underlayColor="#ff00ff"
      onPress={this.onPress}
    >
      <Text
        style={styles.trackControlText}
        >
        {props.type}
      </Text>
    </TouchableHighlight>
  )
}

export { TrackControl }
