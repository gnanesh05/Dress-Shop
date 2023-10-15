import { createContext, useState, useEffect} from "react";
// import SHOP_DATA from '../assests/shop-data.js';
import { getCategoriesAndDocuments } from "../utils/firebase.js";

export const CategoriesContext = createContext({
    categoriesMap:{},
});

export const CategoriesProvider = ({children})=>{
    const[categoriesMap, setCategoriesMap] = useState({});
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // },[])

    useEffect(()=>{
        const getCategoriesMap = async()=>{
            const categoriesMap = await getCategoriesAndDocuments();
            console.log(categoriesMap);
            setCategoriesMap(categoriesMap);
        }
        getCategoriesMap();
    },[]);
    const value = {categoriesMap};
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
