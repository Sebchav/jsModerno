//Weakset

const weakset = new WeakSet();

const cliente = {
    nombre: "Chava",
    saldo: 100
}

weakset.add(cliente);

weakset.delete(cliente);

console.log(weakset);

//Solo aceptan objetos