//New binding
function Auto(modelo, color){
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto("Camaro", "Negro");
console.log(auto);

window.color = "negro";
function hola(){
    console.log(color);
}

hola();