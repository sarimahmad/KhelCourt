import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import constant from '../../utility/constant';

const CustomBtn = ({
  backColor = constant.primaryColor,
  LeftIcon,
  leftIconName = '',
  leftIconSize,
  leftIconColor,
  RightIcon,
  rightIconName = '',
  rightIconSize,
  rightIconColor,
  customMarginTop =constant.margin64,
  onPress,
  centerText,
  centerTextColor = constant.white,
  centerTextCustomStyle = styles.centerTextStyle,
  customSyle = styles.mainStyle,
}) => {
  return (
    <TouchableOpacity style={[customSyle, {backgroundColor: backColor, marginTop: customMarginTop }]} onPress={onPress}>
      {leftIconName != undefined && leftIconName != '' &&
        <View style={styles.absoluteLeftIcon}>
          <LeftIcon name={leftIconName} size={leftIconSize} color={leftIconColor} />
        </View>}
        <Text style={[centerTextCustomStyle, {color: centerTextColor}]}>
          {centerText}
        </Text>

      {rightIconName != undefined && rightIconName != '' &&
        <View style={styles.absoluteRightIcon}>
          <RightIcon name={rightIconName} size={rightIconSize} color={rightIconColor} />
        </View>}

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    height: 48,
    width: constant.ScreenWidth - 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  centerTextStyle: {
    fontSize: 16,
    fontFamily: constant.interMedium,
    color: constant.white,
  },
  absoluteLeftIcon: {
    position: 'absolute',
    left: constant.margin16,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 40,
  },
  absoluteRightIcon: {
    position: 'absolute',
    right: constant.margin12,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 40,
  }
});

export default CustomBtn;
