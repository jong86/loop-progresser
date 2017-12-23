import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: '#222',
    width: 300,
    height: 400,
    alignItems: 'center',
    position: 'absolute',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0)'
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