import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';
import firestore, {arrayUnion} from '@react-native-firebase/firestore';

import styles from './styles';
import constant from '../../utility/constant';
import EventCard from '../../components/eventCard';
import SearchBar from '../../components/SearchBar';
const Events = props => {
  const [tabActive, setActiveTab] = useState(0);
  const [pendingEvents, setPendingEvents] = useState([]);
  const [approvedEvents, setApprovedEvents] = useState([]);
  const [blockedEvents, setBlockedEvents] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getPendingEvents();
    getApprovedEvents();
    getBlockedEvents();
    updateEventExpireAndUserRating();
  }, []);
  const getPendingEvents = () => {
    const LimitPage = currentPage + 1;
    firestore()
      .collection('EVENTS')
      .where('status', '==', '0')
      .limit(LimitPage * 10)
      .get()
      .then(querySnapshot => {
        let blockarr = querySnapshot.docs.map(doc => doc.data());
        if (blockarr.length > pendingEvents) {
          setPendingEvents(blockarr);
          setCurrentPage(LimitPage);
        } else {
          setPendingEvents(blockarr);
        }
      })
      .catch(error => {
        setRefreshing(false);

        console.log('err', error);
      });
  };
  const getApprovedEvents = () => {
    const LimitPage = currentPage + 1;
    firestore()
      .collection('EVENTS')
      .where('status', '==', '1')
      .limit(LimitPage * 10)
      .get()
      .then(querySnapshot => {
        let blockarr = querySnapshot.docs.map(doc => doc.data());
        if (blockarr.length > approvedEvents.length) {
          setApprovedEvents(blockarr);
          setCurrentPage(LimitPage);
        } else {
          setApprovedEvents(blockarr);
        }
      })
      .catch(error => {
        console.log('err', error);
        setRefreshing(false);
      });
  };
  const getBlockedEvents = () => {
    const LimitPage = currentPage + 1;
    firestore()
      .collection('EVENTS')
      .where('status', '==', '2')
      .limit(LimitPage * 10)
      .get()
      .then(querySnapshot => {
        let blockarr = querySnapshot.docs.map(doc => doc.data());
        if (blockarr.length > blockedEvents) {
          setBlockedEvents(blockarr);
          setCurrentPage(LimitPage);
        } else {
          setBlockedEvents(blockarr);
        }
        setRefreshing(false);
      })
      .catch(error => {
        console.log('err', error);
        setRefreshing(false);
      });
  };
  const eventUpdate = (status, id) => {
    setLoading(true);
    Alert.alert('Verify', 'You really wanna to update event?', [
      {
        text: 'Yes',
        onPress: () => {
          firestore()
            .collection('EVENTS')
            .doc(id)
            .update({status: status.toString()})
            .then(() => {
              getPendingEvents();
              getApprovedEvents();
              getBlockedEvents();
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

  const updateEventExpireAndUserRating = async () => {
    firestore()
      .collection('EVENTS')
      .where('status', '==', '1')
      .where('expired', '==', false)
      .get()
      .then(querySnapshot => {
        querySnapshot.docs.map(doc => {
          const docItem = doc.data();
          let dateTime = new Date(docItem.date);
          const result = addHours(docItem.duration, dateTime);
          var now = new Date();
          var then = result;
          var difference = moment(then, 'DD/MM/YYYY HH:mm:ss').diff(
            moment(now, 'DD/MM/YYYY HH:mm:ss'),
          );
          if (difference < 1) {
            firestore()
              .collection('EVENTS')
              .doc(docItem._id)
              .update({
                expired: true,
              })
              .then(() => {
                if (docItem.attendes_id && docItem.attendes_id.length > 0) {
                  docItem.attendes_id.map(itemUser => {
                    if (
                      docItem.attended_id &&
                      docItem.attended_id.length > 0 &&
                      docItem.attended_id.includes(itemUser)
                    ) {
                      firestore()
                        .collection('USERS')
                        .doc(itemUser)
                        .update({
                          ratting: firestore.FieldValue.arrayUnion({
                            value: 5,
                            event_id: docItem._id,
                          }),
                        });
                    } else {
                      firestore()
                        .collection('USERS')
                        .doc(itemUser)
                        .update({
                          ratting: firestore.FieldValue.arrayUnion({
                            value: 0,
                            event_id: docItem._id,
                          }),
                        });
                    }
                  });
                }
              });
          }
        });
      })
      .catch(error => {
        setRefreshing(false);

        console.log('err', error);
      });
  };

  function addHours(numOfHours, date) {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

    return date;
  }

  const searchEvent = (text, status) => {
    firestore()
      .collection('EVENTS')
      .where('status', '==', status.toString())
      .get()
      .then(querySnapshot => {
        let activearr = querySnapshot.docs.map(doc => doc.data());
        activearr = activearr.filter(x => x.name.includes(text));
        status == 0
          ? setPendingEvents(activearr)
          : status == 1
          ? setApprovedEvents(activearr)
          : setBlockedEvents(activearr);
      })
      .catch(error => {
        console.log('err', error);
      });
  };
  const renderItem = ({item}) => {
    return (
      <EventCard
        data={item}
        tabActive={tabActive}
        navigation={props.navigation}
        onPressApprove={() => eventUpdate(1, item._id)}
        onPressReject={() => eventUpdate(2, item._id)}
      />
    );
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    updateEventExpireAndUserRating();
    getPendingEvents();
    getApprovedEvents();
    getBlockedEvents();
  }, []);

  const emptylist = () => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: constant.ScreenHeight * 0.7,
        textAlign: 'center',
      }}>
      <Text style={{fontFamily: constant.PoppinsMedium}}>No data Found</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.TopTabcontainer}>
        <TouchableOpacity
          onPress={() => setActiveTab(0)}
          style={[
            styles.topButton,
            {
              backgroundColor:
                tabActive === 0 ? constant.primaryColor : constant.whiteGrey,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            },
          ]}>
          <Text
            style={[
              styles.topBtnText,
              {
                color:
                  tabActive !== 0 ? constant.primaryColor : constant.whiteGrey,
              },
            ]}>
            Pending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.topButton,
            {
              backgroundColor:
                tabActive === 1 ? constant.primaryColor : constant.whiteGrey,
            },
          ]}
          onPress={() => setActiveTab(1)}>
          <Text
            style={[
              styles.topBtnText,
              {
                color:
                  tabActive !== 1 ? constant.primaryColor : constant.whiteGrey,
              },
            ]}>
            Approved
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.topButton,
            {
              backgroundColor:
                tabActive === 2 ? constant.primaryColor : constant.whiteGrey,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            },
          ]}
          onPress={() => setActiveTab(2)}>
          <Text
            style={[
              styles.topBtnText,
              {
                color:
                  tabActive !== 2 ? constant.primaryColor : constant.whiteGrey,
              },
            ]}>
            Blocked
          </Text>
        </TouchableOpacity>
      </View>
      <SearchBar
        value={searchText}
        submit={() => {
          if (searchText.trim().length > 0) {
            searchEvent(searchText, tabActive);
          } else {
            tabActive == 0
              ? getPendingEvents()
              : tabActive == 1
              ? getApprovedEvents()
              : getBlockedEvents();
          }
        }}
        onPressCancel={() => {
          setSearchText('');

          tabActive == 0
            ? getPendingEvents()
            : tabActive == 1
            ? getApprovedEvents()
            : getBlockedEvents();
        }}
        onChangeText={text => {
          setSearchText(text);
        }}
      />

      {tabActive == 0 ? (
        <FlatList
          // style={{marginBottom: '11%'}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          extraData={loading}
          contentContainerStyle={{
            marginHorizontal: '5%',
            // marginVertical: '5%',
          }}
          data={pendingEvents}
          onEndReached={() => {
            if (searchText.trim().length < 1) {
              getPendingEvents();
            }
          }}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          ListEmptyComponent={emptylist}
        />
      ) : tabActive == 1 ? (
        <FlatList
          // style={{marginBottom: '11%'}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReached={() => {
            if (searchText.trim().length < 1) {
              getApprovedEvents();
            }
          }}
          extraData={loading}
          contentContainerStyle={{
            marginHorizontal: '5%',
            // marginVertical: '5%',
          }}
          ListEmptyComponent={emptylist}
          data={approvedEvents}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          extraData={loading}
          // style={{marginBottom: '11%'}}
          contentContainerStyle={{
            marginHorizontal: '5%',
            // marginVertical: '5%',
          }}
          onEndReached={() => {
            if (searchText.trim().length < 1) {
              getBlockedEvents();
            }
          }}
          data={blockedEvents}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          ListEmptyComponent={emptylist}
        />
      )}
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
    onSetUserToken: data => {
      dispatch(setAuthToken(data));
    },
    onSetUserData: data => {
      dispatch(setAuthUser(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
