import { Usuario } from "../../../entities/usuario/model/types";
import { axiosClient } from "../../../shared/api/axiosClient";
import { endPoints } from "../../../shared/api/endPoints";

export const registrarUsuario = async(usuario: Usuario) =>{
    const respuesta = await axiosClient.post(endPoints.auth.register, usuario)
    return  respuesta.data
}

export const loginUsuario = async(email: string, password: string) =>{
    const respuesta = await axiosClient.post(endPoints.auth.login, {email, password})
    return respuesta.data
}