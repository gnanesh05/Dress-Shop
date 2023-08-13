// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU0XWT0uzdc7ZJSYPgZ2sysBwgNVT0Iiw",
  authDomain: "dress-shop-fc6dd.firebaseapp.com",
  projectId: "dress-shop-fc6dd",
  storageBucket: "dress-shop-fc6dd.appspot.com",
  messagingSenderId: "663972396524",
  appId: "1:663972396524:web:59c30eb697a7f57c7e54c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = ()=>signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth, provider);

//setting up db
export const db = getFirestore();
export const createUserDocumentFromAuth = async(userAuth)=>{
    if(!userAuth)
     return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    //if snapshot not exist create 
    if(!userSnapShot.exists()){
        const{displayName, email} = userAuth;
        const createdAt = Date.now();

        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log(`error creating user - ${error}`);
        }
    }
    return userDocRef;
}
export const createAuthUserWithEmailAndPassword = async(email, password)=>{
    if(!email || !password)
     return;

    return await createUserWithEmailAndPassword(auth,email, password);
}