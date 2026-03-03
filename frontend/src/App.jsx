import React from 'react'
import './App.css'
import Home from './screen/Home'
import { BrowserRouter as Rounter, Routes, Route } from 'react-router-dom'
import Login from './screen/Login'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './screen/SignUp.jsx'
import ContextProvider from './component/Contextreducer.jsx'
import Cart from './screen/Cart.jsx'
import MyOrder from './screen/MyOrder.jsx'
function App() {
  return (
    <ContextProvider>
      <Rounter>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/createuser' element={<SignUp />} />
            <Route exact path='/myOrder' element={<MyOrder />} />

          </Routes>
        </div>
      </Rounter>
    </ContextProvider>
  )
}

export default App