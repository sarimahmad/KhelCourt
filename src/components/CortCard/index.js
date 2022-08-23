import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import constant from '../../utility/constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const CortCard = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Image source={props.Image} style={styles.imageSize} />
      <Text style={styles.nametext}>{props.UpperText}</Text>
      <Text style={styles.locationtext}>{props.LowerText}</Text>

      <View style={styles.sideView}>
        <Text style={styles.sideText}>1 side</Text>
      </View>
      <View style={styles.HeartView}>
        <AntDesign name="hearto" color={'white'} size={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constant.white,
    width: 188,
    height: 205,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  imageSize: {
    width: 172,
    height: 135,
    borderRadius: 8,
  },
  nametext: {
    fontFamily: constant.interSeiBold,
    fontSize: 14,
    marginTop: 8,
  },
  locationtext: {
    fontFamily: constant.interRegular,
    fontSize: 10,
    marginTop: 5,
    color: '#444444',
  },
  sideView: {
    position: 'absolute',
    height: constant.ScreenHeight * 0.03,
    width: constant.ScreenWidth * 0.15,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    top: 15,
    left: 15,
  },
  HeartView: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  sideText: {
    color: 'white',
    fontSize: 12,
    fontFamily: constant.interRegular,
  },
});

export default CortCard;
