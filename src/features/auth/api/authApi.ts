import { Usuario } from "../../../entities/usuario/model/types";
import { axiosClient } from "../../../shared/api/axiosClient";
import { endPoints } from "../../../shared/api/endPoints";

export const registrarUsuario = async(usuario: Usuario) =>{
    const respuesta = await axiosClient.post(endPoints.auth.register, usuario)
    return  respuesta.data
}

export const loginUsuario = async(correo: string, password: string) =>{
    const respuesta = await axiosClient.post(endPoints.auth.login, {correo, password})
    return respuesta.data
}