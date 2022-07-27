import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {connect} from 'react-redux';
import {setAuthToken, setAuthUser} from '../../store/actions/AuthUser';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import SettingsBtn from '../../components/SettingsButton';

const iconSize = 25;
const SettingsTab = ({navigation, userData, onSetUserData}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        onSetUserData(null);
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      });
  };
  return (
    <View style={styles.container}>
      {/* <Text>Settings!</Text> */}
      <SafeAreaView />
      <ScrollView bounces={false}>
        <View style={styles.MainView}>
          <Image
            source={
              userData?.profileImage
                ? {uri: userData?.profileImage}
                : require('../../assets/images/userimage.png')
            }
            style={styles.ProfileImage}
          />
          <Text style={styles.nameText}>{userData?.name}</Text>
        </View>
        {/* <SettingsBtn
          onPress={() => navigation.navigate('Profile')}
          btnName={'Profile'}
          renderIcon={() => <MaterialIcons name={'face'} size={iconSize} />}
        /> */}
        <SettingsBtn
          onPress={() => navigation.navigate('AddEvent')}
          btnName={'Add Event'}
          renderIcon={() => (
            <MaterialCommunityIcons name={'party-popper'} size={iconSize} />
          )}
        />
        <SettingsBtn
          onPress={() => navigation.navigate('Payment')}
          btnName={'Payment Details'}
          renderIcon={() => <MaterialIcons name={'payments'} size={iconSize} />}
        />
        {/* <SettingsBtn
          disabled={true}
          btnName={'Notifications'}
          renderIcon={() => (
            <Switch
              trackColor={{false: 'lightgrey', true: colors.primaryColor}}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          )}
        /> */}
        <SettingsBtn
          onPress={() => navigation.navigate('AddAdmin')}
          btnName={'Add Admin'}
          renderIcon={() => <SimpleLineIcons name={'people'} size={iconSize} />}
        />

        <SettingsBtn
          btnName={'Signout'}
          renderIcon={() => <AntDesign name={'logout'} size={iconSize} />}
          onPress={logout}
        />
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsTab);
