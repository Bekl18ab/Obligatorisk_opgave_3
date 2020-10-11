import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

/*export default function Box() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
    </View>
  );
}*/

export default class Box extends React.Component {
  state = {title: 'No input yet'};
  setTitle = (title) => this.setState({title});
  render() {
    return <Text>{this.state.title} </Text>;
  }
}

export const KimsBox = ({awesomness, strongness, coolness}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {coolness}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});