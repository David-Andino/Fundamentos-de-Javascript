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

// 4. Crea una funcion createCounter() que reciba un valor inicial y retorne un objeto con dos metodos: increment() y decrement() y getValue que aumenten o disminuyan el contador respectivamente.
function createCounter(initialValue) {
    let count = initialValue;
    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getValue: function() {
            return count;
        }
    }
}
const counter = createCounter(10);
counter.increment();
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());
