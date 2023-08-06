import Citas from "../models/Citas.js";

const obtainCitas = async (req,res)=>{
    try {
        const citas = await Citas.find();
        res.json(citas)

    } catch (error) {
        console.log("error");
    }
}


const obtainOneCitas= async(req,res)=>{
    try {
        const citas = await Citas.findOne({_id:req.params.id});
        res.json(citas)
    } catch (error) {
        console.log(error);
    }
}


    const insertCitas = async (req, res) => {
    const citas = new Citas(req.body);
    
    try {
        const newCitas = await citas.save();
        res.json(newCitas);

    } catch (error) {
        console.log(error);
    }
    }

    

    


const deleteCitas= async (req, res)=>{
    try {
        await Citas.deleteOne({_id:req.params.id});
        res.status(200).send({
            response:"perdiste la informacion"
        })
    } catch (error) {
        console.log(error);
    }
}

const updateCitas = async (req, res)=>{{
    try {
        const citas = await Citas.findOne({_id:req.params.id})

        if (req.body.nombre) {
            ciclista.nombre = req.body.nombre;
            
        }
        if (req.body.email) {
            ciclista.email = req.body.email;
            
        }

        if (req.body.subject) {
            ciclista.subject = req.body.subject;
            
        }

        if (req.body.message) {
            ciclista.message = req.body.message;

        }
  

        await repuestos.save();
        res.send(citas);

    } catch (error) {
        console.log(error);
    }
}}

export {
    obtainCitas,
    obtainOneCitas, 
    insertCitas,
    deleteCitas,
    updateCitas
}