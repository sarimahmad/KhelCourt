import {StyleSheet} from 'react-native';

import constant from '../../utility/constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: constant.white,
  },
  backImage: {
    position: 'absolute',
    height: constant.ScreenHeight,
    width: constant.ScreenWidth,
    resizeMode: 'stretch',
    marginTop: 12,
  },
  logoImage: {
    height: 82.3,
    width: 71.4,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 14,
    fontFamily: constant.interLight,
    textAlign: 'center',
    paddingHorizontal: 55,
    marginTop: constant.margin16,
  },
  fontSize16: {
   fontSize: 16,
   fontFamily: constant.interExtraBold,
   color: constant.black,
   justifyContent: 'center'
  },
  marginTop: {
    marginTop: constant.margin16,
  },
  font14: {
    fontSize: 14,
    fontFamily: constant.interMedium,
  },
  continueAsSwitchWrapper: {
    height: 32,
    width: constant.ScreenWidth - 48,
    flexDirection: 'row',
    backgroundColor: constant.whiteGrey,
    alignItems: 'center',
    borderRadius: 8,
  },
  switchInnerWrapper: {
   height: 28,
   width: '48.4%',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 6,
   margin: 3,
  },
  font12: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: constant.interBold,
  }
});
