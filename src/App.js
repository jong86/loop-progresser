import React from 'react';
import {
  Alert,
  StatusBar,
  View,
} from 'react-native';


import WorldContainer from './containers/World/WorldContainer';


async function askForMicPermission() {
  const { Permissions } = Expo;
  const { status } = await Permissions.getAsync(Permissions.AUDIO_RECORDING);
  if (status !== 'granted') {
    alert('Recording is disabled.');
  }
}


export default class App extends React.Component {
  componentWillMount() {
    askForMicPermission();
  }

  render() {
    return (
      <View>
        <StatusBar hidden />
        <WorldContainer />
      </View>
    );
  }
}
