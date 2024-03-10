import React, { useState, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { updateCart , removeItemFromCart } from '../../store/cart/cart.action';
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
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const UpdateCartItem = ()=>dispatch( updateCart (cartItems,product));
    const RemoveCartItem = ()=>dispatch(removeItemFromCart(cartItems,product));

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