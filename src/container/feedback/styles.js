import {Platform, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import constant from '../../utility/constant'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.whiteGrey,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
