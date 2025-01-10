import { getFirestore } from "firebase/firestore";

import {firebaseConfig} from './firebaseConfig';

import {app} from './index';

import { collection, addDoc } from "firebase/firestore";

const db = getFirestore(app);

async function addDocument(db, collectionName, docData) { 
    try { 
        const docRef = await addDoc(collection(db, collectionName), docData); 
        
        console.log("Document written with ID: ", docRef.id); 
    } 
    catch (e) { 
        console.error("Error adding document: ", e); 
    } 
}

try {
    const docRef = await addDoc(collection(db, "locomotives"), {
      locomotiveid: 1,
      locomotivedescription: "very good diesel locomotive",
      locomotiveprice: 100
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
}