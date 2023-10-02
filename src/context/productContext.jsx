import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../assests/shop-data.js';
import { addCollectionAndDocuments } from "../utils/firebase.js";

export const ProductContext = createContext({
    products:[],
});

export const ProductProvider = ({children})=>{
    const[products, setProducts] = useState(SHOP_DATA);
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // },[])
    const value = {products};
    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}
