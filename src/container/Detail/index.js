import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import Header from '../../components/Header';
import styles from './styles';
import constant from '../../utility/constant';
import Feather from 'react-native-vector-icons/Feather';
import DetailInfo from '../../components/DetailInfo';
import DetailBooking from '../../components/DetailBooking';

const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree', // Local image
];

const Detail = props => {
  const [tab, setTab] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  useEffect(() => {}, []);

  const renderAddBtn = () => {
    return (
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          height: constant.ScreenHeight * 0.06,
          width: constant.ScreenHeight * 0.06,
          backgroundColor: constant.primaryColor,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
        }}>
        <Feather name="plus" size={40} color={'white'} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SliderBox
        ImageComponentStyle={styles.SliderImg}
        paginationBoxStyle={{width: 0, height: 0}}
        images={images}
      />
      <View style={styles.AbsoluteHeaderWrapper}>
        <Header
          backColor={'rgba(0, 0, 0, 0)'}
          rightComponent={() => (
            <TouchableOpacity style={styles.headerBtnWrapper}>
              <Image
                style={{height: 16, width: 16}}
                source={require('../../assets/images/icon/shoppingCart.png')}
              />
            </TouchableOpacity>
          )}
          leftComponent={() => (
            <TouchableOpacity
              style={styles.headerBtnWrapper}
              onPress={() => props.navigation.pop()}>
              <Image
                style={{height: 16, width: 16}}
                source={require('../../assets/images/leftArrow.png')}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView bounces={false}>
          <View style={styles.container}>
            <View style={[styles.container, {paddingHorizontal: 24}]}>
              <View style={styles.rowJustify}>
                <View>
                  <Text
                    style={[
                      styles.fontSize16,
                      {marginTop: 24, fontFamily: constant.interExtraBold},
                    ]}>
                    Play-In Futsal Arena
                  </Text>
                  <Text
                    style={[
                      styles.fontSize12,
                      {marginTop: 8, fontFamily: constant.interRegular},
                    ]}>
                    Lawrence Garden, Mall Rd, LHR
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{width: 20, height: 20, marginRight: 15}}
                    source={require('../../assets/images/icon/send.png')}
                  />
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../../assets/images/icon/share.png')}
                  />
                </View>
              </View>
              <View style={[styles.continueAsSwitchWrapper, styles.marginTop]}>
                <TouchableOpacity
                  onPress={() => setSelectedTab(0)}
                  style={[
                    styles.switchInnerWrapper,
                    {
                      backgroundColor:
                        selectedTab == 0 ? constant.white : constant.whiteGrey,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.font12,
                      {
                        color:
                          selectedTab == 0
                            ? constant.selectedBlack
                            : constant.noSelectedBlack,
                      },
                    ]}>
                    Info
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSelectedTab(1)}
                  style={[
                    styles.switchInnerWrapper,
                    {
                      backgroundColor:
                        selectedTab == 1 ? constant.white : constant.whiteGrey,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.font12,
                      {
                        color:
                          selectedTab == 1
                            ? constant.selectedBlack
                            : constant.noSelectedBlack,
                      },
                    ]}>
                    Booking
                  </Text>
                </TouchableOpacity>
              </View>
              {selectedTab == 0 ? (
                <DetailInfo
                  LoadMorePress={() => props.navigation.navigate('Bookings')}
                />
              ) : (
                <DetailBooking />
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Detail;
