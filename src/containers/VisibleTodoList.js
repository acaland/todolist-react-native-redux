import { connect } from 'react-redux';
import { toggleTodo, downloadTodolist } from '../actions';
import { VisibilityFilters } from '../actions/types';
import TodoList2 from '../components/TodoList2';

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
  onToggleTodo: (id) => dispatch(toggleTodo(id)),
  downloadTodolist: () => dispatch(downloadTodolist())
});

 const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
) (TodoList2);

export default VisibleTodoList;
