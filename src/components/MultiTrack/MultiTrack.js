import React, { Component } from "react";
import { View } from 'react-native';

import MasterControlsContainer from './MasterControls/MasterControlsContainer';
import AudioTrackContainer from './AudioTrack/AudioTrackContainer';
import styles from './_styles_MultiTrack';


export default class MultiTrack extends Component {
  componentWillMount = () => {
    this.props.addTrack()
    this.props.addTrack()
    this.props.addTrack()
  }

  render() {
    const audioTracks = this.props.multiTrackStatus.audioTracks;
    return (
      <View style={styles.main}>

        { Object.keys(audioTracks).map(track =>
          <AudioTrackContainer
            {...audioTracks[track]}
            key={audioTracks[track].id}
            id={audioTracks[track].id}
            multiTrackId={'0'}
          />
        )}

        <MasterControlsContainer multiTrackId={'0'} />

      </View>
    )
  }
}
