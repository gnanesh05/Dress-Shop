import CATEGORIES_ACTION_TYPES from "./category.types";

const INITIAL_sTATE = {
    categories : []
}

export const categoriesReducer  = (state=INITIAL_sTATE,action)=>{
    const {type, payload} = action;
    switch(type){
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {...state, categories : payload};
        default:
            return state;
    }
}