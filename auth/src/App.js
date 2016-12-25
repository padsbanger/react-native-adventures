import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBEKpSU36nHSq8JmBdwxNxzDmxQv1SkufU",
      authDomain: "auth-9a3f5.firebaseapp.com",
      databaseURL: "https://auth-9a3f5.firebaseio.com",
      storageBucket: "auth-9a3f5.appspot.com",
      messagingSenderId: "481354015312"
    };
    // firebase.initializeApp(config);
  }
  render() {
    return (
      <View>
        <Header title="Auth"/>
        <LoginForm />
      </View>
    )
  };
}

export default App;
