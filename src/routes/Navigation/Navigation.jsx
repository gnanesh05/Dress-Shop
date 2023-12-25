import React,{useContext} from 'react'
import {useSelector} from 'react-redux'
import { Outlet } from 'react-router-dom'
import { userSelector } from '../../store/user/user.selector'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './Navigation.styles'
import CartIcon from '../../components/cart-icon/Cart-Icon'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import { UserContext } from '../../context/userContext'
import { CartContext } from '../../context/cartContext'
import { signOutAuth } from '../../utils/firebase';
import CartDropdown from '../../components/cart-dropdown/CartDropdown'

const Navigation = ()=>{
  // const { currentUser} = useContext(UserContext);
  const{isCartOpen} = useContext(CartContext);
  const currentUser = useSelector(userSelector);

  
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
                  currentUser ? (<NavLink className='nav-link' onClick={signOutHandler}>
                    Sign Out
                  </NavLink>) :(
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