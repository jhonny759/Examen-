class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log("Hola soy una persona")
    }
}

class Docente extends Persona {
    constructor(nombre, edad, paciencia) {
        super(nombre, edad)
        this.paciencia = paciencia
    }

    enseñar() {
        console.log("Estoy enseñando")
    }

    saludar() {
        console.log("Hola estudiantes")
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, flojera) {
        super(nombre, edad)
        this.flojera = flojera
    }

    investigar() {
        console.log("Estoy investigando")
    }
}

let p1 = new Persona("Juan", 20)
p1.saludar()

let d1 = new Docente("Jordy", 31, true)
d1.saludar()