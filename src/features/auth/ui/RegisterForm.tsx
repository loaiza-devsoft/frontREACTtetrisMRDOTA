import React, { useState } from 'react'
import { useRegister } from '../hooks/useRegister'
import { Usuario } from '../../../entities/usuario/model/types';

export default function RegisterForm() {

    const {error, loading, register} = useRegister()

    const [form, setForm] = useState<Usuario>({
        nombre: "",
        correo:"",
        password:""
    })

    const [confirmarPassword, setConfirmarPassword] = useState("")

    const {nombre, correo, password} = form;



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
        correo:"",
        password:""});

        setConfirmarPassword("");
    }



    return (
        <form onSubmit={onSubmit} className='registerForm__form' action="">
            <label className='registerForm__label' htmlFor="">Nombre</label>
            <input name='nombre' className='registerForm__input' type="text" onChange={onInputChange} value={nombre} />
            <br />
            <label className='registerForm__label' htmlFor="">Correo</label>
            <input name='correo' className='registerForm__input' type="text" onChange={onInputChange} value={correo} />
            <br />
            <label className='registerForm__label' htmlFor="">Password</label>
            <input name='password' className='registerForm__input' type="password" onChange={onInputChange} value={password} />
            <br />
            <label className='registerForm__label' htmlFor="">Confirmar Password</label>
            <input name='confirmarPassword' className='registerForm__input' type="password" onChange={(e) => setConfirmarPassword(e.target.value)} value={confirmarPassword} />
            <br />
            <button type='submit' className='registerForm__button' disabled={loading}>{loading ? "Cargando" : "Enviar"}</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    )
}
