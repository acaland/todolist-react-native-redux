import React from 'react';
import { ListView } from 'react-native';
import Todo from './Todo';


class TodoList2 extends React.Component {
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
    // console.log("ricevo nuove props");
    this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.todolist) });
  }
  renderRow(todo) {
    // console.log("todo: ", todo);
    return (
      <Todo
        key={todo.id}
        item={todo}
        onToggle={() => this.props.onToggleTodo(todo.id)}
    />);
  }
  render() {
    // console.log("I am rendering the listview");
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

export default TodoList2;
