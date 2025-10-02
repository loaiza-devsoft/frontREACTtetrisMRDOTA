import { useState } from "react";
import { loginUsuario } from "../api/authApi";
import { LoginResponse } from "../../../entities/usuario/model/types";

export function useLogin(){

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string) =>{
        try{
            setLoading(true);
            setError(null);
            const respuesta: LoginResponse = await loginUsuario(email, password);
            localStorage.setItem("token", respuesta.token);
            localStorage.setItem("usuario", JSON.stringify(respuesta.usuario));
            return respuesta;
            
            


        }catch(err: any){
            setError(err.message || "Error al loguearte");

        }finally{
            setLoading(false);
        }
    } 

    return {loading, error, login};

}