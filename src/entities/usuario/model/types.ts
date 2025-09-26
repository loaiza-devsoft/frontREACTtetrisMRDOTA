export interface Usuario{
    id?: number,
    nombre: string,
    email: string,
    password?: string,
    imagenUsuario?: string,
    telefono?: string,
    rolId?: number,
    rol?: Rol
}

export interface Rol{
    idRol: number,
    nombreRol: string
}