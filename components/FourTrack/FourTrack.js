import React from 'react';
import { View } from 'react-native';

import AudioTrack from './AudioTrack/AudioTrack'
import MasterControls from './MasterControls/MasterControls'

import styles from './_styles_FourTrack';

const uuidv4 = require('uuid/v4');

export default class FourTrack extends React.Component {
  constructor(props) {
    super(props);
    this.id = uuidv4();
  }

  render() {
    // console.warn("from parent:", this.id)

    return (
      <View
        style={styles.main}>

        <AudioTrack idParent={this.id} />

        <MasterControls />

      </View>
    );
  }
}
