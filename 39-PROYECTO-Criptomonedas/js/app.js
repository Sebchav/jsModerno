const criptomonedasSelect = document.querySelector("#criptomonedas");
const monedaSelect = document.querySelector("#moneda");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

const objBusqueda = {
    moneda: "",
    criptomoneda: ""
}

//Crear un promise
const obtenerCriptomonedas = criptomonedas => new Promise( resolve =>{
    resolve(criptomonedas);
})

document.addEventListener("DOMContentLoaded", ()=>{
    consultarCriptomonedas();
    formulario.addEventListener("submit", submitFormulario);
    criptomonedasSelect.addEventListener("change", leerValor);
    monedaSelect.addEventListener("change", leerValor);
});

function consultarCriptomonedas(){
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => obtenerCriptomonedas(resultado.Data))
        .then(criptomonedas => selectCriptomonedas(criptomonedas));
}

function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach(cripto => {
        const { Name, FullName } = cripto.CoinInfo;

        const option = document.createElement("option");
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);

    });
}

function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;
    console.log(objBusqueda)
}

function submitFormulario(e){
    e.preventDefault();

    const {moneda, criptomoneda} = objBusqueda;

    if(moneda === "" || criptomoneda === ""){
        mostrarAlerta("Ambos campos son obligatorios")
        return;
    }

    //Consultar la API
    consultarAPI();
}

function mostrarAlerta(mensaje){
    const existeError = document.querySelector(".error");
    if(!existeError){
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("error");

        divMensaje.textContent = mensaje;
        formulario.appendChild(divMensaje);

        setTimeout(()=>{
            divMensaje.remove();
        },3000)
    }  
}

function consultarAPI(){
    const {moneda, criptomoneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    console.log(url);

    mostrarSpinner();
    
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(cotizacion => {
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
        })
}

function mostrarCotizacionHTML(cotizacion){

    limpiarHTML();

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;

    const precio = document.createElement("p");
    precio.classList.add("precio");
    precio.innerHTML = `El Precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement("p");
    precioAlto.innerHTML = `<p>Precio m??s alto del d??a <span>${HIGHDAY}</span></p>`

    const precioBajo = document.createElement("p");
    precioBajo.innerHTML = `<p>Precio m??s bajo del d??a <span>${LOWDAY}</span></p>`;

    const ultimasHoras = document.createElement("p");
    ultimasHoras.innerHTML = `<p>Variaci??n ??ltimas 24 horas <span>${CHANGEPCT24HOUR}%</span></p>`;

    const ultimaActualizacion = document.createElement("p");
    ultimaActualizacion.innerHTML = `<p>??ltima Actualizaci??n <span>${LASTUPDATE}</span></p>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner(){
    limpiarHTML();
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `
    resultado.appendChild(spinner)
}