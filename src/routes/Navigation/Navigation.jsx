import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Outlet } from 'react-router-dom'
import { userSelector } from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { signOutStart } from '../../store/user/user.action'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './Navigation.styles'
import CartIcon from '../../components/cart-icon/Cart-Icon'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'

const Navigation = ()=>{
  // const { currentUser} = useContext(UserContext);
  const isCartOpen = useSelector(selectIsCartOpen); 
  const currentUser = useSelector(userSelector);
  const dispatch = useDispatch();

  
  const signOutHandler = async()=>dispatch(signOutStart());
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