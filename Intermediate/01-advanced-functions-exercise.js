// Crea una funcion que retorne otra funcion
function createGreeter(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }}
const greetHello = createGreeter("Hola");
greetHello("David");

// 2. Implementa una funcion currificada que multiplique 3 numeros
function multiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        }
    }
}
const multiplyBy2 = multiply(2);
const multiplyBy2And3 = multiplyBy2(3);
const result = multiplyBy2And3(4);
console.log(result); // Output: 24