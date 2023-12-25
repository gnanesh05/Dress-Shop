
const INITIAL_sTATE = {
    currentUser:null,
  };
  
 export const userReducer = (state = INITIAL_sTATE, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser:payload
        };
      default:
       return state;
    }
  }