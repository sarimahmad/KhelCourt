import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import constant from '../../utility/constant';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const PaymentCard = ({}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{flex: 0.15}}>
        <MaterialIcons name={'attach-money'} size={40} />
      </View>
      <View style={{flex: 0.65}}>
        <Text style={styles.bankName}>Event Name</Text>
        <Text style={styles.transerName}>saeed to ahmad</Text>
        <Text style={styles.DateTime}>25-05-2022:02:22:33</Text>
      </View>
      <View style={{flex: 0.2, alignItems: 'flex-end'}}>
        <Text style={styles.money}>20$</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constant.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    borderRadius: 10,
    marginVertical: '2%',
  },
  bankName: {
    fontFamily: constant.PoppinsExtraBold,
    color: constant.primaryColor,
    fontSize: 16,
  },
  transerName: {
    fontFamily: constant.PoppinsMedium,
  },
  DateTime: {
    fontFamily: constant.PoppinsRegular,
  },
  money: {
    fontFamily: constant.PoppinsMedium,
    fontSize: 18,
  },
});

export default PaymentCard;
