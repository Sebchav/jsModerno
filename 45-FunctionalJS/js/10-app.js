// const obtenerNombre = info =>({
//     mostrarNombre(){
//         console.log(`Nombre: ${info.nombre}`)
//     }
// })

// function Cliente(nombre, email, empresa){
//     let info = {
//         nombre,
//         email,
//         empresa
//     }

//     return Object.assign(
//         info,
//         obtenerNombre(info)
//     )
// }

// function Empleado(nombre, email, puesto){
//     let info = {
//         nombre,
//         email,
//         puesto
//     }

//     return Object.assign(
//         info,
//         obtenerNombre(info)
//     )
// }

// const cliente = Cliente("Juan", "correo@correo", "Código con Juan");

// cliente.mostrarNombre();
// const empleado = Cliente("Pedro", "empleado@empleado", "Programador");
// empleado.mostrarNombre();

const num = Number(prompt("Ingresa un número:"));

(num % 2 === 0)
     ? console.log(`El número ${num} es par`)
     : console.log(`El número ${num} es impar`);


// const num = Number(prompt("Enter a number:"));
// if (num % 2 === 0) {
//   console.log(`The number ${num} is even.`);
// } else {
//   console.log(`The number ${num} is odd.`);
// }

