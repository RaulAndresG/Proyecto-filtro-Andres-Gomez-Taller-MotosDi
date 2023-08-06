import { insertCitas } from "../js/API.js";

document.addEventListener('DOMContentLoaded', () => {
    const agregarCitasForm = document.querySelector('#agregarCita');
    
    agregarCitasForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nombre = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const subject = document.querySelector('#subject').value;
        const message = document.querySelector('#message').value;

        const data = {
            nombre: nombre,
            email: email,
            subject: subject,
            message: message,
        };

        try {
            const response = await insertCitas(data);
            if (response.success) {
                showAlert('success', 'Datos enviados satisfactoriamente');
                setTimeout(() => {
                    window.location = 'Citas.html';
                }, 2000);
            } else {
                showAlert('Exelente', 'Se ah guardado tu cita');
            }
        } catch (error) {
            console.error(error);
            showAlert('error', 'Ocurrió un error al procesar la solicitud');
        }

        function showAlert(type, message) {
            swal({
                title: message,
                icon: type,
            });
        }
        
    });
});




// Más funciones showDelete y showEdit están comentadas en tu código original



/* 
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
                        deleteCiclistas(eliminar.id);
                        window.location = 'ciclistas.html';
                    });
                      
                }else {
                    swal("Cancelado", "No has eliminado tu data", "error");
                }

            });
        })
        
    });
}

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