import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home'
import Navigation from './routes/Navigation/Navigation'
import Signin from './components/sign-in/Signin'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='signin' element={<Signin/>} />
    </Route>
   
   </Routes>
  )
}

export default App