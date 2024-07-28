import { USER_ACTION_TYPES } from "./user.types";
const INITIAL_sTATE = {
    currentUser:null,
    isLoading:false,
    error:null,
  };
  
 export const userReducer = (state = INITIAL_sTATE, action)=>{
    const {type, payload} = action;
    switch(type){
      case USER_ACTION_TYPES.SIGNIN_SUCCESS:
        return {
          ...state,
          currentUser:payload
        };
      case USER_ACTION_TYPES.SIGNOUT_SUCCESS:
        return{
          ...state,
          currentUser: null
        }
      case USER_ACTION_TYPES.SIGNOUT_FAILURE:
      case USER_ACTION_TYPES.SIGNIN_FAILURE:
      case USER_ACTION_TYPES.SIGNUP_FAILURE:
        return{
          ...state,
          error:payload
        }
      default:
       return state;
    }
  }