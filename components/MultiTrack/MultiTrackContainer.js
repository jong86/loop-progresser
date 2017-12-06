import React from 'react';

import MultiTrack from './MultiTrack'
import MasterControls from './MasterControls/MasterControls';
import AddTrackButton from './AddTrackButton'

import AudioTrackContainer from './AudioTrack/AudioTrackContainer';

import uuidv4 from 'uuid/v4';

export default class MultiTrackContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioTracksList: []
    }
  }

  componentWillMount() {
    // this._addTrack()
    console.log("Component mounted.")
  }


  render() {
    return (
      <MultiTrack>
        <AddTrackButton />

        { this.state.audioTracksList }

        <MasterControls />
      </MultiTrack>
    )
  }
}
