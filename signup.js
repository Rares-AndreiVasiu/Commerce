import { firebaseConfig } from './firebaseConfig';

const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById('email').value;

    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user);
        window.location.href = 'home.html'; // Redirect to home.html
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    });
};

const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
    .then((result) => {
        console.log(result.user);
        window.location.href = 'home.html'; // Redirect to home.html
    })
    .catch((error) => {
        console.log(error);
    });
};
