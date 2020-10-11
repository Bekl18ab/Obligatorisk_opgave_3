import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import SettingsScreen from "../Screens/SettingsScreen";
import UserListNavigation from "./UserList"
import Auth from "../Authentication/Auth";
import Icon from "react-native-vector-icons/FontAwesome5";
import {MaterialIcons, Ionicons} from "react-native-vector-icons";
import ChatScreen from "../Screens/ChatScreen";

const Tab = createBottomTabNavigator();

const MainTabs = () => (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {fontSize: 22, padding: 6},
        style: {height: 80}   
      }}>
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            tabBarIcon: ({color}) =>(
            <Icon name="home" size={30} color={color} />
            )}}
        />
        <Tab.Screen
        name="Friends"
        component={UserListNavigation}
        options={{
            tabBarIcon: ({color}) =>(
            <Icon name="user-friends" size={30} color={color} />
            )}}
        />
        <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
            tabBarIcon: ({color}) =>(
            <Ionicons name="ios-chatbubbles" size={30} color={color} />
            )}}
        />
        <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
            tabBarIcon: ({color}) =>(
            <MaterialIcons name="settings" size={30} color={color} />
            )}}
        />
    </Tab.Navigator>
)

const MainNavigation = ({auth}) => {
    return (
        <>
        {/* Ternary expression (simpel syntaks for en if-else. ? betyder 'hvis true'. : betyder 'hvis false') */}
        {auth ? (
            <NavigationContainer>
                <MainTabs />
            </NavigationContainer>
        ) : (
            <Auth />
        )}
        </>
    )
}

export default MainNavigation