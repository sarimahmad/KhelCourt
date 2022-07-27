import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import moment from 'moment';

import constant from '../../utility/constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('window');
const EventCard = ({
  data,
  navigation,
  tabActive,
  onPressApprove,
  onPressReject,
}) => {
  // console.log('data', data);
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() =>
        navigation.navigate('EventDetail', {
          eventData: data,
        })
      }>
      <Image source={{uri: data.pic}} style={styles.imageStyle} />
      <View style={styles.desView}>
        <View
          style={{
            // backgroundColor: 'red',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text numberOfLines={1} style={styles.titleText}>
            {data.name}
          </Text>
          {data.access == 'private' ? (
            <FontAwesome size={30} name={'lock'} />
          ) : (
            <View />
          )}
        </View>
        {/* <Text style={styles.desText} numberOfLines={2}>
          <MaterialIcons name={'description'} /> {data.description}
        </Text> */}
        <Text style={styles.nameText} numberOfLines={1}>
          <FontAwesome name={'user-o'} /> {data.host.name}
        </Text>
        <View style={styles.timeView}>
          <Text style={styles.timeText}>
            <Ionicons name={'ios-time-outline'} />{' '}
            {moment(data.date).format('LT')}
          </Text>
          <Text style={styles.dateText}>
            <Ionicons name={'md-calendar-sharp'} />{' '}
            {moment(data.date).format('LL')}
          </Text>
        </View>
        {tabActive == 0 ? (
          <View style={styles.statusButtonsView}>
            <TouchableOpacity
              onPress={onPressApprove}
              style={[
                styles.statusButtons,
                {backgroundColor: constant.successgreen},
              ]}>
              <Text style={styles.statusbtn}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressReject}
              style={[
                styles.statusButtons,
                {backgroundColor: constant.rejectred},
              ]}>
              <Text style={styles.statusbtn}>Reject</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginBottom: '10%',
  },
  baseText: {},
  titleText: {
    fontSize: 18,
    fontFamily: constant.PoppinsMedium,
    color: constant.primaryColor,
  },
  desText: {
    fontSize: 12,
    fontFamily: constant.PoppinsRegular,
  },
  nameText: {
    fontSize: 14,
    fontFamily: constant.PoppinsRegular,
    // color: constant.primaryColor,
  },
  timeText: {
    fontFamily: constant.PoppinsRegular,
    fontSize: 12,
  },
  dateText: {
    fontFamily: constant.PoppinsRegular,
    fontSize: 12,
  },
  imageStyle: {
    height: Platform.OS == 'ios' ? height * 0.15 : height * 0.18,
    width: width * 0.25,
    borderRadius: 15,
    zIndex: 1,
  },
  desView: {
    paddingLeft: '20%',
    backgroundColor: constant.white,
    borderRadius: 15,
    position: 'absolute',
    height: Platform.OS == 'ios' ? height * 0.15 : height * 0.18,
    width: width * 0.78,
    right: 0,
    top: 20,
    paddingVertical: '2%',
    paddingHorizontal: '3%',
  },
  timeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusButtonsView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '5%',
  },
  statusButtons: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    borderRadius: 7,
  },
  statusbtn: {
    fontFamily: constant.PoppinsRegular,
    color: constant.white,
  },
});

export default EventCard;
