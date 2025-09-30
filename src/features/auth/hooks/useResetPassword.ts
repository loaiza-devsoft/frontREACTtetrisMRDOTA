import { useState } from "react";
import { resetPasswordUsuario } from "../api/authApi";

export function useResetPassword(){

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const resetPassword = async (token : string, nuevaPassword: string) =>{

        try{
            setLoading(true);
            setError(null);
            const respuesta = await resetPasswordUsuario(token, nuevaPassword);
            return respuesta;
        }catch(err: any){
            setError(err.message || "error desconocido");

        }finally{
            setLoading(false);
        }
    }

    return {loading, error, resetPassword}
}