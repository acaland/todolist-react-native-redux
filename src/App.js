import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import appReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const initialState = {
  todolist: [{
      title: "Fare la spesa",
      id: -3,
      done: false
  }, {
    title: "pagare le bollette",
    id: -2,
    done: true
  }]
};

class App extends React.Component {
  render() {
    const store = createStore(appReducer, initialState, applyMiddleware(logger));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header title="TodoList App"/>
          <AddTodo />
          <TodoList todolist={[]}/>
          { /*<VisibileTodoList />
          <Footer />*/}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
