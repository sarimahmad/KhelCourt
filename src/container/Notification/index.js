import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import styles from './styles';
import constant from '../../utility/constant';
import NotificationCard from '../../components/Notification';
const Notification = props => {
  useEffect(() => {}, []);

  const renderNotification = ({item}) => {
    return <NotificationCard />;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header
        centerText={'KhelCourt'}
        backColor={constant.white}
        rightComponent={() => (
          <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/images/icon/shoppingCart.png')}
            />
          </TouchableOpacity>
        )}
      />
      <View style={{paddingHorizontal: 18}}>
        <Text style={styles.notificationText}>Notification</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.allNotifbtn}>
            <Text style={{color: '#A05E03'}}>New 19</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.allNotifbtn, {backgroundColor: '#FAFAFA'}]}>
            <Text>All 20</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={renderNotification}
        keyExtractor={item => item.id}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
