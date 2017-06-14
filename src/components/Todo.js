import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const Todo = ({ item, onClick, onToggle, onLongPress }) => {
  const isDone = { textDecorationLine: item.done ? "line-through" : "none" };
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={onToggle}
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
      <MaterialIcons 
        name="chevron-right" 
        size={24} 
        color="black" 
        style={{ position: 'absolute', right: 0 }}
        onPress={onClick}
      />
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

export default Todo;
