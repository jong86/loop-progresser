import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  addons
} from 'react-native';
import styles from './_styles_MultiTrack';

export default AddTrackButton = (props) => {
  const { _addTrack } = props;
  return (
    <TouchableWithoutFeedback onPress={_addTrack}>
      <View style={styles.addTrackButton}>
        <Text style={styles.addTrackButtonText}>+</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
