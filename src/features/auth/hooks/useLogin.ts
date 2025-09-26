import { useState } from "react";
import { loginUsuario } from "../api/authApi";

export function useLogin(){

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string) =>{
        try{
            setLoading(true);
            setError(null);
            const respuesta = await loginUsuario(email, password);
            console.log(respuesta);
            alert("USUARIO ENCONTRADO");
            return respuesta;
            
            


        }catch(err: any){
            setError(err.message || "Error al loguearte");
            alert("INVALIDO");

        }finally{
            setLoading(false);
        }
    } 

    return {loading, error, login};

}