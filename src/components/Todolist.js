import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Todo from './Todo';
import Spinner from './Spinner';

const Todolist = ({ todolist, onToggleTodo, isLoading }) => {
  if (isLoading) {
    return <Spinner />
  } else {
    return (
      <ScrollView>
        {todolist.map(todo => <Todo
          key={todo.id}
          item={todo}
          onClick={() => onToggleTodo(todo.id) }
        />)}
      </ScrollView>
    );
  }
};

export default Todolist;
