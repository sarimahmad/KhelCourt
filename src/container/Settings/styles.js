import {Platform, StyleSheet, Dimensions} from 'react-native';
import constant from '../../utility/constant';
const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.whiteGrey,
    paddingHorizontal: '3%',
    paddingBottom: height * 0.09,
    paddingTop: Platform.OS == 'android' && '5%',
  },
  MainView: {
    alignItems: 'center',
  },
  ProfileImage: {
    height: height * 0.13,
    width: height * 0.13,
    borderRadius: 100,
  },
  nameText: {
    marginTop: '2%',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: '5%',
    fontFamily: constant.PoppinsExtraBold,
  },
});
