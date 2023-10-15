import React,{useContext} from 'react'
import { CategoriesContext } from '../../context/categoryContext'
import CategoryPreview from '../../components/category-preview/categorypreview';

const CategoriesPreview = () => {
  const {categoriesMap} = useContext(CategoriesContext);
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