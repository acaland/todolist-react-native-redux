import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from '../components/common';
import DatePicker from 'react-native-datepicker'
import { View } from 'react-native';
import { connect } from 'react-redux';
import { todoCreate } from '../actions/TodoActions';

class TodoCreate extends Component {
  static navigationOptions = {
    title: 'New Todo'
  }
  state = {
    title: '',
    location: '',
    duedate: new Date().toISOString()
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Title"
              placeholder="Cosa vuoi fare oggi"
              value={this.state.title}
              onChangeText={text => this.setState({ title: text })}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Location"
              placeholder="Dove"
              value={this.state.location}
              onChangeText={text => this.setState({ location: text })}
            />
          </CardSection>

          <CardSection>

            <DatePicker
              style={{ flex: 1 }}
              date={this.state.duedate}
              mode="date"
              placeholder="Scadenza"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 16
                },
                dateInput: {
                  marginLeft: 120
                }
              }}
              onDateChange={(date) => {this.setState({duedate: date})}}
            />

          </CardSection>


          <CardSection>
            <Button onPress={() => this.props.todoCreate({
                title: this.state.title,
                location: this.state.location,
                duedate: this.state.duedate,
                navigateBack: () => this.props.navigation.goBack()
              })}>
              Add Todo
            </Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default connect(null, { todoCreate }) (TodoCreate);
