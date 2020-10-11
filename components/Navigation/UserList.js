import React from "react"
import UserProfileScreen from "../API/UserProfileScreen"
import UserListScreen from "../Screens/UserListScreen"
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const UserListStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="UserListScreen"
          component={UserListScreen}
        />
        <Stack.Screen
          name="UserProfileScreen"
          component={UserProfileScreen}
        />
      </Stack.Navigator>
    );
  }

const UserListNavigation = () => {
    return <UserListStack />
}

export default UserListNavigation