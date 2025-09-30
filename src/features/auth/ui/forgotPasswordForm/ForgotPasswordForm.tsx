import React, { useState } from 'react'
import "./forgotPasswordForm.css"
import TituloForm from '../../../../shared/components/formAuth/tituloForm/TituloForm'
import InputForm from '../../../../shared/components/formAuth/inputForm/InputForm'
import ButtonSubmit from '../../../../shared/components/formAuth/buttonSubmit/ButtonSubmit'
import { useForgotPassword } from '../../hooks/useForgotPassword'

export default function ForgotPasswordForm() {

    const { loading, error, forgotPassword } = useForgotPassword()


    const [form, setForm] = useState({
        email: ""
    })

    const { email } = form;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const respuesta = await forgotPassword(email);

        if(respuesta?.status === 200){
            alert("Correo mandado con el link");
        }

        setForm({
            email: ""
        })
    }


    return (
        <form onSubmit={onSubmit} className='forgotPasswordForm__form' action="">

            <div className="forgotPasswordForm__titulo">
                <TituloForm textTitulo='¿Olvido la contraseña?' />
            </div>

            <div className="forgotPasswordForm__texto">
                <p className='forgotPasswordForm__p'>Introduzca el correo electronico de la cuenta la cual olvido la contraseña.</p>
            </div>

            <div className="forgotPasswordForm__labels">
                <label className='forgotPasswordForm__label' htmlFor="">Correo</label>
            </div>

            <div className="forgotPasswordForm__inputs">
                <InputForm name='email' placeholder='introduzca el correo electronico' onChange={onInputChange} value={email} />
            </div>

            <div className="forgotPasswordForm__buttonSubmit">
                {error && <p className='forgotPasswirdForm__error'>{error}</p>}
                <ButtonSubmit disabled={loading} textButton={loading ? "Enviando correo..." : "Enviar correo"} />
            </div>


        </form>
    )
}
