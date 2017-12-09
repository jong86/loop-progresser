import React, { Component } from 'react';
import { View } from 'react-native';

import ControlButton from './ControlButton';

import styles from './_styles_MasterControls';


export default class MasterControls extends Component {
  constructor(props) {
    super(props)
  }

  _onRecordPressed = () => {
    console.log('You invoked _onRecordPressed');
  }

  render() {
    console.log("master controls props:", this.props);
    return (
      <View style={styles.main}>

        <View style={styles.buttonWrapper}>
          <ControlButton
            // isOn={this.state.isPlaying}
            type="PLAY"
            // specificFunction={this._onPlayPausePressed}
          />
          <ControlButton
            type="STOP"
            // specificFunction={this._onStopPressed}
          />
          <ControlButton
            // isOn={this.state.isRecording}
            type="REC"
            specificFunction={this._onRecordPressed}
          />
        </View>

      </View>
    )
  }
}
