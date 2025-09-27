import { useState } from "react";
import { loginGoogle } from "../api/authApi";
import { LoginResponse } from "../../../entities/usuario/model/types";


export function useGoogleLogin() {


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loginWithGoogle = async (token: string) => {
        try {
            setError(null);
            setLoading(true);
            const respuesta: LoginResponse = await loginGoogle(token);
            localStorage.setItem("token", respuesta.token);
            localStorage.setItem("usuario", JSON.stringify(respuesta.usuario));
            alert("Exitoso°");
            return respuesta;

        } catch (err: any) {
            setError(err.message || "error al iniciar con google")
        } finally {
            setLoading(false);
        }
    }

    return { loading, error, loginWithGoogle }
}