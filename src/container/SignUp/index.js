import React, { useEffect, useState } from 'react';
import { View, Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import constant from '../../utility/constant';

import styles from './styles';
import CustomBtn from '../../components/CustomBtn';

const SignUp = props => {
  const [selectedTab, setSelectedTab] = useState(0);
  useEffect(() => {
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={[styles.container, { alignItems: 'center' }]}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
        <Text style={styles.welcomeText}>
          Get Started with Your Account
        </Text>
        <CustomBtn
          centerText={'Login'}
          rightIconColor={constant.white}
          RightIcon={Feather}
          rightIconSize={24}
          rightIconName={'arrow-right'}
          onPress={() => console.log('Login')}
        />
        <Text style={[styles.fontSize16, { marginTop: constant.margin50, fontFamily: constant.interBold }]}>
          Don’t have an account?
          <Text style={{ color: constant.primaryColor }}> Sign Up</Text>
        </Text>
      </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
