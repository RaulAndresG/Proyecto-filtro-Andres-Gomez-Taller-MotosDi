import {  Schema, model } from "mongoose";

const CitasShema= Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        
        subject: {
            type: String,
            required: true,
            trim: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true
    }
)

const Citas = model("Citas", CitasShema,"Citas");

export default Citas;