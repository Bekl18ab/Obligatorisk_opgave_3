import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Alert,
    ActivityIndicator,
    FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import UserItem from "./../API/UserItem";
import { globaleStyles } from '../Styles';

// Vi definerer en konstant med URLen til vores user-service
const USERS_URL = 'https://randomuser.me/api?results=10';

export default class UserListScreen extends React.Component {
    // Initial state sættes
    state = {
        users: null,
        isLoading: false,
        error: null,
    };

    // Når komponenten mountes, kalder vi listen af users
    componentDidMount = () => {
        this.loadUserProfiles();
    };

    // Vi håndterer at loading er startet
    startLoading = () => this.setState({ isLoading: true });

    // Vi håndterer at loading er afslutttet
    stopLoading = () => this.setState({ isLoading: false });

    // Vi sætter en fejlbesked
    setError = message => this.setState({ error: message });

    // Vi fjerner en fejlbesked
    clearError = () => this.setState({ error: null });

    // Her loades listen af users fra den angivne URL og vi fortolker JSON data og opdaterer state
    // Samtidig håndteres fejl og indikation af at vi er ved at loade data.
    loadUserProfiles = async () => {
        try {
            this.startLoading();
            const response = await fetch(USERS_URL);
            const json = await response.json();
            console.log('json response from network', json);
            this.setState({ users: json.results });
            this.stopLoading();
            this.clearError();
        } catch (error) {
            this.stopLoading();
            this.setError(error.message);
        }
    };

    handleSelectUser = user => {
        // Vi navigerer til UserProfile skærmen og sender den modtagne user med som argument
        this.props.navigation.navigate('UserProfileScreen', { user });
    };

    render() {
        // Her pakker vi this.state ud i separate variable (mere læsevenligt)
        const { isLoading, users, error } = this.state;
        return (
            <>
            <View style={globaleStyles.container}>
                {/* Hvis state.isLoading er true, viser vi en spinner */}
                {isLoading && <ActivityIndicator />}
                {/* Hvis state.users er sat, viser vi listen af users */}
                {users && (
                    <FlatList
                        data={users}
                        // Vi sender vores item, som er den enkelte user, med som prop til UserItem
                        // Vi sender også vores event handler med som prop, så UserItem ikke skal håndtere navigation
                        // this.handleSelectUser modtager en user som argument
                        renderItem={({ item }) => (
                            <UserItem user={item} onSelect={this.handleSelectUser} />
                        )}
                        keyExtractor={item => item.login.uuid}
                    />
                )}
                {/* Hvis der er fejl, dvs. state.error er sat, viser vi fejlen */}
                {error && <Text style={globaleStyles.error}>Error: {error}</Text>}
            </View>
            </>
        );
    }
}