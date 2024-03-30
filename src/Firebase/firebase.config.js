// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnGNEIBijo57sQhy1T8KTrlS-73BASUhs",
    authDomain: "media-marvels.firebaseapp.com",
    projectId: "media-marvels",
    storageBucket: "media-marvels.appspot.com",
    messagingSenderId: "375845525905",
    appId: "1:375845525905:web:0720b37385d4275eae2230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;