// Variables
const carrito = document.querySelector("#carrito"),
listaCursos = document.querySelector("#lista-cursos"),
vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
contenedorCarrito = document.querySelector("#lista-carrito tbody");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    // Cuando agregas un curso presionando "agregar al carrito"
    listaCursos.addEventListener("click", agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener("click", eliminarCurso);

    //Muestra los cursos del local storage
    document.addEventListener("DOMContentLoaded", ()=>{
        articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

        carritoHTML();
    })

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener("click", ()=>{
        articulosCarrito = []; //Resetear arreglo
        limpiarHTML();

    })
}

//Funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }

}

// Elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains("borrar-curso")){
        const cursoId = e.target.getAttribute("data-id");
        // Elimina del arreglo por el dataid
        
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();
    }
    
}


//Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso){
    // console.log(curso)

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }
    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if(existe){
        //actualizamos la cantidad
        const cursos = articulosCarrito.map(curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }
        })
        articulosCarrito = [...cursos];
    }else{
       //Agrega elemento al arreglo del carrito
        articulosCarrito = [...articulosCarrito,infoCurso];

    }
    

    carritoHTML();
}

//Muestra el carrito de compras en el HTML

function carritoHTML () {

    //Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito
    articulosCarrito.forEach(curso=>{
        const {titulo, precio, cantidad, imagen, id} = curso;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${imagen}"
                 width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })

    //Agregar al Storage
    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}

//Elimina los cursos del tbody
function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}