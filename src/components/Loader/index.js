import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
const Loader = ({
  color,
  backgroundColor = 'rgba(0, 0, 0, 0.2)',
  displayText = 'Please Wait...',
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      <Text style={{color: color, fontSize: 16, marginBottom: 10}}>
        {displayText}
      </Text>
      <ActivityIndicator size={'large'} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
