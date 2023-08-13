import React,{useEffect} from 'react'
import { getRedirectResult } from 'firebase/auth';
import SignUp from '../sign-up/SignUp';
import {auth, signInWithGooglePopup,createUserDocumentFromAuth } from '../../utils/firebase';

const googleSigninPopup = async()=>{
        const {user} =  await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
}

const Signin = () => {
    useEffect(()=>{
        const restoreAuth = async()=>{
            const response = await getRedirectResult(auth);
            console.log(response);
        }
       restoreAuth();
    },[])
  return (
    <div>
        <h1>Sign In</h1>
        <button onClick={googleSigninPopup}>Sign In With Google popup</button>
        <SignUp/>
    </div>
  )
}

export default Signin