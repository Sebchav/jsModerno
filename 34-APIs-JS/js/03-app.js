window.addEventListener("online", actualizarEstado);
window.addEventListener("offline", actualizarEstado);

function actualizarEstado(){
    if(navigator.online){
        console.log("Si estás conectado")
    }else{
        console.log("No estás conectado")
    }
}