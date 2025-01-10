import { collection, addDoc, getDocs, query, where} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

import { onAuthStateChanged } from  'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

let currentUser;

onAuthStateChanged(auth, (user) => {
    if(user){
        currentUser = user;

        displayUserProducts();
    }
    else{
        console.log("User is gone");
    }
});
