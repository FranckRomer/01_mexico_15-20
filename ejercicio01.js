// Escribe la función primes tal que reciba como parámetro un número n y retorne los n primeros
// números primos. Por ejemplo, dado n = 6 la función debe comportarse así:
// 𝑝𝑟𝑖𝑚𝑒𝑠(6) => [2, 3, 5, 7, 11, 13]

//
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

// ?cambie el valor de numeros primos
const numeros_primos = 16
console.log(primes(numeros_primos));