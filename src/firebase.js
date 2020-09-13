import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyB9wt4RAOb3ApKQchKPNcnCY06t-d5rLwc",
    authDomain: "netflix-clone-cc0c3.firebaseapp.com",
    databaseURL: "https://netflix-clone-cc0c3.firebaseio.com",
    projectId: "netflix-clone-cc0c3",
    storageBucket: "netflix-clone-cc0c3.appspot.com",
    messagingSenderId: "802702362870",
    appId: "1:802702362870:web:9e22bcac9e88a97eb2c4d7",
    measurementId: "G-HS9NE76E15"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
