import { txtEmail } from './ui';

import '../dist/style.css';

import{
    hideLoginError,

    showLoginState,
    
    showLoginForm,

    showApp,

    showLoginError,

    btnLogin,

    btnSignup,

    btnLogout,

    txtPassword

}from './ui'

import {initializeApp} from 'firebase/app';

import {
    getAuth,

    onAuthStateChanged, 

    signOut,

    createUserWithEmailAndPassword,

    signInWithEmailAndPassword,

    // connectAuthEmulator

    signInWithPopup,
    
    GoogleAuthProvider

} from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAL_5lRIGPyxIBzHUM7-yO_otz-3q5GOSM",
    authDomain: "locomotives-bcf36.firebaseapp.com",
    databaseURL: "https://locomotives-bcf36-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "locomotives-bcf36",
    storageBucket: "locomotives-bcf36.firebasestorage.app",
    messagingSenderId: "1058712602088",
    appId: "1:1058712602088:web:6f8f01597de91a1eb5105d"
});

const auth = getAuth(firebaseApp);

auth.useDeviceLanguage();

const provider = new GoogleAuthProvider();

const loginEmailPassword = async () =>{
    const loginEmail = txtEmail.value;

    const loginPassword = txtPassword.value;

    try{
        await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

        // console.log(userCredential.user);
    }
    catch(error){
        console.log(error);

        showLoginError(error);
    }
}

// Create new account using email/password
const createAccount = async () => {
    const email = txtEmail.value

    const password = txtPassword.value
  
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    }
    catch(error) {
      console.log(`There was an error: ${error}`)
      showLoginError(error)
    } 
}

const googleLogin = async() =>{
    try{
        const userCredential = await signInWithPopup(auth, provider);

        console.log(userCredential.user);
    }
    catch(error){
        console.log(error)

        showLoginError(error)
    }
}

  
// Monitor auth state
const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user)

        showApp()
        
        showLoginState(user)
  
        hideLoginError()
      }
      else {
        showLoginForm()
        
        lblAuthState.innerHTML = `You're not logged in.`
      }
    })
}
  
  // Log out
const logout = async () => {
    await signOut(auth);
}
  
btnLogin.addEventListener("click", loginEmailPassword)

btnSignup.addEventListener("click", createAccount)

btnLogout.addEventListener("click", logout)

btnGoogle.addEventListener("click", googleLogin)

// connectAuthEmulator(auth, "http://localhost:9099");
  
monitorAuthState();