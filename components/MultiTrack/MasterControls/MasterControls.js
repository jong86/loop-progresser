import React from 'react';
import { View } from 'react-native';

import styles from './_styles_MasterControls';

export default MasterControls = (props) => {
  console.log("props:", props);
  return (
    <View style={styles.main}>
      {props.children}
    </View>
  )
}
