import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Svg } from 'expo';


const trackControl = (type) => {
  let specificStyle;
  switch(type) {
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
        {type}
      </Text>
    </View>
  )
}


export default class AudioTrack extends React.Component {

  render() {
    return (
      <View
        style={styles.main}>

        {trackControl("PLAY")}

        {trackControl("REC")}

      </View>
    );
  }
}
