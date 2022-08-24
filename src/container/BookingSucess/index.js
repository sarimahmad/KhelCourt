import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Header from '../../components/Header';
import constant from '../../utility/constant';
import CustomBtn from '../../components/CustomBtn';

const BookingSucess = props => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          centerText={'KhelCourt'}
          backColor={constant.white}
          leftIcon={true}
          leftPress={() => props.navigation.goBack()}
        />
        <View style={styles.centerContainer}>
          <View style={styles.GreenCircle}>
            <Image
              style={{width: 20, height: 13, resizeMode: 'contain'}}
              source={require('../../assets/images/icon/tick.png')}
            />
          </View>
          <Text style={[styles.DarkBlack, {marginTop: 32}]}>
            Booking Done Successfully!
          </Text>
          <Text style={[styles.greyText, {marginVertical: 24}]}>
            Thankyou for making your Booking through{' '}
            <Text style={[styles.greyText, {fontFamily: constant.interBold}]}>
              KhelCourt.
            </Text>
          </Text>
          <Text style={styles.greyText}>
            <Text style={[styles.greyText, {fontFamily: constant.interBold}]}>
              Confirmation Email
            </Text>{' '}
            has been sent to you and to the Court Manager.
          </Text>
          <Text style={[styles.greyText, {marginTop: 24}]}>
            Kindly Reach before your alotted time-slot and show the receipt on
            your arrival to avoid any kind of Inconvenience. Enjoy your Game!
          </Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <CustomBtn
            onPress={() => props.navigation.navigate('BookingSucess')}
            RightIcon={true}
            centerText={'Show Receipt'}
          />
          <TouchableOpacity
          style={styles.ApplyBtn}
          >
            <Text
            style={{fontFamily: constant.interRegular, fontSize: 16, color: constant.primaryColor, fontWeight:"500"}}
            >Back to Home</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 25,
  },
  HeaderText: {
    fontFamily: constant.interRegular,
    fontSize: 18,
    color: constant.black,
  },
  GreenCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#15E657',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 64,
  },
  DarkBlack: {
    fontFamily: constant.interBold,
    fontSize: 18,
    color: '#444444',
  },
  greyText: {
    fontFamily: constant.interLight,
    fontSize: 12,
    color: constant.black,
  },
  ApplyBtn: {
    width: '90%',
    borderRadius: 20,
    alignSelf: 'center',
    height: 48,
    backgroundColor: 'rgba(227, 126, 60, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  }
});

export default BookingSucess;
