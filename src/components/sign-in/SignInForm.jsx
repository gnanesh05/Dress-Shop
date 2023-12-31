import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import {signInWithGooglePopup,createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase';
import FormInput from '../form-input/FormInput';
import Button , {BUTTON_TYPE_CLASSES} from '../button/Button';
import { SignInContainer, ButtonsContainer } from './SignInForm.styles';


const defaultFormFields = {
    email: '',
    password: '',
  };
  
  const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const navigate = useNavigate()
  
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };
  
    const signInWithGoogle = async () => {
      await signInWithGooglePopup();
      navigate('/')
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        await signInAuthUserWithEmailAndPassword(email, password);
        resetFormFields();
        navigate('/')

      } catch (error) {
        console.log('user sign in failed', error);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({ ...formFields, [name]: value });
    };
  
    return (
      <SignInContainer>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
          />
  
          <FormInput
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
          />
          <ButtonsContainer>
            <Button type='submit'>Sign In</Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.google}
              type='button'
              onClick={signInWithGoogle}
            >
              Sign In With Google
            </Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  };
  
export default SignInForm