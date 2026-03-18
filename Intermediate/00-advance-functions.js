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
