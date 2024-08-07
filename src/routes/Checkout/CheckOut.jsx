import React,{useContext, useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
  } from './checkout.styles';

const CheckOut = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Total>Total: Rs.{cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default CheckOut