//Operadores

//Operadores Aritméticos
console.log(10 + 5); //Suma
console.log(10 - 5); //Resta
console.log(10 * 5); //Multiplicación
console.log(10 / 5); //División
console.log(10 % 3); //Módulo (Resto de la división)
console.log(10 ** 2); //Exponenciación (10 elevado a la potencia de 2)

//Operadores de incremento y decremento
let x = 5;
console.log(x); // Imprime: 5
x++; //Incremento (x ahora es 6)
console.log(x); // Imprime: 6
x--; //Decremento (x ahora es 5)
console.log(x); // Imprime: 5

//Operadores de asignación
let y = 10;
y += 5; //Suma y asigna (y ahora es 15)
y -= 3; //Resta y asigna (y ahora es 12)
y *= 2; //Multiplica y asigna (y ahora es 24)
y /= 4; //Divide y asigna (y ahora es 6)
y %= 5; //Módulo y asigna (y ahora es 1)
y **= 3; //Exponenciación y asigna (y ahora es 1)

//Operadores de comparación
console.log(10 == "10"); //Igualdad (true, porque compara solo el valor)
console.log(10 === "10"); //Identidad (false, porque compara el valor y el tipo)
console.log(10 != "10"); //Desigualdad (false, porque compara solo el valor)
console.log(10 !== "10"); //No identidad (true, porque compara el valor y el tipo)
console.log(10 > 5); //Mayor que (true)
console.log(10 < 5); //Menor que (false)
console.log(10 >= 10);
console.log(10 <= 9);

//Operadores lógicos
console.log(true && false); //AND lógico (false)
console.log(true || false); //OR lógico (true)
console.log(!true); //NOT lógico (false)

// operadores ternarios
let age = 17;
let canVote = age >= 18 ? "Puede votar" : "No puede votar";
console.log(canVote); // Imprime: "Puede votar"