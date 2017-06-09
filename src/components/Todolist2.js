import React, { Component } from 'react';
import { ListView } from 'react-native';
import Todo from './Todo';
import { Spinner } from './common';

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
      rowHasChanged: (r1, r2 ) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(todolist);
  }

  renderRow(todo) {
    return (
      <Todo item={todo} />
    )
  }

  render() {
    // console.log(this.props);
    if (this.props.isLoading) {
      return <Spinner />
    } else {
      return (
        <ListView
          enableEmptySections={true}
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      )
    }
  }
}

export default Todolist2;
