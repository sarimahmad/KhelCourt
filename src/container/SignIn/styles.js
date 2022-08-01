import {StyleSheet} from 'react-native';

import constant from '../../utility/constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: constant.white,
  },
  logoImage: {
    height: 82,
    width: 71,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 14,
    fontFamily: constant.interMedium,
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
  font12: {
    fontSize: 12,
    fontFamily: constant.interRegular,
    width: constant.ScreenWidth - 48,
    lineHeight: 16,
  }
});
