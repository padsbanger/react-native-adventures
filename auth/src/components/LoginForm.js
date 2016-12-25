import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import {Button, Card, CardSection, Input} from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: ''
    }
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: ''
    })
  }

  onButtonPress() {
    this.setState({
      error: ''
    })
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(this.onLoginSuccess)
    .catch(()=> {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess)
      .catch((error) => {
        this.setState({error: 'There was an error'})
      })
    })

  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder="Enter email"
            value={this.state.email}
            autoCorrect={false}
            secureTextEntry={false}
            onChangeText={(email) => {this.setState({email})}}/>
        </CardSection>
        <CardSection>
          <Input
            label='Password'
            placeholder="Enter password"
            secureTextEntry
            value={this.state.password}
            autoCorrect={false}
            onChangeText={(password) => {this.setState({password})}}/>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Log in
          </Button>
        </CardSection>
        <CardSection>
          <Text>{this.state.error}</Text>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
