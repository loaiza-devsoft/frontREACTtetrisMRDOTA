import React from 'react'
import { useGoogleLogin } from '../../../../../features/auth/hooks/useGoogleLogin'
import { GoogleLogin } from '@react-oauth/google'

export default function ButtonGmail() {
  const { loginWithGoogle } = useGoogleLogin()

  return (
    <GoogleLogin
      onSuccess={(credentialReponsive) => {
        if (credentialReponsive.credential) {
          const token = credentialReponsive.credential;
          loginWithGoogle(token);
        }
      }}

      onError={()=>{
        console.log("Error al iniciar con google");
      }}

      theme='outline'
      text='signin'
      size='large'
      shape='circle'

  
      // useOneTap  // aparece el cuadro a la derecha al cargar la pagina.


    />
  )
}




/*import React from 'react'
import { FcGoogle } from "react-icons/fc";
import "./buttonGmail.css";


export default function ButtonGmail() {
  return (
    <button className='buttonGmail__button'>
        <FcGoogle  size={22}/>
    </button>
  )
}*/