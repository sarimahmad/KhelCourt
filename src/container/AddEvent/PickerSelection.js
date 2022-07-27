import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import constant from '../../utility/constant';
import RNPickerSelect from 'react-native-picker-select';

const PickerSelection = ({
  value,
  items = [],
  onValueChange,
  placeholder = 'Select an Item',
  width = constant.ScreenWidth * 0.47,
  headerName = '',
}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <Text
        style={{
          fontFamily: constant.PoppinsBold,
          fontSize: 15,
        }}>
        {' '}
        {headerName}
      </Text>
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        value={value}
        style={{
          inputIOS: {
            fontSize: 16,
            width: width,
            height: constant.ScreenHeight * 0.05,
            borderRadius: 12,
            marginVertical: constant.ScreenHeight * 0.005,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0.5,
            },

            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            fontFamily: constant.PoppinsRegular,

            backgroundColor: constant.white,
            paddingHorizontal: constant.ScreenWidth * 0.05,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
          },
          inputAndroid: {
            fontSize: 16,
            width: width,
            height: constant.ScreenHeight * 0.07,
            borderRadius: 12,
            marginVertical: constant.ScreenHeight * 0.005,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0.5,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            fontFamily: constant.PoppinsRegular,

            backgroundColor: constant.white,
            paddingHorizontal: constant.ScreenWidth * 0.05,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
          },
          placeholder: {
            color: 'grey',
            fontSize: 14,
          },
        }}
        onValueChange={onValueChange}
        items={items}
        placeholder={{label: placeholder, value: null}}

        // onUpArrow={}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PickerSelection;
