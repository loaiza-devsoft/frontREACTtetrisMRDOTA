import React, { useState } from 'react'
import "./resetPasswordForm.css"
import TituloForm from '../../../../shared/components/formAuth/tituloForm/TituloForm'
import InputForm from '../../../../shared/components/formAuth/inputForm/InputForm'
import ButtonSubmit from '../../../../shared/components/formAuth/buttonSubmit/ButtonSubmit'
import { useResetPassword } from '../../hooks/useResetPassword'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function ResetPasswordForm() {

    const { loading, error, resetPassword } = useResetPassword();

    const [searchParms] = useSearchParams();
    const token = searchParms.get("token") || "";

    const navegador = useNavigate();

    const [nuevaPassword, setNuevaPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        

        if (nuevaPassword != confirmarPassword) {
            return alert("Las contraseñas no coinciden");
        }

        const respuesta = await resetPassword(token, nuevaPassword);

        if (respuesta?.status === 200) {
            alert("La constraseña fue cambiada con exito, ahora inicie sesion");
            return navegador("/login");
        }
        else {
            alert("El token expiro o es invalido");
            
        }

        setNuevaPassword("");
        setConfirmarPassword("");

        
    }


    return (
        <form onSubmit={onSubmit} className='resetPasswordForm__form' action="">

            <div className="resetPasswordForm__titulo"><TituloForm textTitulo='Cambia tu contraseña' /></div>

            <div className="resetPasswordForm__texto">
                <p className='resetPasswordForm__pTextp'>Restablece tu contraseña, y vuelve a escribirla para confirmar para poder acceder a tu cuenta</p>
            </div>

            <div className="resetPasswordForm__inputs">
                <label className='resetPasswordForm__label' htmlFor="">Contraseña nueva</label>

                <InputForm name='nuevaPassword' placeholder='ingresa tu nueva contraseña' onChange={(e) => setNuevaPassword(e.target.value)} value={nuevaPassword} />

                <label className='resetPasswordForm__label' htmlFor="">Confirmar contraseña</label>

                <InputForm name='confirmarPassword' placeholder='confirma tu nueva contraseña' onChange={(e) => setConfirmarPassword(e.target.value)} value={confirmarPassword} />
            </div>

            <div className="resetPasswordForm__buttonSubmit">
                {error && <p className='resetPasswordForm__p'>{error}</p>}
                <ButtonSubmit textButton={loading ? "Enviando..." : "Cambiar contraseña"} />
            </div>

        </form>
    )
}
