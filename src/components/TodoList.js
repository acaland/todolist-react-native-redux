import React from 'react';
import { ScrollView } from 'react-native';
import Todo from './Todo';
import { connect } from 'react-redux';

const TodoList = ({ todolist }) => (
  <ScrollView style={{ flex: 1 }}>
    {todolist.map(todo => <Todo key={todo.id} item={todo} />)}
  </ScrollView>
);

const mapStateToProps = state => ({
  todolist: state.todolist
});

export default connect(mapStateToProps, null) (TodoList);
