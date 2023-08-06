import { Router } from "express";
import { check } from "express-validator";
import validateDocuments from "../middlewares/validate.documents.js"; 
import Citas from "../models/Citas.js"; 
import { obtainCitas, obtainOneCitas, insertCitas, deleteCitas, updateCitas } from "../controllers/Citas.controllers.js";


const router = Router();

router.get("/all",obtainCitas);

router.get("/one/:id",obtainOneCitas);

router.post("/add",/* ,[
            check('nombre','nombre es requerido').not().isEmpty(),
            check('email').custom(async(email='')=>{
                const existeEmail = await Citas.findOne({email});
                if (!existeEmail) {
                    throw new Error(`el email :   ${email}  esta registrado`)
                    
                }

            }),           
            validateDocuments 
] , */insertCitas);

router.delete("/del/:id",deleteCitas);

router.patch("/upd/:id",updateCitas);

export default router;

