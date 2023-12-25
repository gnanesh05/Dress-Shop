import React,{useContext,useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { CategoryContainer, Title } from './Category.styles';
import { getCategories } from '../../store/category/category.selector';
import ProductCard from '../../components/product-card/productCard';
import {CategoriesContext } from '../../context/categoryContext'

const Category = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(getCategories)
   // const {categoriesMap} = useContext(CategoriesContext)
    const[products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
       setProducts(categoriesMap[category]);
    },[category, categoriesMap]);

  return (
    <>
     <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  )
}

export default Category