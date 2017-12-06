import React from "react";
import { Text, View } from 'react-native';

import styles from './_styles_MultiTrack';

export default AddTrackButton = (props) => (
  <View style={styles.addTrackButton}>
    <Text style={styles.addTrackButtonText}>+</Text>
  </View>
)
