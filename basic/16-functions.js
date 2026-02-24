// funciones

//funcion sin parametros
function myFunction() {
    console.log("Hello my Function!");
}

for (let i = 0; i < 5; i++) {
    myFunction()
}

//funcion con parametros
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("David")

// funciones anónimas

const myFunction2 = function(name) {
    console.log(`Hello from an anonymous function, ${name}!`);
}
myFunction2("Alice")

// funciones flecha

const myFunction3 = (name) => {
    console.log(`Hello from an arrow function, ${name}!`);
}
myFunction3("Bob")

const myFunction4 = name => console.log(`Hello from a concise arrow function, ${name}!`);
myFunction4("Charlie")

// Parametros

function add(a = 0, b= 0) {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
}
add(5, 3)

// Funciones con retorno

function multiply(a, b) {
    return a * b
}

console.log(`The product of 5 and 3 is ${multiply(5, 3)}`)

// Funciones anidadas

function outerFunction(x) {
    console.log(`Funcion externa recibe: ${x}`)
    function innerFunction(y) {
        console.log(`Funcion interna recibe: ${y}`)
    }
    innerFunction(x) + 1
}
outerFunction(10)
//innerFunction(20) // Esto dará error porque innerFunction no es accesible fuera de outerFunction esta fuera del scope de innerFunction

//funciones de orden superior
function higherOrderFunction(func, param) {
    func(param)
}
higherOrderFunction(greet, "Alice")


// forEach con funciones

const numbers = [1, 2, 3, 4, 5]
numbers.forEach(num => console.log(`Number: ${num}`))