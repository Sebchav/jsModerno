const notificarBtn = document.querySelector("#notificar");

notificarBtn.addEventListener("click", ()=>{
    Notification
        .requestPermission()
        .then(resultado =>{
            console.log(`El resultado es ${resultado}`);
        })
});

const verNotificacion = document.querySelector("#verNotificacion");
verNotificacion.addEventListener("click", ()=>{
    if(Notification.permission === "granted"){
        const notifacion = new Notification("Esta es la notificación", {
            icon: "./img/ccj.png",
            body: "Código con Juan"
        });

        notifacion.onclick = function(){
            window.open("https://www.codigoconjuan.com")
        }
    }
});