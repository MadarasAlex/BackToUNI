import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("submit-button")
const auth = getAuth();
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if (username === "user" && password === "web_dev") {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                caches("Logged in" + user);
                window.location.href='./overview.html';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})


