class CuentaBancaria {
    constructor(propietario, saldo) {
        this.propietario = propietario
        this.saldo = saldo
    }
    retirardinero(cantidad){
       if (cantidad <= this.saldo){
        this.saldo = this.saldo - cantidad
        console.log(`acabas de retirar ${cantidad}`)
       } else {
        console.log("No tienes saldo suficiente.")
       }
    }
    depositardinero(cantidad){
this.saldo = this.saldo + cantidad
    }
    consultarsaldo(){
console.log(`Hola ${this.propietario} Su Saldo actual es ${this.saldo}`)
    }
}
let propietario1 = new CuentaBancaria("Jhonny", 100)
propietario1.retirardinero(50)
propietario1.depositardinero(500)
propietario1.consultarsaldo()