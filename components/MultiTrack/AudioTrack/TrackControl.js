import React from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';
import styles from './_styles_AudioTrack';

export default TrackControl = (props) => {
  // Sets specific attributes of the control button:
  let specificStyle;
  switch(props.type) {
    case "PLAY":
      specificStyle = styles.buttonPlay;
      break;
    case "STOP":
      specificStyle = styles.buttonStop;
      break;
    case "REC":
      specificStyle = styles.buttonRecord;
      break;
    default:
      break;
  }

  return (
    <TouchableHighlight
      style={[styles.trackControl, specificStyle]}
      underlayColor="#ff00ff"
      onPress={props.specificFunction}>
      <Text
        style={styles.trackControlText}>
        {props.type}
      </Text>
    </TouchableHighlight>
  )
}
