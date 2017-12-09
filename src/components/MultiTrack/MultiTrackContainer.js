import React from 'react';

import MultiTrack from './MultiTrack'
import MasterControlsContainer from './MasterControls/MasterControlsContainer';
import AddTrackButton from './AddTrackButton'

import AudioTrackContainer from './AudioTrack/AudioTrackContainer';

import uuidv4 from 'uuid/v4';

export default class MultiTrackContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioTracksList: [],
      numAudioTracks: 0
    }
  }

  componentWillMount() {
    this._addTrack()
  }


  _addTrack = () => {
    this.setState({
      audioTracksList: this.state.audioTracksList.concat([
        <AudioTrackContainer key={uuidv4()} id={0} multiTrackId={0} />,
      ]),
      numAudioTracks: this.state.numAudioTracks + 1
    })
  }


  render() {
    return (
      <MultiTrack id={0}>

        { this.state.audioTracksList }

        <MasterControlsContainer multiTrackId={0} />
      </MultiTrack>
    )
  }
}
