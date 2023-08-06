import { getAllMotos  } from "../js/API.js";

document.addEventListener('DOMContentLoaded', () => {
    showMotos();
})


async function showMotos(){
    const data = await getAllMotos();
    const bodyCard = document.getElementById('container');
    data.forEach((Moto) => {
        const {marca,modelo,año,precio, usada, img }= Moto;
        bodyCard.innerHTML +=`
                    <div class="col-md-4">
                        <div class="card mb-4 product-wap rounded-0">
                            <div class="card rounded-0">
                                <img class="card-img rounded-0 img-fluid" src="${img}">
                                <div
                                    class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul class="list-unstyled">
                                        <li><a class="btn btn-success text" href="../Detalles-Motos/shop-single.html">info</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body">
                                <a href="shop-single.html" class="h3 text-decoration-none">${marca} ${modelo} </a>
                                <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    <li> ${año} </li>

                                    <h5>${precio} </h5>

                                </ul>
                                <ul class="list-unstyled d-flex justify-content-center mb-1">

                                </ul>
                                <p class="text-center mb-0">Usada:
                                ${usada}
                                </p>
                            </div>
                        </div>
                    </div>
        `
        
    });

    // ? LLAMAR LAS FUNCIONES
/*     sendInfo();  
    showDelete(); */
    /*showEdit();  */

}

/* async function sendInfo(){
    const agregarPatrocinadorForm = document.querySelector('#agregarPatrocinadorForm');
    const nombrePatrocinador = document.querySelector('#nombrePatrocinador');
    const industriaPatrocinador = document.querySelector('#industriaPatrocinador');
    const paisPatrocinador = document.querySelector('#paisPatrocinador')
    const añoFundacionPatrocinador = document.querySelector('#añoFundacionPatrocinador')



    agregarPatrocinadorForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const data = {
            patrocinador : nombrePatrocinador.value,
            industria : industriaPatrocinador.value,
            país : paisPatrocinador.value,
            año_fundación : añoFundacionPatrocinador.value
       

        }

        if (insertPatrocinadores(data)) {
            swal("Datos enviados satisfactoriamente", "¡Enviado!", "success");
            setTimeout(()=>{
                window.location = 'patrocinadores.html';

            },2000)
            
        }
    })
}



async function showDelete(){
    const botonEliminar = document.querySelectorAll('.eliminar');
    botonEliminar.forEach((eliminar) => {
        eliminar.addEventListener('click', async()=>{
            const confirmar = swal({
                title: "Estas seguro?",
                text: "No podrás recuperar tus datos!",
                icon: "warning",
                buttons: [
                    'No, cancelar!',
                    'Sí, estoy segur@!'
                ],
                dangerMode: true,
            }).then(function(confirm){
                if (confirm) {
                    swal({
                        title: 'Eliminado Correctamente!',
                        text: 'Ya no puedes recuperar tus datos',
                        icon: 'success'
                    }).then(function () {
                        deletePatrocinadores(eliminar.id);
                        window.location = 'patrocinadores.html';
                    });
                      
                }else {
                    swal("Cancelado", "No has eliminado tu data", "error");
                }

            });
        })
        
    });
} */


/*
function showEdit(){
    const editarCiclistaForm = document.querySelector('#editarCiclistaForm');
    const nombreCiclistaEdit = document.querySelector('#nombreCiclistaEdit');
    const edadCiclistaEdit = document.querySelector('#edadCiclistaEdit');
    const paisCiclistaEdit = document.querySelector('#paisCiclistaEdit');
    const equipoCiclistaEdit = document.querySelector('#equipoCiclistaEdit')
    const victoriasCiclistaEdit = document.querySelector('#victoriasCiclistaEdit');

    const botonEditar = document.querySelectorAll('.editar');

    botonEditar.forEach((editar) => {

        editar.addEventListener('click', async ()=>{
            const id = editar.id;
            const ciclista = await oneCiclistas(id);
            console.log(ciclista);

            nombreCiclistaEdit.value= ciclista.nombre;
            edadCiclistaEdit.value= ciclista.edad;
            paisCiclistaEdit.value= ciclista.país;
            equipoCiclistaEdit.value= ciclista.equipo;
            victoriasCiclistaEdit.value= ciclista.victorias;

            editarCiclistaForm.addEventListener('submit',async (e)=>{
                e.preventDefault();
                const newObject= {
                    nombre: nombreCiclistaEdit.value,
                    edad: edadCiclistaEdit.value,
                    país: paisCiclistaEdit.value,
                    equipo: equipoCiclistaEdit.value,
                    victorias: victoriasCiclistaEdit.value
                };
                console.log(newObject);

                if (await updateCiclistas(id,newObject)) {
                    swal("Datos Actualizados satisfactoriamente","Enviado","success");
                    setTimeout(()=>{
                        window.location = 'ciclistas.html'
                    },1500);
                    
                }
            })

        });
        
    });


}   */