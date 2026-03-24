// Crea una funcion que retorne otra funcion
function createGreeter(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }}
const greetHello = createGreeter("Hola");
greetHello("David");