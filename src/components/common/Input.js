import React, { Component } from 'react';
import { View, Text, TextInput , StyleSheet} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, isPassword}) => {

  const { containerStyle, inputStyle, lableStyle } = styles;

  return(
    <View style={containerStyle}>
      <Text style={lableStyle}>{label}</Text>
      <TextInput
        placeholder     = {placeholder}
        style           = {inputStyle}
        value           = {value}
        autoCorrect     = {false}
        onChangeText    = {onChangeText}
        secureTextEntry = {isPassword}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  lableStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection : 'row',
    alignItems : 'center'
  }
});

export { Input };