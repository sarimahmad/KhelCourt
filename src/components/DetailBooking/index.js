import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Header from '../Header';
import constant from '../../utility/constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const DetailBooking = props => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedDay = (val) => {
    console.log(val)
  };
  return (
    <View style={styles.container}>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default DetailBooking;
