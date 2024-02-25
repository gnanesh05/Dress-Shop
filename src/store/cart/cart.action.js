import { createAction } from "../../utils/reducers/reducers.utils";
import CART_ACTION_TYPES from "./cart.types";


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


export const addItemToCart = (cartItems,productToAdd)=>{
    const newCartItems =  addCartItem(cartItems,productToAdd);
   return  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const updateCart = (cartItems,productToEdit)=>{
    const newCartItems = updateCartItem(cartItems, productToEdit);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
  }

export const removeItemFromCart = (cartItems,productToRemove)=>{
    const newCartItems = removeCartItem(cartItems,productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
  }

export const setCartItems = (cartItems)=>createAction(CART_ACTION_TYPES.SET_CART_ITEMS , cartItems);


export const setIsCartOpen = (isCartOpen)=>createAction('SET_CART_OPEN', isCartOpen);


