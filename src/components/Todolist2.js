import React, { Component } from "react";
import { ListView, Alert } from "react-native";
import Todo from "./Todo";
import { Spinner } from "./common";

class Todolist2 extends Component {
  componentWillMount() {
    this.props.todolistFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // console.log("componentWillreceiveProps");
    this.createDataSource(nextProps);
  }

  createDataSource({ todolist }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(todolist);
  }

  deleteTodo(todoId) {
    Alert.alert(
      'Delete todo',
      'Are you sure?',
      [
        { text: 'Cancel', style: 'cancel'},
        { text: 'Yes', onPress: () => this.props.delete(todoId) }
      ]
    );
  }

  renderRow(todo) {
    return <Todo item={todo} onLongPress={() => this.deleteTodo(todo.id)}
      onClick={() => this.props.onClick(todo)} />;
  }

  render() {
    // console.log("in todolist2", this.props);
    if (this.props.isLoading) {
      return <Spinner />;
    } else {
      return (
        <ListView
          enableEmptySections={true}
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      );
    }
  }
}

export default Todolist2;
