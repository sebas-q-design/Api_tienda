import mongoose from "mongoose"; 

export const ProductosSchema=
    new mongoose.Schema({
        id: Number,
        nombre: String,
        precio: Number

    })

export interface IProductos extends mongoose.Document{
    id: number; 
    nombre: string;
    precio: number
}