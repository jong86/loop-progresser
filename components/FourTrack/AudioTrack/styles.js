import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: '#333',
    width: '100%',
    height: '22.5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  trackControl: {
    borderWidth: 0.5,
    padding: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonPlay: {
    backgroundColor: '#0f0',
  },
  buttonRec: {
    backgroundColor: '#f00',
  },
});