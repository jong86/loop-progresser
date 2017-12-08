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
    this._addTrack()
  }


  _addTrack = () => {
    if (this.state.audioTracksList.length < 3)
      this.setState({
        audioTracksList: this.state.audioTracksList.concat([<AudioTrackContainer key={uuidv4()} />])
      })
  }


  render() {
    console.log(this.state.audioTracksList)
    return (
      <MultiTrack>
        { this.state.audioTracksList.length < 3 && <AddTrackButton _addTrack={this._addTrack} /> }

        { this.state.audioTracksList }

        <MasterControls />
      </MultiTrack>
    )
  }
}
