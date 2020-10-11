import React,{ Component } from 'react'
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
import { globaleStyles } from '../Styles';
import CarbrandItem from './../SubComponent/CarbrandItem';
import {auth} from 'firebase';

export default class SettingsScreen extends Component {
    render() {
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
        
        return (
            <View style={{ flex: 1, justifyContent: 'top', alignItems: 'center' }}>
                <Text style={globaleStyles.styleHome}>
                <Text>
                    {textInSettings}
                </Text>
                </Text>
                <View style={globaleStyles.inlineScroll}>
                <FlatList
                data={carBrands}
                renderItem={renderCarBrandItem}
                keyExtractor={item => item}
                />
                <Button title="Sign off" onPress={logOff} />
                </View>
            </View>
        );
    }
}
