export interface Usuario{
    id?: number,
    nombre: string,
    email: string,
    password?: string,
    imagenUsuario?: string,
    telefono?: string,
    rolId?: number,

}


export interface LoginResponse{
    token: string,
    expiresIn: number,
    usuario: Usuario,
    timestamp: string

}
