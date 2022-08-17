import { Platform, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import constant from '../../utility/constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.white,
  },
  SliderImg: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 253,
  },
  AbsoluteHeaderWrapper: {
    position: 'absolute',
    top: 0,
    width: constant.ScreenWidth,
  },
  headerBtnWrapper: {
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constant.white,
  },
  fontSize16: {
    fontSize: 16,
  },
  fontSize12: {
    fontSize: 12,
  },
  continueAsSwitchWrapper: {
    height: 32,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: constant.whiteGrey,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 24,
  },
  font12: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: constant.interBold,
  },
  switchInnerWrapper: {
    height: 28,
    width: '48.4%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    margin: 3,
  },
});
