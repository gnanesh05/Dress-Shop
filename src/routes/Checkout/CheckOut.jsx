import React,{useContext, useEffect, useState} from 'react'
import { CartContext } from '../../context/cartContext'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import './checkout.styles.scss';

const CheckOut = () => {
    const {cartItems, totalCost} = useContext(CartContext);
    // const[total, setTotal] = useState(0);
    // const[products, setProducts] = useState(cartItems);

    // useEffect(()=>{
    //     console.log('total');
    //     calculateTotal();
    // },[products]);

    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item)=>(
                <CheckoutItem key={item.id} item={item} />
            ))}
            <span className='total'>Total : {totalCost}</span>
        </div>
    )
}

export default CheckOut