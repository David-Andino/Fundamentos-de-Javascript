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

// 3. Desarrolla una funcion recursiva que calcule la potencia de un numero elevado a otro numero
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2, 3));