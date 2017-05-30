import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Todo = ({ item, onToggle }) => (
    <TouchableOpacity style={styles.wrapper}
      onPress={onToggle}
      >
      <Text style={[styles.text,
          {
            textDecorationLine: item.done ? 'line-through' : 'none'
          }]}
      >{item.title}</Text>
    </TouchableOpacity>
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
