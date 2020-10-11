import React,{Component} from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, Linking, Button,} from 'react-native';


export default class UserItem extends Component {

    sendEmail = () => {
        const { user } = this.props;
        const emailUrl = "mailto:"+user.email;
        Linking.openURL(emailUrl);
    };
    handleClick = () => {
        const { user, onSelect } = this.props;
        onSelect(user);
    };
    render() {
        const { user } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={this.handleClick}>
                <Image style={styles.image} source={{ uri: user.picture.thumbnail }} />
                <Text>{user.name.first} {user.name.last}</Text>
                {/* Denne knap håndterer klik på email-adressen i rækken */}
                <Button title={user.email} onPress={this.sendEmail} />
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    container: {
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center',
    },
});