import React, { Component } from "react";
import { View } from 'react-native';

import MasterControlsContainer from '../../../containers/World/MultiTrack/MasterControls/MasterControlsContainer';
import AudioTrackContainer from '../../../containers/World/MultiTrack/AudioTrack/AudioTrackContainer';
import MenuContainer from '../../../containers/World/MultiTrack/Menu/MenuContainer';

import styles from './_styles_MultiTrack';


export default class MultiTrack extends Component {
  constructor(props) {
    super(props)
    this.props.addTrack()
    this.props.addTrack()
    this.props.addTrack()
    this.props.addTrack()
  }

  render() {
    const audioTracks = this.props.multiTrackStatus.audioTracks;
    const { position } = this.props.multiTrackStatus;
    
    console.log('props for MultiTrack.js', this.props);
    return (
      <View
        style={[
          styles.main,{
            top: position.y,
            left: position.x,
          }
        ]}
      >

        <MenuContainer
          scrollToPosition={this.props.scrollToPosition}
        />

        { audioTracks.map((audioTrackData, audioTrackIndex) =>
          <AudioTrackContainer
            {...audioTrackData}
            key={audioTrackData.id} // For React
            id={audioTrackData.id} // Unique identifier for me
            audioTrackIndex={audioTrackIndex} // Index/position in multiTrack array
            multiTrackId={this.props.multiTrackId}
          />
        )}

        <MasterControlsContainer multiTrackId={this.props.multiTrackId} />

      </View>
    )
  }
}
