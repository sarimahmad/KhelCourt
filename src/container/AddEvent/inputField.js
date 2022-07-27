import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
import constant from '../../utility/constant';

const inputField = ({
  value,
  onChangeText,
  placeholder,
  enablebtn,
  onPress,
  keyboardType,
  description = false,
  headerName = '',
  styleinput = {},
}) => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <Text
        style={{
          fontFamily: constant.PoppinsBold,
          fontSize: 15,
        }}>
        {' '}
        {headerName}
      </Text>
      <TextInput
        style={[
          styles.input,
          {
            height: description
              ? constant.ScreenHeight * 0.1
              : Platform.OS == 'ios'
                ? constant.ScreenHeight * 0.05
                : constant.ScreenHeight * 0.07,
          }, styleinput
        ]}
        onChangeText={onChangeText}
        textAlignVertical={description ? 'top' : 'center'}
        value={value}
        multiline={description}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        keyboardType={keyboardType}
        editable={enablebtn == 3 ? true : !enablebtn}
        maxLength={enablebtn && enablebtn == 3 ? 3 : enablebtn ? 0 : 100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // borderWidth: 1,
    borderRadius: 12,
    // marginVertical: constant.ScreenHeight * 0.005,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    alignItems: 'center',
    backgroundColor: constant.white,
    fontFamily: constant.PoppinsRegular,
    paddingHorizontal: constant.ScreenWidth * 0.05,
    fontSize: 14,

    // paddingTop:'0%'
    // height: constant.ScreenHeight * 0.05,
  },
});

export default inputField;
