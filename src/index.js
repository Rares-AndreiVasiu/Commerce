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

        // redirectToHome();
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
      await createUserWithEmailAndPassword(auth, email, password);
      // redirectToHome();
    }
    catch(error) {
      console.log(`There was an error: ${error}`)
      showLoginError(error)
    } 
}

const googleLogin = async() =>{
    try{
        const userCredential = await signInWithPopup(auth, provider);

        // console.log(userCredential.user);
        // redirectToHome();
    }
    catch(error){
        console.log(error)

        showLoginError(error)
    }
}

// onAuthStateChanged((user) => {
//   if(user){
//     window.location.href='../src/main.html';
//   }
//   else{
//     showLoginForm()

//     lblAuthState.innerHTML = `You're not logged in.`
//   }
// })
  
// Monitor auth state
const monitorAuthState = async () => {
    // onAuthStateChanged(auth, user => {
    //   if (user) {
    //     console.log(user)

    //     showApp()
        
    //     showLoginState(user)
  
    //     hideLoginError()

    //     redirectToHome()
    //   }
    //   else {
    //     showLoginForm()
        
    //     lblAuthState.innerHTML = `You're not logged in.`
    //   }
    // })
    onAuthStateChanged(auth, user => {
      if(user){
        window.location.href="../src/power.html";
      }
      else{
        showLoginForm()
    
        lblAuthState.innerHTML = `You're not logged in.`
      }
    })
}
  

  // Log out
const logout = async () => {
    await signOut(auth);
}

// import { getFirestore, setDoc, doc, onSnapshot, collection } from 'firebase/firestore';

// const firestore = getFirestore();

// const locomotives = doc(firestore, 'locomotives/mylocomotives');

// async function addLocomotives(){
//   const locomotiveData = {
//     locomotivedescription: 'good price',

//     locomotiveid: 0,
    
//     locomotiveprice: 1, 
//   };
//   try{
//     await setDoc(locomotives, locomotiveData, {merge:true});

//     console.log('bruh');
//   }
//   catch(error){
//    console.log('no acccount?');
//   }
// }

// function listenToADocument(){
//   onSnapshot(locomotives, (docSnapshot) => {
//     if(docSnapshot.exists()){
//       const docData = docSnapshot.data();

//       console.log(`In realtime, docData is ${JSON.stringify(docData)}`);
//     }
//   });
// }

// async function querryForDocuments(){
//   const locomotiveQuerry = query(
//     collection(firestore, 'locomotives'),
//     where('price', '==', '1'),
//     limit(10)
//   );

//   onSnapshot(locomotiveQuerry, (querySnapshot) => {
//     console.log(JSON.stringify(querySnapshot.docs.map((e) => e.data())));
//   });
// }

// addLocomotives();

// listenToADocument();

btnLogin.addEventListener("click", loginEmailPassword)

btnSignup.addEventListener("click", createAccount)

btnLogout.addEventListener("click", logout)

btnGoogle.addEventListener("click", googleLogin)

// connectAuthEmulator(auth, "http://localhost:9099");
  
monitorAuthState();

// onAuthStateChanged();