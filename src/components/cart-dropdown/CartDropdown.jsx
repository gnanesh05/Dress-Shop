import React,{useContext} from 'react'
import Button from '../button/Button';
import './cart-dropdown.styles.scss';
import CartItem from '../Cart-item/CartItem';
import { CartContext } from '../../context/cartContext';

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">
          {cartItems.map((item)=>( <CartItem item={item}/>))}
        </div>
        <Button>CheckOut</Button>
    </div>
  )
}

export default CartDropdown