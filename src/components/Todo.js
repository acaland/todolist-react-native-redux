import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Todo = ({ item, onClick }) => {
  const isDone = { textDecorationLine: item.done ? 'line-through' : 'none' };
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={onClick}
      >
      <Text style={[styles.text, isDone]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  wrapper: {
    margin: 10
  }
});

export default Todo;
