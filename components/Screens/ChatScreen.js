import React, { useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from "firebase"
import {useState} from 'react';
import {Keyboard,  TouchableWithoutFeedback, View} from 'react-native';
import { TextInput } from 'react-native-paper';

const ChatScreen = () => {

    //Jeg initialisere et array med useState. "messages" er vores read værdi og "setMessages" er vores write værdi
    const [messages, setMessages] = useState([]);
    
    //useEffect er basically det samme som willMount, men er måden du mounter i funktionelle komponenter
    useEffect(() => {
        // den udkommenterede kode er en anden måde hvorpå vi kan sortere vores kode i databasen. Men da jeg laver en ny array, så nøjes jeg med at sortere deri.
        // firebase.database().ref("messages").orderByChild("createdAt").on("value", snaps => {
        
        //Vi laver en reference til messages i vores database, hvor vi ønsker at få fremvist værdien, og ikke en hash eller lignende. Snaps er Googles måde at fortælle, at det er et "billede" af de værdier er er lige nu
        firebase.database().ref("messages").on("value", snaps => {
            //Jeg gemmer mit snap, som et objekt i en ny variabel. Map er ligesom et for each loop. Så vi denne linje får fremkaldt hver af mine keys.
            const fbMessages = Object.keys(snaps.val()).map( messageKey => {
                return snaps.val()[messageKey]
            })
            //Jeg laver en sortering. Og bruger et if statement i en funktionel komponent. Hvis createdAt a er mindre en createdAt b, så skal den være 1, hvis ikke, så -1. 
            fbMessages.sort((a,b) => {
                return a.createdAt < b.createdAt ? 1 : -1
            })
            setMessages(fbMessages)
        })
        // [] bruges sammen med vores useState, det er en parametre, der styrer hvor ofte useState skal opdateres. Da den er tom køres den kun den ene gang. 
    }, [])

    const saveToFirebase = (message) => {
        //Her tages første objekt i mit array og instantiere
        const messageToFirebase = message[0];
        //For at få datoen, hvor beskeden er sendt på med, så er jeg nødt til at sende den med.
        messageToFirebase.createdAt = Date.parse(message[0].createdAt)
        firebase.database().ref('messages/'+message[0]._id).set(message[0]);    
    }
        
    const getThisUser = () => {
        return firebase.auth().currentUser.uid
    }

    return (
        <GiftedChat
            messages={messages}
            user={{_id:getThisUser(), name:"Benjamin"}}
            onSend={saveToFirebase}
            showUserAvatar
            scrollToBottom
            />
    );
}

export default ChatScreen;
