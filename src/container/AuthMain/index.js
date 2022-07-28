import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import constant from '../../utility/constant';

import styles from './styles';

const AuthMain = props => {
  useEffect(() => {
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: constant.interExtraBold, color: constant.white}}>AuthMain</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthMain);
