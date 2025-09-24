import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

export default function LoginForm() {

    const { loading, error, login } = useLogin()

    const [form, setForm] = useState({
        correo: "",
        password: ""
    })

    const {correo, password} = form

    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit =  async(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        await login(correo, password);
        setForm({
            correo: "",
            password: ""
        })
    }


    return (
        <form onSubmit={onSubmit} className='loginForm_form' action="">
            <label className='loginForm__label' htmlFor="" >Correo</label>
            <input className='loginForm__input' type="text" name="correo" id="" onChange={onInputChange} value={correo}/>
            <br />
            <label className='loginForm__label' htmlFor="" >Password</label>
            <input className='loginForm__input' type="password" name="password" id="" onChange={onInputChange} value={password} />
            <br />
            <button className='loginForm__button' disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
            {error && <p style={{color: "red"}}> {error}</p>}
        </form>
    )
}
