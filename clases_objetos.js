class Persona {

    constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad     
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
    caminar(){
        console.log("Hola puedo caminar")
    }
}
let persona1 = new Persona("Jhonny", "2500Bs")
persona1.saludar()
let persona2 = new Persona("Pepito", )
persona2.saludar()