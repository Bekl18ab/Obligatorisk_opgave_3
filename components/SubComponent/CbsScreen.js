import React,{ Component } from 'react'
import { Button, View, Text } from 'react-native';

export default class CbsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>CBS!</Text>
                <Button
                    title="Go to back to Details"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}