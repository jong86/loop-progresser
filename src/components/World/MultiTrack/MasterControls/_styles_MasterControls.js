import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#222',
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0)'
  },

  buttonWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },

  trackControl: {
    width: '33.33333%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  trackControlText: {
    margin: 0,
    padding: 0,
  },

  buttonPlay: {
    borderColor: 'forestgreen',
    borderBottomLeftRadius: 10,
    borderWidth: 2,
  },
  buttonRecord: {
    borderColor: 'tomato',
    borderWidth: 2,
  },
  buttonStop: {
    borderColor: 'steelblue',
    borderBottomRightRadius: 10,
    borderWidth: 2,
  },
});
