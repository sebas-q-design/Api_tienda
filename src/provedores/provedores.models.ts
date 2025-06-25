import mongoose from "mongoose"; 

export const ProvedoresSchema=
    new mongoose.Schema({
        cedula: Number,
        nombre: String, 
        telefono: String

    })

export interface IProvedores extends mongoose.Document{
    cedula: number,
    nombre: string,
    telefono: string
}