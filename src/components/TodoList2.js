import React from 'react';
import { ListView } from 'react-native';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodo, downloadTodolist } from '../actions';
import { VisibilityFilters } from '../actions/types';

class TodoList extends React.Component {
  componentWillMount() {
    this.props.downloadTodolist();
  }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = { dataSource: ds.cloneWithRows(this.props.todolist) };
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.todolist);
    console.log("ricevo nuove props");
    this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.todolist) });
  }
  renderRow(todo) {
    console.log("todo: ", todo);
    return (
      <Todo
        key={todo.id}
        item={todo}
        onToggle={() => this.props.onToggleTodo(todo.id)}
    />);
  }
  render() {
    console.log("I am rendering the listview");
    //console.log();
    return (
      <ListView
        enableEmptySections
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        />
    )
  }
};



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

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);
