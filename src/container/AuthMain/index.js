import React, { useEffect, useState } from 'react';
import { View, Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import constant from '../../utility/constant';

import styles from './styles';
import CustomBtn from '../../components/CustomBtn';

const AuthMain = props => {
  const [selectedTab, setSelectedTab] = useState(0);
  useEffect(() => {
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.backImage} source={require('../../assets/images/gradientBackground.png')} />
      <SafeAreaView style={[styles.container, { alignItems: 'center' }]}>
        <Image source={require('../../assets/images/logoWithTitle.png')} style={styles.logoImage} />
        <Text style={styles.welcomeText}>
          Welcome to KhelCourt your all in one Solution to everyday Sports Activities
        </Text>
        <Text style={[styles.fontSize16, styles.marginTop]}>
          Explore <Feather name='arrow-right' size={16} color={constant.primaryColor} />
        </Text>
        <Text style={[styles.font14, { marginTop: 71 }]}>
          Continue As
        </Text>
        <View style={[styles.continueAsSwitchWrapper, styles.marginTop]}>
          <TouchableOpacity
            onPress={() => setSelectedTab(0)}
            style={[styles.switchInnerWrapper,
            { backgroundColor: selectedTab == 0 ? constant.white : constant.whiteGrey }]}>
            <Text
              style={[styles.font12, { color: selectedTab == 0 ? constant.selectedBlack : constant.noSelectedBlack }]}>
              Player
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab(1)}
            style={[styles.switchInnerWrapper,
            { backgroundColor: selectedTab == 1 ? constant.white : constant.whiteGrey }]}>
            <Text style={[styles.font12,
            { color: selectedTab == 1 ? constant.selectedBlack : constant.noSelectedBlack }]}>
              Court Manager
            </Text>
          </TouchableOpacity>
        </View>
        <CustomBtn
          centerText={'Login'}
          rightIconColor={constant.white}
          RightIcon={Feather}
          rightIconSize={24}
          rightIconName={'arrow-right'}
          onPress={() => console.log('Login')}
        />
        <CustomBtn
          centerText={'Continue with Facebook'}
          leftIconColor={constant.white}
          backColor={constant.facebookColor}
          LeftIcon={MaterialIcons}
          leftIconSize={24}
          leftIconName={'facebook'}
          onPress={() => console.log('Login')}
        />
        <CustomBtn
          centerText={'Continue with Google'}
          leftIconColor={constant.primaryColor}
          backColor={constant.white}
          centerTextColor={constant.black}
          customMarginTop={constant.margin16}
          LeftIcon={FontAwesome}
          leftIconSize={24}
          leftIconName={'google-plus-circle'}
          onPress={() => console.log('Login')}
        />
        <Text style={[styles.fontSize16, { marginTop: constant.margin50, fontFamily: constant.interBold }]}>
          Don’t have an account?
          <Text onPress={() => props.navigation.navigate('SignUp')}
            style={{ color: constant.primaryColor }}> Sign Up</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthMain);
