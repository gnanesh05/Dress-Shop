import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './Navigation.styles'
import CartIcon from '../../components/cart-icon/Cart-Icon'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import { UserContext } from '../../context/userContext'
import { CartContext } from '../../context/cartContext'
import { signOutAuth } from '../../utils/firebase';
import CartDropdown from '../../components/cart-dropdown/CartDropdown'

const Navigation = ()=>{
  const { currentUser} = useContext(UserContext);
  const{isCartOpen} = useContext(CartContext);
  
  const signOutHandler = async()=>{
    await signOutAuth();
  }
    return(
      <>
        <NavigationContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                  currentUser ? (<span className='nav-link' onClick={signOutHandler}>
                    Sign Out
                  </span>) :(
                     <NavLink className='nav-link' to='/auth'>
                      Sign In
                     </NavLink>
                  )
                }
                <CartIcon/>
            </NavLinks>
            {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </>
    )
  }

export default Navigation