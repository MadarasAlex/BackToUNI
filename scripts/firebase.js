import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCv0dTXeoeMXPiiRNUK4IIUQHhoJkh8jp0",
    authDomain: "wt-project-a9257.firebaseapp.com",
    projectId: "wt-project-a9257",
    storageBucket: "wt-project-a9257.appspot.com",
    messagingSenderId: "834972169638",
    appId: "1:834972169638:web:a139aadee0529581384b67",
    measurementId: "G-NGMXH0H9VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

