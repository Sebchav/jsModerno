function descargarClientes(){
    return new Promise((resolve, reject)=>{
        const error = false;

        setTimeout(()=>{
            if(!error){
                resolve("El listado de Clientes se descargó correctamente");
            }else{
                reject("Error en la conexión");
            }
        }, 3000)
    })
}

const ejecutar = async ()=>{
    try{
        const respuesta = await descargarClientes();

    }catch(e){
        console.log(e)
    }
}

ejecutar();