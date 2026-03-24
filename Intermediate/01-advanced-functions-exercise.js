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


// 5. crear una funcion sumManyTimes(multiplier, ...numbers) que primero sume todos los numeros y luego multiplique el resultado por el multiplicador
function sumManyTimes(multiplier, ...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum * multiplier;
}
console.log(sumManyTimes(2, 1, 2, 3)); // Output: 12
console.log(sumManyTimes(3, 4, 5)); // Output: 27

// 6. Crea un callback que se invoque con el resultado de la suma de todos los numeros 
function sumWithCallback(callback, ...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    callback(sum);
}
sumWithCallback(function(result) {
    console.log(`El resultado de la suma es: ${result}`);
}, 1, 2, 3, 4); // Output: El resultado de la suma es: 10

// 7. Desarrolla una funcion parcial
function partial(func, ...fixedArgs) {
    return function(...remainingArgs) {
        return func(...fixedArgs, ...remainingArgs);
    }
}
function sum(a, b, c) {
    return a + b + c;
}
const add5And10 = partial(sum, 5, 10);
console.log(add5And10(3)); // Output: 18

// 8. Implementa un ejemplo que haga uso de spread
function sumWithSpread(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
const nums = [1, 2, 3, 4];
console.log(sumWithSpread(...nums)); // Output: 10

// 9. Implementa un retorno implicito
const add = (a, b) => a + b;
console.log(add(5, 10)); // Output: 15
