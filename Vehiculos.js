class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca
        this.modelo = modelo
        this.año = año
    }
    Encender() {
        console.log("El vehículo se ha encendido")
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, año, numPuertas) {
        super(marca, modelo, año)
        this.numPuertas = numPuertas
    }
    encender() {
        console.log("El auto se ha encendido")
    }
    TocarBocina() {
        console.log("El auto está tocando la bocina")
    }
}

class Motocicleta extends Vehiculo {
    constructor(marca, modelo, año, tipoManillar) {
        super(marca, modelo, año)
        this.tipoManillar = tipoManillar
    }
    encender() {
        console.log("La motocicleta se ha encendido")
    }
    hacerCaballito() {
        console.log("La motocicleta está haciendo un caballito")
    }
}


let vehiculo1 = new Vehiculo("Toyota", "Corolla", 2022);
vehiculo1.Encender();

let motocicleta1 = new Motocicleta("Harley-Davidson", "Sportster", 2020, "manillar clásico");
motocicleta1.encender();
motocicleta1.hacerCaballito();

let auto1 = new Auto("Honda", "Civic", 2021, 4);
auto1.encender();
auto1.TocarBocina();
