import {Platform, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import constant from '../../utility/constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  allNotifbtn: {
    backgroundColor: '#FFEFD7',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
  },
  notificationText: {
    fontFamily: constant.interMedium,
    fontSize: 17,
    marginVertical:10
  },
});
