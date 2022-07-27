import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Alert,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFocusEffect} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import {connect} from 'react-redux';
import moment from 'moment';
import {UpdateDocValue} from '../../services/FirestoreFunctions';
import styles from './styles';
import constant from '../../utility/constant';
import {setAuthUser} from '../../store/actions/AuthUser';
import Loader from '../../components/Loader';
const iconsize = 25;
const UserDetails = ({route, navigation, userData}) => {
  const {userDetailData} = route.params;
  const [loading, setLoading] = useState(false);

  const openlocation = (lat = 31.501578, lng = 74.326199) => {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${lat},${lng}`;
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };
  console.log('userDetailData', userDetailData);
  const userUpdate = (blocked, id) => {
    setLoading(true);
    Alert.alert(
      'Verify',
      `You really wanna ${blocked ? 'block' : 'unblock'} user?`,
      [
        {
          text: 'Yes',
          onPress: () => {
            firestore()
              .collection('USERS')
              .doc(id)
              .update({blocked: blocked})
              .then(() => {
                setLoading(false);
                navigation.goBack()
              });
          },
        },
        {
          text: 'No',
          onPress: () => setLoading(false),
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={{
            position: 'absolute',
            zIndex: 1,
            top: '5%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name={'keyboard-backspace'} size={40} />
        </TouchableOpacity>
        <Image
          source={
            userDetailData
              ? {uri: userDetailData.profileImage}
              : require('../../assets/images/splash.jpeg')
          }
          style={styles.imageStyle}
        />
        <View style={styles.desView}>
          <Text numberOfLines={1} style={styles.titleText}>
            {userDetailData?.name ? userDetailData.name : 'Name'}
          </Text>
          <TouchableOpacity
            onPress={() => {
              openlocation(
                userDetailData?.location?.direction?.lat,
                userDetailData?.location?.direction?.long,
              );
            }}>
            <Text style={styles.timeText}>
              <Ionicons name={'md-location-sharp'} size={iconsize} />
              {'  '}
              {userDetailData.location
                ? userDetailData.location.address
                : '1001 Albany Ave, Hartford, CT 06112, United States'}
            </Text>
          </TouchableOpacity>
          {userDetailData.blocked ? (
            <TouchableOpacity
              onPress={() => userUpdate(false, userDetailData._id)}
              style={[styles.statusbtn, {backgroundColor: '#31db0f'}]}>
              <Text style={styles.statusbtntext}>Unblock</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => userUpdate(true, userDetailData._id)}
              style={[styles.statusbtn, {backgroundColor: '#fc4747'}]}>
              <Text style={styles.statusbtntext}>Block</Text>
            </TouchableOpacity>
          )}
          {/* <View style={styles.timeView}>
            <Text style={styles.timeText}>
              <FontAwesome name={'user-o'} size={iconsize} />
              {'  '}
              {eventDetail.host ? eventDetail.host.name : 'M.Ahmed'}
            </Text>
            <Text style={styles.timeText}>
              <Ionicons name={'ios-time-outline'} size={iconsize} />
              {'  '}
              {eventDetail.date
                ? moment(eventDetail.date).format('h:mm a')
                : '12:10 am'}
            </Text>
            <Text style={styles.timeText}>
              <Ionicons name={'md-calendar-sharp'} size={iconsize} />
              {'  '}
              {eventDetail.date
                ? moment(eventDetail.date).format('MMMM Do YYYY')
                : 'HUNE 16TH 2022'}
            </Text>
            <TouchableOpacity
              onPress={() => {
                openlocation(
                  eventDetail?.location?.direction?.lat,
                  eventDetail?.location?.direction?.long,
                );
              }}>
              <Text style={styles.timeText}>
                <Ionicons name={'md-location-sharp'} size={iconsize} />
                {'  '}
                {eventDetail.location
                  ? eventDetail.location.address
                  : '1001 Albany Ave, Hartford, CT 06112, United States'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BtnMainView}>
            {userData && (
              <TouchableOpacity
                onPress={() => eventUpdate()}
                style={[
                  styles.AttendBtn,
                  {backgroundColor: constant.successgreen},
                ]}>
                <Text style={styles.BtnText}>Approve</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={[styles.AttendBtn, {backgroundColor: constant.rejectred}]}
              onPress={() => console.log('jkjk', userData)}>
              <Text style={styles.BtnText}>Reject</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
      {loading && <Loader />}
    </View>
  );
};
const mapStateToProps = state => {
  return {
    userToken: state.authData.token,
    userData: state.authData.userData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetUserData: data => {
      dispatch(setAuthUser(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
