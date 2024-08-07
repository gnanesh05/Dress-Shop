import { createAction } from "../../utils/reducers/reducers.utils";
import CATEGORIES_ACTION_TYPES from "./category.types";
import { getCategoriesAndDocuments } from "../../utils/firebase";

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = ()=>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories)=>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error)=>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// export const fetchCategoriesAsync = ()=> async(dispatch)=>{
//   dispatch(fetchCategoriesStart());
//   try{
//     const categories = await getCategoriesAndDocuments();
//     dispatch(fetchCategoriesSuccess(categories));
//   }
//   catch(error){
//     dispatch(fetchCategoriesFailed(error))
//   }
// }