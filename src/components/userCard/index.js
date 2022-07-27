import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import constant from '../../utility/constant';
const UserCard = ({
  data,
  tabActive,
  navigation,
  onPressBlock,
  onPressUnBlock,
}) => {
  // console.log(data, index);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('UserDetail', {
          userDetailData: data,
        })
      }>
      <View>
        <Image
          source={
            data.profileImage
              ? {uri: data.profileImage}
              : require('../../assets/images/userimage.png')
          }
          style={styles.profileImage}
        />
      </View>
      <View style={styles.dataView}>
        <Text style={styles.name}>{data?.name}</Text>
        <Text style={styles.dob}>{data?.dob}</Text>
        <Text style={styles.gender}>{data?.gender}</Text>
      </View>
      {tabActive == 1 ? (
        <TouchableOpacity
          onPress={onPressUnBlock}
          style={[styles.statusbtn, {backgroundColor: '#31db0f'}]}>
          <Text style={styles.statusbtntext}>Unblock</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onPressBlock}
          style={[styles.statusbtn, {backgroundColor: '#fc4747'}]}>
          <Text style={styles.statusbtntext}>Block</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: '5%',
    alignItems: 'center',
    backgroundColor: constant.white,
    marginBottom: 10,
    paddingHorizontal: '2%',
    paddingVertical: 10,
    flexDirection: 'row',
    borderRadius: 10,
    //ios
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    //android
    elevation: 1,
  },
  profileImage: {
    height: constant.ScreenHeight * 0.08,
    width: constant.ScreenHeight * 0.08,
    borderRadius: (constant.ScreenHeight * 0.08) / 2,
  },
  name: {
    fontFamily: constant.PoppinsBold,
    color: constant.primaryColor,
    fontSize: 15,
  },
  dataView: {
    marginLeft: '2%',
    paddingHorizontal: '2%',
    width: '55%',
  },
  dob: {
    fontFamily: constant.PoppinsRegular,
  },
  gender: {
    fontFamily: constant.PoppinsRegular,
  },
  statusbtn: {
    height: 40,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  statusbtntext: {
    fontFamily: constant.PoppinsRegular,
    color: constant.white,
    fontSize: 12,
  },
});

export default UserCard;
