//Explicit Binding...

function persona(el1, el2){
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: "Juan"
}

const musicaFavorita = ["Heavy metal", "Rock"];

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

persona.apply(informacion, musicaFavorita);

const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();