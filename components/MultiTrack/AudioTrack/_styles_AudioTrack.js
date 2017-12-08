import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    borderBottomWidth: 2,
    backgroundColor: '#333',
    width: '100%',
    height: '22%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonWrapper: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  trackControl: {
    padding: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPlay: {
    borderRadius: 5,
    backgroundColor: '#0f0',
  },
  buttonRecord: {
    borderRadius: 25,
    backgroundColor: '#f00',
  },
  buttonStop: {
    borderRadius: 5,
    backgroundColor: '#33f',
  },

  text: {
    marginBottom: 25,
    color: '#fff',
  },
});