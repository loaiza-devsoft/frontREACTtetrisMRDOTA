import { useState } from "react";
import { Usuario } from "../../../entities/usuario/model/types";
import { registrarUsuario } from "../api/authApi";

export function useRegister() {

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const register = async (usuario: Usuario) =>{

        try{
            setLoading(true);
            setError(null);
            const respuesta = await registrarUsuario(usuario);
            alert("Usuario agregado.")
            return respuesta;

        }catch(err: any){
            setError(err.message || "Error al registrar usuario")
            alert("INVALIDO")
        }finally{
            setLoading(false);
        }

    }

    return {loading, error, register}
}

