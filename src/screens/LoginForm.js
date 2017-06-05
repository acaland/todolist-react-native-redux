import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner }  from '../components/common';

class LoginForm extends Component {
  static navigationOptions = {
    title: "Login"
  }
  
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="E-mail"
              placeholder="pippo@email.com"
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="pippo1234"
            />
          </CardSection>

          <CardSection>
            <Button>
              Login
            </Button>
          </CardSection>

        </Card>
      </View>
    );
  }
}

export default LoginForm;
