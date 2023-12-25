import React,{createContext, useReducer} from 'react';
import { createAction } from '../utils/reducers/reducers.utils';

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

const INITIAL_STATE = {
  isCartOpen:false,
  cartItems :[],
  cartCount:0,
  cartTotal:0,
};

const cartReducer  = (state, action)=>{
  const {type, payload} = action;
  switch(type){
    case 'SET_CART_ITEMS':
      return{
        ...state,
        ...payload
      }
    case 'SET_CART_OPEN':
      return{
        ...state,
        isCartOpen:payload
      }
    default:
      throw new Error(`Unhandled Type found - ${type}`);
  }
}

export const CartProvider = ({children})=>{
    // const[isCartOpen, setIsCartOpen] = useState(false);
    // const[cartItems, setCartItems] = useState([]);
    // const[cartCount, setCartCount] = useState(0);
    // const[totalCost, setTotalCost] = useState(0);

    const[{cartItems, cartCount, cartTotal, isCartOpen}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const addItemToCart = (productToAdd)=>{
      const newCartItems =  addCartItem(cartItems,productToAdd);
      updateCartItemsReducer(newCartItems);
    }

    const updateCart = (productToEdit)=>{
      const newCartItems = updateCartItem(cartItems, productToEdit);
      updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (productToRemove)=>{
      const newCartItems = removeCartItem(cartItems,productToRemove);
      updateCartItemsReducer(newCartItems);
    }

    const updateCartItemsReducer = (newCartItems)=>{
      const newCartCount = newCartItems.reduce((total, cartItem)=>total+=cartItem.quantity,0);
      const newCartTotal = newCartItems.reduce((total, cartItem)=>total+=(cartItem.quantity*cartItem.price),0);

      dispatch(createAction('SET_CART_ITEMS',{cartCount:newCartCount, cartTotal:newCartTotal, cartItems:newCartItems}));
    }
    
    const setIsCartOpen = (bool)=>{
      dispatch(createAction('SET_CART_OPEN',bool));
    }

    // useEffect(()=>{
    //   const newCartCount = cartItems.reduce((total, cartItem)=>total+=cartItem.quantity,0);
    //   setCartCount(newCartCount);
    // },[cartItems]);

    // useEffect(()=>{
    //   const newCartTotal = cartItems.reduce((total, cartItem)=>total+=(cartItem.quantity*cartItem.price),0);
    //   setTotalCost(newCartTotal);
    // },[cartItems]);

    const value= {isCartOpen, setIsCartOpen, addItemToCart, updateCart, removeItemFromCart, cartItems, cartCount , cartTotal};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
