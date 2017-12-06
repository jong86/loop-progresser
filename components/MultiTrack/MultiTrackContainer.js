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

    this._addTrack = this._addTrack.bind(this)
  }

  componentWillMount() {
    this._addTrack()
  }

  _addTrack() {
    console.warn('calling _addTrack');
    this.setState({
      audioTracksList: this.state.audioTracksList.concat([<AudioTrackContainer key={uuidv4()} />])
    })
  }

  render() {
    return (
      <MultiTrack>
        <AddTrackButton onPress={this._addTrack} />

        { this.state.audioTracksList }

        <MasterControls />
      </MultiTrack>
    )
  }
}
