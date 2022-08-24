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

const Cart = props => {
  const [dropDown, setdropDown] = useState(false);
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
          <Text style={styles.HeaderText}>Your Court</Text>
          <View style={{marginTop: 36}}>
            <FlatList
              data={[1, 2, 3]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.CarView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={[styles.HeaderText, {fontSize: 14}]}>
                      Order# 1289065
                    </Text>
                    <Image
                      style={{height: 24, width: 24}}
                      source={require('../../assets/images/icon/closecircle.png')}
                    />
                  </View>
                  <View
                    style={{
                      marginTop: 16,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        style={{
                          height: 58,
                          width: 58,
                          marginRight: 12,
                          borderRadius: 10,
                        }}
                        source={require('../../assets/images/coetImage.png')}
                      />
                      <View style={{height: 59}}>
                        <Text
                          style={[
                            styles.HeaderText,
                            {
                              color: '#444444',
                              fontWeight: '500',
                              marginBottom: 8,
                            },
                          ]}>
                          Abdul Hannan
                        </Text>
                        <Text style={styles.greyText}>Play-In Arena</Text>
                        <Text style={styles.greyText}>24 Aug,2022</Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={[
                          styles.greyText,
                          {
                            color: constant.primaryColor,
                            fontFamily: constant.interRegular,
                            marginBottom: 8,
                          },
                        ]}>
                        7-8 PM
                      </Text>
                      <Text
                        style={[
                          styles.greyText,
                          {color: '#444444', fontFamily: constant.interRegular},
                        ]}>
                        Court 2
                      </Text>
                      <Text
                        style={[
                          styles.greyText,
                          {
                            color: '#67A079',
                            fontFamily: constant.interRegular,
                            marginTop: 2,
                          },
                        ]}>
                        PKR 1600/-
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.BlackMid}>Split Payment</Text>
              <TouchableOpacity
                onPress={() => setdropDown(!dropDown)}
                style={styles.SelectBoxView}>
                <Text style={[styles.BlackMid, {color: '#67A079'}]}>No</Text>
                <Image
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                  source={require('../../assets/images/icon/down.png')}
                />
                {dropDown && <View style={styles.dorpDownView}></View>}
              </TouchableOpacity>
            </View>
            <View style={styles.BorderLine} />

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.BlackMid}>Total Bookings</Text>
              <Text style={[styles.BlackMid, {color: constant.primaryColor}]}>
                2
              </Text>
            </View>
            <View style={styles.BorderLine} />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.BlackMid}>Gross Total</Text>
              <Text
                style={[
                  styles.BlackMid,
                  {fontWeight: '500', color: '#67A079'},
                ]}>
                PKR 3200/-
              </Text>
            </View>
            <View
              style={[styles.BorderLine, {marginVertical: 0, marginTop: 16}]}
            />
            <CustomBtn
              onPress={() => props.navigation.navigate('BookingSucess')}
              RightIcon={true}
              centerText={'Proceed to Checkout'}
            />
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
    paddingHorizontal: 24,
  },
  HeaderText: {
    fontFamily: constant.interRegular,
    fontSize: 18,
    color: constant.black,
  },
  greyText: {
    fontFamily: constant.interLight,
    fontSize: 12,
    color: constant.black,
  },
  BlackMid: {
    fontFamily: constant.interRegular,
    fontSize: 16,
    color: '#444444',
  },
  ApplyBtn: {
    width: '100%',
    borderRadius: 20,
    alignSelf: 'center',
    height: 48,
    backgroundColor: constant.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CarView: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    padding: 16,
    width: '100%',
    borderRadius: 10,
    marginBottom: 16,
  },
  SelectBoxView: {
    width: 80,
    height: 30,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 5,
  },
  dorpDownView: {
    position: 'absolute',
    height: 140,
    width: 64,
    backgroundColor: 'red',
    borderRadius: 5,
    top: 30,
    left: 20,
  },
  BorderLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 16,
  },
});

export default Cart;
