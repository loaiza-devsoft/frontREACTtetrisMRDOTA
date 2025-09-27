import React, { useState } from 'react'
import { useRegister } from '../hooks/useRegister'
import { Usuario } from '../../../entities/usuario/model/types';
import "./registerForm.css"
import TituloForm from '../../../shared/components/formAuth/tituloForm/TituloForm';
import InputForm from '../../../shared/components/formAuth/inputForm/InputForm';
import ButtonFacebook from '../../../shared/components/formAuth/buttonSocial/buttonFacebook/ButtonFacebook';
import ButtonGmail from '../../../shared/components/formAuth/buttonSocial/buttonGmail/ButtonGmail';
import ButtonSubmit from '../../../shared/components/formAuth/buttonSubmit/ButtonSubmit';
import { Link } from 'react-router-dom';

export default function RegisterForm() {

    const {error, loading, register} = useRegister()

    const [form, setForm] = useState<Usuario>({
        nombre: "",
        email:"",
        password:"",
        rolId: 2
    })

    
    const [confirmarPassword, setConfirmarPassword] = useState("")

    const {nombre, email, password} = form;



    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setForm({...form, [e.target.name]: e.target.value});
    }


    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        
        

        if (password !== confirmarPassword) {
            alert("Las contraseñas no coinciden");
            return
        }



        await register(form);


        setForm({nombre: "",
        email:"",
        password:""
        });

        setConfirmarPassword("");
    }



    return (
        <form className='registerForm__form' onSubmit={onSubmit} action="">

            <div className='registerForm__titulo'>
                <TituloForm textTitulo='REGISTRO'/>
            </div>

            <div className="registerForm__inputs">
                <InputForm name='nombre'  placeholder='NOMBRE USUARIO' required onChange={onInputChange} value={nombre}/>
                <InputForm name='email' type='email' placeholder='CORREO' required onChange={onInputChange} value={email} />
                <InputForm name='password' type='password' placeholder='CONTRASEÑA' required onChange={onInputChange} value={password}/>
                <InputForm name='confirmarPassword' type='password' placeholder='CONFIRMAR PASSWORD' required onChange={(e)=>setConfirmarPassword(e.target.value)} value={confirmarPassword}/>
            </div>

            <div className="registerForm__links">
                <input className='registerForm__input' type="checkbox" required />
                <div className="registerForm__terminos">
                    <a className='registerForm__a_terminos' href="">Estas con de acuerdo con los terminos y condiciones</a>
                </div>
                <div className="registerForm__yaTieneCuenta">
                    <Link className='registerForm__a_yaTieneCuenta' to="/login" >¿Ya tienes cuenta?</Link>
                </div>
            </div>

            <div className="registerForm__social">
                <ButtonFacebook/>
                <ButtonGmail/>
            </div>

            <div className="registerForm__buttonSubmit">
                {error && <p className='registerForm__p'>{error}</p>}
                <ButtonSubmit textButton={loading ? "CARGANDO...": "REGISTRARSE"}/>
            </div>
        </form>
    )
}
