import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView} from 'react-native';
import { Searchbar } from 'react-native-paper';

const Parkingspot = () => {
    const [listOfParkingSpots, setListOfParkingSpots ] = useState([])

    const parkingSpots = [
        {   
            "name": "Jernbanevej parkeringshus plads 140",
            "photo": "https://cdn.abcotvs.com/dip/images/5896174_013120-kgo-parking-spot-img_Image_00-00-59,06.jpg?w=800&r=16%3A9"
        },
        {
            "name": "Smallegade 10",
            "photo": "https://www.fox13memphis.com/resizer/fnozG7BiCYOipHG6hK8ZKCCZYnc=/1200x675/arc-anglerfish-arc2-prod-cmg.s3.amazonaws.com/public/S6VYLQMQ6WVGT5ET53X7RDZG2U.jpg"
        },
        {
            "name": "Frederiksberg Allé 39",
            "photo": "https://s.respace.dk/dyn/resources/Property_Model_Property_Image/image/5/1212785/1504518576/grid/59ad21b0678522.jpg"
        },
        {
            "name": "Københavnsvej 32",
            "photo": "https://s.respace.dk/dyn/resources/Property_Model_Property_Image/image/3/2514483/1601476381/grid/5f74971a9919ainkedimg-2393li.jpg"
        },
        {
            "name": "Hoveltevej 36",
            "photo": "https://www.fc-beton.dk/images/1707/mindre_parkeringsplads_gr%C3%A6sarmering.jpg"
        },
        {
            "name": "Jagtvej 69",
            "photo": "https://i.ebayimg.com/images/g/ysYAAOSwWElfEfgV/s-l960.jpg"
        },
        {
            "name": "Fredeskovhellet 212",
            "photo": "https://i.pinimg.com/236x/ae/70/99/ae70990a904647e9c84a15940ae2e200.jpg"
        }
    ]
    
    useEffect(() => {
        setListOfParkingSpots(parkingSpots)        
    }, [])

    //Funktion til at fremvise FlatList
    function Item({ item }) {
        return (
        <View style={styles.listItem}>
            <View style={{alignItems:"center",flex:1}}>
            <Text>Parkingspot for {item.name}</Text>  
            <Image source={{uri:item.photo}}  style={{margin: 5, width:150, height:100, borderRadius: 2}} />
            </View>
        </View>
        );
    }

    const search = (input) => {
        const result = []
        parkingSpots.forEach( parkingSpot => {
            if(parkingSpot.name.includes(input)){
                    result.push(parkingSpot)
            }
        })
        
        setListOfParkingSpots(result)
    }
    
      // Oprettelse af FlatList, hvor den gemmer elementer i Item, som så kan bruges oppe i fremvisning af FlatListe funktionen
        return (
          <SafeAreaView style={styles.container}>
            <Searchbar 
            placeholder="Type here"
            lightTheme
            round
            onChangeText={input => search(input)}
            autoCorrect={false}
            />
            <FlatList
              style={{flex:1}}
              data={listOfParkingSpots}
              renderItem={({item}) => 
              <Item item={item}/>
            }
              keyExtractor={item => item.item}
            />
          </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop:60
    },
    listItem:{
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        width: 250,
        height: 150,
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
    }
});

export default Parkingspot;
