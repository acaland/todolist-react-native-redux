import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title, style }) => (
    <View style={[styles.wrapper, style]}>
      <Text style={styles.text}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
  wrapper: {
    height: 44,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    //alignSelf: 'stretch',
    alignItems: 'center',
    shadowOffset: { height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '300'
=======
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
>>>>>>> master
  }
});

export default Header;
