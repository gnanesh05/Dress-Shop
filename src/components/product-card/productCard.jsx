import React,{useContext} from 'react'
import './productCard.styles.scss';
import Button from '../button/Button';
import { CartContext } from '../../context/cartContext';

const ProductCard = ({product}) => {
  const {addItemToCart} = useContext(CartContext);

  const addProductToCart = ()=>addItemToCart(product);
  const{name, price, imageUrl} = product;
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
    </div>
  )
}

export default ProductCard