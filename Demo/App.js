import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const welcomeMessage = 'Welcome to React Native World !';

const WelcomeMessage = ({text}) => {
  return (
    <Text style={styles.welcome}>
      {text}
    </Text>
  )
}

const WelcomeInput = ({onChangeInput}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeInput}
      placeholder={welcomeMessage}
    />
  )
}

export default class App extends Component {
  state = {
    text: welcomeMessage
  }
  render() {
    return (
      <View style={styles.container}>
        <WelcomeMessage {...this.state}/>
        <WelcomeInput
          onChangeInput={(text) => this.setState({text})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    justifyContent: 'space-around'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10
  }
});
