<<<<<<< HEAD
import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const Todo = ({ item, onClick, onLongPress }) => {
  const isDone = { textDecorationLine: item.done ? "line-through" : "none" };
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={onClick}
      onLongPress={onLongPress}
    >
      <Image
        source={{
          uri: item.image || "https://facebook.github.io/react/img/logo_og.png"
        }}
        style={styles.image}
      />
      <Text style={[styles.text, isDone]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginLeft: 10
    // borderWidth: 1,
    // borderColor: 'black'
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  wrapper: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center"
  }
});

=======
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
>>>>>>> master
export default Todo;
