import Motos from "../models/Motos.js";

const obtainMotos = async (req,res)=>{
    try {
        const motos = await Motos.find();
        res.json(motos)

    } catch (error) {
        console.log("error");
    }
}


const obtainOneMotos= async(req,res)=>{
    try {
        const motos = await Motos.findOne({_id:req.params.id});
        res.json(motos)
    } catch (error) {
        console.log(error);
    }
}


    const insertMotos = async (req, res) => {
    const motos = new Motos(req.body);
    
    try {
        const newMotos = await motos.save();
        res.json(newMotos);

    } catch (error) {
        console.log(error);
    }
    }

    

    


const deleteMotos= async (req, res)=>{
    try {
        await Motos.deleteOne({_id:req.params.id});
        res.status(200).send({
            response:"perdiste la informacion"
        })
    } catch (error) {
        console.log(error);
    }
}

const updateMotos = async (req, res)=>{{
    try {
        const motos = await Motos.findOne({_id:req.params.id})

        if (req.body.marca) {
            ciclista.marca = req.body.marca;
            
        }
        if (req.body.modelo) {
            ciclista.modelo = req.body.modelo;
            
        }

        if (req.body.año) {
            ciclista.año = req.body.año;
            
        }
        if (req.body.precio) {
            ciclista.precio = req.body.precio;
            
        }
        if (req.body.usada) {
            ciclista.usada = req.body.usada;
            
        }
        if (req.body.img) {
            ciclista.img = req.body.img;

        }
  

        await motos.save();
        res.send(motos);

    } catch (error) {
        console.log(error);
    }
}}

export {
    obtainMotos,
    obtainOneMotos, 
    insertMotos,
    deleteMotos,
    updateMotos
}