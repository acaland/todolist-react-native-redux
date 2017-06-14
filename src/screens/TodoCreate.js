import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from '../components/common';
import DatePicker from 'react-native-datepicker'
import { View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { todoCreate } from '../actions/TodoActions';
import { ImagePicker } from 'expo';

class TodoCreate extends Component {
  static navigationOptions = {
    title: 'New Todo'
  }
  state = {
    title: '',
    location: '',
    duedate: new Date().toISOString(),
    image: 'https://facebook.github.io/react/img/logo_og.png'
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

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
            <Image />
          <CardSection>
            <TouchableOpacity
              style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  flex: 1
                }}
              onPress={this._pickImage}
              >
              <Image
                source={{ uri: this.state.image }}
                // resizeMode="cover"
                style={{ height: 200, width: "100%" }}
              />
            </TouchableOpacity>
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
