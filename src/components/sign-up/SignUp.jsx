import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase';
import FormInput from '../form-input/FormInput';
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
            alert(error)
            
         }
        
      
    }
  return (
    <div>
        <h1>Sign up with your email and password</h1>
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
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp