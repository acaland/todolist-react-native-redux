import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Header = ({ title }) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    height: 60,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: 'red'
  },
  text: {
    color: 'white',
    fontSize: 22,
    // backgroundColor: 'red'
  }
});

export default Header;
