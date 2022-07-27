import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import constant from '../../utility/constant';
import Entypo from 'react-native-vector-icons/Entypo';
const SearchBar = ({
  value,
  onChangeText,
  customStyle,
  placeholder = 'Search here',
  placeholderTextColor,
  submit,
  InputCustomStyle,
  onPressCancel,
}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
      }}>
      <View style={[styles.textInputView]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[InputCustomStyle, styles.textInput]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
        />
        {value != '' ? (
          <TouchableOpacity onPress={onPressCancel}>
            <Entypo name={'cross'} size={16} />
          </TouchableOpacity>
        ) : (
          <Text>{'  '}</Text>
        )}
      </View>
      <TouchableOpacity
        onPress={submit}
        style={{
          height: 40,
          width: 80,
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: constant.primaryColor,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputView: {
    backgroundColor: constant.white,
    borderRadius: 30,
    paddingHorizontal: '3%',
    height: 40,
    // justifyContent: '',
    flexDirection: 'row',
    alignItems: 'center',
    width: constant.ScreenWidth * 0.65,
    justifyContent: 'space-around',
  },
  textInput: {
    width: constant.ScreenWidth * 0.53,
  },
});

export default SearchBar;
