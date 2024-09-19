export interface Pedido{
    numero: number,
    nombreCliente: string,
    estado: string,
    descripcion:string,
    date?:Date,
}