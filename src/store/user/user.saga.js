import {takeLatest, all, call , put} from 'redux-saga/effects'
import { USER_ACTION_TYPES } from './user.types'
import { signInSuccess, signInFailure, signUpSuccess, signUpFailure, signOutSuccess, signOutFailure } from './user.action'
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, signOutAuth } from '../../utils/firebase'

export function* getSnapShotFromUserAuth(userAuth, additionalDetails){
    try {
        const userSnapShot = yield call(createUserDocumentFromAuth,userAuth, additionalDetails);
        console.log(userSnapShot.data())
        yield put(signInSuccess({id:userSnapShot.id, ...userSnapShot.data()}));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle(){
try {
    const {user} = yield call(signInWithGooglePopup);
    yield call(getSnapShotFromUserAuth, user);
} catch (error) {
    put(signInFailure(error));
}
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return;
        yield call(getSnapShotFromUserAuth, userAuth)
    }
    catch(error){
        yield put(signInFailure(error))
    }
}

export function* signInWithEmail({payload:{email, password}}){
    try {
        const {user} = yield call(signInAuthUserWithEmailAndPassword, email, password);
        yield put(signInSuccess(user))
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInAfterSignUp({payload:{user, additionalDetails}}){
    yield call(getSnapShotFromUserAuth, user, additionalDetails);
}

export function* signUp({payload:{email, password, displayName}}){
    try {
        const {user} = yield call( createAuthUserWithEmailAndPassword, email, password);
        yield put(signUpSuccess(user,{displayName}))
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* signOut(){
    try {
        yield call(signOutAuth);
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGNIN_START, signInWithGoogle)
}
export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart(){
yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGNIN_START, signInWithEmail )
}

export function* onSignUpStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGNUP_START, signUp);
}

export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.SIGNUP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGNOUT_START, signOut);
}

export function* userSaga(){
    yield all([call(onCheckUserSession),
               call(onGoogleSignInStart),
               call(onEmailSignInStart),
               call(onSignUpStart),
               call(onSignUpSuccess),
               call(onSignOutStart)]);
}