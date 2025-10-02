import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/homePage/Home'

import RegisterPage from '../pages/registerPage/RegisterPage'
import LoginPage from '../pages/loginPage/LoginPage'

import ForgotPasswordPage from '../pages/forgot-passwordPage/ForgotPasswordPage'

import ResetPasswordPage from '../pages/reset-passwordPage/ResetPasswordPage'
import { ErrorAlert } from '../shared/components/alerts/errorAlert/ErrorAlert'
import CorreoEnviado from '../shared/components/formAuth/correoEnviado/CorreoEnviado'




export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={< RegisterPage/>}/>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
            <Route path='/reset-password' element={<ResetPasswordPage/>} />

            <Route path='/prueba2' element={<CorreoEnviado correo='mipene@gmail.com'/>}/>
        </Routes>
    </BrowserRouter>
  )
}
