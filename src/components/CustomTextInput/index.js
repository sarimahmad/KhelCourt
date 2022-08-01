import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import constant from '../../utility/constant';

const CustomTextInput = ({
  title,
  marginTop = constant.margin47,
  keyboardType,

}) => {
  const [focus, setFocus] = useState(false);
  return (
    <View style={[styles.mainStyle, { borderColor: focus ? constant.primaryColor : constant.borderColor,
     marginTop: marginTop, paddingHorizontal: focus ? 16 : 0, paddingVertical: focus ? 8 : 0  }]}>
      {focus && <Text style={styles.title}>
        {title}
      </Text>}
      <TextInput
        onFocus={() => setFocus(true)}
        keyboardType={keyboardType}
        placeholder={focus ? '' : title}
        onBlur={() => setFocus(false)}
        style={[styles.textInputStyle, { borderWidth: focus ? 0 : 1,
         paddingHorizontal: focus ? 0 : 16, paddingVertical: focus ? 0 : 8, height: focus ? 40 : 52  }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    height: 52,
    width: constant.ScreenWidth - 48,
    borderRadius: 8,
    borderColor: constant.borderColor,
    borderWidth: 1,
  },
  title: {
    fontSize: 12,
    fontFamily: constant.interMedium,
    height: 12,
    color: constant.titleLightColor,
  },
  textInputStyle: {
    height: 40,
    width: constant.ScreenWidth - 48,
    borderRadius: 8,
    borderColor: constant.borderColor,
  }
});

export default CustomTextInput;
