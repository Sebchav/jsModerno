const obtenerNombre = info =>({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`)
    }
})

function Cliente(nombre, email, empresa){
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info)
    )
}

function Empleado(nombre, email, puesto){
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info)
    )
}

const cliente = Cliente("Juan", "correo@correo", "Código con Juan");

cliente.mostrarNombre();
const empleado = Cliente("Pedro", "empleado@empleado", "Programador");
empleado.mostrarNombre();