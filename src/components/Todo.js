import React from 'react';
import { View, Text } from 'react-native';

const Todo = ({ item }) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>{item.title}</Text>
  </View>
);

const styles = {
  wrapper: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  text: {
    fontSize: 20
  }
}
export default Todo;
