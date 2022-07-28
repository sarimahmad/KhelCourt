import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      if (props.userData == null) {
        console.log('props.userDatalogin', props.userData);
        props.navigation.replace('AuthMain');
      } else {
        console.log('props.userDatabottom', props.userData);
        props.navigation.replace('bottomTab');
      }
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/splash.jpeg')}
        style={{borderRadius: 200}}
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

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
