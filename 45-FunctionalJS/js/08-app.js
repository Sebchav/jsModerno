

const obtenerCliente = ()=>{
    const nombre = "Chava";

    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();
cliente();