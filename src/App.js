import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCmmXJKmMqUbQinqE1owIgyCMYVayEUjYI',
      authDomain: 'auth-73677.firebaseapp.com',
      databaseURL: 'https://auth-73677.firebaseio.com',
      projectId: 'auth-73677',
      storageBucket: 'auth-73677.appspot.com',
      messagingSenderId: '287834908730'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    const window = Dimensions.get("window");    
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return (<LoginForm />);
      default:
        return (
          <View 
            style={{ height: window.height }} >
            <Spinner size="large" />
          </View>
        );
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <View>
            {this.renderContent()}
        </View>
          
      </View>
    );
  }
}

export default App;
