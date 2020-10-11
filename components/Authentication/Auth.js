import React from "react"
import { View } from 'react-native';
import SignUpForm from './SignUp';
import Login from './Login';

const Auth = () => {
    return (
        <View>
            <SignUpForm/>
            <Login/>
        </View>
    )
}

export default Auth