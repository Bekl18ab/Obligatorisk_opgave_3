import firebase from "firebase"

export const getThisUser = () => {
    return firebase.auth().currentUser.uid
}

export const getThisAccountName = async () => {
    const snapshot = await firebase.database().ref('accounts/'+getThisUser()).once("value")
    return snapshot.val().accountName
}

