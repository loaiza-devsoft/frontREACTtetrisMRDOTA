import { useState } from "react";
import { loginUsuario } from "../api/authApi";

export function useLogin(){

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const login = async (correo: string, password: string) =>{
        try{
            setLoading(true);
            setError(null);
            const respuesta = await loginUsuario(correo, password);
            return respuesta;


        }catch(err: any){
            setError(err.message || "Error al loguearte");

        }finally{
            setLoading(false);
        }
    } 

    return {loading, error, login};

}