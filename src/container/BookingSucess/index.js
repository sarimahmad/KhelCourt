/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Modal,
} from 'react-native';
import Header from '../../components/Header';
import constant from '../../utility/constant';
import CustomBtn from '../../components/CustomBtn';

const BookingSucess = props => {
  const [receipt, setreceipt] = useState(false);
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
            onPress={() => setreceipt(true)}
            RightIcon={true}
            centerText={'Show Receipt'}
          />
          <TouchableOpacity style={styles.ApplyBtn}>
            <Text
              style={{
                fontFamily: constant.interRegular,
                fontSize: 16,
                color: constant.primaryColor,
                fontWeight: '500',
              }}>
              Back to Home
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Modal visible={receipt} animationType={'slide'} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.7)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: constant.ScreenWidth - 32,
              height: constant.ScreenHeight / 1.4,
              backgroundColor: constant.white,
              borderRadius: 10,
              alignItems: 'center',
              paddingHorizontal: 18,
            }}>
            <TouchableOpacity
              style={{width: 15, height: 15, alignSelf: 'flex-end', margin: 16}}
              onPress={() => setreceipt(false)}>
              <Image
                style={{
                  width: 12,
                  height: 12,
                  resizeMode: 'contain',
                }}
                source={require('../../assets/images/icon/close.png')}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  width: 26,
                  height: 30,
                  resizeMode: 'contain',
                  marginRight: 8,
                }}
                source={require('../../assets/images/logo.png')}
              />
              <Text style={styles.BoldBlack}>KhelCourt</Text>
            </View>
            <Text style={[styles.MidBlack, {marginTop: 18}]}>Your Receipt</Text>
            <Text
              style={[styles.greyText, {textAlign: 'center', marginTop: 10}]}>
              Booking details has been sent to the Court Owners. Show them this
              and put your{' '}
              <Text style={[styles.greyText, {fontFamily: constant.interBold}]}>
                Game Face On!!
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 16,
                width: '100%',
              }}>
              <Text style={styles.greyText}>20 Aug, 2022</Text>
              <Text style={styles.greyText}>3:30 PM</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 16,
                width: '100%',
              }}>
              <Text
                style={[
                  styles.MidBlack,
                  {fontSize: 16, fontFamily: constant.interRegular},
                ]}>
                Billed to
              </Text>
              <Text
                style={[styles.greenText, {fontFamily: constant.interRegular}]}>
                Abdul Hannan
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 24,
                width: '100%',
              }}>
              <View>
                <Text
                  style={[
                    styles.MidBlack,
                    {fontSize: 16, fontFamily: constant.interRegular},
                  ]}>
                  Play-In Arena
                </Text>
                <Text style={[styles.greyText, {marginBottom: 2}]}>
                  22 Aug, 2022
                </Text>
                <Text style={[styles.greyText, {marginBottom: 2}]}>
                  Court 1
                </Text>
                <Text style={[styles.greyText, {marginBottom: 2}]}>
                  7:00 PM - 8:00 PM
                </Text>
              </View>

              <Text style={[styles.greenText]}>PKR 1600/-</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 24,
                width: '100%',
              }}>
              <View>
                <Text
                  style={[
                    styles.MidBlack,
                    {fontSize: 16, fontFamily: constant.interRegular},
                  ]}>
                  Play-In Arena
                </Text>
                <Text style={[styles.greyText, {marginBottom: 2}]}>
                  22 Aug, 2022
                </Text>
                <Text style={[styles.greyText, {marginBottom: 2}]}>
                  Court 1
                </Text>
                <Text style={[styles.greyText, {marginBottom: 2}]}>
                  7:00 PM - 8:00 PM
                </Text>
              </View>

              <Text style={[styles.greenText]}>PKR 1600/-</Text>
            </View>

            <View style={styles.BorderLine} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 16,
                width: '100%',
              }}>
              <Text
                style={[
                  styles.MidBlack,
                  {fontSize: 16, fontFamily: constant.interRegular},
                ]}>
                Play-In Arena
              </Text>

              <Text style={[styles.greenText]}>PKR 1600/-</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignSelf: 'flex-end',
              }}>
              <View style={{flexDirection: 'row', marginBottom: 10}}>
                <View style={{marginRight: 15, alignItems: 'center'}}>
                  <Image
                    style={{width: 20, height: 20, marginBottom: 8}}
                    source={require('../../assets/images/icon/share.png')}
                  />
                  <Text style={styles.greyText}>Share</Text>
                </View>
                <View style={{marginRight: 15, alignItems: 'center'}}>
                  <Image
                    style={{width: 20, height: 20, marginBottom: 8}}
                    source={require('../../assets/images/icon/gallery.png')}
                  />
                  <Text style={styles.greyText}>Share</Text>
                </View>
                <View style={{marginRight: 15, alignItems: 'center'}}>
                  <Image
                    style={{width: 20, height: 20, marginBottom: 8}}
                    source={require('../../assets/images/icon/document.png')}
                  />
                  <Text style={styles.greyText}>Share</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
    color: constant.midBlack,
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
  },
  BoldBlack: {
    fontFamily: constant.interExtraBold,
    fontSize: 20,
    color: constant.black,
  },
  MidBlack: {
    fontFamily: constant.interSeiBold,
    fontSize: 18,
    color: constant.midBlack,
  },
  greenText: {
    fontFamily: constant.interSeiBold,
    fontSize: 16,
    color: '#67A079',
  },
  BorderLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#E5E5E5',
    marginTop: 24,
  },
});

export default BookingSucess;
