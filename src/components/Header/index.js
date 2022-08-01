import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import constant from '../../utility/constant';

const Header = ({
  backColor,
  leftPress,
  rightPress,
  centerIcon,
  centerText,
  centerTextColor,
  leftIcon,
  rightIcon,
}) => {
  return (
    <View
      style={[
        styles.MianView,
        {backgroundColor: backColor ? backColor : constant.black},
      ]}>
      <View style={{flex: 0.15, alignItems: 'center'}}>
        {leftPress != undefined && leftPress != null && (
          <TouchableOpacity onPress={leftPress}>
            <Ionicons size={24} color={leftIcon.color} name={leftIcon.name} />
          </TouchableOpacity>
        )}
      </View>
      <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center'}}>
        {centerText != undefined &&
          centerText != null &&
          centerText.trim().length > 0 && (
            <Text
              style={[
                styles.CenterText,
                {
                  color:
                    centerTextColor != undefined && centerTextColor != null
                      ? centerTextColor
                      : constant.darkGrey,
                },
              ]}>
              {centerText}
            </Text>
          )}
        {centerIcon != undefined && centerIcon != null && (
          <Image
            source={require('../../assets/images/userimage.png')}
            style={styles.CenterIcon}
          />
        )}
      </View>
      <View style={{flex: 0.15, alignItems: 'flex-end', paddingRight: '2%'}}>
        {rightPress != undefined && rightPress != null && (
          <TouchableOpacity
          onPress={rightPress}>
            <Ionicons size={35} color={rightIcon.color} name={rightIcon.name} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MianView: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // borderRadius: 10,
  },
  BtnWrapper: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  CenterText: {
    fontSize: 18,
    fontFamily: constant.interMedium,
  },
  CenterIcon: {
    height: 38,
    width: 38,
    resizeMode: 'contain',
  },
});

export default Header;
