import React, { useEffect, useState } from 'react';
import { View, Image, SafeAreaView, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux';

import constant from '../../utility/constant';

import styles from './styles';
import CustomBtn from '../../components/CustomBtn';
import CustomTextInput from '../../components/CustomTextInput';
import Header from '../../components/Header';

const SignIn = props => {
  const [selectedTab, setSelectedTab] = useState(0);
  useEffect(() => {
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={[styles.container, { alignItems: 'center' }]}>
        <Header
          centerText={'Login'}
          backColor={constant.white}
          leftIcon={{name: 'chevron-back', color: constant.black}}
          leftPress={() => props.navigation.pop()} />
        <KeyboardAvoidingView enabled={Platform.OS == 'ios' ? true : false}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={[styles.container, { alignItems: 'center' }]}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
          <Text style={styles.welcomeText}>
            Get Started with Your Account
          </Text>
          <CustomTextInput title={'Email'} marginTop={constant.margin16} keyboardType={'email-address'} />
          <CustomTextInput title={'Password'} marginTop={constant.margin16} keyboardType={'name-phone-pad'} />
          <Text style={[styles.fontSize16, { marginTop: constant.margin16 }]}>
            <Text style={{ color: constant.primaryColor }}> Forget Password</Text> 
          </Text>
          <CustomBtn
            centerText={'Sign In'}
            rightIconSize={24}
            customMarginTop={constant.margin20}
            onPress={() => props.navigation.navigate('Main')}
          />
        </KeyboardAvoidingView>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
