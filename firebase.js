// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLwY7fTzH89aTlwak8nZJtgeKYImW1_Ng",
    authDomain: "hspantryapp-fee08.firebaseapp.com",
    projectId: "hspantryapp-fee08",
    storageBucket: "hspantryapp-fee08.appspot.com",
    messagingSenderId: "96376617923",
    appId: "1:96376617923:web:d554fc01366eee14ca9b76"
};

// Initialize Firebaseconst app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
export {
    app,
    firestore
}