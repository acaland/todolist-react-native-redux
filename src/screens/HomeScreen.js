import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import VisibleTodolist from "../containers/VisibleTodolist";

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    {/*<Header style={styles.header} title="Todo List App"/> */}
    {/*<AddTodo /> */}
    <VisibleTodolist onClick={todo => navigation.navigate("todoEdit", { todo })} />
    {/*
        <VisibileTodoList />
        <Footer />*/}
  </View>
);

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: "TodoList",
  headerLeft: <Button title="Login" onPress={() => navigation.goBack()} />,
  headerRight: (
    <Button title="Add" onPress={() => navigation.navigate("todoCreate")} />
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    marginTop: 20
  }
});

export default HomeScreen;
