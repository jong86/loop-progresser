import React, { Component } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import MultiTrackContainer from '../../containers/MultiTrack/MultiTrackContainer';
import styles from './_styles_World';


export default class World extends Component {
  render() {
    console.log(Dimensions.get('screen'))

    return (
      <ScrollView
        contentContainerStyle={styles.main}
        maximumZoomScale={1.0}
        minimumZoomScale={0.1}
        horizontal
      >
        <View
          style={styles.map}
        >

          <MultiTrackContainer  />

        </View>
      </ScrollView>
    )
  }
}
