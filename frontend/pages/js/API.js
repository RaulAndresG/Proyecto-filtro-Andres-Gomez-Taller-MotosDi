const urlMotos = "http://localhost:8000/api/Motos/all"; 
const urlRepuestos = "http://localhost:8000/api/Repuestos/all";
const urlCitas = "http://localhost:8000/api/Citas"; 



export async function getAllMotos() {
    try {
        const response = await fetch(urlMotos); 
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}


export async function insertMotos(data){
    try {
        const motos = await fetch(`${urlMotos}/add`,{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });

        const response = await motos.json();
        return response
    } catch (error) {
        console.log(error);
    }
}

export async function deleteMotos(id){
    try {
        const motos = await fetch(`${urlMotos}/del/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }
        });

        const response = await motos.json();
        return response
            
    } catch (error) {
        console.log(error);
    }
}

export async function oneMotos(id){
    try {
        const motos = await fetch(`${urlMotos}/one/${id}`);
        console.log(motos);
        return motos.json();
        
    } catch (error) {
        console.log(error);
    }
}


export async function updateMotos(id, data){
    try {
        const motos = await fetch(`${urlMotos}/upd/${id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const response = await motos.json();
        return response;
    } catch (error) {
        console.log(error);
        
    }

} 

//////// Repuestos


export async function getAllRepuestos() {
    try {
        const response = await fetch(urlRepuestos); 
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}


export async function insertRepuestos(data){
    try {
        const repuestos = await fetch(`${urlRepuestos}/add`,{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });

        const response = await repuestos.json();
        return response
    } catch (error) {
        console.log(error);
    }
}

export async function deleteRepuetos(id){
    try {
        const repuestos = await fetch(`${urlRepuestos}/del/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }
        });

        const response = await repuestos.json();
        return response
            
    } catch (error) {
        console.log(error);
    }
}

export async function oneRepuestos(id){
    try {
        const repuestos = await fetch(`${urlRepuestos}/one/${id}`);
        console.log(repuestos);
        return repuestos.json();
        
    } catch (error) {
        console.log(error);
    }
}


export async function updateRepuestos(id, data){
    try {
        const repuestos = await fetch(`${urlRepuestos}/upd/${id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const response = await repuestos.json();
        return response;
    } catch (error) {
        console.log(error);
        
    }

} 
////






export async function insertCitas(data) {
    try {
        const citas = await fetch(`${urlCitas}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const response = await citas.json();
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}




