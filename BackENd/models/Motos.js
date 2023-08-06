import {  Schema, model } from "mongoose";

const MotosSchema = Schema(
    {
        marca: {
            type: String,
            required: true,
            trim: true,
        },
        modelo: {
            type: String,
            required: true,
            trim: true,
        },
        año: {
            type: String,
            required: true,
            trim: true,
        },
        precio: {
            type: String,
            required: true,
            trim: true,
        },
        usada: {
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

const Motos = model("Motos", MotosSchema ,"Motos");

export default Motos;