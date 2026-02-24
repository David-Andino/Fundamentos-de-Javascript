//1. Crea una funcion que reciba dos numeros y devuelva su suma
function sum(a, b) {
    return a + b
}
console.log(`Ejercicio 1: ${sum(5, 3)}`)

// 2. crea una funcion que reciba un array de numeros y devuelva el mayor de ellos
function findMax(arr) {
    let max = arr[0]    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(`Ejercicio 2: ${findMax([3, 7, 2, 9, 5])}`)

//3. Crea una funcion que reciba un string y devuelva el numero de vocales que contiene
function countVowels(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if ("aeiouAEIOU".includes(str[i])) {
            count++
        }
    }
    return count
}
console.log(`Ejercicio 3: ${countVowels("Hello World")}`)

// 4. Crea una funcion que reciba un array de strings y devuelva un nuevo array con los strings en mayusculas
function toUpperCase(arr) {
    let upperArr = []
    for (let i = 0; i < arr.length; i++) {
        upperArr.push(arr[i].toUpperCase())
    }
    return upperArr
}
console.log(`Ejercicio 4: ${toUpperCase(["David", "Lixy", "Maria", "Juan"])}`)

// 5. Crea una funcion que reciba un numero y devuelva true si es primo o false si no lo es
function isPrime(num) {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(`Ejercicio 5: ${isPrime(7)}`) // true
console.log(`Ejercicio 5: ${isPrime(10)}`) // false

// 6. Crea una funcion que reciba dos arrays y devuelva un un nuevo arrat que conteng los elementos comunes entre ambos
function commonElements(arr1, arr2) {
    let common = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !common.includes(arr1[i])) {
            common.push(arr1[i])
        }
    }
    return common
}
console.log(`Ejercicio 6: ${commonElements([1, 2, 3, 4], [3, 4, 5, 6])}`) // [3, 4]

// 7. Crea una funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares
function sumEvenNumbers(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i]
        }
    }
    return sum
}
console.log(`Ejercicio 7: ${sumEvenNumbers([1, 2, 3, 4, 5, 6])}`) 


// 8. Crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado
function squareNumbers(arr) {
    let squared = []
    for (let i = 0; i < arr.length; i++) {
        squared.push(arr[i] ** 2)
    }
    return squared
}
console.log(`Ejercicio 8: ${squareNumbers([1, 2, 3, 4, 5])}`)

//9. crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function reverseWords(str) {
    let words = str.split(" ")
    let reversed = words.reverse()
    return reversed.join(" ")
}
console.log(`Ejercicio 9: ${reverseWords("Hello World")}`)

// 10. crea una funcion que calcule el factorial de un numero dado
function factorial(n) {
    if (n < 0) return undefined
    if (n === 0 || n === 1) return 1
    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result
}
console.log(`Ejercicio 10: ${factorial(5)}`)