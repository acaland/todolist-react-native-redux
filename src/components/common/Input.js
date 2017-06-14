import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ value, onChangeText, label, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 20,
    // lineHeight:20,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
