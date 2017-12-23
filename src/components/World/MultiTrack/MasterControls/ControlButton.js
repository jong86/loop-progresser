import React from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from './_styles_MasterControls';


export default ControlButton = (props) => {

  //
  // Component style switch:
  // (icons can go in here)
  let specificStyle;
  let icon;
  const size = '75%'
  const color = "#000"
  switch(props.type) {
    case "PLAY":
      specificStyle = styles.buttonPlay;
      icon = <Ionicons name="ios-play" size={size} color='forestgreen' />
      break;
    case "REC":
      specificStyle = styles.buttonRecord;
      icon = <Ionicons name="ios-mic" size={size} color='tomato' />
      break;
    case "STOP":
      specificStyle = styles.buttonStop;
      icon = <Ionicons name="ios-square" size={size} color='steelblue' />
      break;
    default:
      break;
  }


  //
  //
  //
  const {
    isOn,
    specificFunction,
    type
  } = props;


  return (
    <TouchableHighlight
      style={[styles.trackControl, specificStyle, isOn ? { opacity: 0.45 } : { opacity: 1 }]}
      underlayColor="#ffff33"
      onPress={specificFunction}
    >
      <Text style={styles.trackControlText}>{icon}</Text>
    </TouchableHighlight>
  )
}
