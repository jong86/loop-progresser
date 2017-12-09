import React, { Component } from "react";
import { View } from 'react-native';

import MasterControlsContainer from '../../containers/MultiTrack/MasterControls/MasterControlsContainer';
import AudioTrackContainer from '../../containers/MultiTrack/AudioTrack/AudioTrackContainer';
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
    // console.log('audioTracks', audioTracks);
    return (
      <View style={styles.main}>

        { audioTracks.map((audioTrackData, audioTrackIndex) =>
          <AudioTrackContainer
            {...audioTrackData}
            key={audioTrackData.id} // For React
            id={audioTrackData.id} // Unique identifier (uuid)
            audioTrackIndex={audioTrackIndex} // Index/position in multiTrack array
            multiTrackId={'0'}
          />
        )}

        <MasterControlsContainer multiTrackId={'0'} />

      </View>
    )
  }
}
