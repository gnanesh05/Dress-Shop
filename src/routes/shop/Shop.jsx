import React,{useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCategoriesAndDocuments } from '../../utils/firebase'
import CategoriesPreview from '../categories-preview/CategoriesPreview'
import { fetchCategoriesStart, setCategories, fetchCategoriesAsync, fetchCategoriesSuccess} from '../../store/category/category.action'
import Category from '../category/Category'


const Shop = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    // const getCategoriesMap = async()=>{
    //     const categories = await getCategoriesAndDocuments();
    //     console.log(categories)
    //     dispatch(fetchCategoriesSuccess(categories));
    // }
    // getCategoriesMap();
    // dispatch(fetchCategoriesAsync())
    dispatch(fetchCategoriesStart());
},[]);
  
  return (
   <Routes>
     <Route index element={<CategoriesPreview/>}/>
     <Route path=":category" element={<Category/>}/>
   </Routes>
  )
}

export default Shop