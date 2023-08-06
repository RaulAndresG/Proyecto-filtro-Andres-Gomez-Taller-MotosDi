import { Router } from "express";
import { check } from "express-validator";
import validateDocuments from "../middlewares/validate.documents.js"; 
import Repuestos from "../models/Repuestos.js"; 
import { obtainRepuestos, obtainOneRepuestos, deleteRepuetos, insertRepuestos, updateRepuestos } from "../controllers/Repuestos.controllers.js";


const router = Router();

router.get("/all",obtainRepuestos);

router.get("/one/:id",obtainOneRepuestos);

router.post("/add",[
            check('nombre','nombre es requerido').not().isEmpty(),
            check('precio').custom(async(precio='')=>{
                const existePrecio = await Repuestos.findOne({precio});
                if (!existePrecio) {
                    throw new Error(`la precio  ${precio} no esta registrada`)
                    
                }

            }),
            validateDocuments 
],insertRepuestos);

router.delete("/del/:id",deleteRepuetos);

router.patch("/upd/:id",updateRepuestos);

export default router;


