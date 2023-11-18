import React,{useEffect} from 'react'
import { getRedirectResult } from 'firebase/auth';
import SignUp from '../sign-up/SignUp';
import SignInForm from '../sign-in/SignInForm';
import {auth } from '../../utils/firebase';
import {AuthenticationContainer} from "./Authentication.styles.jsx";

const Authentication = () => {
    useEffect(()=>{
        const restoreAuth = async()=>{
            const response = await getRedirectResult(auth);
        }
       restoreAuth();
    },[])
  return (
    <AuthenticationContainer>
        <SignInForm/>
        <SignUp/>
    </AuthenticationContainer>
  )
}

export default Authentication