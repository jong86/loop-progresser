import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    position: 'absolute',
    left: 0,
    right: 0,
    // bottom: 0,
    backgroundColor: 'rgba(64, 64, 64, 1)',
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'silver',
    height: '100%',
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
