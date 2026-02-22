//Nota: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los numeros del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(`Ejercicio 1: ${i}`)
}

// 2. Crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado
let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log(`Ejercicio 2: ${sum}`)

// 3. Crea un bucle que imprima los numeros pares del 1 al 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(`Ejercicio 3: ${i}`)
    }
}

// 4. Dado un array de nombres, usa el bucle para imprimir cada nombre en consola
let names = ["David", "Lixy", "Maria", "Juan"]
for (let i = 0; i < names.length; i++) {
    console.log(`Ejercicio 4: ${names[i]}`)
}

// 5. Escribe un bucle que cuente el numero de vocales en una cadena de texto
let text = "Hello World"
let vowelCount = 0
for (let i = 0; i < text.length; i++) {
    if ("aeiouAEIOU".includes(text[i])) {
        vowelCount++
    }}
console.log(`Ejercicio 5: ${vowelCount}`)

// 6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto
let numbers = [1, 2, 3, 4, 5]
let product = 1
for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i]
}
console.log(`Ejercicio 6: ${product}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    console.log(`Ejercicio 7: 5 x ${i} = ${5 * i}`)
}

//8. Usa un bucle para invertir una cadena de texto y mostrarla en consola
let originalText = "Hello World"
let reversedText = ""   
for (let i = originalText.length - 1; i >= 0; i--) {
    reversedText += originalText[i]
}
console.log(`Ejercicio 8: ${reversedText}`)

//9. Usa un bucle para generar los primeros 10 numeros de la secuencia de Fibonacci
let fib = [0, 1]
for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
}
console.log(`Ejercicio 9: ${fib}`)

// 10, Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10
let numArray = [5, 12, 8, 20, 3, 15]
let greaterThanTen = []
for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > 10) {
        greaterThanTen.push(numArray[i])
    }
}
console.log(`Ejercicio 10: ${greaterThanTen}`)