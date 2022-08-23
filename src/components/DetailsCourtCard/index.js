import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import constant from '../../utility/constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree', // Local image
];

const DetailCourtCard = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.CourtView}>
      <SliderBox
        ImageComponentStyle={styles.SliderImg}
        paginationBoxStyle={{width: 0, height: 0}}
        images={images}
      />

      <View style={styles.lowerView}>
        <View style={styles.rowJustify}>
          <Text style={styles.DarkBlack}>Play-In Futsal Arena</Text>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/images/icon/send.png')}
          />
        </View>
        <Text style={styles.lightGrey}>Lawrence Garden, Mall Rd, LHR</Text>
        <View
          style={[
            styles.rowJustify,
            {
              marginTop: 6,
              justifyContent: props.CourtInfo ? 'space-between' : 'flex-end',
            },
          ]}>
          {props.CourtInfo && (
            <Text style={{fontSize: 14}}>
              Starts from{' '}
              <Text style={[styles.DarkBlack, {fontSize: 14}]}>PKR 1800</Text>
              /Hour
            </Text>
          )}
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={[styles.DarkBlack, {fontSize: 14, marginRight: 8}]}>
              Book Now
            </Text>
            <Image
              style={{width: 16, height: 16}}
              source={require('../../assets/images/icon/right.png')}
            />
          </View>
        </View>
      </View>

      <View style={styles.BottomLine} />
      <View style={{position: 'absolute', right: 20, top: 20}}>
        <AntDesign name="hearto" color={'white'} size={20} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  CourtView: {
    marginBottom: 33,
  },
  SliderImg: {
    height: 321,
    width: constant.ScreenWidth - 48,
    borderRadius: 10,
    marginRight: 50,
  },
  lowerView: {
    marginTop: 16,
    paddingHorizontal: 5,
  },
  rowJustify: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DarkBlack: {
    fontFamily: constant.interBold,
    fontSize: 16,
    color: constant.selectedBlack,
  },
  lightGrey: {
    fontFamily: constant.interRegular,
    fontSize: 12,
    color: constant.lightGrey,
    marginTop: 5,
  },
  BottomLine: {
    width: '100%',
    height: 1,
    backgroundColor: constant.borderColor,
    marginTop: 24,
  },
});

export default DetailCourtCard;
