import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner }  from '../components/common';
import { loginUser } from '../actions/AuthActions';
import { connect } from 'react-redux';

class LoginForm extends Component {
  static navigationOptions = {
    title: "Login"
  }
  state = { email: 'pippo@mail.com', password: 'pippo1234' }

  renderLoginOrSpinner() {
    if (this.props.isLoading) {
      return <Spinner />
    }
    return (
      <Button onPress={()=> this.props.loginUser({
          email: this.state.email,
          password: this.state.password,
          navigateTo: (screen) => this.props.navigation.navigate(screen)
        })}
      >
        Login
      </Button>
    )
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="E-mail"
              placeholder="pippo@email.com"
              onChangeText={text => this.setState({ email: text })}
              value={this.state.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="pippo1234"
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
            />
          </CardSection>

          <Text>{this.props.error.message}</Text>

          <CardSection>
            {this.renderLoginOrSpinner()}
          </CardSection>

        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.loading,
  error: state.auth.error
});

export default connect(mapStateToProps, { loginUser } ) (LoginForm);
