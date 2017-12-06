import React from "react";
import { View } from 'react-native';

import styles from './_styles_MultiTrack';

export default MultiTrack = (props) => (
  <View
    style={styles.main}>
    {props.children}
  </View>
)
