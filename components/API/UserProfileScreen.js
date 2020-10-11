import React,{Component} from 'react';
import {Text, View, ScrollView, StyleSheet, Image } from 'react-native';

export default class UserProfileScreen extends Component{
    
    render() {
        
        const user = this.props.route.params.user;
        // Her henter vi user ud fra navigationens parametre
        // const user = this.props.navigation.getParam('user');
        // Og viser en fejlbesked hvis user ikke er defineret
        if (!user) {
            return <Text>No user specified in navigation params</Text>;
        }

        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: user.picture.large }} />
                <Text style={styles.header}>
                    {user.name.first} {user.name.last}{' '}
                </Text>
                <Text>Phone: {user.phone}</Text>
                <Text>Email: {user.email}</Text>
                <Text>
                    Location: {user.location.city}, {user.location.country}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginRight: 10,
    },
    container: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
    },
});