import { Router } from "express";
import { check } from "express-validator";
import validateDocuments from "../middlewares/validate.documents.js"; 
import Motos from "../models/Motos.js"; 
import { obtainMotos, obtainOneMotos, deleteMotos, insertMotos, updateMotos } from "../controllers/Motos.controllers.js";


const router = Router();

router.get("/all",obtainMotos);

router.get("/one/:id",obtainOneMotos);

router.post("/add",[
            check('modelo','modelo es requerido').not().isEmpty(),
            check('marca').custom(async(marca='')=>{
                const existeMarca = await Motos.findOne({marca});
                if (!existeMarca) {
                    throw new Error(`la marca  ${marca} no esta registrada`)
                    
                }

            }),           
            validateDocuments 
],insertMotos);

router.delete("/del/:id",deleteMotos);

router.patch("/upd/:id",updateMotos);

export default router;

