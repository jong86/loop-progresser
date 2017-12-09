import React, { Component } from 'react';
import { View } from 'react-native';

import ControlButton from './ControlButton';

import styles from './_styles_MasterControls';


export default class MasterControls extends Component {
  constructor(props) {
    super(props)
    this.onRecordPressed = this.onRecordPressed.bind(this)
  }


  onRecordPressed() {
    this.props.onRecordPressed()
  }

  render() {
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
            specificFunction={this.onRecordPressed}
          />
        </View>

      </View>
    )
  }
}
