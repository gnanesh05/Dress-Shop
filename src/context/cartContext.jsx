import React,{createContext, useEffect, useState} from 'react';

const addCartItem = (cartItems,productToAdd)=>{
   const exisitingItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id);

   if(exisitingItem){
    return cartItems.map((cartItem)=>cartItem.id === productToAdd.id ? {...cartItem, quantity:cartItem.quantity+1} : cartItem)
   }

   return [...cartItems,{...productToAdd,quantity:1}];
}

const updateCartItem = (cartItems, productToEdit)=>{
 
  const index = cartItems.findIndex((cartItem)=>cartItem.id === productToEdit.id);

   if(index!==-1 && productToEdit.quantity >0){
    console.log(productToEdit.quantity)
    return cartItems.map((cartItem)=>cartItem.id === productToEdit.id ? {...cartItem, quantity:productToEdit.quantity} : cartItem)
   }

   return removeCartItem(cartItems, productToEdit);
}

const removeCartItem = (cartItems, productToRemove)=>{
  return cartItems.filter((cartItem)=>cartItem.id !== productToRemove.id);
}
export const CartContext = createContext(({
    isCartOpen : false,
    setIsCartOpen: ()=>{},
    cartItems : [],
    addItemToCart : ()=>{},
    updateCart : ()=>{},
    removeItemFromCart : ()=>{},
    cartCount:0,
    totalCost:0,
}));

export const CartProvider = ({children})=>{
    const[isCartOpen, setIsCartOpen] = useState(false);
    const[cartItems, setCartItems] = useState([]);
    const[cartCount, setCartCount] = useState(0);
    const[totalCost, setTotalCost] = useState(0);

    const addItemToCart = (productToAdd)=>{
       setCartItems(addCartItem(cartItems,productToAdd));
    }

    const updateCart = (productToEdit)=>{
       setCartItems(updateCartItem(cartItems, productToEdit));
      // console.log(cartItems);
    }

    const removeItemFromCart = (productToRemove)=>{
      setCartItems(removeCartItem(cartItems,productToRemove));
    }

    useEffect(()=>{
      const newCartCount = cartItems.reduce((total, cartItem)=>total+=cartItem.quantity,0);
      setCartCount(newCartCount);
    },[cartItems]);

    useEffect(()=>{
      const newCartTotal = cartItems.reduce((total, cartItem)=>total+=(cartItem.quantity*cartItem.price),0);
      setTotalCost(newCartTotal);
    },[cartItems]);

    const value= {isCartOpen, setIsCartOpen, addItemToCart, updateCart, removeItemFromCart, cartItems, cartCount , totalCost};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
