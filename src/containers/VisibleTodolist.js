// import Todolist from '../components/Todolist';
import Todolist2 from '../components/Todolist2';
import { connect } from 'react-redux';
// import { toggleTodo } from '../actions';
import { todolistFetch, todoDelete } from '../actions/TodoActions';

// const mapStateToProps = state => ({
//   todolist: state.todolist,
//   isLoading: state.loading
// });

// const mapDispatchToProps = dispatch => ({
//   onToggleTodo: (id) => dispatch(toggleTodo(id))
// });

const mapStateToProps = state => {
  const todolist = Object.keys(state.todolist).map(id => {
    return { ...state.todolist[id], id }
  });
  return { todolist, isLoading: state.loading }
}


const VisibleTodoList = connect(
  mapStateToProps,
  // mapDispatchToProps
  { todolistFetch, delete: todoDelete }
) (Todolist2);

export default VisibleTodoList;
