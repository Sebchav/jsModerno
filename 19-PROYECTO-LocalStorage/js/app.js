//Variables
const formulario = document.querySelector("#formulario")
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

eventListeners();
//Event listeners
function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet 
    formulario.addEventListener("submit", agregarTweet);

    //cuando el documento está listo
    document.addEventListener("DOMContentLoaded", ()=>{
        tweets = JSON.parse(localStorage.getItem("tweets")) || [];
        
        crearHTML(tweets);
    })
}

//Funciones
function agregarTweet(e){
    e.preventDefault();

    //Textarea donde el usuario escribe
    const tweet = document.querySelector("#tweet").value;

    //Validacion
    if(tweet === ""){
        mostrarError("un mensaje no puede ir vacio");

        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    //Añadir al arreglo de tweets

    tweets = [...tweets, tweetObj];

    //Una vez agregao vamos a crear el HTML
    crearHTML();

    //Reiniciar el formulario
    formulario.reset();
}


//Mostrar mensaje de error

function mostrarError(error){
    const mensajeError = document.createElement("p");
    mensajeError.textContent = error;
    mensajeError.classList.add("error");

    //Insertar en el contenido
    const contenido = document.querySelector("#contenido");
    contenido.appendChild(mensajeError);

    //Elimina la alerta despues de 3 segundos
    setTimeout(()=>{
        mensajeError.remove();
    }, 3000)
}

//Muestra un listado de los tweets
function crearHTML(){
    limpiarHTML();
    if(tweets.length > 0){
        tweets.forEach(tweet => {
            //Agregar boton de eliminar
            const btnEliminar = document.createElement("a");
            btnEliminar.classList.add("borrar-tweet");
            btnEliminar.innerText = "X";
            
            btnEliminar.onclick = ()=>{
                borrarTweet(tweet.id);
            }
            //Crear el HTML
            const li = document.createElement("li");

            //Añadir el texto
            li.innerHTML = tweet.tweet;

            li.appendChild(btnEliminar);
            //insertarlo en el html
            listaTweets.appendChild(li);
        })

    }

    sincronizarStorage();
}

//Agrega los tweets actuales al LocalStorage
function sincronizarStorage(){
    localStorage.setItem("tweets", JSON.stringify(tweets))
}

//Elimina un tweet
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}

//Limpiar el HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}