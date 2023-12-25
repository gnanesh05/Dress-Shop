import React,{useContext} from 'react'
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/categorypreview';
import { getCategories } from '../../store/category/category.selector';
import {CategoriesContext } from '../../context/categoryContext'

const CategoriesPreview = () => {
    const categoriesMap = useSelector(getCategories);
 // const {categoriesMap} = useContext(CategoriesContext)
  console.log(categoriesMap)
  return (
    <div className='category-preview-container'>
      {
          Object.keys(categoriesMap).map((title)=>{
            const products = categoriesMap[title];
            return(
              <CategoryPreview key={title} title={title} products={products} />
            )
          }) 
      }
    </div>
  )
}

export default CategoriesPreview