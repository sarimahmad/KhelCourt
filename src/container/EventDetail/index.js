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

import styles from './styles';
import constant from '../../utility/constant';
import {setAuthUser} from '../../store/actions/AuthUser';
import Loader from '../../components/Loader';
import EditEventModel from '../../components/EditEvent';

const iconsize = 25;
const EventDetails = ({route, navigation, userData}) => {
  const [editEventModel, setEditEventModel] = React.useState(false);
  const [editDateEvent, setEditDateEvent] = React.useState(false);

  const {eventData} = route.params;
  const [eventDetail, setEventDetail] = useState({});
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

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = getCurrentEventData(eventData._id);

      return () => unsubscribe;
    }, []),
  );

  const getCurrentEventData = id => {
    setLoading(true);

    firestore()
      .collection('EVENTS')
      .doc(id)
      .get()
      .then(data => {
        setEventDetail(data.data());
        console.log(data.data());
        setLoading(false);
      });
  };

  const eventUpdate = status => {
    setLoading(true);
    Alert.alert('Verify', 'You really wanna to update event?', [
      {
        text: 'Yes',
        onPress: () => {
          firestore()
            .collection('EVENTS')
            .doc(eventDetail._id)
            .update({status: status.toString()})
            .then(() => {
              navigation.goBack();
              setLoading(false);
            });
        },
      },
      {
        text: 'No',
        onPress: () => setLoading(false),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <MaterialCommunityIcons
          name={'keyboard-backspace'}
          size={40}
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', zIndex: 1, top: '5%'}}
        />
        <>
          <TouchableOpacity
            style={{position: 'absolute', zIndex: 1, top: '5%', right: '5%'}}>
            <Text
              style={{
                color: constant.primaryColor,
                fontFamily: constant.PoppinsMedium,
                fontSize: 18,
              }}
              onPress={() => {
                setEditDateEvent(false);
                setEditEventModel(true);
              }}>
              Edit
            </Text>
          </TouchableOpacity>

          <EditEventModel
            modalVisible={editEventModel}
            EditEventData={eventData}
            setModalVisible={value => {
              setEditEventModel(value);
              setEditDateEvent(false);
            }}
            setDateModel={value => {
              setEditEventModel(!value);
              setEditDateEvent(value);
            }}
            editDateEvent={editDateEvent}
            navProps={navigation}
          />
        </>

        <Image
          source={
            eventDetail
              ? {uri: eventDetail.pic}
              : require('../../assets/images/splash.jpeg')
          }
          style={styles.imageStyle}
        />
        <View style={styles.desView}>
          <Text style={styles.desText} numberOfLines={3}>
            {eventDetail?.description
              ? eventDetail.description
              : 'This is desription'}
          </Text>
          <Text numberOfLines={1} style={styles.titleText}>
            {eventDetail?.name ? eventDetail.name : 'Name'}
          </Text>

          <View style={styles.timeView}>
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
            {userData && eventData.status == 0 && (
              <>
                <TouchableOpacity
                  onPress={() => eventUpdate(1)}
                  style={[
                    styles.AttendBtn,
                    {backgroundColor: constant.successgreen},
                  ]}>
                  <Text style={styles.BtnText}>Approve</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.AttendBtn,
                    {backgroundColor: constant.rejectred},
                  ]}
                  onPress={() => eventUpdate(2)}>
                  <Text style={styles.BtnText}>Reject</Text>
                </TouchableOpacity>
              </>
            )}
            {userData && eventData.status == 1 && (
              <TouchableOpacity
                style={[
                  styles.AttendBtn,
                  {backgroundColor: constant.rejectred},
                ]}
                onPress={() => eventUpdate(2)}>
                <Text style={styles.BtnText}>Reject</Text>
              </TouchableOpacity>
            )}
            {userData && eventData.status == 2 && (
              <TouchableOpacity
                onPress={() => eventUpdate(1)}
                style={[
                  styles.AttendBtn,
                  {backgroundColor: constant.successgreen},
                ]}>
                <Text style={styles.BtnText}>Approve</Text>
              </TouchableOpacity>
            )}
          </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
