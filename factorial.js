//calcular el factorial de un numero
let factorial = 1
let numero = 5 
for (let i = 1; i <= numero; i++) {
    //factorial = factorial* i ;
    factorial*= i
    
}
console.log(`El Factorial de ${numero} es: ${factorial}`)
console.log("El Factorial de " + numero + " es: " + factorial)