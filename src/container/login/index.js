import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../../utility/constant';
import styles from './styles';
import {setAuthToken, setAuthUser} from '../../store/actions/AuthUser';
import {connect} from 'react-redux';
import constant from '../../utility/constant';
import auth from '@react-native-firebase/auth';
import {AuthUser, GetCollection} from '../../services/FirestoreFunctions';

const LoginScreen = ({navigation, onSetUserData}) => {
  const [email, setEmail] = useState('admin@evento.com');
  const [password, setPassword] = useState('123456');
  const [disable, setdisable] = useState(false);
  const loginBtn = () => {
    setdisable(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('User account created & signed in!', res);
        const {uid} = res.user._user;
        console.log('uid', uid);
        AuthUser(uid)
          .then(res => {
            if (res) {
              onSetUserData(res);
              setdisable(false);
              navigation.navigate('bottomTab');
            } else {
              setdisable(false);
              Alert.alert('login error', 'Invalid Email/Password');
            }
          })
          .catch(err => {
            setdisable(false);
            console.log('err', err);
            Alert.alert('login error', 'Invalid Email/Password');
          });
      })
      .catch(error => {
        setdisable(false);
        Alert.alert('login error', error.code);
        console.log('err', error.code);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require('../../assets/images/splash.jpeg')}
      />
      <View
        style={{
          marginBottom: '3%',
          marginHorizontal: '4%',
          marginVertical: '10%',
        }}>
        <Text
          style={{
            fontSize: 22,
            color: colors.black,
            fontFamily: constant.PoppinsMedium,
          }}>
          Sign In
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: '1%',
            color: colors.black,
            fontFamily: constant.PoppinsMedium,
          }}>
          Please enter your email and password
        </Text>
      </View>
      <View style={styles.form}>
        <View style={styles.emailPasswordContainer}>
          <FontAwesome5
            style={{marginLeft: '2%'}}
            name={'user-alt'}
            size={15}
            color={'grey'}
          />

          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.inputText}
            placeholder="Enter Your Email"
            onChangeText={setEmail}
            value={email}
          />
        </View>

        <View style={styles.emailPasswordContainer}>
          <FontAwesome5
            style={{marginLeft: '2%'}}
            name={'key'}
            size={15}
            color={'grey'}
          />
          <TextInput
            autoCapitalize="none"
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="Enter Your Password"
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          disabled={disable}
          onPress={loginBtn}>
          {disable ? (
            <ActivityIndicator size={'small'} color={'white'} />
          ) : (
            <Text
              style={{
                color: 'white',
                fontFamily: constant.PoppinsBold,
                fontSize: 16,
              }}>
              Sign in
            </Text>
          )}
        </TouchableOpacity>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
