import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/homePage/Home'
import Register from '../pages/registerPage/Register'
import Login from '../pages/loginPage/Login'
import ButtonFacebook from '../shared/components/formAuth/buttonSocial/buttonFacebook/ButtonFacebook'
import ButtonGmail from '../shared/components/formAuth/buttonSocial/buttonGmail/ButtonGmail'
import LayaoutLogin from '../shared/components/formAuth/layaoutLogin/LayaoutLogin'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={< Register/>}/>
            <Route path='/login' element={<Login />} />

            <Route path='/prueba1' element={<LayaoutLogin/>}/>
        </Routes>
    </BrowserRouter>
  )
}
