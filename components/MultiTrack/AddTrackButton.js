import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './_styles_MultiTrack';


_addTrack = () => {
  console.warn('Calling _addTrack...');
  // this.setState({
  //   audioTracksList: this.state.audioTracksList.concat([<AudioTrackContainer key={uuidv4()} />])
  // })
}

export default AddTrackButton = () => {
  return (
    <TouchableWithoutFeedback style={styles.addTrackButton} onPress={_addTrack} >
      <View>
        <Text style={styles.addTrackButtonText}>+</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
