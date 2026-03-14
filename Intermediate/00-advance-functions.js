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