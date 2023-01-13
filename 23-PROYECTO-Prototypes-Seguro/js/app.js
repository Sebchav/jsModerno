//Constructores
function Seguro(marca, año, tipo){
    this.marca = marca;
    this.año = año;
    this.tipo = tipo;
}

function UI(){}

UI.prototype.llenarOpciones = ()=>{
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector("#year");

    for(let i = max; i > min; i--){
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
} 

const ui = new UI();
ui.llenarOpciones();

document.addEventListener("DOMContentLoaded", ()=>{
    
});