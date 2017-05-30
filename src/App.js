import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        { /*<AddTodo />
        <VisibileTodoList />
        <Footer />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
