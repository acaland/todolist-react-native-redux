import React from 'react';
import { ScrollView } from 'react-native';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const TodoList = ({ todolist, onToggleTodo }) => (
  <ScrollView style={{ flex: 1 }}>
    {todolist.map(todo =>
      <Todo
        key={todo.id}
        item={todo}
        onToggle={() => onToggleTodo(todo.id)}
      />
      )
    }
  </ScrollView>
);

const mapStateToProps = state => ({
  todolist: state.todolist
});

const mapDispatchToProps = dispatch => ({
  onToggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);
