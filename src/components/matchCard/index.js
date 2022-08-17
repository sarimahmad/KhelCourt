import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import constant from '../../utility/constant';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const MatchCard = props => {
  return (
    <View style={styles.coverContainer}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={styles.HeaderText}>Booking no.1</Text>
        <View
          style={{
            backgroundColor: '#ECFCE5',
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 20,
          }}>
          <Text style={[styles.tabText, {color: '#198155'}]}>Free</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.innercontanerText}>Ahmad Naseer</Text>

        <Text style={styles.cortText}>Play On Bedian</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.innercontanerText}>Mon - 23, Jul 2022</Text>

        <Text style={styles.cortText}>Court 1</Text>
      </View>
      <Text style={styles.innercontanerText}>7-8 PM</Text>
      <View style={[styles.innerContainer, {marginTop: '5%'}]}>
        <TouchableOpacity>
          <Text
            style={[styles.innercontanerText, {color: constant.primaryColor}]}>
            Request to Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.innercontanerText, {color: '#67A079'}]}>
            View Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.white,
    paddingHorizontal: '4%',
  },
  coverContainer: {
    borderColor: '#E3E5E5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: constant.ScreenHeight * 0.02,
  },
  HeaderText: {
    fontFamily: constant.interRegular,
    fontSize: 16,
  },
  tabActiveStyle: {
    borderBottomWidth: 1,
    borderBottomColor: constant.primaryColor,
  },
  tabMainStyle: {
    width: '50%',
    alignItems: 'center',
    paddingVertical: '3%',
  },
  tabText: {
    fontSize: 16,
    fontFamily: constant.interMedium,
  },
  innerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '1%',
  },
  innercontanerText: {
    fontSize: 14,
    fontFamily: constant.interRegular,
  },
  cortText: {
    fontSize: 14,
    fontFamily: constant.interLight,
    color: '#757575',
  },
});

export default MatchCard;
