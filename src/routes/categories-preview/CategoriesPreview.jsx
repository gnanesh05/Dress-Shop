import React,{useContext} from 'react'
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/categorypreview';
import Spinner from '../../components/spinner/Spinner';
import { getCategories, getCategoriesIsLoading } from '../../store/category/category.selector';


const CategoriesPreview = () => {
    const categoriesMap = useSelector(getCategories);
    const isLoading = useSelector(getCategoriesIsLoading);
 // const {categoriesMap} = useContext(CategoriesContext)
  console.log(categoriesMap)
  return (
    <div className='category-preview-container'>
      {
        isLoading ? (<Spinner/>) : (
          Object.keys(categoriesMap).map((title)=>{
            const products = categoriesMap[title];
            return(
              <CategoryPreview key={title} title={title} products={products} />
            )
          }) 
        )
      }
    </div>
  )
}

export default CategoriesPreview