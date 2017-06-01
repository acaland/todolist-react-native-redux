import Todolist from '../components/Todolist';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const mapStateToProps = state => ({
  todolist: state.todolist,
  isLoading: state.loading
});

const mapDispatchToProps = dispatch => ({
  onToggleTodo: (id) => dispatch(toggleTodo(id))
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
) (Todolist);

export default VisibleTodoList;
