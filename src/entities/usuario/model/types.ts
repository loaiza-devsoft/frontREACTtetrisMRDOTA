export interface Usuario{
    id?: number,
    userName: string,
    email: string,
    password?: string,
    imageUser?: string,
    phone?: string,
    rolId?: number,

}


export interface LoginResponse{
    token: string,
    expiresIn: number,
    usuario: Usuario,
    timestamp: string

}
