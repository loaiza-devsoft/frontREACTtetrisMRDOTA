import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/homePage/Home'
import RegisterPage from '../pages/registerPage/RegisterPage'
import LoginPage from '../pages/loginPage/LoginPage'
import ForgotPasswordPage from '../pages/forgot-passwordPage/ForgotPasswordPage'
import ResetPasswordPage from '../pages/reset-passwordPage/ResetPasswordPage'
import CorreoEnviado from '../shared/components/formAuth/correoEnviado/CorreoEnviado'
import Navbar from '../shared/components/navbar/Navbar'
import Footer from '../shared/components/footer/Footer'
import HeroSection from '../pages/homePage/components/heroSection/HeroSection'
import OptionsSection from '../pages/homePage/components/optionsSection/OptionsSection'
import AboutSection from '../pages/homePage/components/aboutSection/AboutSection'
import GallerySection from '../pages/homePage/components/gallerySection/GallerytSection'
import ExtraGallerySection from '../pages/homePage/components/extraGallerySection/ExtraGallerySection'




export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={< RegisterPage/>}/>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
            <Route path='/reset-password' element={<ResetPasswordPage/>} />


            {/*Pruebas de componentres */}
            <Route path='/prueba2' element={<CorreoEnviado correo='mipene@gmail.com'/>}/>
            <Route path='/prueba3' element={<Navbar/>}/>
            <Route path='/prueba4' element={<Footer/>}/>
            <Route path='/prueba5' element={<HeroSection/>} />
            <Route path='/prueba6' element={<OptionsSection/>}/>
            <Route path='/prueba7' element={<AboutSection/>}/>
            <Route path='/prueba8' element={<GallerySection/>}/>
            <Route path='/prueba9' element={<ExtraGallerySection/>}/>
        </Routes>
    </BrowserRouter>
  )
}
