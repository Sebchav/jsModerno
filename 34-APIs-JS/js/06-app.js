const salida = document.querySelector("#salida");
const microfono = document.querySelector("#microfono");

microfono.addEventListener("click", ejecutarSpeechAPI);

function ejecutarSpeechAPI(){
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function(){
        salida.classList.add("mostrar");
        salida.innerHTML = "<br> <b>Escuchando...</b>";
    };

    recognition.onspeechend = function(){
        
        recognition.stop();
    };

    recognition.onresult = function(e){
        console.log(e.results[0][0]);

        const {transcript} = e.results[0][0];

        const speech = document.createElement("p");
        speech.innerHTML = `<b>Grabado:</b> ${transcript}`;

        salida.appendChild(speech);

        if(transcript.toLowerCase() === "preciosa"){
            const respuesta = document.createElement("p");
            respuesta.innerHTML = `<b>Respuesta:</b> Hola piciosa! si estás viendo esto significa que este pequeño programa funcionó JAJA 
            y quiero aprovechar para decirte que eres una mujer increíble, maravillosa, única y muy especial. No te imaginas el gran
            cariño que te tengo, en serio te quiero demasiado. También quiero decir que estás bien preciosa OMG, que niña tan más
            chula eres <3 <br><br> Gracias por tanto NIÑA PRECIOSA! <br><br> La verdad si me gustas y me encantas demasiado &#128147
            <br><br>`;
            const imagen = document.createElement("img");
            imagen.src = 'img/cyc.jpg';
            imagen.classList.add("imagen");
            
            salida.appendChild(respuesta);
            salida.appendChild(imagen);
        }
        
    }
}