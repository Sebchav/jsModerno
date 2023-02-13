window.onload = ()=>{
    console.log("Ventana lista")
}

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function(){
        const self = this;
        return `El producto: ${this.nombre} tiene un precio de ${this.precio}`
    }
}

console.log(producto.mostrarInfo());