import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const SettingBtn = ({btnName, onPress, renderIcon,disabled=false}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.MianView}
    disabled={disabled}
    >
      <View style={styles.InnerView}>
        <Text style={styles.btntxt}>{btnName}</Text>

        {renderIcon && renderIcon()}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  MianView: {
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: '5%',
    height: height * 0.06,
    borderRadius: 25,
    justifyContent: 'center',
  },
  btntxt: {
    fontSize: 15,
    fontFamily: 'poppins-medium',
  },
  InnerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SettingBtn;
