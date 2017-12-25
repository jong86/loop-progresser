import React, { Component } from "react";
import { FlatList, ScrollView, TouchableHighlight, View } from 'react-native';

import MasterControlsContainer from '../../../containers/World/MultiTrack/MasterControls/MasterControlsContainer';
import AudioTrackContainer from '../../../containers/World/MultiTrack/AudioTrack/AudioTrackContainer';
import MenuContainer from '../../../containers/World/MultiTrack/Menu/MenuContainer';

import styles from './_styles_MultiTrack';


export default class MultiTrack extends Component {
  constructor(props) {
    super(props)

    // this.props.addTrack();
    // this.props.addTrack();
    // this.props.addTrack();
    // this.props.addTrack();
    // this.props.addTrack();
    // this.props.addTrack();
    // this.props.addTrack();
    // this.props.addTrack();
    // this.props.addTrack();
    // this.props.addTrack();
    // this.props.addTrack();

    this.touchTimeDiff = 0

    this.checkDoubleTouch = this.checkDoubleTouch.bind(this)
    this.enterMultiTrackView = this.enterMultiTrackView.bind(this)
  }

  checkDoubleTouch(functionToPerform, event) {
    if (Date.now() - this.touchTimeDiff < 200) {
      functionToPerform(event);
    }
    this.touchTimeDiff = Date.now();
  }

  enterMultiTrackView() {
    this.props.switchToMultiTrackViewMode()
    this.props.zoomIn();
    this.props.scrollToPosition({
      x: this.props.multiTrackData.position.x,
      y: this.props.multiTrackData.position.y,
    })
  }

  renderAudioTracksList() {
    const audioTracks = this.props.multiTrackData.audioTracks;
    return audioTracks.map((audioTrackData, audioTrackIndex) => {
      return (
        <AudioTrackContainer
        {...audioTrackData}
        key={audioTrackData.id} // For React
        id={audioTrackData.id} // Unique identifier for me
        audioTrackIndex={audioTrackIndex} // Index/position in multiTrack array
        multiTrackId={this.props.multiTrackId}
        />
      )
    })
  }


  render() {
    const { position } = this.props.multiTrackData;
    const audioTracks = this.props.multiTrackData.audioTracks;
    return (
      <View
      style={[
        styles.main, {
          top: position.y,
            left: position.x,
          }
        ]}
      >
        <MenuContainer />

        <ScrollView
          style={{
            width: '100%',
            height: '100%',
            borderWidth: 1,
            borderColor: "pink",
          }}
        >
          { audioTracks[0] && this.renderAudioTracksList() }
        </ScrollView>

        <MasterControlsContainer multiTrackId={this.props.multiTrackId} />
      </View>
    )
  }
}
