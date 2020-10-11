import * as React from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';
import { globaleStyles } from '../Styles';

export default class SignUpForm extends React.Component {
  state = {
    email: '',
    password: '',
    isLoading: false,
    isCompleted: false,
    errorMessage: null,
  };

  //Laver et tænkesymbol, når den loader
  startLoading = () => this.setState({ isLoading: true });
  //Stopper tænkesymbolet, når den er færdig med at loade
  endLoading = () => this.setState({ isLoading: false });
  setError = errorMessage => this.setState({ errorMessage });
  clearError = () => this.setState({ errorMessage: null });
  handleChangeEmail = email => this.setState({ email });
  handleChangePassword = password => this.setState({ password });

  handleSubmit = async () => {
    const { email, password } = this.state;
    try {
      this.startLoading();
      this.clearError();

      // Here the data is passed to the service and we wait for the result
      //await dummySignUp(email, password);

      //connecting with firebase
      const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

      // For at kunne lave en ny database med users, så skal denne kaldes ligeledes med hvordan vi gjorde med messages
      // firebase.database().ref('users/'+message[0]._id).set(message[0]);   

      this.endLoading();
      this.setState({ isCompleted: true });
    } catch (error) {
      this.setError(error.message);
      this.endLoading();
    }
  };

  render = () => {
    const { errorMessage, email, password, isCompleted } = this.state;
    if (isCompleted) {
      return <Text>You are now signed up</Text>;
    }
    return (
      <View style={{marginTop: 140}}>
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={this.handleChangeEmail}
          style={globaleStyles.inputField}
        />
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={this.handleChangePassword}
          secureTextEntry
          style={globaleStyles.inputField}
        />
        {errorMessage && (
          <Text style={globaleStyles.error}>Error: {errorMessage}</Text>
        )}
        {this.renderButton()}
      </View>
    );
  };

  renderButton = () => {
    const { isLoading } = this.state;
    if (isLoading) {
      return <ActivityIndicator />;
    }
    return <Button onPress={this.handleSubmit} title="Create user" />;
  };
}
