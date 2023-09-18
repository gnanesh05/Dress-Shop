import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Navigation.styles.scss"
import CartIcon from '../../components/cart-icon/Cart-Icon'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import { UserContext } from '../../context/userContext'
import { signOutAuth } from '../../utils/firebase';
import CartDropdown from '../../components/cart-dropdown/CartDropdown'

const Navigation = ()=>{
  const { currentUser} = useContext(UserContext);
  
  const signOutHandler = async()=>{
    await signOutAuth();
  }
    return(
      <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className="nav-links-container">
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {
                  currentUser ? (<span className='nav-link' onClick={signOutHandler}>
                    Sign Out
                  </span>) :(
                     <Link className='nav-link' to='/auth'>
                      Sign In
                     </Link>
                  )
                }
                <CartIcon/>
            </div>
            <CartDropdown/>
        </div>
        <Outlet/>
      </>
    )
  }

export default Navigation