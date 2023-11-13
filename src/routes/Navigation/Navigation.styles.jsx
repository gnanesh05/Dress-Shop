import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
     width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
        height: 100%;
        width: 70px;
        padding: 25px;
`
export const NavLinks = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
`
export const NavLink = styled(Link)`
        cursor: pointer;
        padding: 25px 10px;
`


