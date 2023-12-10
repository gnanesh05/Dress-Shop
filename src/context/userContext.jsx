import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase";
import { createAction } from "../utils/reducers/reducers.utils";

// has the actual value you want to access
export const UserContext = createContext({
    setCurrentUser : ()=>null,
    currentUser : null,
});

const INITIAL_sTATE = {
  currentUser:null,
};

const userReducer = (state, action)=>{
  const {type, payload} = action;
  switch(type){
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser:payload
      }
    default:
      throw new Error(`Unhandled Type ${type}`)
  }
}
export const UserProvider =({children})=>{

    const [state, dispatch] = useReducer(userReducer, INITIAL_sTATE);
   // const [currentUser, setCurrentUser] = useState(null);
   //
     const {currentUser} = state;
     const setCurrentUser = (user)=>{
      dispatch(createAction('SET_CURRENT_USER', user));
     } 
    
    const value = {currentUser, setCurrentUser};
    useEffect(()=>{
      const unsubcribe = onAuthStateChangedListener(async(user)=>{
        if(user){
            await createUserDocumentFromAuth(user);
        }
       setCurrentUser(user);
      }) 
      return unsubcribe;
    },[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

