import {Platform, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import constant from '../../utility/constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.white,
  },
  rowView: {
    flexDirection: 'row',
    minHeight: constant.margin56,
  },
  font16: {
    fontSize: 16,
    fontFamily: constant.interBlack,
  },
  font14: {
    fontSize: 14,
    fontFamily: constant.interLight,
  },
  jC: {
    justifyContent: 'center',
  },
  absoluteUserImg: {
    height: constant.margin56,
    width: constant.margin56,
    borderRadius: constant.margin56 / 2,
    position: 'absolute',
    right: 0,
  },
  menuItemWrapper: {
    minHeight: constant.margin56,
    width: constant.ScreenWidth - 48,
    borderRadius: 15,
    backgroundColor: constant.whiteLight,
    justifyContent: 'center',
    alignSelf: 'center',
  }
});
