import Repuestos from "../models/Repuestos.js";

const obtainRepuestos = async (req,res)=>{
    try {
        const repuestos = await Repuestos.find();
        res.json(repuestos)

    } catch (error) {
        console.log("error");
    }
}


const obtainOneRepuestos= async(req,res)=>{
    try {
        const repuestos = await Repuestos.findOne({_id:req.params.id});
        res.json(repuestos)
    } catch (error) {
        console.log(error);
    }
}


    const insertRepuestos = async (req, res) => {
    const repuestos = new Repuestos(req.body);
    
    try {
        const newRepuestos = await repuestos.save();
        res.json(newRepuestos);

    } catch (error) {
        console.log(error);
    }
    }

    

    


const deleteRepuetos= async (req, res)=>{
    try {
        await Repuestos.deleteOne({_id:req.params.id});
        res.status(200).send({
            response:"perdiste la informacion"
        })
    } catch (error) {
        console.log(error);
    }
}

const updateRepuestos = async (req, res)=>{{
    try {
        const repuestos = await Repuestos.findOne({_id:req.params.id})

        if (req.body.nombre) {
            ciclista.nombre = req.body.nombre;
            
        }
        if (req.body.precio) {
            ciclista.precio = req.body.precio;
            
        }

        if (req.body.cantidad) {
            ciclista.cantidad = req.body.cantidad;
            
        }

        if (req.body.img) {
            ciclista.img = req.body.img;

        }
  

        await repuestos.save();
        res.send(repuestos);

    } catch (error) {
        console.log(error);
    }
}}

export {
    obtainRepuestos,
    obtainOneRepuestos, 
    insertRepuestos,
    deleteRepuetos,
    updateRepuestos
}