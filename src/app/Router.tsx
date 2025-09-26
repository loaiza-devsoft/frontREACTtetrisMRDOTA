import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/homePage/Home'
import LayaoutLogin from '../shared/components/formAuth/layaoutLogin/LayaoutLogin'
import RegisterPage from '../pages/registerPage/RegisterPage'
import LoginPage from '../pages/loginPage/LoginPage'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={< RegisterPage/>}/>
            <Route path='/login' element={<LoginPage />} />

            <Route path='/prueba1' element={<LayaoutLogin/>}/>
        </Routes>
    </BrowserRouter>
  )
}
