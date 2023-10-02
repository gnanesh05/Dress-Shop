import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '../button/Button';
import './cart-dropdown.styles.scss';
import CartItem from '../Cart-item/CartItem';
import { CartContext } from '../../context/cartContext';

const CartDropdown = () => {
  const {cartItems, setIsCartOpen} = useContext(CartContext);
  let navigate = useNavigate();

  const redirectPage = ()=>{
    setIsCartOpen(prev=>!prev);
    navigate('checkout');
  }
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">
          {cartItems.map((item)=>( <CartItem item={item}/>))}
        </div>
        <Button onClick={redirectPage}>CheckOut</Button>
      
    </div>
  )
}

export default CartDropdown