import React,{useContext} from 'react'
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import { CartContext } from '../../context/cartContext';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const{setIsCartOpen, cartCount} = useContext(CartContext);

  const toggle = ()=>setIsCartOpen(prev=>!prev);
  return (
    <div className='cart-icon-container' onClick={toggle}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon