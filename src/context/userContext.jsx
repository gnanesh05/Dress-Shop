import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase";

// has the actual value you want to access
export const UserContext = createContext({
    setCurrentUser : ()=>null,
    currentUser : null,
});


export const UserProvider =({children})=>{

    const [currentUser, setCurrentUser] = useState(null);
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

