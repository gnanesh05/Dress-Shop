import CART_ACTION_TYPES from "./cart.types";

const INITIAL_STATE = {
    cartItems:[],
    isCartOpen : false
};

export const CartReducer = (state = INITIAL_STATE, action)=>{
    const {type, payload} = action
    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS :
            return {...state, cartItems: payload};

        case CART_ACTION_TYPES.SET_CART_OPEN:
            return {...state, isCartOpen: payload};

        default:
            return state;
    }
}