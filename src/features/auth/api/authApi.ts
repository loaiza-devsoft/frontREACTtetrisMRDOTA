import { Usuario } from "../../../entities/usuario/model/types";
import { axiosClient } from "../../../shared/api/axiosClient";
import { endPoints } from "../../../shared/api/endPoints";

export const registrarUsuario = async(usuario: Usuario) =>{
    const respuesta = await axiosClient.post(endPoints.auth.register, usuario)
    return  respuesta;
}

export const loginUsuario = async(email: string, password: string) =>{
    const respuesta = await axiosClient.post(endPoints.auth.login, {email, password})
    return respuesta.data;
}

export const loginGoogle = async (token: string)=>{
    const respuesta = await axiosClient.post(endPoints.auth.authGoogle, {token})
    return respuesta.data;
}

export const forgotPasswordUsuario = async (email: string)=>{
    const respuesta = await axiosClient.post(endPoints.auth.forgotPassword, {email})
    return respuesta;
}

export const resetPasswordUsuario = async(token: string, nuevaPassword : string) =>{
    const respuesta = await axiosClient.post(endPoints.auth.resetPassword, {token, nuevaPassword});
    return respuesta;
}