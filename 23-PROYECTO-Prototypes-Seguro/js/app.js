//Constructores

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function (){
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */
    let cantidad;
    const base = 2000;
    switch(this.marca){
        case "1":
            cantidad = base * 1.15
            break;
        case "2":
            cantidad = base * 1.05
            break;
        case "3":
            cantidad = base * 1.35
            break;
        default:
            break;
    }

    //Leer el año
    const diferencia = new Date().getFullYear() - this.year;
    //Cada año que la diferencia es mayor, el costo va a reducirse un 3%
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*
    Si el seguro es basico se multiplica por un 30% mas
    si el seguro es completo se multiplica por un 50% mas
    */

    if(this.tipo === "bascio"){
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }

    return cantidad;
    
}

function UI(){

}

//llena las opciones de los años
UI.prototype.llenarOpciones = ()=>{
    const max = new Date().getFullYear(),
          min = max-20;

    const selecYear = document.querySelector("#year");

    for(let i = max; i > min; i--){
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selecYear.appendChild(option);
    }
}

//Muestra alertas en pantallas
UI.prototype.mostrarMensaje = (mensaje, tipo)=>{
    const div = document.createElement("div");

    if(tipo === "error"){
        div.classList.add("error");
    }else{
        div.classList.add("correcto");
    }

    div.classList.add("mensaje", "mt-10");
    div.textContent = mensaje;

    //Insertar en el HTML
    const formulario = document.querySelector("#cotizar-seguro");
    formulario.insertBefore(div, document.querySelector("#resultado"));

    setTimeout(()=>{
        div.remove();
    }, 3000);
}

//Instanciar UI
const ui = new UI();

document.addEventListener("DOMContentLoaded", ()=>{
    ui.llenarOpciones(); // Llena el select con los años
})

eventListeners();
function eventListeners(){
    const formulario = document.querySelector("#cotizar-seguro");
    formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    //Leer la marca seleccionada
    const marca = document.querySelector("#marca").value;
    
    //Leer el año seleccionado
    const year = document.querySelector("#year").value;

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;    
    
    if(marca === "" || year === "" || tipo === ""){
        ui.mostrarMensaje("Todos los campos son obligatorios", "error");
        return;
    } 

    ui.mostrarMensaje("Cotizando...", "exito");

    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    seguro.cotizarSeguro();


    //Utilizar el prototype que va a cotizar.
}