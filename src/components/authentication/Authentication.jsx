import React,{useEffect} from 'react'
import { getRedirectResult } from 'firebase/auth';
import SignUp from '../sign-up/SignUp';
import SignInForm from '../sign-in/SignInForm';
import {auth } from '../../utils/firebase';
import "./Authentication.styles.scss";

const Authentication = () => {
    useEffect(()=>{
        const restoreAuth = async()=>{
            const response = await getRedirectResult(auth);
        }
       restoreAuth();
    },[])
  return (
    <div className='authentication-container'>
        <SignInForm/>
        <SignUp/>
    </div>
  )
}

export default Authentication