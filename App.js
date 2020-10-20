import React, { useEffect, useState } from 'react';
import firebase from "./firebase";
import MainNavigation from './components/Navigation/Main';

const App = () => {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setIsLoggedIn(user)
    });
    
  }, [])

  return (
    <MainNavigation auth={isLoggedIn} />
  )
}

export default App;


/*const Stack = createStackNavigator ();

class TopNavigation extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="UserListScreen" component={UserListScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfilScreen} />
      </Stack.Navigator>
    )
  }
}
*/
/*
//Her har vi stack navigationen
const stackNavigator = createStackNavigator({
  //Fra venstre er det side navnet og screen er vores View / component
  UserList: { screen: UserListScreen },
  UserProfile:{screen: UserProfilScreen}
},
{
  //Hvilket View skal starte
  initialRouteName:'UserList',
  navigationOptions:{
      title:'Bruger liste'
  }
}
);
*/
/*
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            tabBarOptions={{
              labelStyle:{fontSize: 20},
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}>
                <Tab.Screen name="Home" component={HomeScreen}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons name="home" color={color} size={35} />),
                  }}/>
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Topnavigations with details" component={Topnavigation} />
                <Tab.Screen name="UserListScreen" component={UserListScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
*/

/*export default class Box extends React.Component {
  // Denne state bruges til at holde en kopi af input-feltets værdi
  state = {inputField: 'empty box'};
  // Denne ref bruges til at have en reference til <Box> som er renderet
  box = React.createRef();

  handleButtonPress = () => {
    // Normalt vil man blot Ã¦ndre den prop man sender ind til sin komponent, ved at referere til state. FormÃ¥let med opgaven her er at fÃ¥ hands-on erfaring med refs
  this.box.current.setTitle(this.state.inputFieldValue);
  };
  // Her sÃ¦tter vi staten sÃ¥ den altid passer med teksten i feltet
  handleTextChange = (text) => {
    this.setState({ inputFieldValue : text});
  };
  render() {
    return (
      <View style={styles.container}>
      <TextInput 
        style={styles.textInput}
        onChangeText={this.handleTextChange}
      />
      <Button title="Click me" onPress={this.handleButtonPress} />
      {//Her bliver Box assignet til this.box referencen
      }
      <Box ref={this.box} />
      </View>
    );
  }
}*/