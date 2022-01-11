import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";

// Your web app's Firebase configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth();

function signIn(){

    var email = document.getElementById("username");
    var password = document.getElementById("password_id");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
}

auth.onAuthStateChanged(function(user){

    if(user){
        var email = user.email;
        alert("Active User " + email);
    }else{
        alert("No Active User");
    }
});
