import {Platform, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import constant from '../../utility/constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  mainUiContainer: {
    backgroundColor: 'rgba(250, 250, 250, 0.3)',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: '2%',
    marginHorizontal: 24,
  },
  continueAsSwitchWrapper: {
    height: 32,
    width: '100%',
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
  },
  lookingText: {
    fontFamily: constant.interBold,
    marginBottom: '3%',
    alignSelf: 'center',
  },
  KhelcourtText: {
    fontFamily: constant.interBold,
    fontSize: 17,
    marginTop: '1%',
  },
  BtnText: {
    fontFamily: constant.interSeiBold,
    marginLeft: '3%',
    color: '#757575',
  },
  btnContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: '5%',
    height: constant.margin47,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '49%',
    marginBottom: '3%',
  },
});
