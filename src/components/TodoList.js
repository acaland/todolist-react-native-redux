import React from 'react';
import { ScrollView } from 'react-native';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { VisibilityFilters } from '../actions/types';

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

function filterTodolist(todolist, filter) {
  const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;
  switch (filter) {
    case SHOW_ALL:
      return todolist
    case SHOW_ACTIVE:
      return todolist.filter(todo => !todo.done)
    case SHOW_COMPLETED:
      return todolist.filter(todo => todo.done)
    default:
      return todolist
  }
}

const mapStateToProps = state => ({
  todolist: filterTodolist(state.todolist, state.filter)
});

const mapDispatchToProps = dispatch => ({
  onToggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);
