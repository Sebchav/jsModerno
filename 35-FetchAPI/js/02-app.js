const cargarJsonBtn = document.querySelector("#cargarJSON");
cargarJsonBtn.addEventListener("click", obtenerDatos);

function obtenerDatos(){
    const url = "data/empleado.json";

    fetch(url)
        .then(respuesta =>{
            console.log(respuesta);
            return respuesta.json();
        })
        .then(datos =>{
            mostrarHTML(datos)
        })
        .catch(error=>{
            console.log(error);
        });
        
}

function mostrarHTML({empresa, id, nombre, trabajo}){
    const contenido = document.querySelector(".contenido");
    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>id: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>trabajo: ${trabajo}</p>
    `;
}