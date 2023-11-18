import React,{useContext, useEffect, useState} from 'react'
import { CartContext } from '../../context/cartContext'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
  } from './checkout.styles';

const CheckOut = () => {
    const {cartItems, totalCost} = useContext(CartContext);

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
            <Total>Total: Rs.{totalCost}</Total>
        </CheckoutContainer>
    )
}

export default CheckOut