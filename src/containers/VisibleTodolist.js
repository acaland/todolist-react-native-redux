import { connect } from 'react-redux';
import { todolistFetch, todoDelete } from '../actions/TodoActions';
import { VisibilityFilters } from '../actions/types';
import Todolist2 from '../components/Todolist2';

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

const mapStateToProps = state => {
  const todolist = Object.keys(state.todolist).map(id => {
    return { ...state.todolist[id], id }
  });
  return { 
    todolist: filterTodolist(todolist, state.filter), 
    isLoading: state.loading
  }
}


const VisibleTodoList = connect(
  mapStateToProps,
  // mapDispatchToProps
  { todolistFetch, delete: todoDelete }
) (Todolist2);


export default VisibleTodoList;
