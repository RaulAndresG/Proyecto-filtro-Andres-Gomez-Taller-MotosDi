import {  Schema, model } from "mongoose";

const RepuestosSchema = Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        precio: {
            type: String,
            required: true,
            trim: true,
        },
        cantidad: {
            type: String,
            required: true,
            trim: true,
        },
        img: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true
    }
)

const Repuestos = model("Repuestos", RepuestosSchema ,"Repuestos");
export default Repuestos  ;