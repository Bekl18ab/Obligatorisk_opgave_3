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
import MainNavigation from '../Navigation/Main';
import { globaleStyles } from '../Styles';

export default class Login extends React.Component {
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
      .signInWithEmailAndPassword(email, password);

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
      return <MainNavigation auth={isCompleted} />;
    } else
    return (
      <View>
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
    return <Button onPress={this.handleSubmit} title="Login" />;
  };
}
