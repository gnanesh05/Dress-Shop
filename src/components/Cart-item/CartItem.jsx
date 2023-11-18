import React from 'react'
import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({item}) => {
  console.log(item)
  const{name, imageUrl,price,quantity} = item;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x Rs{price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem