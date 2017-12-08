import React from 'react';
import { Alert, Button, Image, StyleSheet, ScrollView, Text, TextInput, View } from 'react-native';

import FourTrackIcon from './FourTrackIcon';

import styles from './_styles_World';

export default class World extends React.Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.world}
        horizontal
        maximumZoomScale={25}
        minimumZoomScale={2}>

        <FourTrackIcon />

        <Text style={styles.text}>Hello Jazzy</Text>

      </ScrollView>
    );
  }
}
