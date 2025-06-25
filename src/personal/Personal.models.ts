import mongoose from "mongoose";

export const PersonalSchema =({
    id: Number,
    nombre: String,
    telefono: String,
    cargo: String
})

export interface IPersonal extends mongoose.Document {
    id: number;
    nombre: string;
    telefono: string;
    cargo: string;
}