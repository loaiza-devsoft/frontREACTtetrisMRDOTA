import React, { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import TituloForm from '../../../../shared/components/formAuth/tituloForm/TituloForm'


import "./loginForm.css"
import InputForm from '../../../../shared/components/formAuth/inputForm/InputForm'
import ButtonGmail from '../../../../shared/components/formAuth/buttonSocial/buttonGmail/ButtonGmail'
import ButtonSubmit from '../../../../shared/components/formAuth/buttonSubmit/ButtonSubmit'
import { Link } from 'react-router-dom'
import { ErrorAlert } from '../../../../shared/components/alerts/errorAlert/ErrorAlert'
import SuccessAlert from '../../../../shared/components/alerts/successAlert/SuccessAlert'

export default function LoginForm() {

    const { loading, error, login } = useLogin()

    const [alertaError, setAlertaError] = useState<string | null>(null);
    const [alertaSuccess, setAlertaSuccess] = useState<string | null>(null);

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const { email, password } = form

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        

        const respuesta = await login(email, password);

        if (respuesta?.token) {
            setAlertaSuccess(null);
            setTimeout(()=>{
                setAlertaSuccess("Login exitoso.")
            },0)
        }
        else{
            setAlertaError(null);
            setTimeout(()=>{
                setAlertaError("Credenciales invalidas");
            }, 0)
            return;
        }

        
        setForm({
            email: "",
            password: ""
        })

        
    }


    return (
        <form onSubmit={onSubmit} className='loginForm__form' action="">


            {alertaError && <ErrorAlert mensaje={alertaError}/>}
            {alertaSuccess && <SuccessAlert mensaje={alertaSuccess}/>}

            <div className="loginForm__titulo">
                <TituloForm textTitulo='LOGIN' />
            </div>
            

            <div className="loginForm__inputs">
                <InputForm name='email' required type='email' onChange={onInputChange} value={email} placeholder='CORREO' />
                <InputForm name='password' required type='password' onChange={onInputChange} value={password} placeholder='PASSWORD' />
            </div>

            <div className="loginForm__links">
                <div className="loginForm__olvidoPassword">
                    <Link className='loginForm__a' to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                </div>
                <div className="loginForm__yaTieneCuenta">
                    <Link className='loginForm__a' to="/register">¿Aun no tienes una cuenta?</Link>
                </div>
            </div>

            <div className="loginForm__social">
                <ButtonGmail  />
            </div>

            <div className="loginForm__separator">
                <span>or</span>
            </div>

            

            <div className="loginForm__buttonSubmit">
                {error && <p className='loginForm__p'>{error}</p>}
                <ButtonSubmit disabled={loading} textButton={loading ? "CARGANDO..." : "INICIAR SESION"} />
            </div>
            


        </form>
    )
}
