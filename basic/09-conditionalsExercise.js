// 1. Imprime por consola tu nombre si una variable toma su valor

let numName = 3
if (numName == 1){
    console.log(`Your name is David Andino`)
} else {
    console.log(`You are not David Andino`)
}

//2. Imprime por consola un mensaje si el usuario y contrasena coincide con uno establecido

let user = `David`
let password = `Kiroga`

if (user == `David` && password == `Kiroga`){
    console.log(`login Complete`)
} else {
    console.log("Your user or password is incorrect")
}

//3. Verifica si un numero es positivo negativo o cero e imprime un mensaje
let number = 0
if(number > 0 ){
    console.log(`El numero ${number} es positivo`)
} else if(number < 0) {
    console.log(`El numero ${number} es negativo`)
} else {
    console.log(`El numero es ${number}`)
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos anios le faltan

let age = 22

if (age < 18){
    console.log(`Aun no puedes votar te faltan ${18 - age} anios`)
} else {
    console.log(`Ya puedes votar`)
}

// 5. usa el valor ternario para asignar el valor "adulto" o "menor" a una variable dependiendo la edad

const message = age >= 18 ? `Adulto` : `Menor`
console.log(message)

//6. Muestra en que estacion del anio estamos dependiendo del valor de una variable "mes"

let mes = 9

if (mes == 1 || mes == 2 || mes == 3){
    console.log(`Verano`)
} else if (mes == 4 || mes == 5 || mes == 6){
    console.log(`Primavera`)
} else if (mes == 7 || mes == 8 || mes == 9){
    console.log(`Otono`)
} else if (mes == 10 || mes == 11 || mes == 12){
    console.log(`Invierno`)
}

// 7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 9 || mes == 11 || mes == 12){
    console.log(`El mes tiene 31 dias`)
} else {
    console.log(`El mes tiene 30 dias`)
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo el idioma
let language = 4

switch (language){
    case 1:
        console.log(`Hola`)
        break
    case 2:
        console.log(`Hello`)
        break
    case 3:
        console.log(`Bonjour`)
        break
    case 4: 
    console.log(`Ni hao`)
        break
}

//9. Usa switch para hacer de nuevo el ejercicio 6
switch (mes){
    case 1:
        console.log(`verano`)
        break
    case 2:
        console.log(`verano`)
        break
    case 3:
        console.log(`verano`)
        break
    case 4:
        console.log(`Primavera`)
        break
    case 5:
        console.log(`Primavera`)
        break
    case 6:
        console.log(`Primavera`)
        break
    case 7:
        console.log(`otono`)
        break
    case 8:
        console.log(`otono`)
        break
    case 9:
        console.log(`otono`)
        break
    case 10:
        console.log(`invierno`)
        break
    case 11:
        console.log(`invierno`)
        break
    case 12:
        console.log(`invierno`)
        break
}

// 10. Usa switch para hacer de nuevo el ejercicio 7

switch (mes) {
    case 1:
        console.log(`el mes 30 dias`)
        break
    case 2:
        console.log(`el mes 28 dias`)
        break
    case 3:
        console.log(`el mes 30 dias`)
        break
    case 4:
        console.log(`el mes 31 dias`)
        break
    case 5:
        console.log(`el mes 30 dias`)
        break
    case 6:
        console.log(`el mes 31 dias`)
        break
    case 7:
        console.log(`el mes 30 dias`)
        break
    case 8:
        console.log(`el mes 31 dias`)
        break
    case 8:
        console.log(`el mes 30 dias`)
        break
    case 9:
        console.log(`el mes 31 dias`)
        break
    case 10:
        console.log(`el mes 30 dias`)
        break
    case 11:
        console.log(`el mes 30 dias`)
        break
    case 12:
        console.log(`el mes 31 dias`)
        break
}