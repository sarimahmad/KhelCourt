import {Platform, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import constant from '../../utility/constant'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.whiteGrey,
    paddingTop: Platform.OS == 'android' && '5%',
  },
  TopTabcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '3%',
  },
  topButton: {
    width: width * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.04,
    borderWidth: 1,
    borderColor: constant.primaryColor,
  },
  topBtnText: {
    color: 'white',
    fontSize: 12,
    // fontFam
  },
});
