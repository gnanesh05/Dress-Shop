import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home'
import Navigation from './routes/Navigation/Navigation'
import Authentication from './components/authentication/Authentication'
import Shop from './routes/shop/Shop'
import CheckOut from './routes/Checkout/CheckOut'
import { checkUserSession} from './store/user/user.action'

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(checkUserSession())
  },[]);

  return (
   <Routes>
    <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='auth' element={<Authentication/>} />
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='checkout' element={<CheckOut/>}/>
    </Route>
   </Routes>
  )
}

export default App