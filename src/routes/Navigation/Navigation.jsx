import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Navigation.styles.scss"
import { ReactComponent as Logo } from '../../assests/crown.svg'

const Navigation = ()=>{
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
                <Link className='nav-link' to='/signin'>
                    Sign In
                </Link>
            </div>
        </div>
        <Outlet/>
      </>
    )
  }

export default Navigation