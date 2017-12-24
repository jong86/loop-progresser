import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  world: {
    backgroundColor: '#249',
    width: Dimensions.get('screen').height * 8,
    height: Dimensions.get('screen').width * 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
