import React, { useContext, useState } from 'react'
import {signInWithGooglePopup,createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase';
import FormInput from '../form-input/FormInput';
import Button , {BUTTON_TYPE_CLASSES} from '../button/Button';
import './SignInForm.styles.scss';

const SignInForm = () => {

    const defaultFormFields = {
        'email' : '',
        'password' : '',
    };

    const [formFields ,  setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    const handleChange = (event)=>{
     const{name, value} = event.target;
     setFormFields({...formFields, [name] :value});
    }

    const resetForm = ()=>setFormFields(defaultFormFields);

    const handleSubmit = async(event)=>{
      event.preventDefault();
         try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetForm();
         } catch (error) {
            switch(error.code){
                case "auth/wrong-password":
                    alert("Incorrect Password");
                    break;
                case "auth/user-not-found":
                    alert("No user found");
                    break;
                default:
                    console.log(error);
            }
            
         }
        
      
    }
const signInWithGoogle = async()=>{
    await signInWithGooglePopup();
}

  return (
    <div className='sign-in-container'>
        <h2>Already Have an account?</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={handleSubmit} >
             <FormInput 
            label="Email"
            type="email" 
            required id='email' name='email' 
            value={email} onChange={handleChange}
            />
             <FormInput 
            label="Password"
            type="password" 
            required id='password' name='password' 
            value={password} onChange={handleChange}
            />
            <div className='buttons-container'>
                <Button type="submit">Sign In</Button>
                <Button type="button" button_type={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}> Google Sign In</Button>
            </div>
        </form>
    </div>
  )
}

export default SignInForm