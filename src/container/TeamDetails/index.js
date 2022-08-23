/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import constant from '../../utility/constant';
import Header from '../../components/Header';
import {SliderBox} from 'react-native-image-slider-box';

const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree', // Local image
];
const TeamDetail = props => {
  return (
    <View style={styles.wrapperView}>
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
      <SafeAreaView style={{flex: 1}}>
        <ScrollView bounces={false}>
          <View style={styles.Container}>
            <View style={styles.rowJustify}>
              <View>
                <Text
                  style={[
                    styles.fontSize16,
                    {marginTop: 24, fontFamily: constant.interExtraBold},
                  ]}>
                  Stalwarts FC
                </Text>
                <Text
                  style={[
                    styles.fontSize12,
                    {marginTop: 8, fontFamily: constant.interRegular},
                  ]}>
                  Futsal Club, Lahore
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
            <View
              style={{
                flexDirection: 'row',
                marginTop: 8,
                alignSelf: 'flex-end',
              }}>
              <Image
                style={{width: 24, height: 24, marginRight: 5}}
                source={require('../../assets/images/icon/facebook.png')}
              />
              <Image
                style={{width: 24, height: 24}}
                source={require('../../assets/images/icon/instagram.png')}
              />
            </View>
            <Text style={styles.BoldBlack}>About</Text>
            <Text style={[styles.LightBrown, {marginTop: 8}]}>
              We are located in Lahore. Our team is open to all the challenges
              and we are passionate to fight till end.WE FIGHT FOR GLORY!
            </Text>
            <Text style={[styles.BoldBlack, {marginTop: 40}]}>
              Team Captain
            </Text>
            <View style={styles.CaptianView}>
              <Image
                style={styles.CaptianImage}
                source={require('../../assets/images/player.png')}
              />
              <View style={{marginLeft: 16}}>
                <Text style={styles.RegularBlack}>Muhammad Mehboob Ahmed</Text>
                <Text style={[styles.LightBrown, {width: 150, marginTop: 4}]}>
                  Contact: 03224656452
                </Text>
              </View>
            </View>
            <Text style={[styles.BoldBlack, {marginTop: 24}]}>Players</Text>
            <View style={{marginTop: 24}}>
              <FlatList
                data={[1, 2, 3, 4, 5]}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={{alignItems: 'center', marginRight: 14}}>
                    <Image
                      style={styles.CaptianImage}
                      source={require('../../assets/images/player.png')}
                    />
                    <Text style={styles.memberName}>Akbar Ali</Text>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    backgroundColor: constant.white,
  },
  Container: {
    flex: 1,
    width: constant.ScreenWidth - 48,
    alignSelf: 'center',
  },
  SliderImg: {
    height: 253,
  },
  AbsoluteHeaderWrapper: {
    position: 'absolute',
    top: 25,
    width: constant.ScreenWidth,
  },
  headerBtnWrapper: {
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constant.white,
  },
  rowJustify: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fontSize16: {
    fontSize: 16,
  },
  fontSize12: {
    fontSize: 12,
  },
  BoldBlack: {
    fontFamily: constant.interBold,
    fontSize: 16,
    color: constant.black,
  },
  LightBrown: {
    fontFamily: constant.interRegular,
    fontSize: 12,
    color: constant.titleLightColor,
    lineHeight: 17,
    width: '85%',
  },
  CaptianView: {
    flexDirection: 'row',
    marginTop: 24,
  },
  CaptianImage: {
    width: 77,
    height: 77,
    borderRadius: 40,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: constant.primaryColor,
  },
  RegularBlack: {
    fontFamily: constant.interRegular,
    fontSize: 14,
    width: 150,
  },
  memberName: {
    fontFamily: constant.interRegular,
    fontSize: 10,
    marginTop: 5,
    color: '#444444',
  },
});

export default TeamDetail;
