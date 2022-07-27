import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  RefreshControl,
} from 'react-native';
import {connect} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

import SearchBar from '../../components/SearchBar';
import styles from './styles';
import constant from '../../utility/constant';
import UserCard from '../../components/userCard';

const SplashScreen = props => {
  const [tabActive, setActiveTab] = useState(0);
  const [activeUser, setActiveUser] = useState([]);
  const [blockedUser, setBlockedUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getBlockedList();
    getUserList();
  }, []);
  const renderItem = ({item}) => {
    return (
      <UserCard
        data={item}
        tabActive={tabActive}
        navigation={props.navigation}
        onPressBlock={() => userUpdate(true, item._id)}
        onPressUnBlock={() => userUpdate(false, item._id)}
      />
    );
  };
  const getBlockedList = () => {
    const pageToRender = currentPage + 1;
    firestore()
      .collection('USERS')
      .where('blocked', '==', true)
      .limit(pageToRender * 10)
      .get()
      .then(querySnapshot => {
        let blockarr = querySnapshot.docs.map(doc => doc.data());
        if (blockarr.length > blockedUser.length) {
          setBlockedUser(blockarr);
          setCurrentPage(pageToRender);
        } else {
          setBlockedUser(blockarr);
        }
      })
      .catch(error => {
        console.log('err', error);
        setRefreshing(false);
      });
  };
  const getUserList = () => {
    const pageToRender = currentPage + 1;
    firestore()
      .collection('USERS')
      .where('blocked', '==', false)
      .limit(pageToRender * 10)
      .get()
      .then(querySnapshot => {
        let activearr = querySnapshot.docs.map(doc => doc.data());
        if (activearr.length > activeUser.length) {
          setActiveUser(activearr);
          setCurrentPage(pageToRender);
        } else {
          setActiveUser(activearr);
        }
        setRefreshing(false);
      })
      .catch(error => {
        console.log('err', error);
        setRefreshing(false);
      });
  };
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
                getBlockedList();
                getUserList();
                setLoading(false);
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
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    getBlockedList();
    getUserList();
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

  searchUser = (text, status) => {
    firestore()
      .collection('USERS')
      .where('blocked', '==', !status)
      .get()
      .then(querySnapshot => {
        let activearr = querySnapshot.docs.map(doc => doc.data());
        activearr = activearr.filter(x => x.name.includes(text));
        console.log(activearr);
        status ? setActiveUser(activearr) : setBlockedUser(activearr);
      })
      .catch(error => {
        console.log('err', error);
      });
  };
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
                  tabActive === 1 ? constant.primaryColor : constant.whiteGrey,
              },
            ]}>
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.topButton,
            {
              backgroundColor:
                tabActive === 1 ? constant.primaryColor : constant.whiteGrey,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            },
          ]}
          onPress={() => setActiveTab(1)}>
          <Text
            style={[
              styles.topBtnText,
              {
                color:
                  tabActive === 0 ? constant.primaryColor : constant.whiteGrey,
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
            searchUser(searchText, tabActive == 0 ? true : false);
          } else {
            tabActive == 0 ? getUserList() : getBlockedList();
          }
        }}
        onChangeText={text => {
          setSearchText(text);
        }}
        onPressCancel={() => {
          setSearchText('');
          tabActive == 0 ? getUserList() : getBlockedList();
        }}
        // customStyle={{
        //   width: '70%',
        // }}
      />
      {tabActive == 0 ? (
        <View style={{flex: 1}}>
          <FlatList
            // style={{marginBottom: '11%'}}
            contentContainerStyle={{
              marginHorizontal: '5%',
            }}
            extraData={loading}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            onEndReached={() => {
              if (searchText.trim().length < 1) {
                getUserList();
              }
            }}
            data={activeUser}
            renderItem={renderItem}
            keyExtractor={item => item._id}
            ListEmptyComponent={emptylist}
          />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            // style={{marginBottom: '11%'}}
            contentContainerStyle={{
              marginHorizontal: '5%',
              // marginVertical: '5%',
            }}
            extraData={loading}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            onEndReached={() => {
              if (searchText.trim().length < 1) {
                getBlockedList();
              }
            }}
            data={blockedUser}
            renderItem={renderItem}
            keyExtractor={item => item._id}
            ListEmptyComponent={emptylist}
          />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
