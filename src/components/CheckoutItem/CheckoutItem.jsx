import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../context/cartContext';
import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton,
  } from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {

    const [product, setProduct] = useState(cartItem);
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
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={name} />
        </ImageContainer>
        <BaseSpan>{name}</BaseSpan>
        <Quantity>
            <Arrow className="arrow" onClick={decrement}>
                &#10094;
            </Arrow>
            <Value className="value">{quantity}</Value>
            <Arrow className="arrow" onClick={increment}>
                &#10095;
            </Arrow>
        </Quantity>
        <BaseSpan>{price}</BaseSpan>
        <RemoveButton onClick={RemoveCartItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem