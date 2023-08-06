import express from "express";
import cors from "cors";

import routerMotos from "../routes/Motos.routes.js";
import routerRepuestos from "../routes/Repuestos.routes.js";
import routerCitas from "../routes/Citas.routes.js";






class Server{


    constructor(){
        this.app = express();
        
        this.port = process.env.PORT;

        this.MotosPatch = "/api/Motos";
        this.RepuestosPatch = "/api/Repuestos";
        this.CitasPatch = "/api/Citas";





        this.middlewares();

        this.routes();
    }

    middlewares(){

        this.app.use(cors());

        this.app.use(express.static('public'));

        this.app.use(express.json());

    }

    routes(){
        this.app.use(this.MotosPatch, routerMotos)
        this.app.use(this.RepuestosPatch, routerRepuestos)
        this.app.use(this.CitasPatch, routerCitas)


    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server: ${this.port} `);
        })
    }
}



export default Server;