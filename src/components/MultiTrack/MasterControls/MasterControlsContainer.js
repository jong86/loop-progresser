import React, { Component } from 'react';
import { View } from 'react-native';

import MasterControls from './MasterControls';
import ControlButton from './ControlButton';
import styles from './_styles_MasterControls';



export default class MasterControlsContainer extends Component {
  constructor(props) {
    super(props)

    this._onMasterRecordPressed = this._onMasterRecordPressed.bind(this)
  }


  _onMasterRecordPressed() {
    return;
  }

  render() {

    return (
      <MasterControls>

        <View style={styles.buttonWrapper}>

          {/* Can extract the commented stuff all to redux/helpers? */}
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
            specificFunction={this._onMasterRecordPressed}
            />

        </View>

      </MasterControls>
    );
  }
}
