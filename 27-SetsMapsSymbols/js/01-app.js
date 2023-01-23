const carrito = new Set();

carrito.add("Camisa");
carrito.add("Disco #1");
carrito.add("Camisa 2");
carrito.add("Disco #2");

console.log(carrito.has("Camisa"));
console.log(carrito.size)

carrito.forEach(producto =>{
    console.log(producto);
})
console.log(carrito);

//Del siguiente arreglo eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);