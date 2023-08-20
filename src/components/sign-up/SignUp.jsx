import React, { useContext, useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import './Signup.styles.scss';

const SignUp = () => {

    const defaultFormFields = {
        'displayName' : '',
        'email' : '',
        'password' : '',
        'confirmPassword' : ''
    };

    const [formFields ,  setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
  

    const handleChange = (event)=>{
     const{name, value} = event.target;
     setFormFields({...formFields, [name] :value});
    }

    const resetForm = ()=>setFormFields(defaultFormFields);

    const handleSubmit = async(event)=>{
      event.preventDefault();
      if(password !== confirmPassword)
         {
            alert("passwords don't match");
            return;
         }
         try {
            const {user} =  await createAuthUserWithEmailAndPassword(email, password);
            user.displayName = displayName;
            const userDocRef = await createUserDocumentFromAuth(user);
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
  return (
    <div className='sign-up-container'>
        <h2>Don't have an account yet?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit} >
            <FormInput 
            label="Display Name"
            type="text" 
            required id='name' name='displayName' 
            value={displayName} onChange={handleChange}
            />
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
             <FormInput 
            label="Confirm Password"
            type="password" 
            required id='password' name='confirmPassword' 
            value={confirmPassword} onChange={handleChange}
            />
            <Button button_type="google" type="submit">Sign Up</Button>
        </form>
    </div>
  )
}

export default SignUp