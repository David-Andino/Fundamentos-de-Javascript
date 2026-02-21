// 1. Crea una variabble para cada uno de los operadores aritméticos y asigna un valor a cada una de ellas. Luego, imprime el resultado de cada operación en la consola.
let sum = 10 + 5; // Suma
let res = 10 - 5; // Resta
let mult = 10 * 5; // Multiplicación
let div = 10 / 5; // División
let modulus = 10 % 3; // Módulo
let exponentiation = 10 ** 2; // Exponenciación

// crea una variable para cada tipo de operador de asignación que haga uso de cada uno de los operadores aritméticos. Luego, imprime el resultado de cada operación en la consola.
let a = 10;
a += 5; // Suma y asigna
console.log(a); // Imprime: 15

let b = 10;
b -= 3;
console.log(b); // Imprime: 7

let c = 10;
c *= 2;
console.log(c); // Imprime: 20

let d = 10;
d /= 4;
console.log(d); // Imprime: 2.5

let e = 10;
e %= 3;
console.log(e); // Imprime: 1

let f = 10;
f **= 3;
console.log(f); // Imprime: 1000

//3 Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion
console.log(10 == "10"); // Igualdad (true)
console.log(10 === 10); // Identidad (true)
console.log(10 > 5); // Mayor que (true)
console.log(10 >= 10); // Mayor o igual que (true)
console.log(10 <= 11); // Menor o igual que (true)

//4 Imprime 5 comparaciones falsas con diferentes operadores de comparacion
console.log(10 === "10"); // Identidad (false)
console.log(10 != 10); // Desigualdad (false)
console.log(10 > 15); // Mayor que (false)
console.log(10 < 5); // Menor que (false)
console.log(10 >= 11); // Mayor o igual que (false)

// 5 utiliza el operador l[ogico and
console.log(true && true); // AND lógico (true)
console.log(true && false); // AND lógico (false)
console.log(false && true); // AND lógico (false)

// 6 utiliza el operador logico or
console.log(true || false); // OR lógico (true)
console.log(false || false); // OR lógico (false)

// 7 combina ambos operadores logicos
console.log((10 > 5) && (5 < 3)); // AND lógico (false)
console.log((10 > 5) || (5 < 3)); // OR lógico (true)

// 8 anade una negacion a una de las comparaciones anteriores
console.log(!(10 > 5)); // NOT lógico (false)

//9 utiliza el operador ternario
let itsRainin = false;
let LeaveHome = itsRainin == true ? "Puede salir" : "No puede salir";
console.log(LeaveHome);

//10 combina operadores aritmeticos, de comparacion y logicos en una sola expresion
let num1 = 10;
let num2 = 5;
let result = (num1 + num2) > 12 && (num1 - num2) < 3;
console.log(result); // Imprime: true