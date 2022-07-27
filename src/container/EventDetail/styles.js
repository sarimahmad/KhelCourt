import {Platform, StyleSheet, Dimensions} from 'react-native';
import constant from '../../utility/constant';
const {height, width} = Dimensions.get('screen');
const imageheight = height * 0.39;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.white,
  },
  viewPager: {
    // flex: 4,
    height: imageheight,
  },
  imageStyle: {
    height: imageheight,
    width: '100%',
  },

  baseText: {},
  titleText: {
    fontSize: 20,
    fontFamily: constant.PoppinsMedium,
    color: constant.primaryColor,
    marginTop: 10,
  },
  desText: {
    fontSize: 17,
    fontFamily: constant.PoppinsRegular,
    marginTop: 10,
    textAlign: 'center',
  },
  timeText: {
    fontFamily: constant.PoppinsRegular,
    fontSize: 16,
    marginTop: '3%',
  },
  dateText: {
    fontFamily: constant.PoppinsRegular,
    fontSize: 16,
  },
  desView: {
    backgroundColor: constant.white,
    flex: 1,
    paddingHorizontal: '5%',
  },
  BtnMainView: {
    // alignItems:'center'
    marginTop: '5%',
    marginBottom: '10%',
  },
  BtnText: {
    fontSize: 16,
    fontFamily: constant.PoppinsMedium,
    color: constant.white,
  },
  AttendBtn: {
    backgroundColor: constant.primaryColor,
    alignItems: 'center',
    marginHorizontal: '10%',
    marginTop: 10,
    // paddingVertical:10,
    borderRadius: 15,
    height: 40,
    justifyContent: 'center',
  },
});
