// Funciones Avanzadas

// Ciudadanos de primera clase

function greet(name) {
    console.log(`Hola ${name}`);
}

greet("David");

function processGreating(greetFunction, name) {
    greetFunction(name);
}

function returnGreeting(name){
    return greet
}
processGreating(greet, "Ricardo");

const greet2 = returnGreeting("Andino");
greet2("Andino");

// Arrow Functions Avanzadas
// Return implícito
 
const multiply = (a, b) =>  a * b;
console.log(multiply(5, 3));

// - This Lexico
const handler = {
    name: "David",
    greeting: function() {
        console.log(`Hola ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola ${this.name}`)
    }
}

handler.greeting();
//handles.arrowGreeting(); // undefined, porque el this en arrow functions no se refiere al objeto handler, sino al contexto global.

// IIFE (Expresion de funcion Invocada inmediatamente)

(function() {
    console.log("IIFE Clasico")
})();

((() => {
    console.log("IIFE con Arrow Function")
})());

// Parametros Rest (...)

function sum(...numbers) {
    let result = 0
    for (let number of numbers){
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(12, 4))

// Spread Operator (...)

const arr1 = [1, 2, 3];
function sumWithSpread(a, b, c) {
    return a + b + c;
}

console.log(sumWithSpread(1, 2, 3)); // Sin Spread
console.log(sumWithSpread(...arr1)); // Descomponemos el array en sus elementos individuales

// Closures (Clausuras)

function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(`Contador: ${count}`);
    }
    executeCounter();
}

const counter = createCounter()
counter()
counter()
counter()


// Recursion (Recursividad)


function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(`factorial(5) = ${factorial(5)}`); // 120
// factorial(5) => 5 * factorial(4) => 5 * 4 * factorial(3) => 5 * 4 * 3 * factorial(2) => 5 * 4 * 3 * 2 * factorial(1) => 5 * 4 * 3 * 2 * 1 => 120

// Funciones Parciales
function partialSum(a) {
    return function(b, c) {
        return sum(a, b, c);
    }}

const add5 = partialSum(5);
console.log(add5(3, 2));
console.log(add5(10, 20));