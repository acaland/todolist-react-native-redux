import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers';
import { logger } from 'redux-logger'
import ReduxThunk from 'redux-thunk';
import { downloadInitialTodolist } from './actions';
import firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginForm from './screens/LoginForm';
import TodoCreate from './screens/TodoCreate';
import TodoEdit from './screens/TodoEdit';

const initialState = {};

class App extends React.Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBbz6q4vltHA_K3KLHQDBQC2ITY_aKGaBQ",
      authDomain: "todolist-rn-unict-d73b4.firebaseapp.com",
      databaseURL: "https://todolist-rn-unict-d73b4.firebaseio.com",
      projectId: "todolist-rn-unict-d73b4",
      storageBucket: "todolist-rn-unict-d73b4.appspot.com",
      messagingSenderId: "465570866758"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(
      appReducer,
      initialState,
      applyMiddleware(logger, ReduxThunk)
    );
    // store.dispatch(downloadInitialTodolist());

    const MainNavigator = StackNavigator({
      // todoCreate: { screen: TodoCreate },
      login: { screen: LoginForm },
      home: { screen: HomeScreen },
      todoCreate: { screen: TodoCreate },
      todoEdit: { screen: TodoEdit }
    },{
        cardStyle: {
          paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
      }
    });

    return (
      <Provider store={store}>
 
        <MainNavigator />
      </Provider>
    );
  }
}


export default App;
