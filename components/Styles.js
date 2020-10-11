import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

//Here is all the stylings 

export const globaleStyles = StyleSheet.create({
    styleHome: {
        fontFamily: "verdana",
        fontSize: 50,
        fontWeight: "bold",
    },
    homeView: {
        flex: 1, 
        backgroundColor: "#b5d7de",
        alignItems: 'center',
        padding: 20
    },
    homeText: {
        marginBottom: 300,
        padding: 80,
        paddingTop: 20,
        backgroundColor: '#ecf0f1'
    },

    // Not working on Settings Screen - hence I've created it locally
    inlineScroll: {
        height: 100
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
    },

    // Not working on UserItem  - hence I've created it locally
    userImage: {
        width: 40,
        height: 40,
        marginRight: 10,
    },

    // Not working on UserItem  - hence I've created it locally
    onPressContainer: {
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center',
    },
});