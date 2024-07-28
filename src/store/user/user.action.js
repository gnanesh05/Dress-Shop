import { createAction } from "../../utils/reducers/reducers.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user)=> createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
export const checkUserSession = ()=>createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
export const googleSigninStart = ()=>createAction(USER_ACTION_TYPES.GOOGLE_SIGNIN_START);
export const emailSignInStart = (email, password)=>createAction(USER_ACTION_TYPES.EMAIL_SIGNIN_START,{email, password});
export const signInSuccess = (user)=>createAction(USER_ACTION_TYPES.SIGNIN_SUCCESS, user);
export const signInFailure = (error)=>createAction(USER_ACTION_TYPES.SIGNIN_FAILURE, error);
export const signUpStart = (email, password, displayName)=>createAction(USER_ACTION_TYPES.SIGNUP_START, {email, password, displayName});
export const signUpSuccess = (user,additionalDetails)=>createAction(USER_ACTION_TYPES.SIGNUP_SUCCESS,{user, additionalDetails});
export const signUpFailure = (error)=>createAction(USER_ACTION_TYPES.SIGNUP_FAILURE, error);
export const signOutStart = ()=>createAction(USER_ACTION_TYPES.SIGNOUT_START);
export const signOutSuccess = ()=>createAction(USER_ACTION_TYPES.SIGNOUT_SUCCESS);
export const signOutFailure = (error)=>createAction(USER_ACTION_TYPES.SIGNOUT_FAILURE, error);
