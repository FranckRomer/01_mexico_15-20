# Prueba Tecnica Desarrollador NodeJs

Esta es una prueba tecnica donde se ha selecionado el primer elemento del problema


## Problema 1

Escribe la función primes tal que reciba como parámetro un número n y retorne los n primeros
números primos. Por ejemplo, dado n = 6 la función debe comportarse así:


## Solucion 

`
function primes(n_primos) {
    let array_primos = []
    // verificamos que el numero sea un numero natural 
    if (n_primos < 0) {
        return array_primos
    }
    array_primos.push(1)
    // hacemos un for para tomar los numeros primos
    for (let i = 1; array_primos.length !== n_primos ; i++) {
        if (n_primos % i !== 0) {
            array_primos.push(i)
        }
    }
    // se retorna el resultado
    return array_primos
}
`

La solucion puede verse en este git

para ejecutar la solucion es importante cambiar la variable

`
const numeros_primos = 16
`

por el valor deseado

y ejecutar el comando "node ejercicio01.js"