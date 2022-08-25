import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Modal,
} from 'react-native';
import Header from '../../components/Header';
import constant from '../../utility/constant';
import CustomBtn from '../../components/CustomBtn';

const ProfileInformation = props => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          centerText={'KhelCourt'}
          backColor={constant.white}
          leftIcon={true}
          rightComponent={() => (
            <Image
              style={{width: 24, height: 24}}
              source={require('../../assets/images/icon/messagesblack.png')}
            />
          )}
          leftPress={() => props.navigation.goBack()}
        />
        <View style={styles.centerContainer}>
          <Image
            style={{
              borderWidth: 1,
              borderColor: constant.primaryColor,
              borderRadius: 40,
              alignSelf: 'center',
              width: 88,
              height: 88,
              resizeMode: 'contain',
              marginTop: 32,
            }}
            source={require('../../assets/images/Profile.png')}
          />

          <Text
            style={[styles.orangeText, {marginTop: 16, textAlign: 'center'}]}>
            Profile
          </Text>
          <View style={[styles.TextInputView, {marginTop: 40}]}>
            <Text style={styles.greyText}>First Name</Text>
            <TextInput style={styles.InputStyle} value={'Court'} />
          </View>
          <View style={styles.TextInputView}>
            <Text style={styles.greyText}>Last Name</Text>
            <TextInput style={styles.InputStyle} value={'Manager'} />
          </View>
          <View style={styles.TextInputView}>
            <Text style={styles.greyText}>Email</Text>
            <TextInput
              style={styles.InputStyle}
              value={'courtmanager@gmail.com'}
            />
          </View>
          <View style={styles.TextInputView}>
            <Text style={styles.greyText}>Phone</Text>
            <TextInput style={styles.InputStyle} value={'+92 310 4321987'} />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity style={styles.ApplyBtn}>
              <Text
                style={{
                  fontFamily: constant.interRegular,
                  fontSize: 16,
                  color: constant.white,
                  fontWeight: '500',
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.white,
  },
  centerContainer: {
    flex: 1,
    width: constant.ScreenWidth - 48,
    alignSelf: 'center',
  },

  ApplyBtn: {
    width: '100%',
    borderRadius: 20,
    height: 48,
    backgroundColor: constant.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greyText: {
    fontFamily: constant.interRegular,
    fontSize: 12,
    color: '#72777A',
  },
  MidBlack: {
    fontFamily: constant.interSeiBold,
    fontSize: 18,
    color: constant.midBlack,
  },
  orangeText: {
    fontFamily: constant.interSeiBold,
    fontSize: 16,
    color: constant.primaryColor,
  },
  TextInputView: {
    width: '100%',
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(227, 229, 229, 1)',
    marginBottom: 15,
    paddingLeft: 16,
    paddingTop: 8,
  },
  InputStyle: {
    fontFamily: constant.interRegular,
    fontSize: 16,
    color: '#090A0A',
    width: '100%',
  },
});

export default ProfileInformation;
