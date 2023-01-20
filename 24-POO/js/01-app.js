class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;

    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

//Herencia
class Empresa extends Cliente{

}

const empresa = new Empresa("Codigo con Juan", 500)
const juan = new Cliente("Juan", 400);
console.log(empresa.mostrarInformacion());


 