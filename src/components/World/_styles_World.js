import { Dimensions, StyleSheet } from 'react-native';

const multiplierMain = 1.2
const multiplierMap = 8

export default StyleSheet.create({
  main: {
    backgroundColor: '#152',
    width: Dimensions.get('screen').width * multiplierMap * multiplierMain,
    height: Dimensions.get('screen').height * multiplierMap * multiplierMain,
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    backgroundColor: '#226',
    width: Dimensions.get('screen').width * multiplierMap,
    height: Dimensions.get('screen').height * multiplierMap,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
