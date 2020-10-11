import * as firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAcTdzv6O7PlTT8gyVjtvKOhe3fw-2WKbk",
    authDomain: "ovelse05.firebaseapp.com",
    databaseURL: "https://ovelse05.firebaseio.com",
    projectId: "ovelse05",
    storageBucket: "ovelse05.appspot.com",
    messagingSenderId: "842469504493",
    appId: "1:842469504493:web:874ee14926dbdf435163e4",
    measurementId: "G-TMK2B2VSLX"
}
//Kontrol om der allerede er initialiseret en instans af firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

//For chat app
// refOn = callback => {
//     this.ref
//       .limitToLast(20)
//       .on('child_added', snapshot => callback(this.parse(snapshot)));
//   }

//   parse = snapshot => {
//     const { timestamp: numberStamp, text, user } = snapshot.val();
//     const { key: _id } = snapshot;
//     const timestamp = new Date(numberStamp);
//     const message = {_id, timestamp, text, user};
//     return message;
//   };

//   send = messages => {
//     for (let i = 0; i < messages.length; i++) {
//       const { text, user } = messages[i];
//       const message = {text, user, createdAt: this.timestamp, };
//       this.ref.push(message);
//     }
//   };

export default firebase;