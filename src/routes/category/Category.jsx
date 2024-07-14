import React,{useContext,useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { CategoryContainer, Title } from './Category.styles';
import { getCategories, getCategoriesIsLoading } from '../../store/category/category.selector';
import ProductCard from '../../components/product-card/productCard';
import Spinner from '../../components/spinner/Spinner';


const Category = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(getCategories)
    const isLoading = useSelector(getCategoriesIsLoading);
   // const {categoriesMap} = useContext(CategoriesContext)
    const[products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
       setProducts(categoriesMap[category]);
    },[category, categoriesMap]);

  return (
    <>
     <Title>{category.toUpperCase()}</Title>
     {
      isLoading ? (<Spinner/>)
      : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )
     }
    </>
  )
}

export default Category