import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import constant from '../../utility/constant';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

const NotificationCard = props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          source={require('../../assets/images/userimage.png')}
          style={{height: 40, width: 40}}
        />
        <Text style={{width: '85%', fontFamily: constant.interRegular}}>
          Play IN <B>Arena</B> confirmed your <B>booking of 7-8 PM</B>, July 20th
        </Text>
      </View>
      <Text
        style={{
          alignSelf: 'flex-end',
          fontFamily: constant.interRegular,
          fontSize: 12,
        }}>
        1 min ago
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    marginVertical: 5,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
});

export default NotificationCard;
