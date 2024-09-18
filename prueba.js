var nombre
nombre = "Jhonny"
var apellido
apellido = "Ponce"
var edad 
edad = "20"
var hoy = new Date()
var Array = [nombre, apellido, edad, new Date()]
var docente = "" 

//console.log(Array)


/*if (docente == true){
console.log("Hola docente")
} else{
    console.log("Hola estudiante")
}*/
switch (docente) {
    case true:
        console.log("Hola docente")
        break;
        case false:
            console.log("Hola estudiante")
        break;
    default:
        console.log("Hola aun no se que rol tienes")
        break;
}