import { initializeApp } from "firebase/app";

import { firebaseConfig } from './firebaseConfig';

const db = firebaseApp.firestore();

const app = initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

const login = () => {
    const email = document.getElementById('email').value;

    const password = document.getElementById('password').value;

    console.log('Login function triggered');
    
    console.log('Email:', email);
    
    console.log('Password:', password);

    auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
        console.log('User logged in:', res.user);
        window.location.href = 'home.html'; // Redirect to home.html
    })
    .catch((err) => {
        alert(err.message);
        console.log('Error code:', err.code);
        console.log('Error message:', err.message);
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

const redirectToSignUp = () => {
    window.location.href = 'sign-up.html';
};

document.addEventListener('DOMContentLoaded', () => {
    const signUpBtn = document.getElementById('sign-up-btn');
    if (signUpBtn) {
        signUpBtn.addEventListener('click', redirectToSignUp);
    }
});

// Your existing saveData, readData, updateData, deleteData functions...
