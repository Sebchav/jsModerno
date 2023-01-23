const sym = Symbol("1");
const sym2 = Symbol("1");

//console.log(Symbol() === Symbol())

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//Agregar nombre y apellido con llaves del objeto
persona[nombre] = "Sebastian";
persona[apellido] = "Chavarría"

console.log(persona);