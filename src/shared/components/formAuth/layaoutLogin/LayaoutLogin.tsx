import React from 'react'
import "./layaoutLogin.css"
import burgerGrande from "../../../../assets/burgerGRANDE.jpg"
import InputForm from '../inputForm/InputForm'
import ButtonFacebook from '../buttonSocial/buttonFacebook/ButtonFacebook'
import ButtonGmail from '../buttonSocial/buttonGmail/ButtonGmail'
import ButtonSubmit from '../buttonSubmit/ButtonSubmit'
import iconoBurger from "../../../../assets/iconoBURGER.webp"

export default function LayaoutLogin() {
    return (
        <div className="layaoutLogin">
            <div className="layaoutLogin__container">
                <img className='layaoutLogin__icono' src={iconoBurger}></img>
                <div className="layaoutLogin__contenido">
                    <h1 className='layaoutLogin__h1'>LOGIN</h1>
                    <div className="layaoutLogin__inputs">
                        <InputForm placeholder='CORREO' type='email' />
                        <InputForm placeholder='PASSWORD' type='password' />
                    </div>
                    <div className="layaoutLogin__links">
                        <div className="layaoutLogin__olvidarPassword">
                            <a href="">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div className="layaoutLogin__yaTieneCuenta">
                            <a href="">¿Aun no tienes una cuenta?</a>
                        </div>
                    </div>
                    <div className="layaoutLogin__social">
                        <ButtonFacebook />
                        <ButtonGmail />
                    </div>

                    <ButtonSubmit textButton='INICIAR SESION' type='submit' />
                </div>
                <div className="layaoutLogin__imagen">
                    <img className='layaoutLogin__img' src={burgerGrande} alt="" />
                </div>
            </div>
        </div>
    )
}
