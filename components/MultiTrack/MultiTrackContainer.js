import React from 'react';

import MultiTrack from './MultiTrack'
import MasterControls from './MasterControls/MasterControls';
import AddTrackButton from './AddTrackButton'

import AudioTrackContainer from './AudioTrack/AudioTrackContainer';


export default class MultiTrackContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     audioTracksList = []
  //   }
  // }

  // componentWillMount() {
  //   this.setState({
  //     audioTracksList: audioTracksList.concat(<AudioTrackContainer />)
  //   })
  // }

  render() {
    return (
      <MultiTrack>
        <AddTrackButton />

        <AudioTrackContainer />


        <MasterControls />
      </MultiTrack>
    )
  }
}
