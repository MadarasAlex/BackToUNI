

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../pages/overview.html';
        const uid = user.uid;
        const user = auth.currentUser;
        const email_id = user.email;
        window.alert("Welcome, " + email_id);

    } else {
        window.location.href = '../pages/login.html';
    }
});

function login() {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("submit-button")

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById("mail_input").value;
        const password = document.getElementById("password_input").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                caches("Logged in" + user);
                alert("You have successfully logged in.");
                location.reload();
                loginErrorMsg.style.opacity = 1;

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });


    })
}

function logout() {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}


