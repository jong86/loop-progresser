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
      audioTracksList: []
    }
  }

  componentWillMount() {
    this._addTrack()
  }


  _addTrack = () => {
    if (this.state.audioTracksList.length < 3)
      this.setState({
        audioTracksList: this.state.audioTracksList.concat([
          <AudioTrackContainer key={uuidv4()} />,
          <AudioTrackContainer key={uuidv4()} />,
          <AudioTrackContainer key={uuidv4()} />,
          <AudioTrackContainer key={uuidv4()} />,
        ])
      })
  }


  render() {
    return (
      <MultiTrack>

        { this.state.audioTracksList }

        <MasterControlsContainer />
      </MultiTrack>
    )
  }
}
