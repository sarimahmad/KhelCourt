import {Platform, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import constant from '../../utility/constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.white,
    paddingHorizontal: '4%',
  },
  coverContainer: {
    borderColor: '#E3E5E5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: constant.ScreenHeight * 0.02,
  },
  HeaderText: {
    fontFamily: constant.interRegular,
    fontSize: 16,
  },
  tabActiveStyle: {
    borderBottomWidth: 1,
    borderBottomColor: constant.primaryColor,
  },
  tabMainStyle: {
    width: '50%',
    alignItems: 'center',
    paddingVertical: '3%',
  },
  tabText: {
    fontSize: 16,
    fontFamily: constant.interRegular,
  },
  FilterView: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 20,
    marginVertical: 16,
  },
  innerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '1%',
  },
  innercontanerText: {
    fontSize: 14,
    fontWeight: '500',
  },
  cortText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#757575',
  },
  PlayAreaText: {
    fontSize: 16,
    fontWeight: '400',
    color: constant.black,
  },
  EmptyBox: {
    borderWidth: 1,
    borderColor: '#CDCFD0',
    height: 24,
    width: 24,
    marginRight: 16,
    borderRadius: 2,
  },
  ShadowVideo: {
    width: 43,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  shadowText: {
    fontFamily: constant.interRegular,
    fontSize: 16,
  },
  ApplyBtn:{
    width: '100%',
    borderRadius: 20,
    alignSelf: 'center',
    height: 48,
    backgroundColor: constant.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
