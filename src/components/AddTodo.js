import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {
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

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
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
    flex: 1
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: (text) => dispatch(addTodo(text))
  }
}

export default connect(null, mapDispatchToProps) (AddTodo);
