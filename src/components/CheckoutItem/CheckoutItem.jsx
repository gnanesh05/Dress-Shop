import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../context/cartContext';
import './checkout-item.styles.scss';
const CheckoutItem = ({item}) => {

    const [product, setProduct] = useState(item);
    let{name, quantity, price, imageUrl} = product;
    const {updateCart, removeItemFromCart} = useContext(CartContext);
    const UpdateCartItem = ()=>updateCart(product);
    const RemoveCartItem = ()=>removeItemFromCart(product);

    const increment = ()=>{
        quantity =quantity + 1;
        setProduct({...product, quantity});
    }

    const decrement = ()=>{
        quantity -=1;
        setProduct({...product,quantity});
    }

    useEffect(()=>{
    UpdateCartItem();
    },[product]);
    
  return (
    <div className='checkout-item-container'>
        <div className="image-container">
            <img src={imageUrl} alt={name} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <button className="arrow" onClick={decrement}>
                &#10094;
            </button>
            <span className="value">{quantity}</span>
            <button className="arrow" onClick={increment}>
                &#10095;
            </button>
        </span>
        <span className='price'>{price}</span>
        <div className="remove-button" onClick={RemoveCartItem}>&#10005;</div>
        {/* <div className='item-details'>
            <span className="price">
                <span> 
                    <button onClick={decrement}> - </button> 
                </span>
                {quantity} 
                <span> 
                    <button onClick={increment}> + </button> 
                </span>
                x Rs.{price}
            </span>
        </div> */}
    </div>
  )
}

export default CheckoutItem