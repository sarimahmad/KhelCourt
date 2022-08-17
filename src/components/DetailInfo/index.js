import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import constant from '../../utility/constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const DetailInfo = props => {
  return (
    <View style={styles.container}>
      <Text style={[styles.fontSize16, { marginTop: 24 }]}>
        Description
      </Text>
      <Text style={[styles.fontSize12, { marginTop: 8 }]}>
        Play in Arena is situated in the middle of the Bagh-e-Jinnah surrounded by Nature.
        The Greenery around it lifts the mood for playing a beautiful game. A FACE TO BE
      </Text>
      <View style={styles.divider} />
      <Text style={[styles.fontSize16, { marginTop: 16 }]}>
        Amenities
      </Text>
      <View style={[styles.rowViewAC, { marginTop: 16 }]}>
        <Image style={styles.rowIcon} source={require('../../assets/images/parking.png')} />
        <Text style={[styles.fontSize16, { marginLeft: 16, fontFamily: constant.interRegular }]}>
          Free Parking
        </Text>
      </View>
      <View style={[styles.rowViewAC, { marginTop: 24 }]}>
        <Image style={styles.rowIcon} source={require('../../assets/images/light.png')} />
        <Text style={[styles.fontSize16, { marginLeft: 16, fontFamily: constant.interRegular }]}>
          Flood Lights
        </Text>
      </View>
      <View style={[styles.rowViewAC, { marginTop: 24 }]}>
        <Image style={styles.rowIcon} source={require('../../assets/images/generator.png')} />
        <Text style={[styles.fontSize16, { marginLeft: 16, fontFamily: constant.interRegular }]}>
          Generator Backup
        </Text>
      </View>
      <View style={styles.divider} />
      <Text style={[styles.fontSize16, { marginTop: 16 }]}>
        You'll be here
      </Text>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 38.309898,
          longitude: -77.787079,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fontSize16: {
    fontSize: 16,
    fontFamily: constant.interExtraBold,
  },
  fontSize12: {
    fontSize: 12,
    fontFamily: constant.interRegular,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: constant.whiteGrey,
    marginTop: 24,
    marginBottom: 16,
  },
  rowViewAC: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  map: {
    height: constant.ScreenWidth - 48,
    width: constant.ScreenWidth - 48,
    borderRadius: 10,
    marginTop: 14,
  },
});

export default DetailInfo;
