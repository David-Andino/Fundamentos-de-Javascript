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
