import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCmmXJKmMqUbQinqE1owIgyCMYVayEUjYI',
      authDomain: 'auth-73677.firebaseapp.com',
      databaseURL: 'https://auth-73677.firebaseio.com',
      projectId: 'auth-73677',
      storageBucket: 'auth-73677.appspot.com',
      messagingSenderId: '287834908730'
    });
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
