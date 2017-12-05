'use strict'

import React from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import styles from './_styles_AudioTrack';

export default class TrackControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Sets specific attributes of the control button:
    let specificStyle;
    let specificFunction;
    switch(this.props.type) {
      case "PLAY":
        specificStyle = styles.buttonPlay;
        specificFunction = this.props.onPlay;
        break;
      case "STOP":
        specificStyle = styles.buttonStop;
        specificFunction = this.props.onStop;
        break;
      case "REC":
        specificStyle = styles.buttonRecord;
        specificFunction = this.props.onRecord;
        break;
      default:
        break;
    }

    return (
      <TouchableHighlight
        style={[styles.trackControl, specificStyle]}
        underlayColor="#ff00ff"
        onPress={this.props.specificFunction}
      >
        <Text
          style={styles.trackControlText}
          >
          {this.props.type}
        </Text>
      </TouchableHighlight>
    )
  }
}

export { TrackControl }
