import React from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';
import styles from './_styles_AudioTrack';

export default TrackControl = (props) => {

  //
  // Component style switch:
  // (icons can go in here)
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


  //
  //
  //
  const { isOn } = props;
  return (
    <TouchableHighlight
      style={[styles.trackControl, specificStyle, isOn ? { opacity: 0.45 } : { opacity: 1 }]}
      underlayColor="#ffff33"
      onPress={props.specificFunction}>
      {/* TODO: CAN REFACTOR THE FUNCTIONS TO BE ADDED AS 'onPress' IN PARENT */}
      <Text
        style={styles.trackControlText}>
        {props.type}
      </Text>
    </TouchableHighlight>
  )
}
