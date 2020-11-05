import React,{ useEffect } from 'react'
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
import { globaleStyles } from '../Styles';
import CarbrandItem from './../SubComponent/CarbrandItem';
import {auth} from 'firebase';
import firebase from 'firebase';
import {useState} from 'react';
import { getThisAccountName } from '../../helpers/account';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {getThisUser} from '../../helpers/account';

const SettingsScreen = () => {
    const [ accountName, setAccountName ] = useState("")
    // Array af Bilmærker
    const carBrands = [
        "Abarth",
        "Alfa Romeo",
        "Aston Martin",
        "Audi",
        "Bentley",
        "BMW",
        "Bugatti",
        "Cadillac",
        "Chevrolet",
        "Chrysler",
        "Citroën",
        "Dacia",
        "Daewoo",
        "Daihatsu",
        "Dodge",
        "Donkervoort",
        "DS",
        "Ferrari",
        "Fiat",
        "Fisker",
        "Ford",
        "Honda",
        "Hummer",
        "Hyundai",
        "Infiniti",
        "Iveco",
        "Jaguar",
        "Jeep",
        "Kia",
        "KTM",
        "Lada",
        "Lamborghini",
        "Lancia",
        "Land Rover",
        "Landwind",
        "Lexus",
        "Lotus",
        "Maserati",
        "Maybach",
        "Mazda",
        "McLaren",
        "Mercedes-Benz",
        "MG",
        "Mini",
        "Mitsubishi",
        "Morgan",
        "Nissan",
        "Opel",
        "Peugeot",
        "Porsche",
        "Renault",
        "Rolls-Royce",
        "Rover",
        "Saab",
        "Seat",
        "Skoda",
        "Smart",
        "SsangYong",
        "Subaru",
        "Suzuki",
        "Tesla",
        "Toyota",
        "Volkswagen",
        "Volvo"
    ];

    getThisAccountName().then((name) => {
        setAccountName(name)
    })

    useEffect(() => {
        //re-render
    }, [accountName])

    //Lav en konstant kaldt render Carbrands som tager en parametre med til vores CarbrandItem kompnent
    const renderCarBrandItem = ({item}) =>(
        <CarbrandItem CarBrandName={item}/>
    )

    const textInSettings = ("Settings");

    const logOff = () => {
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    }

    const handleChangeAccountName = (e) => {
        setAccountName(e)
        firebase.database().ref('accounts/'+getThisUser()).set({
            accountName: e
          })
    };
    

    return (
        <View style={{ flex: 1/2, justifyContent: 'top', alignItems: 'center' }}>
            <Text style={globaleStyles.styleHome}>
            <Text>
                {textInSettings}
            </Text>
            </Text>
            <Text>
                Account name:
            </Text>
            <TextInput 
                placeholder=""
                value={accountName}
                onChangeText={(e) => handleChangeAccountName(e) }
            />
            {/* <View style={globaleStyles.inlineScroll}> */}
            <View style={globaleStyles.signOut}>
            {/* <FlatList
            data={carBrands}
            renderItem={renderCarBrandItem}
            keyExtractor={item => item}
            /> */}
            <Button title="Sign off" onPress={logOff} />
            </View>
        </View>
    );
}

export default SettingsScreen;
