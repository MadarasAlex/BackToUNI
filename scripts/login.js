import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        caches("Logged in"+user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
