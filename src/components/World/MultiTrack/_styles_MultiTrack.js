import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: '#222',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
  },

  addTrackButton: {
    width: 50,
    height: 50,
    backgroundColor: '#ff0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  addTrackButtonText: {
    fontSize: 25,
  }
});