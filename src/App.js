import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import VisibleTodolist from './containers/VisibleTodolist';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers';
import { logger } from 'redux-logger'
import ReduxThunk from 'redux-thunk';
import { downloadInitialTodolist } from './actions';

const initialState = {};

class App extends React.Component {
  render() {
    const store = createStore(
      appReducer,
      initialState,
      applyMiddleware(logger, ReduxThunk)
    );
    store.dispatch(downloadInitialTodolist());
    return (
      <Provider store={store}>
        <View style={styles.container}>
            <Header style={styles.header} title="Todo List App"/>
              <AddTodo />
              <VisibleTodolist />
          { /*
          <VisibileTodoList />
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
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    marginTop: 20
  }
});

export default App;
