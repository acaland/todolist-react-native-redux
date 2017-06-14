import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  onSubmit() {
    // invochiamo il nostro ADD_TODO actioncreator
    // addTodo(this.state.text);
    this.props.onAddTodo(this.state.text);
    this.setState({ text: ''})
  }
  render() {
      const { wrapper, text, btn } = styles;
      return (
        <View style={wrapper}>
          <TextInput
            onChangeText={text => this.setState({ text })}
            autoFocus={true}
            blurOnSubmit={false}
            style={text}
            onSubmitEditing={this.onSubmit.bind(this)}
            value={this.state.text}
            placeholder="cosa vuoi fare oggi"/>
          <Button style={btn}
            title="Add"
            onPress={this.onSubmit.bind(this)}
            />
        </View>
      );
  }
};
=======
  state = { text: '' }

  onAddTodo() {
    // alert(this.state.text);
    this.props.onAddTodo(this.state.text);
    this.setState({ text: ''});
    return;
  }

  render() {
    const { wrapper, input, button } = styles;
    return (
      <View style={wrapper}>
        <TextInput style={input}
          autoFocus={true}
          blurOnSubmit={false}
          placeholder="new todo"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          onSubmitEditing={this.onAddTodo.bind(this)}
        />
        <Button style={button}
          onPress={this.onAddTodo.bind(this)}
          title="Add Todo"
        />
      </View>
    );
  }
}
>>>>>>> master

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
<<<<<<< HEAD
    //borderWidth: 1,
    // borderColor: 'black',
    // borderStyle: 'solid',
    margin: 5
  },
  text: {
    flex: 4,
    paddingHorizontal: 5
  },
  btn: {
=======
    margin: 5
  },
  input: {
    flex: 4,
    paddingLeft: 5
  },
  button: {
>>>>>>> master
    flex: 1
  }
});

<<<<<<< HEAD
const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: (text) => dispatch(addTodo(text))
  }
}

export default connect(null, mapDispatchToProps) (AddTodo);
=======
// const mapDispatchToProps = dispatch => ({
//   onAddTodo: (text) => dispatch(addTodo(text))
// });

// export default connect(null, mapDispatchToProps)(AddTodo);

export default connect(null, { onAddTodo: addTodo })(AddTodo);
>>>>>>> master
