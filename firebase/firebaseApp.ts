// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGKvPQVwAM_jt-7SsEWubGlyHwXO7NW-k",
    authDomain: "codewiz-a16b0.firebaseapp.com",
    projectId: "codewiz-a16b0",
    storageBucket: "codewiz-a16b0.appspot.com",
    messagingSenderId: "656619607586",
    appId: "1:656619607586:web:48977404756e3e7d69dc7b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export function to initialize firebase
export const initFirebase = () => {
    return app;
}