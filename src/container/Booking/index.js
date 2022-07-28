import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';

const Booking = props => {
  useEffect(() => {
  }, []);

  return (
    <View style={styles.container}>
      <Text>Booking</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
