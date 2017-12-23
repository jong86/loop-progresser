import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: '#222',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0)'
  },


  buttonWrapper: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  trackControl: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },

  trackControlText: {
    margin: 0,
    padding: 0,
  },

  buttonPlay: {
    backgroundColor: 'forestgreen',
  },
  buttonRecord: {
    borderRadius: 32,
    backgroundColor: 'tomato',
  },
  buttonStop: {
    backgroundColor: 'steelblue',
  },

});
