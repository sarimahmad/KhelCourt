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
  statusbtntext: {
    fontFamily: constant.PoppinsMedium,
    color: constant.white,
    fontSize: 15,
  },
  statusbtn: {
    height: constant.ScreenHeight * 0.05,
    // width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
